const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./app/routes/userRoute'); // Assuming you have user routes defined
const app = express();
const port = process.env.PORT || 3000;

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
