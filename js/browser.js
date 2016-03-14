function Card(cardClass) {
  this.class = cardClass;
}

function randomizer(cards) {
  for(i = 9; i >= 0; i--) {
    var randomNumber = Math.floor((Math.random() * i));
    var cardLocation = "#card" + i;
    $(cardLocation).addClass("class" + cards[randomNumber].class);
    cards.splice(randomNumber, 1);
  }
}

function defineCards() {
  card1 = new Card("1");
  card2 = new Card("2");
  card3 = new Card("3");
  card4 = new Card("4");
  card5 = new Card("5");
  card6 = new Card("1");
  card7 = new Card("2");
  card8 = new Card("3");
  card9 = new Card("4");
  card10 = new Card("5");
  var cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

  return cards;
}

$(document).ready(function(){
  cards = defineCards();
  randomizer(cards);
  event.preventDefault();
});
