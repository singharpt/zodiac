const pool = require("../../database/connection/connect");

const getUniqueDBData = async (req, res) => {
  try {
    const queryString = `SELECT * FROM ${process.env.TABLE} where name='${req.params.id}'`;
    console.log(queryString);
    const response = await pool.query(queryString);
    if (response.rowCount > 0) {
      res.status(200).json({ data: response.rows });
    } else {
      res.status(400).json({ data: [] });
    }
  } catch (error) {
    console.log("Error while fetching unique data from Postgres DB ", error);
    res.status(400).json({ error: error });
  }
};

module.exports = getUniqueDBData;
