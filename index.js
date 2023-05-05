

// para.innerText="viajya"
// span.innerText="descr"

// console.log(tasktag)
const btn=document.getElementById("addbtn");
console.log(btn);
const title=document.getElementById("title");
const description=document.getElementById("Description");
const taskarr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

showingres();

// const  getData=()=>{
   
//     // localStorage.setItem("des",   description.value);
//     span.innerText=description.value;
//     taskarr.push()    
  
//     // localStorage.setItem("key",)
    

// }

function showingres(){
    taskarr.forEach((val,index)=>{
        const tasktag=document.createElement("div");
        const subtag=document.createElement("div");
        tasktag.setAttribute("class","task")
        subtag.setAttribute("class","subtask");
        console.log(tasktag);
        const para=document.createElement("p");
        subtag.append(para);
       const span=document.createElement("span");
       subtag.append(span);
       tasktag.append(subtag)
       document.querySelector(".container").append(tasktag);
       const button=document.createElement("button");
        button.setAttribute("id","deleteBtn");

button.innerText="-"
button.addEventListener("click",()=>{
    removetask();
    taskarr.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(taskarr));
    console.log(taskarr)
    showingres();
})
       
// document.querySelector(".task").append("button")
        tasktag.append(button);
        para.innerText=val.title;
        span.innerText=val.description;

    })
}
function removetask(){
    taskarr.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    })
    

}
btn.addEventListener("click",(e)=>{
    removetask();
    e.preventDefault();
    taskarr.push({
        title:title.value,
        description:description.value
    })
    localStorage.setItem("tasks",JSON.stringify(taskarr));
    
    console.log(taskarr);
    showingres();
});



// function delettask(){
//     const btn=document.getElementById("deleteBtn");

// }




// span.innerText=localStorage.getItem("des");

