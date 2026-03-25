const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// 🔗 Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/admissionDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 📦 Schema (structure of data)
const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    course: String,
    tenth: Number,
    inter: Number,
    entrance: String,
    reason: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Application = mongoose.model("Application", applicationSchema);

app.post("/apply", async (req, res) => {
    try {
        const newApp = new Application(req.body);
        await newApp.save();
        res.send("Application saved in MongoDB ✅");
    } catch (err) {
        res.status(500).send("Error saving data");
    }
});

app.get("/applications", async (req, res) => {
    const data = await Application.find();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});