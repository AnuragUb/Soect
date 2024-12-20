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

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})