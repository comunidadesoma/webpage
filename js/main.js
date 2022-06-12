//Declarando Variáveis
var btnContact = document.querySelector('.is-btn-contact');
var toggleMenu = document.querySelectorAll('.is-toggle-menu');
var menuMobile = document.querySelector('.is-menu-mob');
var btnMenuMobIcon = document.querySelector('.is-btn-menu-mob ion-icon');


//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.is-preloader');
    pagePreloder.classList.add('is-fade-out');
 
    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.is-contact-info');
    boxContact.classList.toggle('is-is-open');
    this.classList.toggle('is-change-icon');
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
        toggleMenu[m].addEventListener('click', function () {
            var overlay = document.querySelector('.is-menu-overlay');
            overlay.classList.toggle('is-is-open')
            menuMobile.classList.toggle('is-menu-is-closed');
            menuMobile.classList.toggle('is-menu-is-open');

            var icon = btnMenuMobIcon.getAttribute('name');

            if(icon === 'menu-outline'){
                btnMenuMobIcon.setAttribute('name', 'close');
            } else{
                btnMenuMobIcon.setAttribute('name', 'menu-outline');
            }
    });
}

//Animando Elementos on Scrool com Waypoints
var myScrollDown = document.querySelector('.is-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('is-fade-out');
    },
    offset: '80%'
});