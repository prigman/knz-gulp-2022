import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

let changer = document.getElementsByClassName('benefits_wrapper')
let paragraphs = document.getElementsByClassName('p')
let dec = document.getElementsByClassName('benefits_dec')
let svg = document.getElementsByClassName('benefits_wrapper-svg')


for (let i = 0; i < changer.length; i++) {
    changer[i].addEventListener('click', function () {
        paragraphs[i].classList.toggle('open')
        svg[i].classList.toggle('transform')
        if (dec[i].innerHTML === "+"){
            dec[i].innerHTML = "-";
        } else {
            dec[i].innerHTML = "+"
        }
    })
}

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_nav').toggleClass('active')
        $('body').toggleClass('lock')
        $('.header_ul').toggleClass('flex')
    })
})

$(document).ready(function() {
    $('.slider_arrow').click(function(event) {
        $('.slider_text_container-2').toggleClass('none')
        $('.slider_text_container-1').toggleClass('none')
        $('.slider_img-inner2').toggleClass('none')
        $('.slider_img-inner').toggleClass('none')
        $('#slider').toggleClass('slider')
        
        $('.slider_arrow').toggleClass('arrow-transform')
    })
})


// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
