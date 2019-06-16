const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', client => {
  console.log(
    'Here'
  );

  io.emit('event','help');
  client.on('event', data => {  console.log(data); });
  //client.on('disconnect', () => {console.log('end');});
});

io.on('event', client => {
  io.emit('event','help');
});
console.log('server Listening at 3000');

server.listen(3000);

