// let person1={
//     name:"Shubham",
//     class:"Bca",
//     rollNo:35262,
//     data:function(){
//         return `Your name is: ${this.name} and class is: ${this.class} and rollNo: ${this.rollNo}`
//     }
// }

// let person2={
//     name:"Jaspreet",
//     class:"Bcom",
//     rollNo:52662
// }

// console.log(person1.data.call(person2));

// let person3={
//     name:"Sharan",
//     class:"Bca",
//     rollNo:7282,
//     data:function(...value){
//         return `Your name is: ${this.name} and class is: ${this.class} and rollNo: ${this.rollNo} --Numbers:  ${value}`
//     }
// }

// let person4={
//     name:"Rahul",
//     class:"Mca",
//     rollNo:73282,
// }
// console.log(person1.data.call(person2));
// console.log(person3.data.apply(person4 ,[99,382,829,292]));

const el = document.querySelector("#module");
let img1=document.querySelector("#img1")
let img2=document.querySelector("#img2")
let img3=document.querySelector("#img3")

el.addEventListener("mousemove", (e) => {
  valueX=el.style.backgroundPositionX = -e.offsetX + "px";
  valueY=el.style.backgroundPositionY = -e.offsetY + "px";
//   img1.style.padding-left;
el.style.pa
  console.log(valueX);
  console.log(valueY);
});