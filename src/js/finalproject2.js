$(document).ready(function () {
    // $(".thugon").click(function (e){
    //     e.preventDefault();
    //         // document.getElementById(".thugon").textContent = "Xem thêm1";
    //         document.getElementById("choose_none").style.display = "none";
    // })
    $(".click").click(function (e){
        e.preventDefault();
        $( "#choose_none" ).toggle();
        console.log(document.getElementsByClassName("click").innerHTML);
        document.getElementsByClassName("click").innerHTML = "Hello";
        console.log(document.getElementsByClassName("click").innerHTML);
            // document.getElementById("choose_none").style.display = "block";
            // document.getElementById(".thugon").textContent = "Xem thêm2";
    })
  
});