const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Favorite", {
    // Model attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Alive", "Dead", "unknown"),
      allowNull: true,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Fermale", "Male", "Genderless", "unknown"),
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
