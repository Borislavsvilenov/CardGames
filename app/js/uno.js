let topCard = document.getElementById('top_card_img');
let p1 = document.getElementById('player_1');
let p2 = document.getElementById('player_2');
let p3 = document.getElementById('player_3');
let p4 = document.getElementById('player_4');
let players = [];


let CardAddresses = {
  "red 0": "assets/red0.png",
  "red 1": "assets/red1.png",
  "red 2": "assets/red2.png",
  "red 3": "assets/red3.png",
  "red 4": "assets/red4.png",
  "red 5": "assets/red5.png",
  "red 6": "assets/red6.png",
  "red 7": "assets/red7.png",
  "red 8": "assets/red8.png",
  "red 9": "assets/red9.png",
  "red +2": "assets/red+2.png",
  "red reverse": "assets/redReverse.png",
  "red skip": "assets/redSkip.png",
  "yellow 0": "assets/yellow0.png",
  "yellow 1": "assets/yellow1.png",
  "yellow 2": "assets/yellow2.png",
  "yellow 3": "assets/yellow3.png",
  "yellow 4": "assets/yellow4.png",
  "yellow 5": "assets/yellow5.png",
  "yellow 6": "assets/yellow6.png",
  "yellow 7": "assets/yellow7.png",
  "yellow 8": "assets/yellow8.png",
  "yellow 9": "assets/yellow9.png",
  "yellow +2": "assets/yellow+2.png",
  "yellow reverse": "assets/yellowReverse.png",
  "yellow skip": "assets/yellowSkip.png",
  "green 0": "assets/green0.png",
  "green 1": "assets/green1.png",
  "green 2": "assets/green2.png",
  "green 3": "assets/green3.png",
  "green 4": "assets/green4.png",
  "green 5": "assets/green5.png",
  "green 6": "assets/green6.png",
  "green 7": "assets/green7.png",
  "green 8": "assets/green8.png",
  "green 9": "assets/green9.png",
  "green +2": "assets/green+2.png",
  "green reverse": "assets/greenReverse.png",
  "green skip": "assets/greenSkip.png",
  "blue 0": "assets/blue0.png",
  "blue 1": "assets/blue1.png",
  "blue 2": "assets/blue2.png",
  "blue 3": "assets/blue3.png",
  "blue 4": "assets/blue4.png",
  "blue 5": "assets/blue5.png",
  "blue 6": "assets/blue6.png",
  "blue 7": "assets/blue7.png",
  "blue 8": "assets/blue8.png",
  "blue 9": "assets/blue9.png",
  "blue +2": "assets/blue+2.png",
  "blue reverse": "assets/blueReverse.png",
  "blue skip": "assets/blueSkip.png",
  "black +4": "assets/+4.png",
  "black wild": "assets/Wild.png",
}

class UnoGame {
  constructor(users) {
    this.deck = []
    this.players = users;
  }

  setState(state) {
    this.deck = state;
  }

  toString(card) {
    let String = card.color + " " + card.value;
    return String
  }

  displayCards() {
    this.deck.forEach(card => {
      if (card.owner === "TopCard") {
        topCard.src = CardAddresses[this.toString(card)]
      } else if (card.owner === players[0]) {
        p1.innerHTML = "<img src=" + CardAddresses[this.toString(card)] + ">";

      } else if (card.owner != "deck") {

      }
    })
  }
}
