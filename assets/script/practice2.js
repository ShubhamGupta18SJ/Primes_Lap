// function _key(obj){
//     let objData=obj;
//     let arraydk=[];
//     for(let key in objData){
//         arraydk.push(key);
//     }
// return arraydk
// }
// let stu={naam:"shuha",class:"BCA",clg:"Gjimt"}
// _key(stu)
// console.log(_key(stu));
// delete(stu.clg)
// console.log(stu);

// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// function findItem(){
let arr=[3,4,1,4,2,6,4,78,3];
// arr.findIndex((value,index,obj)=>{
//     console.log(`${value} and ${index} and ${obj}`);
    
// })
let strarr=["Shubham","Jaspreet","sharan","Rahul"]
console.log("index of(Check item from start):",arr.indexOf(4));
console.log("Last index of(Check item from end):",arr.lastIndexOf(4));
console.log("includes item is avalibal (true and false) with starting number: ",arr.includes(3,5));
let copyNewarr=arr.copyWithin(strarr,2,strarr.length)
console.log(copyNewarr);
console.log(copyNewarr);
arr.reduceRight((preves_Value,curren_Value,current_Index,array1)=>{
    
});





// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]