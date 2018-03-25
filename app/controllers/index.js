module.exports.home = function(application, req, res){
	res.render('index', {validacao : {}});//o controller que entrega a view renderizada
}