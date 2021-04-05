$(document).ready(function () {
    
    $("#owl-one").owlCarousel({
        items : 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        navText: [
            "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
            "<div class='next'><i class='fas fa-chevron-right'></i></div>",
        ]
    })
    
});