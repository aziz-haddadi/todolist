const input=document.getElementById("inputbox");
const button=document.querySelector("button");
const tasks=document.querySelector(".tasks");
button.addEventListener("click",()=>{
    if(input.value==''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        tasks.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="X";
        li.appendChild(span);
    }
    input.value='';
},false);

tasks.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);