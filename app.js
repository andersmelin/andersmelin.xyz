var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.status("200").send("<a href='http://cloudnotes.andersmelin.xyz'>CloudNotes</a>");
});

// Handle 404
app.use(function(req, res) {
    res.status(404).send('404: Page not Found');
});

// Handle 500
app.use(function(error, req, res, next) {
    res.status(500).send('500: Internal Server Error');
});

// Dummy text
