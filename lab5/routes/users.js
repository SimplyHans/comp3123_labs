const express = require('express');
const path = require('path');
const fs = require('fs');

const routerUser = express.Router();

// Helper to read user.json (single object)
function getUser() {
  const data = fs.readFileSync(path.join(__dirname, '../user.json'), 'utf8');
  return JSON.parse(data);
}

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
  try {
    const user = getUser();
    res.json(user);
  } catch (err) {
    res.status(500).json({ status: false, message: 'Error reading user data', error: err.message });
  }
});

/*
- Login: validate username and password
*/
routerUser.post('/login', (req, res) => {
  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res.status(400).json({
        status: false,
        message: "Username and password are required"
      });
    }

    const user = getUser();

    if (user.username !== username) {
      return res.json({ status: false, message: "User Name is invalid" });
    }

    if (user.password !== password) {
      return res.json({ status: false, message: "Password is invalid" });
    }

    res.json({ status: true, message: "User Is valid" });

  } catch (err) {
    res.status(500).json({ status: false, message: "Server Error", error: err.message });
  }
});

/*
- Logout route
*/
routerUser.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;
