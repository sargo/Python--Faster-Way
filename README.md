# python-faster-way

> pythonfasterway.org website

## Build Setup

``` bash
# install dependencies
npm install

# run perfomance cases and collect timeit results
# it may take few minutes
python3 gen_data.py

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# update gh-pages after production build
git push origin `git subtree split --prefix dist master`:gh-pages --force

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Creating a new case: 

* Create a folder in the "_cases_" directory with the name: "_case+number_" 
* Create a _.py_ file named "_t+number.py_" 
* The _.py_ must have a function named "_a_" 
* Can create a "_number_" variable with an integer that will be used by the "_timeit_"
