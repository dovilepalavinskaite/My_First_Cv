// NICE SCROLL

function scrollBar(event){
        $(`html,body`).animate({
            scrollTop: $(event.data.className).offset().top
        }, 1000);
    }

    $(`.logo`).click({className: ".container"},scrollBar);
    $(`.go-to-skills`).click({className: ".skills"},scrollBar);
    $(`.go-to-education`).click({className: ".education"},scrollBar);
    $(`.go-to-experience`).click({className: ".work-experience"},scrollBar);
    $(`.go-to-other-skills`).click({className: ".skills-and-knowledge"},scrollBar);
    $(`.go-to-contacts`).click({className: ".contacts"},scrollBar);

// PROGRESS BAR
function movephotoshop() {
    var elem = document.getElementById("photoshopBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
movephotoshop();

function moveanalytics() {
    var elem = document.getElementById("analyticsBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
moveanalytics();

function moveadwords() {
    var elem = document.getElementById("adwordsBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
moveadwords();

function movefb() {
    var elem = document.getElementById("fbBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 95) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
movefb();

// SLIDER

let sliderImages = document.querySelectorAll('.slide'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right'),
        current = 0;
        console.log(sliderImages);

// Starts from zero

function reset(){
    for(let i=0; i<sliderImages.length;i++){
        sliderImages[i].style.display = 'none';
        console.log(sliderImages[i])
    }
}
function startSlide(){
    reset();
    sliderImages[0].style.display='block';
}
//Previous photo

function slideLeft(){
    reset();
    sliderImages[current-1].style.display='block';
    current--;
}
//Next photo

function slideRight(){
    reset();
    sliderImages[current+1].style.display='block';
    current++;
}
// Left button
arrowLeft.addEventListener('click', function(){
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});
//Right button
arrowRight.addEventListener('click', function(){
    if (current === sliderImages.length -1) {
        current = -1 ;
    }
    slideRight();
});

startSlide();

// BURGER 

    $('.burger').click(function(){
        var nav = $('nav > ul.flex-container');
        if ((nav).is(':visible')) {
            $(nav).slideUp();
        } else {
            $(nav).slideDown();
        }
    });

    $( window ).resize(function(i) {
        if ($(i.target).width() >= 682) {
            $('nav > ul.flex-container').css('display', 'flex');
        } else {
            $('nav > ul.flex-container').css('display', 'none');
        }
    });
