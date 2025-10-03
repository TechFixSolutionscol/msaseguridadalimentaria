/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// carousels initialization
$(document).ready(function(){
    // testmonial carousel
    $('#owl-testmonial').owlCarousel({
        center: true,
        items:1,
        loop:true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    // alianzas carousel
    $('#owl-alianzas').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            480: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2,
                margin: 20
            },
            992: {
                items: 3,
                margin: 20
            }
        }
    });
});