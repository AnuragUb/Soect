const countdown = document.getElementById("countdown");

fetch("/next-eclipse")
    .then((response) => response.json())
    .then((data) => {
        const eclipseDate = new Date(data.date);
        setInterval(() => {
            const now = new Date();
            const timeLeft = eclipseDate - now;
            countdown.innerText = `Time left: ${Math.floor(
                timeLeft / (1000 * 60 * 60 * 24)
            )} days`;
        }, 1000);
    });

const map = L.map("map").setView([0, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);