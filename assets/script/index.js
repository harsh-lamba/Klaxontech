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
const cardsWrapper = document.querySelector(".cards-wrapper");

const cBtn = document.querySelectorAll(".c-btn");

const textAnim = document.querySelectorAll(".scrol-animate");


// carousel btn
let carouselPosition = 40;

cBtn[0].addEventListener("click",()=>{
    carouselPosition += 320
    if(carouselPosition <= 40){
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`
    }
    else{
        carouselPosition = 40
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`
    }
})
cBtn[1].addEventListener("click",()=>{
    carouselPosition -= 320
    if( carouselPosition >= -2060){
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`
    }
    else{
        carouselPosition = -2060
        cardsWrapper.style.transform = `translateX(${carouselPosition}px)`

    }
})


// animate text when visible

window.addEventListener("scroll",()=>{
    textAnim.forEach(elem=>{
        let windowHeight = window.innerHeight;
        let revealTop = elem.getBoundingClientRect().top;
        let revealPoint = 180;

        if(revealTop < windowHeight - revealPoint){
            elem.classList.add("active")
        }
        else{
            elem.classList.remove("active")
        }
    })
})

// selecting google translate elements

// Get the target element by its ID
const targetElement = document.querySelector(".goog-te-gadget")

// Check if the target element exists

