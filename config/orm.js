const connection = require('./connection')

const questions = num => Array(num).fill('?').toString();
  
// const sqlVals = object => {
//     let arrPairs = Object.entries(object)
//     return arrPairs.map(x => `${x[0]} = '${x[1]}'`).join(', ');
// }

//orm create user functions
//addUser -- adds user to overall user table
//user table columns id, name, password
//createUser -- creates user task table and user stat table
//createUserTasks -- named user id from user table + tasks ex. 1tasks

//put stat rows in user categories with starter scores


const orm = {
    addUser : (table, columns, values, cb) => {
        let queryString = 'INSERT INTO ' + table
        queryString += ' ('
        queryString += columns.toString()
        queryString += ') '
        queryString += 'VALUES ('
        queryString += questions(values.length)
        queryString += ')'
    },
    createUserTasks : (userID, columns, cb) => {
        let queryString = 'CREATE TABLE ' + userID + 'tasks'
        queryString += ' ('
        queryString += columns
        queryString += ')'
    },
    createUserStats : (userID, columns, cb) => {
        let queryString = 'CREATE TABLE ' + userID + 'stats'
        queryString += ' ('
        queryString += columns.toString()
        queryString += ')'
    },
    addUserStats : (userID, columns, values, cb) => {
        let queryString = 'INSERT INTO ' + userID + 'stats'
        queryString += ' ('
        queryString += columns 
        queryString += ') '
        queryString += 'VALUES ('
        queryString += values + ')'
    },
}


module.exports = orm