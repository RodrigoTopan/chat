module.exports = function(application){
	application.get('/',function(req, response){
		//response.render("index");
		application.app.controllers.index.home(application, req, response);//navegando pelos diretórios carregados pelo objeto application
		//e executando função exportada
	});
}