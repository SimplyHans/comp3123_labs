const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/users');

// Mount user router correctly
app.use('/api/v1/user', userRouter);

// Serve home.html
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'home.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

const PORT = process.env.port || 8081;
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
