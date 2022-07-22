const buttons=document.querySelectorAll(".operand");
const operators=document.querySelectorAll('.operator');
const result=document.querySelector('.red');
const equation = document.querySelector(".equation");
const sol=document.querySelector(".sol");
const reset=document.querySelector(".clear");
const del=document.querySelector(".back");
let eqn="";
let operator="";
let prev='';

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
         eqn=btn.dataset.number;
         equation.innerText+=eqn;
         prev="operand";
         calculate(equation.innerText)
})})
operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        if(prev==="operand"){
        prev="operator";
        operator=op.dataset.number;
        equation.innerText+=operator;

    }
    else{
        return;
    }

    })
})
result.addEventListener("click",()=>{
    equation.innerText=sol.innerText;
})

reset.addEventListener("click",()=>{
    eqn="";
    operator="";
    prev="";
    sol.innerText="";
    equation.innerText="";
})

del.addEventListener("click",()=>{
    equation.innerText=equation.innerText.slice(0,equation.innerText.length-1);
    if(equation.innerText==""){
        sol.innerText=""
    }else{
    calculate(equation.innerText)
    }
})
function calculate(eqn){  
        sol.innerText=eval(eqn);
}

const radio1=document.querySelector("#theme1")
const radio2=document.querySelector("#theme2")
const radio3=document.querySelector("#theme3")
const html=document.querySelector("html");
radio2.addEventListener("click",()=>{
    html.classList.add("theme2");
    html.classList.remove("theme3");
    radio1.checked=false;
    radio3.checked=false;
})

radio3.addEventListener("click",()=>{
    html.classList.add("theme3")
    html.classList.remove("theme2");
    radio1.checked=false;
    radio2.checked=false;
})

radio1.addEventListener("click",()=>{
    html.classList.remove("theme2")
    html.classList.remove("theme3")
    radio2.checked=false;
    radio3.checked=false;
})