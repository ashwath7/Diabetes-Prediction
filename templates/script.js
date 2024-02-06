// script.js

// Get the card element
var card = document.querySelector(".card");

// Add a mouseover event listener to the card
card.addEventListener("mouseover", function () {
    // Get a random number between 0 and 360
    var angle = Math.floor(Math.random() * 360);
    // Rotate the card by the random angle
    card.style.transform = "rotate(" + angle + "deg)";
});

// Add a mouseout event listener to the card
card.addEventListener("mouseout", function () {
    // Reset the card rotation to 0
    card.style.transform = "rotate(0deg)";
});
