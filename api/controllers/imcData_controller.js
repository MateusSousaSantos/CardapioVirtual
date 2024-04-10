const cors = require('cors')

module.exports = (app) => {
    app.use(cors())
    const imcDataDB = app.data.imcData_data;

    const { imcData: imcDataMock } = imcDataDB;

    const controllerImc = {};

    controllerImc.ListImcData = (req, res) => res.status(200).json(imcDataDB);

    controllerImc.SaveImcData = (req, res) => {
      const lastImc = imcDataMock.data[imcDataMock.data.length - 1];
      const lastId = lastImc != null ? parseInt(lastImc.id) : 0;
      const newId = lastId + 1;
  
      const peso = parseFloat(req.body.peso)
      const altura = parseFloat(req.body.altura)
      const imc = (parseFloat(peso) / Math.pow(parseFloat(altura) * 100, 2));
  
      imcDataMock.data.push({
        id: newId,
        peso: req.body.peso,
        altura: req.body.altura,
        imc: imc,
        diaAdicionado: new Date(),
      });
      res.status(201).json(imcDataMock);
    };
  
    controllerImc.RemoveImcData = (req, res) => {
      const { imcId } = req.params;
  
      const foundImcIndex = imcDataMock.data.findIndex(
        (imc) => imc.id == imcId
      );
      if (foundImcIndex == -1) {
        res.status(404).json({
          message: "Imc not found",
          succes: false,
          imcData: imcDataMock,
        });
      } else {
        foodDataMock.data.splice(foundImcIndex, 1);
        res.status(200).json({
          message: "Imc deleted from database",
          succes: true,
          imcData: imcDataMock,
        });
      }
  
      imcDataMock.data.splice();
    };
    return controllerImc;
}