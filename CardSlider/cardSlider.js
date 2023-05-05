const carousel = document.querySelector(".crousel");

let isDragging = false, startX, startScrollLeft;

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