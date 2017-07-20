Python--Faster-Way
==================

Python: Faster Way

http://pythonfasterway.org/

Installation:
-------------
```bash
mkvirutalenv --python=/usr/bin/python3 pyfasterway
pip3 install -r requirements.txt
```

Creating a new test: 
--------------------

* Create a folder in the "_tests_" directory with the name: "_test+number_test_" 
* Create the tests on files _.py_ named "_t+local_number_test_" 
* The _.py_ must have a function named "_a_" 
* Can create a "_number_" variable with an integer that will be used by the "_timeit_" 

To generate the Page run:
-------------------------
```bash
python gen_page.py
```
this process can take

Preview:
--------
```bash
python -m http.server 8080
```
