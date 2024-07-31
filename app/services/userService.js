// services/userService.js
const User = require('../models/userModel');

const UserService = {
  createUser: (userData, callback) => {
    User.create(userData, callback);
  },

  getUserById: (id, callback) => {
    User.findById(id, callback);
  },

  getAllUsers: (callback) => {
    User.findAll(callback);
  },

  // //Work POC and Implemented server side pagination.
  // getAllUsers:(page, pageSize, callback) => {
  //   const offset = page * pageSize;
  //   User.findAll(offset,pageSize,callback);
  // },

  updateUser: (id, userData, callback) => {
    User.updateById(id, userData, callback);
  },

  deleteUser: (id, callback) => {
    User.deleteById(id, callback);
  }
};

module.exports = UserService;
