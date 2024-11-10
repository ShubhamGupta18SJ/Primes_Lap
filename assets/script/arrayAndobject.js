let array1=[35,27,38,10,20,39,40,28]
let array2=array1
// console.log(array1.values());
// shorting of array
console.log("array 1",array1);
console.log("array 2",array2);

console.log("array 1 short" ,array1.sort((a,b)=>b-a));
console.log("array 2",array2);
// console.log(array1.sort((a,b)=>a+b));
array2.push(788);
console.log(array1);
console.log(array2);

let arr3=[3,829,930,28,203]
console.log("Find a element on this place",arr3.at(3));
console.log("Find a element on this place",arr3.includes(28));
console.log("Find a element on this place",arr3.includes(28,3));
console.log("Find a element on this place",arr3.includes(28,4));
console.log("Find a indexOf",arr3.indexOf(28));
console.log("toLocaleString",arr3.toLocaleString());
let Lstr=arr3.toLocaleString()
console.log("typeof:",typeof(Lstr));

console.log("toString",arr3.toString());
let Tostr=arr3.toString()
console.log("typeof:",typeof(Tostr));
console.log(array1==array2);
console.log(array1===array2);
let arr4=[];
console.log("array 3",arr3==arr4);
console.log("array 4",arr3===arr4);
arr3.copyWithin(2,3)
console.log(arr3);
console.log(arr4);

console.log("array 3",arr3==arr4);
console.log("array 4",arr3===arr4);
