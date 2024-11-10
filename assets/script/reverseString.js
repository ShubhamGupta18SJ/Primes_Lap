function ReverseStr(str){
   return str.split('').reverse().join('')
}
let str=ReverseStr("shubham");
console.log(str);

let str1="shubham"
// console.log(str1.split(''));

let obj={
   name:"Shubham",
   class:"BCA",
   family:{
      mother:"Mother",
      father:"father"
   }
}
function objFunction(){
   return obj.class
}
console.log(objFunction());
