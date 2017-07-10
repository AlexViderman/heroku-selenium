# heroku-selenium

* git clone https://github.com/AlexViderman/heroku-selenium.git
* cd heroku-selenium
* heroku create --buildpack heroku/nodejs
* heroku buildpacks:add --index 1 https://github.com/stomita/heroku-buildpack-phantomjs
* git push heroku master
* open in browser: https://[random app name].herokuapp.com/test
* you should see "Done" in teh browser if it ran successfully