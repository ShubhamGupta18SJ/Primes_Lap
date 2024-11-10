// let arr1=[2,36,92,83,[73,[45],52],81]
// console.log(arr1.flat(Infinity));

// let arr2=[25,27,26,29,23,21,28];
// let findElement=arr2.find((el)=>{
// if(el>=25){
//     return el
// }
// });
// console.log(findElement);

// console.log(arr2[-1]);

let a=24
let b=25;
let swap=[a,b]=[b,a];
console.log(swap);

// let obj={one:1,two:2}
// let clonobj=[...obj]
// console.log(clonobj);


// Remove dupalicat value
function RemovElement(...arr){
    let arr1=arr;
    let count=0;
    arr1.sort((a,b)=>a-b)
    let item=34
    for(let i=0; i<=arr1.length-1;i++){
        if(arr1[i]===item){
            count=count+1;
            let index=arr1.indexOf(arr1[i])
            arr1.splice(index,count)
        }

    }
    return `${arr1} and ${count}`;
}
console.log(RemovElement(2,34,6,34,382,39,34,28,34,34));
// let arr1=[52,37,28,39,389]

// remove dupalicate value from..............array

// function removeItemBYfilter(...arr){
//     let arr1=arr;
//     return arr1.filter((item,index)=>arr1.indexOf(item)===index)
// }
// console.log(removeItemBYfilter(2,34,6,34,382,39,34,28,34));


// function removeItemBYset(...arr){
// let arr1=arr;
// return [...new Set(arr1)]
// }
// console.log(removeItemBYset(2,34,6,34,382,39,34,28,34));

let arr1=[29,37,28,36,48,20];
for(let key in arr1){
    console.log(`${key} and ${arr1[key]}`);
}
for(let item of arr1){
    console.log(item);
}