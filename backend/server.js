require('dotenv').config();

console.log("DB_USER =", process.env.DB_USER);
console.log("DB_NAME =", process.env.DB_NAME);

const express = require('express');
const cors = require('cors');

require('./src/config/db');

const articleRoutes = require('./src/routes/articleRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
    res.send('Backend jalan');
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server running di port ${PORT}`);
});