function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

class UnoGame {
  constructor(users) {
    this.deck = [];
    this.InDeck = [];
    this.InPlayers = [];
    this.played = [];
    this.topCard = null;
    this.players = users;
    this.direction = 1;
    this.turn = 0;
    this.totalDraw = 0;
  }

  fillDeck() {
    for (let i = 0; i < 108; i++) {
      if (i < 19) {
        this.deck.push(new Card("red", Math.floor(i/2).toString(), i));
      } else if (i < 38) {
        this.deck.push(new Card("yellow", Math.floor((i-19)/2).toString(), i));
      } else if (i < 57) {
        this.deck.push(new Card("green", Math.floor((i-38)/2).toString(), i));
      } else if (i < 76) {
        this.deck.push(new Card("blue", Math.floor((i-57)/2).toString(), i));
      } else if (i < 80) {
        this.deck.push(new Card("black", "+4", i));
      } else if (i < 84) {
        this.deck.push(new Card("black", "wild", i));
      } else if (i < 86) {
        this.deck.push(new Card("red", "+2", i));
      } else if (i < 88) {
        this.deck.push(new Card("yellow", "+2", i));
      } else if (i < 90) {
        this.deck.push(new Card("green", "+2", i));
      } else if (i < 92) {
        this.deck.push(new Card("blue", "+2", i));
      } else if (i < 94) {
        this.deck.push(new Card("red", "reverse", i));
      } else if (i < 96) {
        this.deck.push(new Card("yellow", "reverse", i));
      } else if (i < 98) {
        this.deck.push(new Card("green", "reverse", i));
      } else if (i < 100) {
        this.deck.push(new Card("blue", "reverse", i));
      } else if (i < 102) {
        this.deck.push(new Card("red", "skip", i));
      } else if (i < 104) {
        this.deck.push(new Card("yellow", "skip", i));
      } else if (i < 106) {
        this.deck.push(new Card("green", "skip", i));
      } else if (i < 108) {
        this.deck.push(new Card("blue", "skip", i));
      }
    }
  }

  state() {
    return this.deck;
  }

  takeCard(player) {
    if (this.InDeck.length === 0) {
      this.InDeck = this.played;
      this.played = [];
    }
    
    this.InPlayers.push(this.InDeck[0]);
    this.deck[this.InDeck[0].id].owner = player;
    this.InDeck.splice(0, 1);
  }

  dealCards() {
    for (let i = 0; i < 7; i++) {
      this.takeCard(this.players[0]);
    }
    if(this.players.length > 1) {
      for (let i = 0; i < 7; i++) {
        this.takeCard(this.players[1]);
      }
    }
    if(this.players.length > 2) {
      for (let i = 0; i < 7; i++) {
        this.takeCard(this.players[2]);
      }
    }
    if(this.players.length > 3) {
      for (let i = 0; i < 7; i++) {
        this.takeCard(this.players[3]);
      }
    }
  }

  playCard(cardidx) {
    let card = this.deck[cardidx];

    if(card.color === topCard.color || card.value === topCard.value || card.color === "black") {
      this.topCard.owner = "played";
      this.played.push(topCard);

      this.topCard = card;
      card.owner = "TopCard";

      if(card.value === "+2") {
        this.totalDraw += 2;
      }
      if(card.value === "+4") {
        this.totalDraw += 4;
      }
      if(card.value === "reverse") {
        this.direction *= -1;
      }
      if(card.value === "skip") {
        this.turn += this.direction;
      }
    } else {
      exit(1);
    }
  }

  manageTurn(action, cardidx) {
    if (action === "draw") {
      this.takeCard(this.players[this.turn]);
    } else if (action === "play") {
      this.playCard(cardidx);
    }

    this.turn += this.direction;
    if (this.turn > this.players.length - 1) {
      this.turn = 0;
    } else if (this.turn < 0) {
      this.turn = this.players.length - 1;
    }
  }

  shuffle() {
    this.deck = shuffleArray(this.deck);
    this.InDeck = this.deck.filter(card => card.owner === "deck");
  }
}

class Card {
  constructor(color, value, id) {
    this.owner = "deck";
    this.color = color;
    this.value = value;
    this.id = id;
  }

  toString() {
    return `${this.color} + " " + ${this.value}`;
  }

  fromString(card) {
    card = card.split(" ");
    this.color = card[0];
    this.value = card[1];
  }
}

module.exports = {UnoGame, Card};
