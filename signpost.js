// Catch Elements
const orderCard = document.querySelector("article.order-card");
const signpost = document.querySelector(".attribution .signpost");

const rightArrow = document.querySelector(".slider .right-arrow");
const leftArrow = document.querySelector(".slider .left-arrow");

// ##Events
leftArrow.classList.add("disabled");
// When Right Arrow Clicked
rightArrow.onclick = function () {
  if (signpost.classList.contains("hide-signpost")) {
    // Show Signpost
    signpost.classList.remove("hide-signpost");
    signpost.classList.add("show-signpost");
    // Hide Order Card
    orderCard.classList.add("hide-card");
    orderCard.classList.remove("show-card");

    rightArrow.classList.add("disabled");
    leftArrow.classList.remove("disabled");
  }
};
// When Left Arrow Clicked
leftArrow.onclick = function () {
  if (signpost.classList.contains("show-signpost")) {
    // Hide Signpost
    signpost.classList.remove("show-signpost");
    signpost.classList.add("hide-signpost");
    // Show Order Card
    orderCard.classList.add("show-card");
    orderCard.classList.remove("hide-card");

    leftArrow.classList.add("disabled");
    rightArrow.classList.remove("disabled");
  }
};
