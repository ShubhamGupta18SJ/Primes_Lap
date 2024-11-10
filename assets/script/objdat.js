let a={
    name:'Shubham',
    class:"11th",
    age:22,
  shub: function(){
    return this.age
    }
  }
 function objdata(para){
  return this.a.para
 }
 function objdata1(para){
    return a[para]
   }
console.log("obj data  :",objdata1('age'));

//  console.log("obj data",objdata("class"));
 
  
let key=Object.keys(a);
console.log(key);

function Person(name, age) {

this.name = name;

this.age = age;

}
// class Shubham {
//   constructor(){
//     name:'shub'
//   }
// }