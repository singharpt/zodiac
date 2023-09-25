const axios = require("axios");

const getZodiac = async (req, res) => {
  const options = {
    method: "GET",
    url: process.env.API_URL,
    params: { s: req.params.id },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.status(200).json({ data: response.data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
};

module.exports = getZodiac;
