const orm = require("../config/orm.js");

var card = {
  all: (cb) => {
    orm.all("cards", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("cards", cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("cards", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("cards", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = card;