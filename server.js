const app = require('./config/express')();
const cors = require('cors');
const port = app.get('port');

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Bem vindo a api do CardapioVirtual! Referir para a documentação em </h1> <a href="https://github.com/MateusSousaSantos/CardapioVirtual">github/CardapioVirtual</a>');
});

app.listen(port, () => {
  console.log(`Servidor rodando http://localhost:${port}`)
});