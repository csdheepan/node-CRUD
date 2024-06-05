const UserService = require('../services/userService');

const UserController = {


  
  createUser: (req, res) => {
    const userData = req.body;
    UserService.createUser(userData, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        return res.status(500).send('Error creating user');
      }
      res.status(200).json({ message: 'User created successfully' });
    });
  },

  getUserById: (req, res) => {
    const id = req.params.id;
    UserService.getUserById(id, (err, result) => {
      if (err) {
        console.error('Error retrieving user:', err);
        return res.status(500).send('Error retrieving user');
      }
      if (result.length === 0) {
        return res.status(404).send('User not found');
      }
      res.json(result[0]);
    });
  },

  getAllUsers: (req, res) => {
    UserService.getAllUsers((err, results) => {
      if (err) {
        console.error('Error retrieving users:', err);
        return res.status(500).send('Error retrieving users');
      }
      res.json(results);
    });
  },

  updateUser: (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    UserService.updateUser(id, userData, (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        return res.status(500).send('Error updating user');
      }
      res.status(200).json({ message: 'User updated successfully' });
    });
  },

  deleteUser: (req, res) => {
    const id = req.params.id;
    UserService.deleteUser(id, (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        return res.status(500).send('Error deleting user');
      }
      res.status(200).json({ message: 'User deleted successfully' });
    });
  }
};

module.exports = UserController;
