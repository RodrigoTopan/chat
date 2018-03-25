module.exports.iniciaChat = function(application, req, res){
	//validar dados formulário
	//graças ao body parser, que é um middleware, ou seja, atua nas requisições http
	//nós conseguimos popular os dados do form através do body da requisição
	const dadosForm = req.body;
	//a função assert faz a validação dos campos
	//informar o name do campo que queremos tratar
	req.assert('apelido', 'O apelido é obrigatório').notEmpty();
	req.assert('apelido', 'O apelido deve conter entre 3 e 15 caracteres').len(3,15);

	//recuperar erros
	var erros = req.validationErrors();
	if (erros){
		
		res.render("index", {validacao: erros})
		return;


		//res.send('Existem erros no formulário');
		//return;// Com o return, o processamento acaba no res.send. Sem o return,
		// o processamento continua, mas o send expecificamente finaliza o processamento também
	}
	//manda uma mensagem para o cliente
	//recuperando variavel io, a qual carrega o objeto io
	// a partir da instancia do objeto do express 'application'
	application.get('io').emit(
		'msgParaCliente',
			{apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'}
		);
	//console.log(dadosForm);
	res.render("chat", {dadosForm : dadosForm});//renderizando view chat

	/*
		SOCKET:
		É um mecanismo de comunicação usado normalmente para troca de mensagens client servidor
		WEB SOCKET
		É um protocolo diferente do http
		É uma tecnologia mais especifica que permite a comunicação bidirecional entre clientes, browsers e servidores sobre um unico socket
		Permite criar uma conexão persistente entre cliente e servidor
		Com websocket, o browser cliente não precisa fazer uma requisição e ficar aguardando uma resposta do servidor
		O servidor também pode enviar uma requisição para o browser cliente
		SOCKET.IO
		Módulo node que permite trabalhar com websockets

	*/


}