const { videointelligence } = require("googleapis/build/src/apis/videointelligence");

function toggle(){
    var trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
    
    
}

function noScroll() {
    window.scrollTo(0, 0);
  }

function openNav(){
    document.getElementById('hamburger-display').style.display="flex";
    document.getElementById('hamburger').style.display="none";
    window.addEventListener('scroll', noScroll);
}

function closeNav(){
    document.getElementById('hamburger-display').style.display="none";
    document.getElementById('hamburger').style.display="block";
    window.removeEventListener('scroll', noScroll);
}