let readyPlayerCount = 0;

function listen(io) {

    io.on('connection', (socket) => {
        console.log('a user connected!', socket.id);

        socket.on('ready', () => {
            console.log('Player ready', socket.id);

            readyPlayerCount++;

            if (readyPlayerCount % 2) {
                io.emit('startGame', socket.id);
            }
        });

        socket.on('paddleMove', (paddleData) => {
            // sends data to all but the original sender
            socket.broadcast.emit('paddleMove', paddleData);
        });

        socket.on('ballMove', (ballData) => {
            socket.broadcast.emit('ballMove', ballData);
        });
    });
}

module.exports = {
    listen
} 