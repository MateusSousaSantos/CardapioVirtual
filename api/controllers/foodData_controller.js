const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  const foodDataDB = app.data.foodData_data;
  const controllerFood = {};

  const { foodData: foodDataMock } = foodDataDB;

  controllerFood.ListFoodData = (req, res) => res.status(200).json(foodDataDB);

  controllerFood.SaveFoodData = (req, res) => {
    const lastFood = foodDataMock.data[foodDataMock.data.length - 1];
    const lastId = lastFood ? parseInt(lastFood.id) : 0;
    const newId = lastId + 1;

    foodDataMock.data.push({
      id: newId,
      name: req.body.name,
      weekDay: req.body.weekDay,
    });
    res.status(201).json(foodDataMock);
  };

  controllerFood.RemoveFoodData = (req, res) => {
    const { foodId } = req.params;

    const foundFoodIndex = foodDataMock.data.findIndex(
      (player) => player.id == foodId
    );
    if (foundFoodIndex == -1) {
      res.status(404).json({
        message: "Player not found",
        succes: false,
        playerData: foodDataMock,
      });
    } else {
      foodDataMock.data.splice(foundFoodIndex, 1);
      res.status(200).json({
        message: "Player deleted from database",
        succes: true,
        playerData: foodDataMock,
      });
    }

    foodDataMock.data.splice();
  };

  controllerFood.UpdateFoodData = (req, res) => {
    const { playerId } = req.params;

    console.log("teste0", playerId);
    const findPlayerIndex = foodDataMock.data.findIndex(
      (player) => player.id == playerId
    );
    console.log("teste1", findPlayerIndex);
    if (findPlayerIndex == -1) {
      res.status(404).json({
        message: "Player not found",
        succes: false,
        playerData: foodDataMock,
      });
    } else {
      const updatedPlayer = {
        name: req.body.name,
        email: req.body.email,
        favoriteAgent: req.body.favoriteAgent,
        favoriteRole: req.body.favoriteRole,
      };

      foodDataMock.data.splice(findPlayerIndex, 1, updatedPlayer);

      res.status(200).json({
        message: "Player Updated on database",
        succes: true,
        playerData: foodDataMock,
      });
    }
  };


  return controllerFood;
};
