function Card(cardClass) {
  this.class = cardClass;
}

function randomizer(cards) {
  for(i = 9; i >= 0; i--) {
    var randomNumber = Math.floor((Math.random() * i));
    var cardLocation = "#card" + i;
    $(cardLocation).addClass("class" + cards[randomNumber].class);
    $(cardLocation).addClass("default");
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

  var matchChecker = [];
  var score = 0;

  $(".card").click(function() {
    matchChecker.push($(this).attr("class"))
    matchChecker.push($(this).attr("id"))
    var target = "#" + event.target.id;
    $(target).removeClass("default");

    if(matchChecker.length === 4) {
      if(matchChecker[0] === matchChecker[2]) {
        alert("Match!");
        score += 1;
        var id1 = "#" + matchChecker[1];
        var id2 = "#" + matchChecker[3];
        $(id1).off();
        $(id2).off();
      } else {
        alert("Not A Match!");
        $(target).addClass("default");
        var otherTarget = "#" + matchChecker[1];
        $(otherTarget).addClass("default");
      }

      if(score === 5) {
        alert("you win");
      }
      matchChecker = [];
    }
  });

  event.preventDefault();
});
