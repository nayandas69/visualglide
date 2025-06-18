// Description: This script handles the carousel functionality for a set of cards.

const next = document.querySelector('.go-right');
const prev = document.querySelector('.go-left');

// Add event listeners to the next and previous buttons
next.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    document.querySelector('.carousel').appendChild(cards[0]);
});

prev.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    document.querySelector('.carousel').prepend(cards[cards.length - 1]);
});
