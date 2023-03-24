const { Character } = require("../DB_connection");

async function getAllChars(req, res) {
  try {
    const allCharacters = await Character.findAll();
    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = getAllChars;
