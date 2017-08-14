webpackJsonp([1],{1:function(n,e){n.exports={plat_sys:"Linux",cases:[{tests:[{timeit_min:.5104020833969116,dis:"",number:1e6,file_content:"class Spam:\n    def __init__(self):\n        self.eggs = 'eggs'\n\n\ndef a():\n    spam = Spam()\n    try:\n        eggs = spam.eggs\n    except AttributeError:\n        eggs = None\n    return eggs"},{timeit_min:.6202914789319038,dis:"",number:1e6,file_content:"class Spam:\n    def __init__(self):\n        self.eggs = 'eggs'\n\n\ndef a():\n    spam = Spam()\n    if hasattr(spam, 'eggs'):\n        eggs = spam.eggs\n    else:\n        eggs = None\n    return eggs"},{timeit_min:.9469249621033669,dis:"",number:1e6,file_content:"class Spam:\n    def __init__(self):\n        self.not_eggs = 'eggs'\n\n\ndef a():\n    spam = Spam()\n    if hasattr(spam, 'eggs'):\n        eggs = spam.eggs\n    else:\n        eggs = None\n    return eggs"},{timeit_min:1.0958448126912117,dis:"",number:1e6,file_content:"class Spam:\n    def __init__(self):\n        self.not_eggs = 'eggs'\n\n\ndef a():\n    spam = Spam()\n    try:\n        eggs = spam.eggs\n    except AttributeError:\n        eggs = None\n    return eggs"}],id:1},{tests:[{timeit_min:1.5089976340532303,dis:"",number:1e6,file_content:"def a():\n    my_set = {1, 2, 3, 5, 12, 11, 16, 14}\n    for i in range(20):\n        if i in my_set:\n            pass\n    return my_set"},{timeit_min:3.257140964269638,dis:"",number:1e6,file_content:"def a():\n    my_list = [1, 2, 3, 5, 12, 11, 16, 14]\n    for i in range(20):\n        if i in my_list:\n            pass\n    return my_list"}],id:2},{tests:[{timeit_min:.7883429303765297,dis:"",number:1e6,file_content:"def a():\n    l = [0, 8, 6, 4, 2, 1, 3, 5, 7, 9]\n    l.sort()\n    return l"},{timeit_min:1.0189848095178604,dis:"",number:1e6,file_content:"def a():\n    l = [0, 8, 6, 4, 2, 1, 3, 5, 7, 9]\n    return sorted(l)"}],id:3},{tests:[{timeit_min:.8157832399010658,dis:"",number:1e6,file_content:"def a():\n    a = [1, 2, 3, 4, 5]\n    s = 0\n    for p, v in enumerate(a):\n        s += p\n        s += v\n    return s"},{timeit_min:.9247037470340729,dis:"",number:1e6,file_content:"def a():\n    a = [1, 2, 3, 4, 5]\n    s = 0\n    for i in range(len(a)):\n        s += i\n        s += a[i]\n    return s"}],id:4},{tests:[{timeit_min:.17344197630882263,dis:"",number:1e6,file_content:"def a():\n    a = object()\n    if not a:\n        return False\n    return True"},{timeit_min:.17532137036323547,dis:"",number:1e6,file_content:"def a():\n    a = object()\n    if a:\n        return True\n    return False"},{timeit_min:.18052662163972855,dis:"",number:1e6,file_content:"def a():\n    a = object()\n    if a is not None:\n        return True\n    return False"},{timeit_min:.18353793025016785,dis:"",number:1e6,file_content:"def a():\n    a = object()\n    if a is None:\n        return False\n    return True"}],id:5},{tests:[{timeit_min:.26499906182289124,dis:"",number:1e6,file_content:"def a():\n    f = lambda *args: args\n    return f('a', 'b')"},{timeit_min:.3100026026368141,dis:"",number:1e6,file_content:"def a():\n    f = lambda *args: args\n    return f(*('a', 'b'))"},{timeit_min:.3930539935827255,dis:"",number:1e6,file_content:"def a():\n    f = lambda *args: args\n    return f(*'ab')"}],id:6},{tests:[{timeit_min:.10279788821935654,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    if not a is 2:\n        return True\n    return False"},{timeit_min:.10480757802724838,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    if a is not 2:\n        return True\n    return False"},{timeit_min:.119440957903862,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    if a != 2:\n        return True\n    return False"}],id:7},{tests:[{timeit_min:1.707781858742237,dis:"",number:1e4,file_content:"def a(int=int, str=str, range=range):\n    for i in range(500):\n        int(str(i))\n\n\nnumber = 10000"},{timeit_min:1.8948304653167725,dis:"",number:1e4,file_content:"def a():\n    for i in range(500):\n        int(str(i))\n\n\nnumber = 10000"}],id:8},{tests:[{timeit_min:1.5807211697101593,dis:"",number:1e6,file_content:"def a(n=25):\n    a, b = 0, 1\n    for i in range(n):\n        a, b = b, a + b\n    return a"},{timeit_min:1.6825504302978516,dis:"",number:1e6,file_content:"def a(n=25):\n    a, b = 0, 1\n    for i in range(n):\n        x = a + b\n        a = b\n        b = x\n    return a"}],id:9},{tests:[{timeit_min:2.5226272642612457,dis:"",number:1e6,file_content:"class Z:\n\n    def __init__(self, v):\n        self.v = v\n\n    def __mul__(self, o):\n        return Z(self.v * o.v)\n\n    def __add__(self, o):\n        return Z(self.v + o.v)\n\n\ndef a():\n    a = Z(5)\n    b = Z(2)\n    c = Z(3)\n    return (b.__add__(c)).__mul__(a)"},{timeit_min:2.8973570615053177,dis:"",number:1e6,file_content:"class Z:\n\n    def __init__(self, v):\n        self.v = v\n\n    def __mul__(self, o):\n        return Z(self.v * o.v)\n\n    def __add__(self, o):\n        return Z(self.v + o.v)\n\n\ndef a():\n    a = Z(5)\n    b = Z(2)\n    c = Z(3)\n    return (b + c) * a"}],id:10},{tests:[{timeit_min:.8462861180305481,dis:"",number:1e6,file_content:"def a():\n    a = [[1, 2, 3], [2, 3, 4], [4, 5, 6]]\n    b = {k: v for x, k, v in a}\n    return b"},{timeit_min:.9166695103049278,dis:"",number:1e6,file_content:"def a():\n    a = [[1, 2, 3], [2, 3, 4], [4, 5, 6]]\n    b = {x[1]: x[2] for x in a}\n    return b"},{timeit_min:1.7166201546788216,dis:"",number:1e6,file_content:"def a():\n    a = [[1, 2, 3], [2, 3, 4], [4, 5, 6]]\n    b = dict((x, y)for w, x, y in a)\n    return b"}],id:11},{tests:[{timeit_min:.2256297916173935,dis:"",number:1e6,file_content:'def a():\n    s = "World"\n    return "Hello, " + s + "!"'},{timeit_min:.2950146570801735,dis:"",number:1e6,file_content:'def a():\n    s = "World"\n    return "Hello, %s!" % s'},{timeit_min:.4001428037881851,dis:"",number:1e6,file_content:'def a():\n    s = "World"\n    return "Hello, {0}!".format(s)'}],id:12},{tests:[{timeit_min:.1618846207857132,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    b = 2\n    c = 2\n    d = 5\n    return (a+b+c)*d"},{timeit_min:.4720030650496483,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    b = 2\n    c = 2\n    d = 5\n    return (a.__add__(b.__add__(c))).__mul__(d)"}],id:13},{tests:[{timeit_min:3.084072634577751,dis:"",number:1e6,file_content:"def a():\n    r = ''\n    for i in range(10):\n        r += str(i)\n    return r"},{timeit_min:3.466738611459732,dis:"",number:1e6,file_content:"def a():\n    r = []\n    for i in range(10):\n        r.append(str(i))\n    return ''.join(r)"}],id:14},{tests:[{timeit_min:.22602606564760208,dis:"",number:1e6,file_content:"def a():\n    l = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    l *= 0\n    return l"},{timeit_min:.2522696480154991,dis:"",number:1e6,file_content:"def a():\n    l = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    del l[:]\n    return l"},{timeit_min:.2773953229188919,dis:"",number:1e6,file_content:"def a():\n    l = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    l[:] = []\n    return l"}],id:15},{tests:[{timeit_min:.11221382021903992,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    return a != 2"},{timeit_min:.11976636201143265,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    return True if a != 2 else False"},{timeit_min:.12242840975522995,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    return a != 2 and True or False"}],id:16},{tests:[{timeit_min:2.4304870069026947,dis:"",number:1e6,file_content:"def a():\n    return ''.join(map(str, range(10)))"},{timeit_min:2.437332071363926,dis:"",number:1e6,file_content:"def a():\n    return ''.join(map(str, range(10)))"},{timeit_min:5.552387088537216,dis:"",number:1e6,file_content:"def a():\n    r = ''\n    for i in range(10):\n        r = '{}{}'.format(r, str(i))\n    return r"}],id:17},{tests:[{timeit_min:3.116768144071102,dis:"",number:1e5,file_content:"def a():\n    return {str(i): i*2 for i in range(100)}\n\nnumber = 100000"},{timeit_min:3.1812001764774323,dis:"",number:1e5,file_content:"def a():\n    d = {}\n    for i in range(100):\n        d[str(i)] = i*2\n    return d\n\nnumber = 100000"},{timeit_min:5.8101905435323715,dis:"",number:1e5,file_content:"def a():\n    d = {}\n    for i in range(100):\n        d.update({str(i): i*2})\n    return d\n\nnumber = 100000"}],id:18},{tests:[{timeit_min:.3607141375541687,dis:"",number:1e5,file_content:"def a():\n    l = range(50, -20, -2)\n    return {p: v for p, v in enumerate(l)}\n\nnumber = 100000"},{timeit_min:.3629196956753731,dis:"",number:1e5,file_content:"def a():\n    l = range(50, -20, -2)\n    d = {}\n    for p, v in enumerate(l):\n        d[p] = v\n    return d\n\nnumber = 100000"},{timeit_min:1.3583685755729675,dis:"",number:1e5,file_content:"def a():\n    l = range(50, -20, -2)\n    d = {}\n    for p, v in enumerate(l):\n        d.update({p: v})\n    return d\n\nnumber = 100000"}],id:19},{tests:[{timeit_min:.09672046452760696,dis:"",number:1e6,file_content:"def a():\n    n = 1\n    return not n"},{timeit_min:.09696664661169052,dis:"",number:1e6,file_content:"def a():\n    n = 0\n    return not n"},{timeit_min:.09997804462909698,dis:"",number:1e6,file_content:"def a():\n    n = 0\n    if n:\n        return False\n    else:\n        return True"},{timeit_min:.10124598443508148,dis:"",number:1e6,file_content:"def a():\n    n = 1\n    if n:\n        return False\n    else:\n        return True"}],id:20},{tests:[{timeit_min:.2601790875196457,dis:"",number:1e6,file_content:"def k(x=1, y=1, z=-1):\n    return x * (y - 2 * z)\n\n\ndef a():\n    return k(x=5, y=3)"},{timeit_min:.48849979043006897,dis:"",number:1e6,file_content:"def k(x=1, y=1, z=-1):\n    return x * (y - 2 * z)\n\n\ndef a():\n    return k(**{'x': 5, 'y': 3})"}],id:21},{tests:[{timeit_min:.2174498215317726,dis:"",number:1e6,file_content:"def a():\n    a = [1, 2, 3, 4, 5]\n    return len(a)"},{timeit_min:.2594636008143425,dis:"",number:1e6,file_content:"def a():\n    a = [1, 2, 3, 4, 5]\n    return a.__len__()"}],id:22},{tests:[{timeit_min:.3447149991989136,dis:"",number:1e6,file_content:"def a():\n    a = 5\n    b = 2\n    c = 3\n    return str(a*(b+c))"},{timeit_min:.42032288759946823,dis:"",number:1e6,file_content:'def a():\n    a = 5\n    b = 2\n    c = 3\n    return "{}".format(a*(b+c))'},{timeit_min:.5024512410163879,dis:"",number:1e6,file_content:'def a():\n    a = 5\n    b = 2\n    c = 3\n    return "{0:d}".format(a*(b+c))'}],id:23},{tests:[{timeit_min:.20559227466583252,dis:"",number:1e6,file_content:"def a():\n    a, b, c, d, e, f = 2, 5, 52, 25, 225, 552\n    if a < b and b < c and c < d and d < e and e < f:\n        return True\n    return False"},{timeit_min:.2147713601589203,dis:"",number:1e6,file_content:"def a():\n    a, b, c, d, e, f = 2, 5, 52, 25, 225, 552\n    if a < b < c < d < e < f:\n        return True\n    return False"}],id:24},{tests:[{timeit_min:.22612282633781433,dis:"",number:1e6,file_content:"def a():\n    n = 123.123\n    return int(n)"},{timeit_min:.22963516414165497,dis:"",number:1e6,file_content:"import math\n\n\ndef a():\n    n = 123.123\n    return math.trunc(n)"},{timeit_min:.24158097803592682,dis:"",number:1e6,file_content:"def a():\n    n = 123.123\n    return n // 1"},{timeit_min:.24248216301202774,dis:"",number:1e6,file_content:"import math\n\n\ndef a():\n    n = 123.123\n    return math.floor(n)"}],id:25},{tests:[{timeit_min:.15925532579421997,dis:"",number:1e6,file_content:"def a():\n    x = 0\n    y = 0\n    z = 0\n    w = 0\n    k = 0\n    return x, y, z, w, k"},{timeit_min:.1597500666975975,dis:"",number:1e6,file_content:"def a():\n    x = y = z = w = k = 0\n    return x, y, z, w, k"},{timeit_min:.1675657480955124,dis:"",number:1e6,file_content:"def a():\n    x, y, z, w, k = 0, 0, 0, 0, 0\n    return x, y, z, w, k"}],id:26},{tests:[{timeit_min:.20309744775295258,dis:"",number:1e6,file_content:"def a():\n    a = True\n    return bool(a)"},{timeit_min:.20541614294052124,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    return bool(a)"},{timeit_min:.20562347024679184,dis:"",number:1e6,file_content:"def a():\n    a = 0\n    return bool(a)"},{timeit_min:.2240435779094696,dis:"",number:1e6,file_content:"def a():\n    a = []\n    return bool(a)"},{timeit_min:.2723161578178406,dis:"",number:1e6,file_content:"def a():\n    a = [1]\n    return bool(a)"},{timeit_min:.2886630967259407,dis:"",number:1e6,file_content:"def a():\n    a = [1, 2, 3, 4]\n    return bool(a)"}],id:27},{tests:[{timeit_min:.11552946269512177,dis:"",number:1e6,file_content:"def a():\n    a = []\n    if not a:\n        return True\n    return False"},{timeit_min:.11596854031085968,dis:"",number:1e6,file_content:"def a():\n    a = []\n    if a:\n        return False\n    return True"},{timeit_min:.14625652879476547,dis:"",number:1e6,file_content:"def a():\n    a = []\n    if a == []:\n        return True\n    return False"},{timeit_min:.1732736900448799,dis:"",number:1e6,file_content:"def a():\n    a = []\n    if len(a) <= 0:\n        return True\n    return False"}],id:28},{tests:[{timeit_min:.09545408189296722,dis:"",number:1e6,file_content:"def a():\n    a = True\n    if a:\n        return True\n    return False"},{timeit_min:.10352987051010132,dis:"",number:1e6,file_content:"def a():\n    a = True\n    if a is True:\n        return True\n    return False"},{timeit_min:.11573897302150726,dis:"",number:1e6,file_content:"def a():\n    a = True\n    if a == True:\n        return True\n    return False"}],id:29},{tests:[{timeit_min:.21639367938041687,dis:"",number:1e6,file_content:"def a():\n    a, b, c, d, e, f, g, h, i, j = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9\n    return j, i, h, g, f, e, d, c, b, a"},{timeit_min:.22336189448833466,dis:"",number:1e6,file_content:"def a():\n    a = 0\n    b = 1\n    c = 2\n    d = 3\n    e = 4\n    f = 5\n    g = 6\n    h = 7\n    i = 8\n    j = 9\n    return j, i, h, g, f, e, d, c, b, a"}],id:30},{tests:[{timeit_min:3.488468810915947,dis:"",number:1e5,file_content:"def a():\n    return [i for i in range(1000)]\n\n\nnumber = 100000"},{timeit_min:7.978592477738857,dis:"",number:1e5,file_content:"def a():\n    l = []\n    for i in range(1000):\n        l.append(i)\n    return l\n\n\nnumber = 100000"}],id:31},{tests:[{timeit_min:.9137607514858246,dis:"",number:1e5,file_content:"def a():\n    D = {}\n    for k in range(0, 200):\n        D[k] if k in D else None\n    return D\n\nnumber = 100000"},{timeit_min:2.1618934124708176,dis:"",number:1e5,file_content:"def a():\n    D = {}\n    for k in range(0, 200):\n        D.get(k)\n    return D\n\nnumber = 100000"}],id:32},{tests:[{timeit_min:1.1772677227854729,dis:"",number:1e6,file_content:"def a():\n    return sum([p+v for p, v in enumerate([1, 2, 3, 4, 5])])"},{timeit_min:1.1900390461087227,dis:"",number:1e6,file_content:"def a():\n    a = [1, 2, 3, 4, 5]\n    return sum([p+v for p, v in enumerate(a)])"},{timeit_min:1.364125780761242,dis:"",number:1e6,file_content:"def a():\n    return sum([p+v for p, v in enumerate(range(1, 6))])"}],id:33},{tests:[{timeit_min:1.8964423015713692,dis:"",number:1e4,file_content:"def a():\n    return sum(range(10001))\n\n\nnumber = 10000"},{timeit_min:5.178907699882984,dis:"",number:1e4,file_content:"def a():\n    s = 0\n    for i in range(10001):\n        s += i\n    return s\n\n\nnumber = 10000"},{timeit_min:5.9276028200984,dis:"",number:1e4,file_content:"def a():\n    return sum(i for i in range(10001))\n\n\nnumber = 10000"}],id:34},{tests:[{timeit_min:.11327601224184036,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    if a in (1, 2, 3):\n        return True\n    return False"},{timeit_min:.11556108295917511,dis:"",number:1e6,file_content:"def a():\n    a = 1\n    if a == 1 or a == 2 or a == 3:\n        return True\n    return False"}],id:35},{tests:[{timeit_min:1.6318659484386444,dis:"",number:1e6,file_content:"def a():\n    return [[0] * 5 for x in range(5)]"},{timeit_min:1.7577113285660744,dis:"",number:1e6,file_content:"def a():\n    r = []\n    for x in range(5):\n        r.append([0] * 5)\n    return r"},{timeit_min:5.026350945234299,dis:"",number:1e6,file_content:"def a():\n    r = []\n    for x in range(5):\n        _r = []\n        for y in range(5):\n            _r.append(0)\n        r.append(_r)\n    return r"}],id:36},{tests:[{timeit_min:.35973814129829407,dis:"",number:1e6,file_content:"def a():\n    l = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    c = l[:]\n    return l, c"},{timeit_min:.48105189949274063,dis:"",number:1e6,file_content:"def a():\n    l = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    c = list(l)\n    return l, c"},{timeit_min:.9705795273184776,dis:"",number:1e6,file_content:"import copy\n\n\ndef a():\n    l = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n    c = copy.copy(l)\n    return l, c"}],id:37},{tests:[{timeit_min:.16973306238651276,dis:"",number:1e6,file_content:"def a():\n    d = {}\n    return d"},{timeit_min:.2511383444070816,dis:"",number:1e6,file_content:"def a():\n    d = dict()\n    return d"}],id:38}],plat_rel:"4.4.11-23.53.amzn1.x86_64",sys_version:"3.5.2 (default, Aug 16 2016, 12:48:15) \n[GCC 4.8.3 20140911 (Red Hat 4.8.3-9)]"}},10:function(n,e,t){var i=t(2)(t(12),t(196),null,null,null);n.exports=i.exports},11:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),r=t(10),s=t.n(r),a=t(3),m=t(4),d=t(9),u=t.n(d),f=t(6),_=(t.n(f),t(5)),l=(t.n(_),t(7)),o=(t.n(l),t(8));t.n(o);i.a.use(m.a),i.a.use(u.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},12:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=t.n(i);e.default={name:"app",data:function(){return r.a}}},13:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=t.n(i);e.default={name:"MainPage",data:function(){return r.a}}},193:function(n,e,t){n.exports=t.p+"static/img/logo.2157cbb.png"},194:function(n,e,t){var i=t(2)(t(13),t(195),null,null,null);n.exports=i.exports},195:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container",attrs:{id:"cases"}},n._l(n.cases,function(e,i){return t("div",{staticClass:"row panel"},[t("div",{staticClass:"panel-heading"},[n._v("Case #"+n._s(i))]),n._v(" "),t("div",{staticClass:"panel-body"},n._l(e.tests,function(i){return t("div",{staticClass:"column",class:"col-md-"+12/e.tests.length},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"python hljs"},[n._v(n._s(i.file_content)+"\n\n>>> min(timeit.repeat(a, number="+n._s(i.number)+"))\n... "+n._s(i.timeit_min)+"\n\n>>> dis(a)\n"+n._s(i.dis))])])])}))])}))},staticRenderFns:[]}},196:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"navbar"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row header"},[n._m(0),n._v(" "),t("div",{staticClass:"column col-md-6"},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"python hljs"},[n._v("\n>>> import sys\n>>> import platform\n>>> platform.system()\n"+n._s(n.plat_sys)+"\n>>> platform.release()\n"+n._s(n.plat_rel)+"\n>>> sys.version\n"+n._s(n.sys_version)+"\n>>> import timeit\n>>> from dis import dis\n>>> \n            ")])])])])])]),n._v(" "),t("router-view")],1)},staticRenderFns:[function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"column col-md-6"},[i("img",{staticClass:"center-block",attrs:{src:t(193)}})])}]}},3:function(n,e,t){"use strict";var i=t(0),r=t(197),s=t(194),a=t.n(s);i.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"MainPage",component:a.a}]})},5:function(n,e){},6:function(n,e){},7:function(n,e){},8:function(n,e){}},[11]);
//# sourceMappingURL=app.417d71e993f014ac0515.js.map