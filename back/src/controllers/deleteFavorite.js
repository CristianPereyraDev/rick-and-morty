const { Favorite } = require("../DB_connection");

async function deleteFavorite(req, res) {
  try {
    const id = req.params.id;
    await Favorite.destroy({ where: { id } });
    res.status(200).json({ message: "Favorite succeful removed." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = deleteFavorite;
