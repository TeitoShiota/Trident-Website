const slides = document.getElementsByClassName("heroSlide")
let slideIndex = 1;
carousel();

function carousel() {
    let i
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block"
    setTimeout(carousel,5000);
}