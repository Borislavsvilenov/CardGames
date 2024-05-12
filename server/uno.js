class UnoGame {
  constructor(users) {
    this.deck = []
    this.players = users;
  }

  fillDeck() {
    for (let i = 0; i < 108; i++) {
      if (i < 19) {
        this.deck.push(new Card("red", Math.floor(i/2)));
      } else if (i < 38) {
        this.deck.push(new Card("yellow", Math.floor((i-19)/2)));
      } else if (i < 57) {
        this.deck.push(new Card("green", Math.floor((i-38)/2)));
      } else if (i < 76) {
        this.deck.push(new Card("blue", Math.floor((i-57)/2)));
      } else if (i < 80) {
        this.deck.push(new Card("black", "+4"));
      } else if (i < 84) {
        this.deck.push(new Card("black", "wild"));
      } else if (i < 86) {
        this.deck.push(new Card("red", "+2"));
      } else if (i < 88) {
        this.deck.push(new Card("yellow", "+2"));
      } else if (i < 90) {
        this.deck.push(new Card("green", "+2"));
      } else if (i < 92) {
        this.deck.push(new Card("blue", "+2"));
      } else if (i < 94) {
        this.deck.push(new Card("red", "reverse"));
      } else if (i < 96) {
        this.deck.push(new Card("yellow", "reverse"));
      } else if (i < 98) {
        this.deck.push(new Card("green", "reverse"));
      } else if (i < 100) {
        this.deck.push(new Card("blue", "reverse"));
      } else if (i < 102) {
        this.deck.push(new Card("red", "skip"));
      } else if (i < 104) {
        this.deck.push(new Card("yellow", "skip"));
      } else if (i < 106) {
        this.deck.push(new Card("green", "skip"));
      } else if (i < 108) {
        this.deck.push(new Card("blue", "skip"));
      }
    }
    this.deck[80].owner = "TopCard"
    console.log(this.deck);
  }

  state() {
    return this.deck;
  }
}

class Card {
  constructor(color, value) {
    this.owner = "deck";
    this.color = color;
    this.value = value;
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

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  drawCard(deck) {
    
  }

  checkPlayableCards(topCard) {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].value === topCard.value) {
        return true;
      } else if (this.cards[i].color === topCard.color) {
        return true;
      } else if(this.cards[i].color === "black") {
        return true;
      }
    }
  }
}

module.exports = {UnoGame, Card, Player};
