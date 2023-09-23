document.addEventListener('DOMContentLoaded', function() {
  const zodiacSign = window.location.pathname.split('/').pop();
  fetchZodiacDetails(zodiacSign.toLowerCase());
});

function fetchZodiacDetails(zodiacSign) {
  fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${zodiacSign}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
      'X-RapidAPI-Key': 'c00921b274mshd1d1264a837987ep1865c2jsn16cf9d4428ed',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      const zodiacName = data.name;
      const zodiacDescription = data.about;

      document.getElementById('zodiac-name').textContent = zodiacName;
      document.getElementById('zodiac-description').textContent = zodiacDescription;
      document.getElementById('zodiac-date').textContent = data.date_range;
      document.getElementById('zodiac-element').textContent = "Element: " + data.element;
      document.getElementById('zodiac-image').src = `/images/${zodiacName}.webp`;
    })
    .catch((error) => {
      console.error('Error fetching zodiac details:', error);
      // redirect to 404 page
      document.location.href = '/';
      // Handle errors (e.g., display an error message)
    });
}
