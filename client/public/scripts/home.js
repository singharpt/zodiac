const fetchZodiacData = async () => {
  try {
    let response = await fetch("http://localhost:3000/zodiac");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    response = await response.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const createZodiacCard = (zodiac) => {
  const card = document.createElement("article");
  card.classList.add("zodiac-card");
  const keywords =
    `<li>${zodiac.keyword1}</li>` +
    `<li>${zodiac.keyword2}</li>` +
    `<li>${zodiac.keyword3}</li>`;
  const keywordsList = `<ul>${keywords}</ul>`;

  card.innerHTML = `
    <div class="zodiac-card-content">
      <h2>${zodiac.name}</h2>
      ${keywordsList}
      <a href="/zodiac/${zodiac.name}" role="button">Read More</a>
    </div>
  `;
  card.style.backgroundImage = `url(https://i.swncdn.com/media/950w/via/21278-istockgetty-images-plusromolotavani-14.jpg)`;
  return card;
};

const renderZodiacCards = async () => {
  const zodiacData = await fetchZodiacData();
  const mainContent = document.getElementById("main-content");

  if (zodiacData && zodiacData.length > 0) {
    const zodiacCardsContainer = document.querySelector("section");
    zodiacData.forEach((zodiac) => {
      console.log(zodiac);
      const card = createZodiacCard(zodiac);
      zodiacCardsContainer.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Zodiac Data Available 😞";
    mainContent.appendChild(message);
  }
};

const fetchAndRenderZodiacDetails = async (zodiacSign) => {
  try {
    let response = await fetch(`http://localhost:3000/zodiac/${zodiacSign}`);
    response = await response.json();
    let data = response.data[0];
    if (!data) {
      throw new Error("Individual Zodiac Data Not Found", error.message);
    }

    console.log(data);
    const zodiacName = data.name;
    const zodiacDescription = data.about;
    const section = document.querySelector("section");
    section.classList.add("zodiac-details");
    const container = document.createElement("div");
    container.classList.add("container");
    const containerName = document.createElement("h2");
    containerName.textContent = zodiacName;
    const containerDesc = document.createElement("h5");
    containerDesc.textContent = zodiacDescription;
    const containerDate = document.createElement("h4");
    containerDate.textContent = data.dates;
    const containerElement = document.createElement("h4");
    containerElement.textContent = "Element: " + data.element;
    const containerImg = document.createElement("img");
    containerImg.src = `/images/${zodiacName}.webp`;
    container.appendChild(containerName);
    container.appendChild(containerDate);
    container.appendChild(containerElement);
    container.appendChild(containerDesc);
    container.appendChild(containerImg);
    section.appendChild(container);
  } catch (error) {
    console.error("Error fetching zodiac details:", error);
    // document.location.href = "/";
    const headerTitle = document.getElementById("header-title");
    headerTitle.textContent = "Error 404";
    const headerInfo = document.getElementById("header-info");
    headerInfo.textContent =
      "The requested zodiac sign is not found. To go back click zodiacs below";
  }
};

const renderZodiacs = () => {
  const zodiacSign = window.location.pathname.split("/").pop();
  if (zodiacSign) {
    fetchAndRenderZodiacDetails(zodiacSign.toLowerCase());
  } else {
    renderZodiacCards();
  }
};

renderZodiacs();
