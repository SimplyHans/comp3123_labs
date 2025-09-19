var http = require("http");
//TODO - Use Employee Module here
const employees = require("./employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method !== 'GET') {
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
        return;
    }

    if (req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
        return;
    }

    if (req.url === '/employee') {
        res.end(JSON.stringify(employees));
        return;
    }

    if (req.url === '/employee/names') {
        const names = employees
            .map(e => `${e.firstName} ${e.lastName}`)
            .sort();
        res.end(JSON.stringify(names));
        return;
    }

    if (req.url === '/employee/totalsalary') {
        const total = employees.reduce((sum, e) => sum + e.Salary, 0); // Capital S
        res.end(JSON.stringify({ total_salary: total }));
        return;
    }

    // Default 404
    res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})