const express = require('express');
const router = require('./routes/userRoutes');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();

//body parser middleware
//to handle form data received
app.use(express.json()); //allow to send raw json
app.use(express.urlencoded({ extended: false })); //accept url encoded form

//Test route
app.get('/', (req, res) => {
  // res.send('Hello Dave!');
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`'Server started on PORT: ${PORT}`);
});
