// Multi dimantion array....
// let array2D=[[2,3,4],[4,2,3]]
// console.log(array2D);
// for(let item of array2D){
//     console.log(item);
// }
// let arr1=[2,3,49]
// array2D.push(arr1);
// console.log(array2D);

// let email;
// let password;
// let Containerdata=[];
// let personData={};
// let Submit=document.getElementById("Submit")
// // Submit.addEventListener("click",SubmitData);
// let form=document.getElementById("fomeData");
// let openSubmit=document.getElementById("open");
// let count=0;
// let totalForm=document.getElementById("totalForm")
// let eventClick=0
// function SubmitData(event) {
//     count=0
//     count++;
//     event.preventDefault();
//      email=document.getElementById("email").value;
//      password=document.getElementById("Password1").value;
//      if(email=="" || email==null || password=="" || password==null){
//         eventClick++
//         openSubmit.style.display="block"
//         openSubmit.innerHTML=`<h1 class="text-danger">place fill valid Details:</h1>`;
//         console.log(event);
        
//      }else{
//         personData={
//             personEmail:email,
//             personPassword:password
//         };
//         Containerdata.push(personData)
//         openSubmit.style.display="block";
//         totalForm.innerText=`${count}`
//      }
    
//     form.reset();
//    return  addItem(Containerdata,personData)
   
// }
// // console.log(Containerdata);

// function addItem(data,personData){
// let everyData=data;
// let liData=personData
// let ul=document.getElementById("ul");
// let li=document.getElementById("li");
// let LItext=document.createElement("LI");
// LItext.innerText=`${personData.personEmail} and ${personData.personPassword}`;
// ul.append(LItext)
// console.log(everyData);

// }

// Question 1
// function currentTime(){
//     let output=document.getElementById("currentTimeOutput");
//     let currentDate=new Date
//     console.log("gaskjdg",currentDate);
//     // console.log("sgsjgj");
//     let dayArr=["Sunday","Monday","Tusday","Wednesday","Thusday","Friday","Saturday"]
//     let current_day=currentDate.getDay();
//     let displayDay=dayArr[current_day];
//     time=currentDate.toLocaleTimeString().toUpperCase();
//     let status=time.slice(time.length-2,time.length);
//     let TimeD=time.slice(0,time.length-3);
//     let TimeDReplace=TimeD.replaceAll(":"," : ")
//     let timeStatus=TimeDReplace.replace(":",`${status} :`)
//     setInterval(()=>{
//         output.innerHTML=`<span>Today is: ${displayDay}</span> <br> <span>Current time is : ${timeStatus}</span>`
//     },1000)
    
// }

// // questiopn2
// function printWindo(){
//     let outputWindo=document.getElementById("outputWindo");
//     let currentWindo=window.print();
//     outputWindo.innerHTML=`<h3> Current windo: <span class="text-warning">${currentWindo}</span></h3>`
// }

// Question 3
// function currentDate(){
// let outputDate=document.getElementById("outputDate");
// let currentDate=new Date
// let date=currentDate.getDate();
// let month=currentDate.getMonth();
// let year=currentDate.getFullYear();
// console.log(year);
// if(date<10 || month.length<10){debugger
//     date="0"+date
//     month="0"+`${month}`
// }else{
//     date=date;
//     month=month;
// }
// outputDate.innerHTML=`<span>mm-dd-yyyy : ${month}-${date}-${year}, mm/dd/yyyy : ${month}/${date}/${year} or dd-mm-yyyy: ${date}-${month}-${year}, dd/mm/yyyy: ${date}-${month}-${year}</span>`;
// // console.log(`dd/mm/yyyy: ${date}-${month}-${year}`);
// }

// function areaTringal(){
//     let outputTrangal=document.getElementById("outputTrangal");
//     let fomeTringale=document.getElementsByClassName("fomeTringale")[0];
//     if(fomeTringale.style.display=="none"){
//         fomeTringale.style.display="block"
//     }
//     else{
//         fomeTringale.style.display="none"
//     }
//     let area=document.getElementById("area");
//     area.addEventListener("click",((event)=>{
//         event.preventDefault();
//         let side1=document.getElementById("side1").value;
//         let side2=document.getElementById("side2").value;
//         let side3=document.getElementById("side3").value;
//         let areaOut=document.getElementById("areaOut");
//         side1=+side1;
//         side2=+side2;
//         side3=+side3;
//         let s=(side1+side2+side3)/2;
//         let numS=s*((s-side1)*(s-side2)*(s-side3))
//         let solution=Math.sqrt(numS)
//         // let solution=Math.sqrt();
//         areaOut.innerText=`Area of tringale: ${solution}`
//         // alert(`side1:${side1},side2:${side2},side3:${side3}, ${typeof(side1)},: solution :${solution},${s},numS:${numS}`)
//     }));
// }


// rotateString

function rotateString(event){
    event.preventDefault();
   let outputString=document.getElementById("outputString");
   outputString.innerText="w3resource";
   let textnode=outputString.childNodes[0]
//    console.log(textnode);
//    console.log("singal node:",textnode[0]);
// //    console.log("singal node:textContent",textnode[0].);
//    console.log("singal node: Data :: ",textnode[0].data);
   let dataNode=textnode[0];
//    alert(textnode);
   setInterval(()=>{
    dataNode=dataNode[dataNode.lenth-1]+dataNode.substring(0,dataNode.lenth-1);
    textnode.data=dataNode;
   },100);

//    if(outputString.style.display=="none"){
//     outputString.style.display="block";
    // setInterval(()=>{
    //     let text=outputString.innerText="w3resource";
    //     let arrayText=text.split("");
    //     for (let index = 0; index < arrayText.length-1; index++) {
    //         // const element = array[index];
    //         arrayText.push(arrayText[index])
    //     }

    // },1000)
//    }
//    else{
//     outputString.style.display="none"
//    }
}