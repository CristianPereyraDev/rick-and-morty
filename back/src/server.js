const app = require("./app");
const PORT = 3001;
const { sequelize } = require("./DB_connection");
const saveApiData = require("./controllers/saveApiData");

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: true });
    await saveApiData();
    console.log("Server raised in port " + PORT);
  } catch (error) {
    console.log(error.message);
  }
});
