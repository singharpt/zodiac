const zodiacData = [
  {
    name: "Aries",
    dates: "March 21 - April 20",
    keywords: ["Courageous", "Energetic", "Assertive"],
  },
  {
    name: "Taurus",
    dates: "April 21 - May 21",
    keywords: ["Practical", "Stubborn", "Patient"],
  },
  {
    name: "Gemini",
    dates: "May 22 - June 21",
    keywords: ["Adaptable", "Curious", "Social"],
  },
  {
    name: "Cancer",
    dates: "June 22 - July 22",
    keywords: ["Emotional", "Protective", "Empathetic"],
  },
  {
    name: "Leo",
    dates: "July 23 - August 23",
    keywords: ["Confident", "Generous", "Dramatic"],
  },
  {
    name: "Virgo",
    dates: "August 24 - September 22",
    keywords: ["Analytical", "Detail-oriented", "Practical"],
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    keywords: ["Charming", "Diplomatic", "Fair-minded"],
  },
  {
    name: "Scorpio",
    dates: "October 24 - November 22",
    keywords: ["Passionate", "Determined", "Mysterious"],
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    keywords: ["Adventurous", "Optimistic", "Straightforward"],
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 20",
    keywords: ["Responsible", "Disciplined", "Ambitious"],
  },
  {
    name: "Aquarius",
    dates: "January 21 - February 18",
    keywords: ["Innovative", "Humanitarian", "Unconventional"],
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    keywords: ["Compassionate", "Artistic", "Intuitive"],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  function createZodiacCards() {
    const zodiacCardsContainer = document.getElementById("zodiac-cards");

    zodiacData.forEach((zodiac) => {
      const card = document.createElement("article");
      card.classList.add("zodiac-card");

      const keywords = zodiac.keywords
        .map((keyword) => `<li>${keyword}</li>`)
        .join("");
      const keywordsList = `<ul>${keywords}</ul>`;

      card.innerHTML = `
                  <div class="zodiac-card-content"><h2>${zodiac.name}</h2>${keywordsList}
                  <a href="/zodiac/${zodiac.name}" role="button">Read More</a><div>
              `;
      card.style.backgroundImage = `url('/images/${zodiac.name}.webp')`;

      zodiacCardsContainer.appendChild(card);
    });
  }

  createZodiacCards();
});
