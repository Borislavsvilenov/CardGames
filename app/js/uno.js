let topCard = document.getElementById('top_card_img');

let CardAddresses = {
  "red 0": "red0.png",
  "red 1": "red1.png",
  "red 2": "red2.png",
  "red 3": "red3.png",
  "red 4": "red4.png",
  "red 5": "red5.png",
  "red 6": "red6.png",
  "red 7": "red7.png",
  "red 8": "red8.png",
  "red 9": "red9.png",
  "red +2": "red+2.png",
  "red reverse": "redReverse.png",
  "red skip": "redSkip.png",
  "yellow 0": "yellow0.png",
  "yellow 1": "yellow1.png",
  "yellow 2": "yellow2.png",
  "yellow 3": "yellow3.png",
  "yellow 4": "yellow4.png",
  "yellow 5": "yellow5.png",
  "yellow 6": "yellow6.png",
  "yellow 7": "yellow7.png",
  "yellow 8": "yellow8.png",
  "yellow 9": "yellow9.png",
  "yellow +2": "yellow+2.png",
  "yellow reverse": "yellowReverse.png",
  "yellow skip": "yellowSkip.png",
  "green 0": "green0.png",
  "green 1": "green1.png",
  "green 2": "green2.png",
  "green 3": "green3.png",
  "green 4": "green4.png",
  "green 5": "green5.png",
  "green 6": "green6.png",
  "green 7": "green7.png",
  "green 8": "green8.png",
  "green 9": "green9.png",
  "green +2": "green+2.png",
  "green reverse": "greenReverse.png",
  "green skip": "greenSkip.png",
  "blue 0": "blue0.png",
  "blue 1": "blue1.png",
  "blue 2": "blue2.png",
  "blue 3": "blue3.png",
  "blue 4": "blue4.png",
  "blue 5": "blue5.png",
  "blue 6": "blue6.png",
  "blue 7": "blue7.png",
  "blue 8": "blue8.png",
  "blue 9": "blue9.png",
  "blue +2": "blue+2.png",
  "blue reverse": "blueReverse.png",
  "blue skip": "blueSkip.png",
  "black +4": "+4.png",
  "black wild": "Wild.png",
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

      } else if (card.owner != "deck") {
        
      }
    })
  }
}
