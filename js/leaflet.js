var map = L.map('map').setView([51.2219, 4.3289], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.2219, 4.3289]).addTo(map);
marker.bindPopup("127.0.0.1").openPopup();

fetch('https://getfullyear.com/api/year')
  .then(response => response.json())
  .then(data => {
    console.log(data.sponsored_by);
    footerYear.textContent = data.year;
  });