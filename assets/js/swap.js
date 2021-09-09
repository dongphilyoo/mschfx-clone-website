let stack = document.getElementById("stack");

function to_start() {
  autoSwap = setInterval(() => {
    swap();
  }, 3000);
}

to_start();

stack.addEventListener("click", swap);
// stack.addEventListener("mouseenter", pauseInterval);
// stack.addEventListener("mouseleave", to_start);

// function pauseInterval() {
//     console.log('mouseenter');
//     clearInterval(autoSwap);
// }

function swap() {
  let _cards = [...stack.children];
  let _firstCard = document.querySelector(".card1");

  // console.log(_firstCard.firstChild.src);

  cardAnim(_firstCard, 500);

  // _firstCard.addEventListener("transitionend", function () {
  //     console.log('animation ended');
  // });

  cardChange(_cards, _firstCard);
}

function cardAnim(card, duration) {
  // card.className += " top-card";
  // card.style.zIndex = 600;

  card.animate(
    [
      // keyframes
      {
        transform: "translate(5%, -350%)",
        zIndex: "410"
      }
    ],
    {
      // timing options
      duration: duration,
      easing: "cubic-bezier(.17,.67,.9,.34)",
      iterations: 2,
      direction: "alternate",
      fill: "both"
    }
  );
}

function cardChange(cards, firstCard) {
  cards.map(function(card) {
    if (card.classList.contains("card1")) {
      card.className = "card card10 card-backward";
      // card.style.zIndex = 600;
    } else if (card.classList.contains("card2")) {
      card.className = "card card1";
      card.lastElementChild.className = "shirt-overlay hide";
    } else if (card.classList.contains("card3")) {
      card.className = "card card2";
    } else if (card.classList.contains("card4")) {
      card.className = "card card3";
    } else if (card.classList.contains("card5")) {
      card.className = "card card4";
    } else if (card.classList.contains("card6")) {
      card.className = "card card5";
    } else if (card.classList.contains("card7")) {
      card.className = "card card6";
    } else if (card.classList.contains("card8")) {
      card.className = "card card7";
    } else if (card.classList.contains("card9")) {
      card.className = "card card8";
    } else if (card.classList.contains("card10")) {
      card.className = "card card9";
    }
  });
  setTimeout(() => {
    document
      .querySelector(".card-backward")
      .lastElementChild.classList.remove("hide");
    document.querySelector(".card-backward").classList.remove("card-backward");
  }, 800);
}
