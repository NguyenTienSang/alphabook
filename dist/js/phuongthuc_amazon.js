$(document).ready(function () {
    
            $(".option0").click(function (e){
                e.preventDefault();
                $( "#hide0" ).toggle();
            })
            $(".option1").click(function (e){
                e.preventDefault();
                $( "#hide1" ).toggle();
            })
            $(".option2").click(function (e){
                e.preventDefault();
                $( "#hide2" ).toggle();
            })
            $(".option3").click(function (e){
                e.preventDefault();
                $( "#hide3" ).toggle();
            })
            $(".option4").click(function (e){
                e.preventDefault();
                $( "#hide4" ).toggle();
            })
            $(".option5").click(function (e){
                e.preventDefault();
                $( "#hide5" ).toggle();
            })
            $(".option6").click(function (e){
                e.preventDefault();
                $( "#hide6" ).toggle();
            })


            $("#owl-oneamazon").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navText: [
                    "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
                    "<div class='next'><i class='fas fa-chevron-right'></i></div>",
                ]
            })
            $("#owl-twoamazon").owlCarousel({
                items: 4,
                loop: true,
                nav: true,
                navText: [
                    "<div class='prev'><i class='fas fa-chevron-left'></i></div>",
                    "<div class='next'><i class='fas fa-chevron-right'></i></div>",
                ]
            })
});