const http = require('http').createServer()
const io = require('socket.io')(http, {cors: {origin: '*',},})
const {UnoGame, UnoCard, UnoPlayer} = require('./uno')

let users = []
let sockets = []
let GameMode = "menu"
let game;

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('login', (username) => {
    users.push(username)
    sockets.push(socket)
    console.log(username + ' logged in')
    io.emit('users', users)
  })

  socket.on('disconnect', () => {
    console.log(users[sockets.indexOf(socket)] + ' disconnected')
    users.splice(sockets.indexOf(socket), 1)
    sockets.splice(sockets.indexOf(socket), 1)
    io.emit('users', users)
  })

  socket.on('gameMode', (mode) => {
    GameMode = mode;
    io.emit('gameMode', GameMode);
    startGame();
    io.emit('update', game.state());
  })

  socket.on('move', (move) => {
  
  })
});

function startGame() {
  if (GameMode === "uno") {
    game = new UnoGame(users)
    game.fillDeck()
  }
}

http.listen(8080, () => {console.log('listening on port :8080')})
