const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;
// create an express app
const app = express();

// serve statis files from the "public" directory
app.use(express.static('public'));

app.use(express.json());

// 1. GET /hello
// http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.type('text/plain');
    res.send('Hello Express JS');
});

// 2. GET /user with query parameters
// http://localhost:3000/user?firstname=John&lastname=Doe
app.get('/user', (req, res)=>{
    console.log(req.query);

    if(req.query.firstname === undefined || req.query.lastname === undefined){
        res.status(400);
        return res.send({status: false, message: 'Bad Request: firstname and lastname are required'});
    }

    const firstname = req.query.firstname;
    const lastname = req.query.lastname;

    res.type('application/json');
    res.json({ status: true, data: {firstname: firstname, lastname: lastname}});
});

// 3. POST /user with path parameters
// http://localhost:3000/user/John/Doe
app.post('/user/:firstname/:lastname', (req, res)=>{
    console.log(req.params);

    // Validate path parameters
    if(req.params.firstname === undefined || req.params.lastname === undefined){
        res.status(400);
        return res.send({status: false, message: 'Bad Request: firstname and lastname are required'});
    }

    const {firstname, lastname} = req.params;
    res.type('application/json');
    res.json({status: true, data: {firstname: firstname, lastname: lastname}})
});

// 4. POST /users with body parameter (array of users)
// http://localhost:3000/users
// Body example: { "users": [ { "firstname": "John", "lastname": "Doe" }, { "firstname": "Jane", "lastname": "Smith" } ] }
app.post('/users', (req, res) => {
    console.log(req.body);
    res.type('application/json');
    res.json({status: true, data: req.body});
});


const server = app.listen(SERVER_PORT, ()=>{
    console.log(`Server is running on port http://localhost:${SERVER_PORT}/`);
    console.log(server.address());
})