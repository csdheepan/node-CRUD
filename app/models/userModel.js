// models/userModel.js
const connection = require('../config/database');

const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (id, name, address, gender, phoneNumber, status, country, createdDate, updatedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [userData.id, userData.name, userData.address,userData.gender, userData.phoneNumber, userData.status,userData.country, userData.createdDate, userData.updatedDate], callback);
  },

  findById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [id], callback);
  },

  findAll: (callback) => {
    const query = 'SELECT * FROM users';
    connection.query(query, callback);
  },

  // //Work POC and Implemented server side pagination.
  // findAll: (offset,pageSize,callback) => {
  //  const query = 'SELECT * FROM users ORDER BY id LIMIT ? OFFSET ?';    // Define the query to get the paginated users
 
  //  const countQuery = 'SELECT COUNT(*) AS totalCount FROM users';    // Define the query to get the total count of users
 
  //  // Fetch users with limit and offset
  //  connection.query(query, [pageSize, offset], (err, results) => {
  //    if (err) return callback(err);
 
  //    // Fetch total count of users
  //    connection.query(countQuery, (err, countResult) => {
  //      if (err) return callback(err);
 
  //      const totalCount = countResult[0].totalCount;
  //      callback(null, results, totalCount);
  //    });
  //  });
  // },

  updateById: (id, userData, callback) => {
    const query = 'UPDATE users SET name = ?, address = ?, gender = ?, phoneNumber = ?, status = ?, country = ?, createdDate = ?, updatedDate = ? WHERE id = ?';
    connection.query(query, [userData.name, userData.address, userData.gender, userData.phoneNumber, userData.status, userData.country, userData.createdDate, userData.updatedDate, id], callback);
  },

  deleteById: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [id], callback);
  }
};

module.exports = User;
