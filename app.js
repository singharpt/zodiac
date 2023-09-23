const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const zodiacs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/zodiac/:id', async (req, res) => {
  const zodiacSign = req.params.id.toLowerCase();
  if (!zodiacs.includes(zodiacSign)) {

    res.status(404).sendFile(__dirname + '/views/404.html');
  }

  res.sendFile(__dirname + '/views/details.html');
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

