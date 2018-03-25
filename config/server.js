//importar um módulo do framework express
const express = require('express');

//importar consign
const consign = require('consign');

//importar body parser
const bodyParser = require('body-parser');

//importar o express-validator
const expressValidator = require('express-validator');

//iniciar objeto do express
//Uma constante que executa a construção da instancia do express
const app = express();

//setar as variaveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');	

//configurar o middleware express.static
//arquivos estáticos
app.use(express.static('./app/public'));

//middleware body-parser
// quando houver um post de um formulário dentro de nossas requisições, 
//nós conseguimos recuperar o formulário 
//via json a partir da propriedade body do nosso request
app.use(bodyParser.urlencoded({extended:true}));

//configurar express-validator
app.use(expressValidator());


//Efetua o autoload das rotas, dos módulos e dos controllers
//para o objeto app
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);

//Exportar o objeto app
module.exports = app;