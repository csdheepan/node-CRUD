// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// // MySQL connection setup with your configuration
// const connection = mysql.createConnection({
//   host: 'localhost',   // The host should still be 'localhost' for local development
//   port: 3306,          // The port number for MySQL
//   user: 'root',        // Your MySQL username
//   password: 'Test@12345', // Your MySQL password
//   database: 'authentication' // Your MySQL database name
// });

// connection.connect(err => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the MySQL database');
// });

// // Sample route to fetch data
// app.get('/data', (req, res) => {
//   const query = 'SELECT * FROM  registration';
//   connection.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.json(results);
//   });
// });


// // Route to handle adding data
// // app.post('/addData', (req, res) => {
// //   const { id, name, email, password } = req.body; // Adjust keys to match Angular payload

// //   const query = `INSERT INTO registration (id, name, email, password) VALUES (?, ?, ?, ?)`; // Adjust table name
// //   connection.query(query, [id, name, email, password], (err, results) => { // Adjust values
// //     if (err) {
// //       console.error('Error inserting data:', err);
// //       return res.status(500).send('Internal server error');
// //     }
// //     console.log('Data added successfully');
// //     res.status(200).send('Data added successfully');
// //   });
// // });


// // Route to handle updating data
// // app.put('/updateData/:id', (req, res) => {
// //   const id = req.params.id;
// //   const { name, email, password } = req.body; // Adjust keys as per your data structure

// //   const query = `UPDATE registration SET name=?, email=?, password=? WHERE id=?`;
// //   connection.query(query, [name, email, password, id], (err, results) => {
// //     if (err) {
// //       console.error('Error updating data:', err);
// //       return res.status(500).send('Internal server error');
// //     }
// //     console.log('Data updated successfully');
// //     res.status(200).send('Data updated successfully');
// //   });
// // });



// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./app/routes/userRoute'); // Assuming you have user routes defined
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
