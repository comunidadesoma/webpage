//Declarando Variáveis
var btnContact = document.querySelector('.is-btn-contact');

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

//Animando Elementos on Scrool com Waypoints
var myScrollDown = document.querySelector('.is-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('is-fade-out');
    },
    offset: '80%'
});