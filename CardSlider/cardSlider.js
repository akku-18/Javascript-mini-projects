const carousel = document.querySelector(".crousel");
const arrowBtns =  document.querySelectorAll(".wrapper i");
const firstCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildren = [...carousel.children]; 

let isDragging = false, startX, startScrollLeft ;

// // Get number of cards that can fit in carousel at once 
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // insert copies of last few cards to beginning of carousel for infinite scrolling
// carouselChildren.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// })

// // insert copies of first few cards to end of carousel for infinite scrolling
// carouselChildren.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// })


// Add event listernes to arrow buttons
arrowBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Record the initial position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return ;  // If dragging is false then return from here
    // Updates the position of the carousel based on cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging")
}


carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);