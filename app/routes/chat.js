module.exports = function(application){
	application.post('/chat',function(req, response){
		//response.render("chat");
		//O heroku não estava aceitando assim:
		//application.app.controllers.chat.iniciaChat(application, req, response);
		//Então eu fiz assim:
		const chat = require('../controllers/chat');
		chat.iniciaChat(application, req, response);
	});

	application.get('/chat',function(req, response){
		const conversa = require('../controllers/chat');
		conversa.iniciaChat(application, req, response);
		//application.app.controllers.chat.iniciaChat(application, req, response);
	});
}