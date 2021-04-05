// $(function () {
//     const courses = [
//       {
//         name: "Development",
//         users: 46,
//         likes: 14,
//         price: 300,
//         categories: ["Business"],
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p1.jpg",
//       },
//       {
//         name: "Creative Art",
//         users: 26,
//         likes: 24,
//         price: 600,
//         categories: ["Business", "Management"],
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p2.jpg",
//       },
//       {
//         name: "Interior Design",
//         users: 36,
//         likes: 34,
//         price: 300,
//         categories: ["Languages"],
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p3.jpg",
//       },
//       {
//         name: "Tech and Coding",
//         users: 46,
//         likes: 14,
//         price: 500,
//         categories: ["Business", "Management"],
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p4.jpg",
//       },
//       {
//         name: "Literature",
//         users: 36,
//         likes: 34,
//         price: 200,
//         categories: ["Management", "Languages"],
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p5.jpg",
//       },
//       {
//         name: "Business",
//         users: 56,
//         likes: 44,
//         price: 400,
//         categories: ["Business"],
  
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p6.jpg",
//       },
//       {
//         name: "Graphic Design",
//         users: 46,
//         likes: 14,
//         categories: ["Business"],
//         price: 300,
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p7.jpg",
//       },
//       {
//         name: "Languages",
//         users: 46,
//         likes: 34,
//         price: 500,
//         categories: ["Management", "Languages"],
//         img:
//           "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p8.jpg",
//       },
//     ];
//     //  đổ dữ liệu từ array categories ra giao diện html
//     // duyệt qua từng phần tử của categories rồi đổ vào mẫu
//     // template literal
//     // filter trả về 1 mảng mới thoải mãn function test
  
//     // render all courses
//     renderCourse(courses);
  
//     $(".filter-category a").click(function (e) {
//       e.preventDefault();
//       // remove and and class .active
//       $(".filter-category a").removeClass("active");
//       $(this).addClass("active");
  
//       // filter
//       const filterdItem = $(this).attr("data-category");
//       const filterdCourses = courses.filter((val) =>
//         val.categories.includes(
//           filterdItem.charAt(0).toUpperCase() + filterdItem.slice(1)
//         )
//       );
//       // remove all children
//       $(".content-category .row").empty();
  
//       // render new Courses
//       if (filterdCourses.length === 0) {
//         renderCourse(courses);
//         printtotal(courses);
//       } else {
//         renderCourse(filterdCourses);
//         printtotal(filterdCourses);
//       }
//     });
  
//     $("#filter-price").change(function (e) {
//       e.preventDefault();
//       const currentVal = $(this).val();
//       const filterByPriceCourses = courses.filter(
//         (val) => val.price >= currentVal,(val) => val.name == currentVal


//       );
      
    
//       // remove all children
//       $(".content-category .row").empty();
  
//       if (filterByPriceCourses.length > 0) {
//         renderCourse(filterByPriceCourses);
//       } else {
//         renderCourse(courses);
//       }
//     });
//     //print total
//     // $(".total").text("$100");
//     // let total = 0;
//     // for(let i=0; i<courses.length; i++)
//     // {
//     //     total+= courses[i].price;
//     // }
//     // $(".total").text(`$${total}`);

//     //print total : su dung reduce
//     //reduce la mot phuong thuc cua array trong js
//     // const nums = [1,2,3,4];
//     // const total = nums.reduce((accumulator, currentVal) => {
//     //     console.log("accumulator :  ",accumulator);
//     //     console.log("currentVal :  ",currentVal);
//     //     return accumulator + currentVal; 
//     // });
//     // const total = nums.reduce((acc, currentVal) => acc + currentVal, 5);     
//     // console.log("total : ", total)

//     // const names = ["bob", "alex", "vid", "alex", "bob"];
//     // const countDup = names.reduce((nameObj,name) =>{
//     //     if(name in nameObj)
//     //       nameObj["name"]++;
//     //       else {
//     //         nameObj[name] = 1;
//     //         // nameObj.name = 1;
//     //       }
//     //       return nameObj;
//     // },{});
//     // console.log(countDup);

//     // const total = courses.reduce((acc, currentVal) => acc + currentVal.price,0);
//     printtotal(courses);
//   });

//  function printtotal(array)
//  {
//     const total = array.reduce((acc,currentVal) => acc + currentVal.price, 0 );
//   $(".total").text(`$${total}`);
//  } 
  
//   function renderCourse(list) {
//     list.forEach((val) => {
//       $(`
//           <div class="col-md-3">
//           <img
//             src=${val.img}
//             alt=""
//           />
//           <div class="card-content">
//             <a href="">Christina Rose</a>
//             <h2>${val.name}</h2>
//             <ul class="flex a-center j-between">
//               <li>
//                 <i class="fa fa-user"></i>
//                 <span>${val.users}</span>
//               </li>
//               <li>
//                 <i class="fa fa-thumbs-up"></i>
//                 <span>${val.likes}</span>
//               </li>
//               <li>
//                 <i class="fa fa-dollar-sign"></i>
//                 <span>${val.price}</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//           `).appendTo(".content-category .row");
//     });
//   }
  

const number = [2,3,10];

const index = 1;

var temp = number.slice(0, number.length );
console.log(tempt);