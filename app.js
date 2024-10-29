let body=document.querySelector(".body");
let headin=document.querySelector(".head")
let button1=document.querySelector("#btnRed");
button1.addEventListener("click",()=>{
    body.style.backgroundColor="red";
    button1.style.backgroundColor="white";
    button1.style.color="red";
    headin.style.color="red";
    console.log("red btn was clicked");
})
let button2=document.querySelector("#btnYellow");
button2.addEventListener("click",()=>{
    body.style.backgroundColor="yellow";
    button2.style.backgroundColor="white";
    button2.style.color="yellow";
    headin.style.color="yellow";
    console.log("yellow btn was clicked");
})
let button3=document.querySelector("#btnGr");
button3.addEventListener("click",()=>{
    body.style.backgroundColor="green";
    button3.style.backgroundColor="white";
    button3.style.color="green";
    headin.style.color="green";
    console.log("green btn was clicked");
})
let button4=document.querySelector("#btnBlue");
button4.addEventListener("click",()=>{
    body.style.backgroundColor="blue";
    button4.style.backgroundColor="white";
    button4.style.color="blue";
    headin.style.color="blue";
    console.log("blue btn was clicked");
})
let reset=document.querySelector(".reset");
let button5=document.querySelector("#btnReset");
    button5.addEventListener("click",()=>{
        reset.click();
    })

    
