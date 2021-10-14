console.log ("Running..")


//Variables
let completedCount = 0;
const InputArray = [];


//HTML-element
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const lable = document.querySelector("p");



                     //Function for button.
button.addEventListener("click", 
function(){
const text = input.value;
InputArray.push(text);

let item = document.createElement("li");
list.appendChild(item);

const itemLabel = document.createElement("span");
itemLabel.innerHTML = text;
item.appendChild(itemLabel);



//verifys input.
if(text.length == 0) {
    document.querySelector("small").innerHTML = "Write something first!";
    return;
}
else {
    document.querySelector("small").innerHTML = "";
    
}



//click on list
itemLabel.addEventListener("click", 
function(){ 

    if(item.getAttribute("class") == "completed"){
        item.setAttribute("class", "");
        completedCount--;
    
    }
    else{
        item.setAttribute("class", "completed");
        completedCount++;
    }
    lable.innerText = `${completedCount} completed`;
},false);


//Declarations for trashcan
const trashcan = document.createElement("span");
trashcan.innerHTML = "&#x1F5D1";
trashcan.setAttribute("class", "trashcan");
item.appendChild(trashcan);


//Function for trashcan
trashcan.addEventListener("click", (completed) => {
    
    item.remove();
    

},false);

input.value = "";
},false);
