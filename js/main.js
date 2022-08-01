//Carousel
const owl = $('.owl-carousel');


owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,

    responsive : {
        // breakpoint from 0 up
        0 : {
            margin: 20,
            
        },
        // breakpoint from 480 up
        480 : {
            margin: 20,
            
        },
        // breakpoint from 768 up
        850 : {
            margin: 20,
            items: 3,
        }
        ,
        1000 : {
            margin: 20,
            items: 3,
        },
        1200 : {
            margin: 30,
        },
    },
});



$('.slider_btn--next').click(function() {

    owl.trigger('next.owl.carousel');
})
$('.slider_btn--prev').click(function() {
    
    owl.trigger('prev.owl.carousel');
})

//Бургер

const navBtn = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-Icon');


navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}