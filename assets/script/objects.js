// let obj1={
//     name:"Shubham",
//     rollNo:372726
// }
// let obj2=obj1

// console.log("Obj1",obj1);
// console.log("Obj2",obj2);
// console.log("Compare ==",obj1==obj2);
// console.log("Compare ===",obj1===obj2);
// console.log("Compare >",obj1>obj2);

// obj2.name="Jaspreet"
// console.log("after chang");
// console.log("Obj1",obj1);
// console.log("Obj2",obj2);

// // other
// console.log("Other...");
// let obj3={}
// let obj4={}
// console.log("Compare of obj3 == obj4",obj3==obj4);
// console.log("Compare of obj3 === obj4",obj3===obj4);
// obj3=obj4;
// console.log("after chang");
// console.log("Compare of obj3 == obj4",obj3==obj4);
// console.log("Compare of obj3 === obj4",obj3===obj4);

// // 
// let clone={};
// let obj5={};

// for(let key in obj1){
// clone[key]=obj1[key]
// }
// console.log("clone of obj1",clone);
// console.log(" obj1",obj1);
// console.log("Compare of obj1==clone",obj1==clone);
// console.log("Compare of obj1===clone",obj1===clone);
// clone.name="shubham"
// console.log(" After change clone of obj1",clone);
// console.log(" obj1",obj1);

// // Advance

// let obj6={
//     name:"Jaspreet",
//     rollNo:36228
// }
// let obj7={
//     name:"Jaspreet",
//     rollNo:'36228'
// }
// console.log("Compare of obj1==clone",obj6==obj7);
// console.log("Compare of obj1===clone",obj6===obj7);
// for(let key in obj6){
//     console.log(obj6[key]==obj7[key]);
// }

// let cloneValue={}    it is wrong in object frist conver in array.....👍👍
// for(let value of obj6){
//     cloneValue[value]=obj6[value]
// }
// console.log(cloneValue);

// Object.assign(dest, ...sources)0️⃣0️⃣ new.......
let copyobj1={
    class:"Bac-5",
    rollNo:38128
}
let copyobj2={
    name:"Shubham",
    id:3828000
}
let userobj={};

Object.assign(userobj,copyobj1,copyobj2);
console.log("copy of copyobj1 and copyobj2 in user:",userobj);

let copyobj3={
    class:"Bac-2",
    name:"Jaspreet",
    rollNo:38128,
}
let copyobj4={
    home:"Gujrat",
    id:3828000,
    name:"shubham",
}
let userobj1={};
Object.assign(userobj1,copyobj3,copyobj4,);
console.log("New...object");
console.log("copyobj3 :",copyobj3);

console.log("copy of copyobj3 and copyobj4 in user:",userobj1);

console.log("verify a key...:");

for(let key in copyobj3){
    console.log(`keys...:${key} ,,,, copyobj3 (${copyobj3[key]})=== userobj1 (${userobj1[key]}) :${copyobj3[key]===userobj1[key]}`);
    
}

let arr1=[2,38,43,94,49,30,9];
console.log("in .....",0 in arr1);
console.log("in .....",5 in arr1);
console.log("in .....",6 in arr1);
console.log("in .....",arr1.length);


