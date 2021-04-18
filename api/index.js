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

app.use('/api',auth)

app.listen(port, () => {
    console.log(`Server is on ${port} Visit http://localhost:${port}`);
});