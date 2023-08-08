# steps of create a server
# 1- import require module: we use "require" to load "HTTP" module and store the returned "HTTP" instance into http  variable
# 2- create server :we use  HHTP librery to call function "createServer()", this function take single function that take request and response as parameter.We bind this server to port 3000
# 3- send HTTP Header : using response.writeHead with HTTP status: 200 : ok
# 4- send the respose body as "hello world" : using response.end 
# 5- the server will lesten to port 3000: using server.listen(3000)

# steps of creating file
# 1- install express  module : framework help us to run server
# 2- import fs module : the file systheme (fs) module allows us to work with the fs on owr computer,(fs = require("fs")) => to import a building module(fs) we use "require" function
# 3-use function writeFile : this function will create file that take as parameter name of file, content of file, function tahta take error as parameter 

# steps of reading file
# 1- we was already install express
# 2- import fs module
# 3- use function readfile : thi function will take name of file we wont to open then type of file its optionel then function that takeas parameters error and data that contain the file

# steps of creating function that generate password :
# 1- install generate-password
# 2- import "generate-password" with require
# 3- use function generate to generate one password or generateMultiple if you like to generate number of password: those functions takes as parameters length(identify length of password) and number (or symbole or uppercase) that take true or false (if you like to have number in password) 

# steps of sending mail using nodejs
# 1- install nodemailer
# 2- import module nedemailer using require
# 3- createTransporter : this function will transport your text from your mail to another, this function has 2 parameters service(gmail) and auth(user and password)
# 4- specify the details of mail: such as from, to, subject and text
# 5 sendMail : this function will sen our mail that take as parameters details of eamil and a function