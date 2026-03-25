const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.post("/apply", (req, res) => {
    const data = req.body;

    
    fs.appendFile("applications.txt", JSON.stringify(data) + "\n", (err) => {
        if (err) {
            return res.status(500).send("Error saving data");
        }
        res.send("Application submitted successfully!");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});