// Imports
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Change to your MySQL username
  password: '', // Change to your MySQL password
  database: 'login_react'
});

// Database connection
db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide email and password' });
  }

  const newUser = { email, password };

  db.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.log('Error inserting new user:', err);
      return res.status(500).json({ error: 'Error signing up. Please try again later.' });
    }
    console.log('New user signed up:', newUser); // Log the user information
    res.status(201).json({ message: 'User signed up successfully' });
  });
});

// Signin endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide email and password' });
  }

  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
    if (err) {
      console.log('Error signing in:', err);
      return res.status(500).json({ error: 'Error signing in. Please try again later.' });
    }

    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    console.log('User signed in:', result[0]); // Log the user information
    res.status(200).json({ message: 'User signed in successfully' });
  });
});

// Server setup
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
