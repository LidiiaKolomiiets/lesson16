const imagesArray = ['istockphoto-1093110112-612x612.jpg', 'marguerite-729510_1280.jpg', 'ocean-3605547_1280.jpg', 'pexels-pixabay-268533.jpg'];

const images = 'images/'

let slideIndex = 0;

setImage(0);
hideBtn(true,'prev');

function setImage(i) {
  const img = document.getElementById('img');
  img.src = images + imagesArray[i];
}

function plusSlides(nextStep) {
  slideIndex += nextStep;
  setImage(slideIndex);
  hideBtn(slideIndex === imagesArray.length - 1, 'next') ;
  hideBtn(slideIndex === 0, 'prev');
}



function hideBtn (isHide, x){
  const btn = document.getElementById(x);
  if(isHide){btn.style.display = 'none';}
  else{btn.style.display = 'block'}
}
