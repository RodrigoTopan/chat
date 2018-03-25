module.exports = function(application){
	application.post('/chat',function(req, response){
		//response.render("chat");
		application.app.controllers.chat.iniciaChat(application, req, response);
	});

	application.get('/chat',function(req, response){
		application.app.controllers.chat.iniciaChat(application, req, response);
	});
}