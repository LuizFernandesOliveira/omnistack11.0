//importando o express
const express = require('express');

//importando o cors para definir o acesso a api
const cors = require('cors');

//importando rotas
const routes = require('./routes');

//iniciando o app do express
const app = express();

//iniciando o cors
app.use(cors());

//usando o json nas requests
app.use(express.json());

//rotas
app.use(routes);

//usando o listen para redirecionar uma porta (3333)
app.listen(3333);