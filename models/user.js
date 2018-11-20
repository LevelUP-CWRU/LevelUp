const orm = require("../config/orm.js");

var user = {
  all: (cb) => {
    orm.all("users", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("users", cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("users", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("users", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = user;