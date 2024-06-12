const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ParserJson = require('./ParserJson');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/parse', (req, res) => {
  const { texto } = req.body;
  const parser = new ParserJson();
  const resultado = parser.clavesAnidadasFromJSON(texto);
  res.json({ resultado });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
