$(document).ready(function () {
    var stt = 0;
    starImg = $("img.slide:first").attr("stt");
    endImg = $("img.slide:last").attr("stt");
    $("img.slide").each(function(){
        if($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $(".next").click(function(){
        if(stt == endImg){
            stt = -1;
        }
        next = ++stt;
        $("img.slide").hide();
        $("img.slide").eq(next).show();
    });
    $(".prev").click(function(){
        if(stt == 0){
            stt = endImg;
            prev = stt++;
        }
        prev = --stt;
        $("img.slide").hide();
        $("img.slide").eq(prev).show();
    });
    setInterval (function(){
        $(".next").click();
    },4000);

    $("#owl-one").owlCarousel({
        items : 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 15000,
        nav: true,
        navText: [
            "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
            "<div class='next'><i class='fas fa-chevron-right'></i></div>",
        ]
    })
    $("#owl-two").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: [
            "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
            "<div class='next'><i class='fas fa-chevron-right'></i></div>",
        ]
    })
    $("#owl-three").owlCarousel({
        items: 4,   
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: true,
        navText: [
            "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
            "<div class='next'><i class='fas fa-chevron-right'></i></div>",
        ]
    })
    $("#owl-four").owlCarousel({
        items: 1,   
        loop: true,
        nav: true,
        navText: [
            "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
            "<div class='next'><i class='fas fa-chevron-right'></i></div>",
        ]
    })
    $("#owl-five").owlCarousel({
        items: 3,   
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        nav: true,
        navText: [
            "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
            "<div class='next'><i class='fas fa-chevron-right'></i></div>",
        ]
    })
    $("#owl-six").owlCarousel({
        items: 2,   
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: true,
        navText: [
            "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
            "<div class='next'><i class='fas fa-chevron-right'></i></div>",
        ]
    })
});