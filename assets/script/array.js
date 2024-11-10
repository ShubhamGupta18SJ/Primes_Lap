// let cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03').toLocaleString(),
//       "capacity": 5
//     },
//     {
//       "color": "blue",
//       "type": "station wagon",
//       "registration": new Date('2013-03-03'),
//       "capacity": 6
//     },
//     {
//         "color": "red",
//         "type": "station wagon",
//         "registration": new Date('2018-03-03'),
//         "capacity": 4
//       },
//   ]


// let newCar=cars
//   let car1={
//     "color": "green",
//     "type": "station wagon",
//     "registration": new Date('2018-03-03'),
//     "capacity": 7
//   }
//   cars.shift(car1)

// console.log("cars",cars);
// console.log("new cars",newCar);

// let RedCar=cars.filter((car)=>{
//     return car.color=="red" && car.capacity>4
//   });
//   console.log(RedCar);


  // find maximum value in array
function tackArray(...arr){
  let arr1=arr;
  let value=0
  arr1.sort((a,b)=>a-b)
  for(let i=0;i<=arr1.length-1;i++){
    if(arr1[i]<arr1[i+1]){
      value=arr1[i+1]
    }
  }
return value
}
let valu=tackArray(2,36,29,27,19,20,37);
console.log("max value:",valu);


function tackArray(...arr){
  let arr1=arr;
  let value=0
  arr1.sort((a,b)=>a-b)
  for(let i=0;i<=arr1.length-1;i++){
    if(arr1[i]<arr1[i+1]){
      value=arr1[i+1]
    }
  }
return value
}
let value=tackArray(2,36,203,29,27,19,20,37,89);
console.log("max value",value);


// find miniumam valu in arry find minimum value:

function minValue(...arr){
  let arr1=arr;
  let value=0;
  arr1.sort((a,b)=>b-a)
  for(let i=0;i<=arr1.length-1;i++){
    if(arr1[i]>arr1[i+1]){
      value=arr1[i+1]
    }
  }
return value;
}
let minvalu1=minValue(2,36,29,27,19,20,37);
console.log("min value:",minvalu1);
let minvalue1=minValue(1,36,203,29,27,19,20,37,89);
console.log("min value:",minvalue1);

// filter evenNumber:

function evenNumber(...arr){
let arr1=arr;
let values=[];
for(let i =0; i<=arr1.length-1; i++){
  if(arr1[i]%2===0){
    values.push(arr1[i])
  }
}
return values;
}
let even1=evenNumber(2,36,29,27,19,20,37);
console.log("even1 value:",even1);
let even2=evenNumber(1,36,203,29,27,19,20,37,89);
console.log("even2 value:",even2);

// function to delete 
// function 
let array5=[3,46,38,39,20,39];
console.log(array5.toSpliced(2,1,68.09));
console.log(array5);
let array6=[3,46,38,39,20,39];
// let newarr=array6.sli;
// console.log(newarr);
console.log(array6.splice(3,1,60.2));
console.log(array6);

// function to reverse arrray:
let array7=[5,38,29,92,38,10,29,37];
function reverseArray(...arr){
  let arr1=arr;
  let valu=[]
  for(let i=arr1.length-1;i>=0;i--){
    if(arr1[i]){
      valu.push(arr1[i])
    }
  }
return valu
}
console.log(reverseArray(5,38,29,92,38,10,29,37));
let joinStr=array6.join()
console.log(typeof(joinStr));
console.log(array6.toString());


// Function Every in array by-default method... in array in js

function arrayEvery(...arr){
let arr1=arr;
let Evervalue=arr1.every((value,index,arr)=>{
if(value>18){
return `value ${value}, index ${index}, array ${arr}`;
}
})
return Evervalue
}
console.log(arrayEvery(5,38,29,92,38,10,29,18,37));

console.log(this);

// Modifiy a arrray on spicipfic index  withthe help of index

function MapFunction(...arr){
  let arr1=arr;
  let values=[];
  i=3
  values=arr1.map((valu,index,arr1)=>{
    if(index===i){
      return valu=valu*2;
    }
    else{
      return `${valu} and ${arr1}`
    }
    // return valu=valu*2

  })
  return values
}
console.log(MapFunction(5,38,29,92,38,10,29,18,37));
console.log(Array.isArray(array7));
