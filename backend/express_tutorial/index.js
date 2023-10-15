import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<p>Contact me</p>");
});


app.get("/about", (req, res) => {
    res.send("<p>About me</p>");
});


app.listen(port, () => {
    console.log("Server Running");
});

