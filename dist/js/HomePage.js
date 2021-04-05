$(document).ready(function () {
    // var stt = 0;
    // starImg = $("img.slide:first").attr("stt");
    // endImg = $("img.slide:last").attr("stt");
    // $("img.slide").each(function(){
    //     if($(this).is(':visible'))
    //         stt = $(this).attr("stt");
    // });
    // $(".next").click(function(){
    //     if(stt == endImg){
    //         stt = -1;
    //     }
    //     next = ++stt;
    //     $("img.slide").hide();
    //     $("img.slide").eq(next).show();
    // });
    // $(".prev").click(function(){
    //     if(stt == 0){
    //         stt = endImg;
    //         prev = stt++;
    //     }
    //     prev = --stt;
    //     $("img.slide").hide();
    //     $("img.slide").eq(prev).show();
    // });
    // setInterval (function(){
    //     $(".next").click();
    // },4000);

  

    $('.owl_sachmoi').owlCarousel({
        items : 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
    })
    $('.owl_giftbook').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
    })
    $('.owl_bestseller').owlCarousel({
        items: 4,   
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    })
    $('.owl_customer_review').owlCarousel({
        items: 1,   
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
    })
    $('.owl_public').owlCarousel({
        items: 3,   
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    })
    $('.owl_recruiment').owlCarousel({
        items: 2, 
    })
});


