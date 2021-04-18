const express = require("express");
const app = express();
const port = 3301;
// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
});

const auth = require('./auth')
const user = require('./user')
const tasklist = require('./tasklist')
const statistics = require('./statistics')

app.use('/api',auth)
app.use('/api',user)
app.use('/api',tasklist)
app.use('/api',statistics)

app.listen(port, () => {
    console.log(`Server is on ${port} Visit http://localhost:${port}`);
});