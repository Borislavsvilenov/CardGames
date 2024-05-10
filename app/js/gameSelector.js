let Start_uno = document.getElementById('start_uno');
let MainMenu = document.getElementById('MainMenu');
let Game = document.getElementById('Game');
let GameArea = document.getElementById('GameArea');
let TitleBar = document.getElementById('TitleBar');
let Login = document.getElementById('Login');
let userList = document.getElementById('userList');

let username;
const socket = io(`http://${window.location.hostname}:8080`);

Login.style.display = 'block';

Game.style.display = 'none';
MainMenu.style.display = 'none';

let GameMode = "menu"

login.onclick = () => {
  username = document.getElementById('username').value

  socket.emit('login', username)

  Login.style.display = 'none';
  MainMenu.style.display = 'block';
}

socket.on('users', (users) => {
  userList.innerHTML = users.map((user) => `<li>${user}</li>`).join('')
})

function startGame() {
  MainMenu.style.display = 'none';
  Game.style.display = 'block';
  TitleBar.textContent = GameMode.toUpperCase();
}

Start_uno.onclick = () => {
  socket.emit("gameMode", "uno");
}

socket.on('gameMode', (mode) => {
  GameMode = mode;
  startGame();
});
