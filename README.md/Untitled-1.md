# Astute Nomads - inDeviate - HackAUBG 3.0 project submission
## Summary of problems and solutions
With our project we have decided to tackle employment problems with CS students. CS students gain tons of experience while studying, however, the problem is that those students barely come out with field work experience. These problems arise when students are near graduation, but they haven't gained enough experience to meet work place requirements. Our platform aims to tackle those issues by offering multiple services. 

1. Students are able to find their peers, and exchange knowledge between each other on specific topics using their unique news feed. 
2. Users are able to get constant up-to-date information regarding computer science field. 

3. Students are able to access job related graphs to know gain more information about the industry


## Features
* Passport authentication with local email/password
    
* Facebook and Google OAuth strategies
       
* JWT protected APIs
           
* Chat Rooms
    
* Alan AI
    
* Redux state management with Thunk for async actions


 ## Installation

```
$ git clone https://github.com/uno-b/hackathon-project-inDeviate.git

$ cd hackathon-project-inDeviate
```
### Install dependencies
```
$ cd server
$ npm install
```
### Run the server
```
$ npm run server
```
### Client
```
$ cd client
$ npm install
$ npm start
```
If you have questions regarding the installation, please contact unb170@aubg.edu

## Screenshots
![Chat](screenshots/chat.png "Chat")
![Github Jobs](screenshots/Github%20Jobs.png "Github jobs")
![HomePage](screenshots/Homepage.png "Home")
![Login](screenshots/login.png "Login")
![Posts](screenshots/Posts.png "Posts")
![Profile](screenshots/profile.png "Profile")
![Users](screenshots/users.png "Users")

# Technical decisions taken, benefits and drawbacks
- While not necessary for a small Hackathon project, I've used Redux as a state management to faciliate a 
better code structure when the project starts scaling up. 

- Socket.io was introduced into the project to make real-time chat feature possible.
Unfortunately, we didn't have luck deploying it to Heroku because the Chat and the Server
use different ports, and Heroku only allows one port to be used.

- There was a huge potential to make the web app fully voice-navigable, but there wasn't enough time.
We'll definitely continue working on that.

- Until we find significant customers, we have put off the security/optimization etc. for the future.



# Our future


Our main plan is to translate this project into Bulgaria, so that we first get local, loyal customers.
Once we're successful in our country, we'll surely look to other countries as well to show that
country doesn't mean much as long as we have the will to help each other.



        
