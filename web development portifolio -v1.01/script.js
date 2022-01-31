
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slip-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // navbar toggle button
    $('.menu-btn1').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn1 i').toggleClass("active");
    });
    // typing Animation script
    var typed = new Typed(".typing", {
        strings: ["Web development" , "UI design" , "Digital Marketing", "Web development", "Digital Marketing"],
        typeSpeed: 30,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web development" , "UI design" , "Digital Marketing"],
        typeSpeed: 30,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });

});