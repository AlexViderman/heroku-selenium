var webdriver = require('selenium-webdriver');
var express = require('express')
var app = express()

var port = process.env.PORT || 14000;
var By = webdriver.By;

app.get('/test', function (req, res) {
    var driver = new webdriver.Builder()
        .forBrowser('phantomjs')
        .build();
    driver.get('http://www.google.com/ncr');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(function() {
        return driver.getTitle().then(function(title) {
            console.log(title);
            return title === 'webdriver - Google Search';
        });
    }, 5000).then(function() {
        res.status(200).send('Done');
    }, function(error) {
        res.status(200).send(error);
    });
    driver.quit();
});

app.listen(port, function () {
    console.log('Example app listening on port: ',port)
});
