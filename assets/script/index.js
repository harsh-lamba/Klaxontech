const icons = document.querySelectorAll(".down-icon");
const listItems = document.querySelectorAll(".list-item");
const listItemWrappers = document.querySelectorAll(".list-item-wrapper");
const dropDowns = document.querySelectorAll(".dropdown");
const cross = document.querySelector(".cross");
const mobileNav1 = document.querySelector(".mobile-nav-main-wrapper");
const overlay = document.querySelector(".overlay");
const arrow = document.querySelector(".arrow-wrapper");
const mList = document.querySelectorAll(".m-list");
const progressBar = document.querySelector(".nav-roller-progress-bar");
const mListContent = document.querySelectorAll(".sub-items-wrapper");
const hamburger = document.querySelector("#hamburger");
const body = document.querySelector("#body");
const mobileNav = document.querySelector(".mobile-nav");
// const cardsWrapper = document.querySelector(".cards-wrapper");

// const carouselWrapper = document.querySelector('.cards-wrapper');
// const leftButton = document.querySelector('.left-botton');
// const rightButton = document.querySelector('.right-botton');
// const cardWidth = carouselWrapper.querySelector('.card-wrapper').offsetWidth; // Get card width

// Function to scroll the carousel
// function scrollCarousel(direction) {
//     const scrollAmount = direction === 'left' ? -cardWidth : cardWidth; // Calculate scroll distance based on direction
//     console.log(carouselWrapper);
//     carouselWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Smooth scrolling
// }

// Event listener for left button click
// leftButton.addEventListener('click', () => {
//     console.log('clicked');
//     const isAtStart = carouselWrapper.scrollLeft === 0; // Check if at the beginning
//     if (!isAtStart) {
//         scrollCarousel('left');
//     }
// });

// Event listener for right button click
// rightButton.addEventListener('click', () => {
//     console.log('clicked');
//     const isAtEnd = carouselWrapper.scrollWidth <= carouselWrapper.clientWidth + carouselWrapper.scrollLeft;
//     if (!isAtEnd) {
//         scrollCarousel('right');
//     }
// });

const cardsWrapper = document.querySelector(".cards-wrapper");
const cBtn = document.querySelectorAll(".c-btn");
// carousel btn
let carouselPosition = 40;

cBtn[0].addEventListener("click", () => {
    carouselPosition += 380
    if (carouselPosition <= 40) {
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`
    }
    else {
        carouselPosition = 40
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`
    }
})
cBtn[1].addEventListener("click", () => {
    carouselPosition -= 380
    if (carouselPosition >= -1660) {
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`
    }
    else {
        carouselPosition = -1660
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`

    }
})


// animate text when visible
const textAnim = document.querySelectorAll(".scrol-animate");
window.addEventListener("scroll", () => {
    textAnim.forEach(elem => {
        let windowHeight = window.innerHeight;
        let revealTop = elem.getBoundingClientRect().top;
        let revealPoint = 180;

        if (revealTop < windowHeight - revealPoint) {
            elem.classList.add("active")
        }
        else {
            elem.classList.remove("active")
        }
    })
})

// selecting google translate elements

// Get the target element by its ID
const targetElement = document.querySelector(".goog-te-gadget")

// Check if the target element exists

