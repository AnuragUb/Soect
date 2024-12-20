const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.static("public"));

app.get("/next-eclipse", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        res.json({ date: response.data.date });
    } catch (err) {
        res.status(500).send("Error fetching data");
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});