const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Adjust the timeout as needed
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Define a schema and model
const entrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Entry = mongoose.model('Entry', entrySchema);

// Routes
app.post('/api/entries', async (req, res) => {
    const { name, email } = req.body;
    const newEntry = new Entry({ name, email });
    await newEntry.save();
    res.status(201).send(newEntry);
});

app.get('/api/entries', async (req, res) => {
    const entries = await Entry.find();
    res.status(200).send(entries);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});