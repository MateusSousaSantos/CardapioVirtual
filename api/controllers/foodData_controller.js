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
      (food) => food.id == foodId
    );
    if (foundFoodIndex == -1) {
      res.status(404).json({
        message: "Food not found",
        succes: false,
        playerData: foodDataMock,
      });
    } else {
      foodDataMock.data.splice(foundFoodIndex, 1);
      res.status(200).json({
        message: "Food deleted from cardapio",
        succes: true,
        playerData: foodDataMock,
      });
    }

    foodDataMock.data.splice();
  };

  controllerFood.UpdateFoodData = (req, res) => {
    const { foodId } = req.params;

    const findFoodIndex = foodDataMock.data.findIndex(
      (food) => food.id == foodId
    );

    if (findFoodIndex == -1) {
      res.status(404).json({
        message: "Food not found",
        succes: false,
        playerData: foodDataMock,
      });
    } else {
      const updatedFood = {
        name: req.body.name,
        email: req.body.email,
        favoriteAgent: req.body.favoriteAgent,
        favoriteRole: req.body.favoriteRole,
      };

      foodDataMock.data.splice(findFoodIndex, 1, updatedFood);

      res.status(200).json({
        message: "Food Updated on cardapio",
        succes: true,
        playerData: foodDataMock,
      });
    }
  };


  return controllerFood;
};
