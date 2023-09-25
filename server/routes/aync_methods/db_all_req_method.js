const pool = require("../../database/connection/connect");

const getAllDBData = async (req, res) => {
  try {
    const queryString = `SELECT * FROM ${process.env.TABLE}`;
    const response = await pool.query(queryString);
    if (response.rowCount > 0) {
      res.status(200).json({ data: response.rows });
    } else {
      res.status(400).json({ data: [] });
    }
  } catch (error) {
    console.log("Error while fetching all data from Postgres DB ", error);
    res.status(400).json({ error: error });
  }
};

module.exports = getAllDBData;
