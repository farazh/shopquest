# Overview
Shopquest backend

## Setup
1. `npm install`
1. `npm start`

## Deploy to Heroku
### Pre-requisite
- Install heroku cli
    - `brew tap heroku/brew && brew install heroku`
- Login to heroku (Note: ask Daniel L for login credentials)
    - `heroku login`

### Steps
1. Stage your changes
    - `git add .`
1. Commit
    - `git commit -m "commit message"`
1. Deploy to heroku
    - `git push heroku master`
1. Navigate to app
    - `https://powerful-bayou-69608.herokuapp.com/`