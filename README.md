# LevelUP
An app to game-ify mundane tasks of life.

##Concept

LevelUP was created in November 2018 as a group project for a coding bootcamp at Case Western Reserve University. This app is designed to make a to-do list that is better organized, better looking, and more fun to use than, say, a scrap of paper.

##User-side

After logging in, users can see their dashboard: a display that includes their username, avatar, level, everything they have on their to-do list, as well as everything they have already done.

Users can split their upcoming to-dos into two categories: routines and tasks. 

We see tasks as being one-time or irregular to-dos. Upon creating a task, users will be prompted to add notes, a category, a difficulty level, and an option for a due-date.

Routines are recurring to-dos. Upon adding a routine, users will be prompted to select a category, a difficulty level, and the days of the week this routine needs to be completed on.

#Behind the scenes
Upon creation of a new user, that user is added to a user table in the LevelUP sql database. They are also given two tables: one that handles their stats, and one that handles all of their to-dos. We use these tables to make every user's dashboard an individual experience.

##Technologies used
- Javascript
- CSS
- Bootstrap
- Passport.io
- Handlebars
- Express
- Sequelize

##Future Goals
- Leaderboards
- Mobile-responsive interface
- Other things


