console.log(1)
console.log(2)
console.log(3)

$(document).ready(function() {
    $('.about__slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
    });
    $('.advan__slider').slick({
        arrows:true,
        dots: false,
        slidesToShow: 1,
    })
});