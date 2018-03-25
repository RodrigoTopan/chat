// importar as configurações do servidor
const app = require('./config/server');

var porta = process.env.PORT || 80;

//parametrizar a porta de escuta
const server = app.listen(porta,function(){
	console.log('Servidor Online');
});

//socket.io também é um protocolo
//Programando para que o websocket ouça a mesma porta que o http
const io = require('socket.io').listen(server);
//instanciando uma varavel io dentro do objeto app
app.set('io', io);

//criar conexao com websocket
//informar que estamos escutando tentativas de conexão
//função de callback que deve ser executada quando o evento connection é chamado  
io.on('connection', function(socket){
	console.log('O usuário conectou');
	
	socket.on('disconnect', function(){
		console.log('O usuário desconectou');
	});
	//Escutando mensagem do cliente
	socket.on('msgParaServidor', function(msg)
	{
		//Função envia para o cliente mensagem
		//Essa função envia só pra quem emitiu
		socket.emit('msgParaCliente',
		{
			apelido: msg.apelido,
			mensagem: msg.mensagem
		});

		//para enviar para todos os clientes conectados no socket, utilizamo o broadcast	
		socket.broadcast.emit('msgParaCliente',
		{
			apelido: msg.apelido,
			mensagem: msg.mensagem
		});
	});
});

module.exports = app;
