const { Character } = require("../DB_connection");

async function getCharDetail(req, res) {
  const { id } = req.params;
  try {
    const character = await Character.findByPk(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getCharDetail;
