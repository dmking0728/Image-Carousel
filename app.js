const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

//counter 
let counter = 0;
const size = carouselImages[counter].clientWidth;

//arrow image
const arrow = document.querySelector('.fa-chevron-left');

//pagination
const p = document.querySelector('p');
let pInner = 1;

function nextImage(){
  if (counter < 2){
    counter++;
    arrow.style.color = 'white';
    pInner++;
    p.innerText = `${pInner} / 3`;
  } else {
    counter = 0;
    pInner = 1;
    p.innerText = `${pInner} / 3`;
    arrow.style.color = 'transparent';
  }
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function prevImage(){
  if (counter > 0){
    counter--;
    pInner--;
    p.innerText = `${pInner} / 3`;
  }
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}