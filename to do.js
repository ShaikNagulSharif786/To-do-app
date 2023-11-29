let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.append(item);
    inp.value="";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    
});