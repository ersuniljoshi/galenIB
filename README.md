<<<<<<< HEAD
 # galenIB
=======
# galenIB
>>>>>>> master

## Overview of Galen Framework:

Galen is a test framework originally designed for testing layout of web applications but is also a great tool for functional    testing. When it comes to testing a responsive layout it works in a following way:

    * Open a page in browser
    * Resize it to specified size
    * Test the layout according to user-defined specs

It uses Selenium for interacting with elements on page and getting their locations and dimensions.
Once it sees that something is wrong – Galen reports the error, makes a screenshot and highlights the misbehaving element on it.

## Install Galen Framework:
```
sudo npm install -g galenframework-cli
```
## Configure Galen Framework:
```
galen config --global
```
The command above will generate a basic .galen.config file in your home directory. Actually it might be handy to configure all external drivers for different browsers in a global config. For instance if you need to declare a path to a geckodriver to be able to run test in Firefox you can do it with this property in galen.config file:
```
$.webdriver.gecko.driver=/path/to/your/geckodriver
```
## Run Scripts in Galen Framework in Chrome Browser:
```
<<<<<<< HEAD
galen test check_header.test.js -Dwebdriver=/home/xxx/Downloads/chromedriver -Dbrowser=chrome --htmlreport reports
```
## Run Scripts in Galen Framework in Firefox Browser:
```
galen test check_header.test.js -Dwebdriver=/home/xxx/Downloads/geckodriver -Dbrowser=firefox --htmlreport reports
```
## Run tests in Selenium Grid:
```
galen test grid.test --junitreport "junit-report.xml" --htmlreport gridresult
```
### For more details refer to the following link:

[Documentation of Galen Framework](http://galenframework.com/docs/all/)
=======
galen test myscript.test -Dmode=grid/local -Dversion=55.0 -Dplatform=linux -Dbrowser=chrome --junitreport "junit-report.xml" --htmlreport projectreport
```
## Run Scripts in Galen Framework in Firefox Browser:
```
galen test myscript.test -Dmode=grid/local -Dversion=46.0 -Dplatform=linux -Dbrowser=firefox --junitreport "junit-report.xml" --htmlreport projectreport
```
### For more details refer to the following link:

[Documentation of Galen Framework](http://galenframework.com/docs/all/)
>>>>>>> master
