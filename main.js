
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const sliders = document.querySelectorAll(".sliders img");
const gallery = document.querySelector(".gallary-container");
let sliderId = document.querySelector(".slider-id");
gallery.style.gridTemplateColumns = `repeat(${sliders.length}, 1fr)`;

let currentSlider = 0;
updateSlide();
function goToSlide(target) {

    sliders[currentSlider].classList.remove("active")
    currentSlider = (target + sliders.length) % sliders.length;
    sliders[currentSlider].classList.add("active")
    updateSlide();
    updateStateActive(currentSlider);
}

prevBtn.addEventListener("click", () => {
goToSlide(currentSlider - 1)
})
nextBtn.addEventListener("click", () => {
    goToSlide(currentSlider + 1)
})
function updateSlide()  {
    prevBtn.disabled =   currentSlider===0;
    nextBtn.disabled =   currentSlider===sliders.length-1;
    sliderId.innerHTML= `image ${currentSlider+1} of ${sliders.length}`;
}
sliders.forEach((img,index) =>  { 
    const copyImage  = img.cloneNode();
    copyImage.addEventListener("click",()=> { 
        goToSlide(index);
    })
    gallery.appendChild(copyImage);
  
});
function updateStateActive(index)  {
    gallery.querySelectorAll("img").forEach((img,i) =>  {
img.classList.toggle("active",i===index)
    } )
}