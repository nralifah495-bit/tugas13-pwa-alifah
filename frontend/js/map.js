var map = L.map('map').setView([-7.4254, 109.2396], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

L.marker([-7.4254, 109.2396])
    .addTo(map)
    .bindPopup('Lokasi Saya')
    .openPopup();