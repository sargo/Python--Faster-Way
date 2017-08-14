import json
import functools
import os
import platform
import re
import subprocess
import sys
import timeit
import tempfile
from glob import glob


NUMBER = 1000000

base_path = os.path.dirname(os.path.abspath(__file__))
cases_path = os.path.join(base_path, 'cases')

code_obj_re = re.compile(r' at 0x.*, file "/tmp/.*"')
number_re = re.compile(r'^number = ([0-9]+)$', re.MULTILINE)
dis_template = """from dis import dis


{}

dis(a)
"""


def gen_cases():
    cases = []
    cases_glob = glob(os.path.join(cases_path, '*'))
    cases_glob.sort()
    for case_id, case_dirpath in enumerate(cases_glob, 1):
        print("Case #{}".format(case_id))
        tests = []
        tests_glob = glob(os.path.join(case_dirpath, '*'))
        for test_id, test_filepath in enumerate(tests_glob, 1):
            print("    Test #{}".format(test_id))
            file_content = open(test_filepath).read()


            with tempfile.NamedTemporaryFile() as dis_test_file:
                dis_test_file.write(
                    dis_template.format(file_content).encode('utf-8'))
                dis_test_file.flush()

                p = subprocess.Popen(
                    ['python3', '-B', str(dis_test_file.name)],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE
                )
                out, err = p.communicate()
                out = out.decode("utf-8")
                out = code_obj_re.sub('', out)

            m = number_re.search(file_content)
            number = int(m.group(1)) if m else NUMBER

            code = compile(file_content, '<string>', 'exec')
            f = {}
            exec(code, f)

            tests.append({
                'dis': out,
                'file_content': file_content.strip(),
                'number': number,
                'timeit_min': min(timeit.repeat(f['a'], number=number)),
            })
        tests.sort(key=lambda x: x['timeit_min'])

        cases.append({
            'id': case_id,
            'tests': tests,
        })

    return {
        'plat_sys': platform.system(),
        'plat_rel': platform.release(),
        'sys_version': sys.version,
        'cases': cases,
    }


def main():
    data = gen_cases()
    json.dump(data, open('data.json', 'w'))


if __name__ == '__main__':
    main()
