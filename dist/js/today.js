// $(document).ready(function(){
//   $("#owl-one").owlCarousel({
//     items: 4, 
//     loop: true
//   });
//   $("#owl-two").owlCarousel({
//     items: 3, 
//     loop: true
//   });
//   $("#owl-three").owlCarousel({
//     items: 2, 
//     loop: true,
//     // autoplay: true,
//     //     autoplayTimeout: 3000,
//         nav: true,
//         navText: [
//             // "<i class='fa fa-angle-left'/i>",
//             // "<i class='fa fa-angle-right'/i>",
//             "<i class='fas fa-chevron-right'></i>",
//             // "<i class='right'>Next</i>"
//         ]
//   });
//   // $(".owl-carousel").owlCarousel({
//   //   items: 2, 
//   // });

// });



// const users = [
//   {
//     id: 1,
//     name: "A",
//   },
//   {
//     id: 2,
//     name: "B",
//   },
//   {
//     id: 3,
//     name: "C",
//   },
//   {
//     id: 4,
//     name: "D",
//   },
//   {
//     id: 5,
//     name: "E",
//   },
//   {
//     id: 6,
//     name: "A",
//   },
// ];


// const filterA = users.filter((val) => val.name === "A");
// console.log(filterA);
// const ArrAA = [...users];

// ArrAA.forEach((val) => {
//   if (val.name === "C") {
//     val.name = "CC";
//   }
// });

// console.log(ArrAA);
// document.getElementById("thugon").style.display = "none";
// $(document).ready(function () {

    // $(".xemthem").click(function (e){
    //     e.preventDefault();
    //         document.getElementById("choose_none").style.display = "block";
    //     })
    // $(".thugon").click(function (e){
    //     e.preventDefault();
    //         document.getElementById("choose_none").style.display = "none";
    // })
    
    
//     $(".xemthem").click(function (e){
//         e.preventDefault();
//             document.getElementById("choose_none").style.display = "block";
//             // document.getElementsByClassName("xemthem").style.display = "none";
//             // document.getElementsByClassName("thugon").style.display = "block";
//         })
//     $(".thugon").click(function (e){
//         e.preventDefault();
//             document.getElementById("choose_none").style.display = "none";
//             // document.getElementsByClassName("xemthem").style.display = "block";
//             // document.getElementsByClassName("thugon").style.display = "none";
//     })
// });

$(function() {
    const curVal = $("#menu").val();
    $(".dog").empty();
    getRandomDog(curVal);

$("#menu").change(function (e) {
    e.preventDefault();
    const culval = $("#menu").val();
    $(".dog").empty();
    getRandomDog(curVal);
});
});

function getRandomDog(name) {
    // https:\/\/images.dog.ceo\/breeds\/hound-afghan\/n02088094_1003.jpg
    // https://dog.ceo/api/breed/hound/afghan/images
    for(let i=0; i<100; i++)
    {
        $.get(`https://dog.ceo/api/breed/hound/${name}/images/random`, function (data){
        $(`<img src=${data.message}>`).appendTo(".dog");
    });
    }
}

window.on