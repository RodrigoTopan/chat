module.exports = function(application){
	application.get('/',function(req, response){
		//response.render("index");
		//response.render('index', {validacao : {}});
		//O heroku não estava aceitando assim
		//application.controllers.index.home(application, req, response);//navegando pelos diretórios carregados pelo objeto application
		//Então eu fiz assim
		const home = require('../controllers/index');
		home.home(application, req, response);//navegando pelos diretórios carregados pelo objeto application

		//e executando função exportada
	});
}