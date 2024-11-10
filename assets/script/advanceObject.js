// nested cloning....
let copyobj1={
    fullName:{
        fristName:"Shubham",
        lastName:"Gupta"
    },
    course:"BCA",
    rollNo:26373
}
let copyobj2={
    fullName:"Jaspreet kaur",
    course:"B-Com",
    rollNo:26379
}
let user1={}
Object.assign(user1,copyobj1)
console.log("copy of copyobj1 to user1",user1);
// Check
// console.log("Check user1 === copyobj1",user1===copyobj1);
let clone=structuredClone(copyobj1)
console.log("thru",clone);
console.log(clone==copyobj1);
console.log(clone==user1);


// Opration chaning... syntax is (?.)

console.log(copyobj1.class);
console.log(copyobj1.rollNo);
console.log(copyobj1.fullName);
console.log(copyobj1.fullName.lastName);
console.log("chack",copyobj1.fullName.lastName.name);
console.log(copyobj1.lastName);
console.log("Check",copyobj1?.fullName?.fristName?.name);
// console.log("Check",copyobj1?fullName?fristName);

console.log("addresss",copyobj1.address);

let obj1={
    name:"shubham",
    class:"BCA",
    rollNo:27382
}

function extractObj1(para){
    return obj1[para]

}
console.log(extractObj1('class'));

const arr1=[527,37,920,39]
arr1.push(1326);
// console.log(arr1);
