const input2=document.querySelector("#inputbox");
const input1=document.querySelector("#date");
const button=document.querySelector("button");
const tasks=document.querySelector(".tasks");
button.addEventListener("click",()=>{
    if(input2.value=='' || input1.value==''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input1.value+":"+input2.value;
        tasks.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="X";
        li.appendChild(span);
    }
    input2.value='';
    input1.value='';
},false);

tasks.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);