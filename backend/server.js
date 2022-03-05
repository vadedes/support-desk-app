const express = require('express');
const router = require('./routes/userRoutes');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

//Test route
app.get('/', (req, res) => {
  // res.send('Hello Dave!');
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log(`'Server started on PORT: ${PORT}`);
});
