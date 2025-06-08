let num=document.querySelector("input");
let output=document.querySelector("span");
let btn=document.querySelector("#btn");



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let x=0;
    let rev=0;
    while(num.value!=0){
        x=num.value%10;
        rev=(rev*10)+x;
        num.value=Math.floor(num.value/10);
    }
    console.log(rev);
    output.innerText=" "+rev;
})