// https://qiita.com/riku-shiru/items/ffba3448f3aff152b6c1 を参考にした
// 起動コマンド: node app
// http://localhost:7000
var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;

app.get('/' , function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
	socket.on('message',function(msg){
		console.log('message: ' + msg);
		io.emit('message', msg);
	});
});

http.listen(PORT, function(){
 	console.log('server listening. Port:' + PORT);
});
