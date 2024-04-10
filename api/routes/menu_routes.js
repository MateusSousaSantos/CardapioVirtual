module.exports = (app) => {
  const controllerFoodData = app.controllers.foodData_controller;
  const controllerIMC = app.controllers.imcData_controller;

  app
    .route("/cardapio/v1/foodData")
    .get(controllerFoodData.ListFoodData)
    .post(controllerFoodData.SaveFoodData);
  app
    .route("/cardapio/v1/foodData/:foodId")
    .delete(controllerFoodData.RemoveFoodData)
    .put(controllerFoodData.UpdateFoodData);
  app
    .route("/cardapio/v1/ImcData")
    .get(controllerIMC.ListImcData)
    .post(controllerIMC.SaveImcData);
  app
    .route("/cardapio/v1/ImcData/:imcId")
    .delete(controllerIMC.RemoveImcData)
};
