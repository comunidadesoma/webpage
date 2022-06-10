//FOTOS SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.is-slider-container');
var sliderList = document.querySelector('.is-slider-list');
var sliderItem = document.querySelectorAll('.is-slider-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidht = null;
var prevItem = document.querySelector('.is-fotos-prev');
var nextItem = document.querySelector('.is-fotos-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.is-current-slide');
var totalSlide = document.querySelector('.is-total-slide');
var currentCounter = 1;


//Capturando larguras individuais
var containerWidht = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidht+ 'px';

for(var p = 0; p < sliderItem.length; p++){
    sliderItem[p].style.width = containerWidht+ 'px';
    var sliderItemWidht = sliderItem[p].offsetWidth;

    sliderListWidht += sliderItemWidht;
}

sliderList.style.width = sliderListWidht+ 'px';

//HANDLERS

//Next Slider Animação
var nextSlideAnim = function(){
    var lastItem = sliderListWidht - containerWidht;
    if ((-1*(sliderPos) === lastItem)) {
        return;
    }

    sliderPos -= containerWidht;
    
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'

      });
}

//Prev Slide Animação
var prevSlideAnim = function(){
        
    if ((-1*(sliderPos) === 0)) {
        return;
    }

    sliderPos += containerWidht;
    
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
      });
}

//Counter Formater
var counterFormatter = function(n) {
    if(n < 10){
        return '0'+n;
    }else {
        return n;
    }
}

//Counter Add
var counterAdd = function(){
    if((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
    currentCounter++;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove
var counterRemove = function(){
    if((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
    currentCounter--;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    }
}

//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

nextItem.addEventListener('click', function(){
    nextSlideAnim();
    counterAdd();
});

prevItem.addEventListener('click', function(){
    prevSlideAnim();
    counterRemove();
});