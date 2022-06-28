const http = require('http');
const io = require('socket.io');

const apiServer = require('./api');
const httpServer = http.createServer(apiServer);
// We pass express as a handler to our createServer function
// const io = require('socket.io')(httpServer, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST']
//     }
// });

const socketServer = io(httpServer);

const sockets = require('./sockets');

const PORT = 3000;

httpServer.listen(PORT);
console.log(`Listening on port ${PORT}`);

sockets.listen(socketServer);