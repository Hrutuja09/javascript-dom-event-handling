//head
var title = document.createElement("title")
title.innerText = "JSCoaching"

document.querySelector("head").append(title)

//button
var btn = document.createElement("button");
btn.style.color = "black";
btn.innerText="Click Me"
btn.style.fontSize="25px"
btn.style.height="50px"
btn.style.width="130px"

//div
var div = document.createElement("div");
div.style.color = "black";
div.style.backgroundColor="aquamarine";
div.style.height="550px"
div.style.width="300px"


//para1
var p = document.createElement("p")
p.innerHTML="<b>Hello Coders!</b>"
p.style.padding="5px"
p.style.fontSize="40px"
p.style.margin="25px"

// image
var img = document.createElement("img")
img.src="Room_5.jpeg"

//para2
var para2 = document.createElement("p")
para2.innerText = "Below is your sitting area."
para2.style.fontSize="25px"
para2.style.margin="15px"
para2.style.backgroundColor="white"

var divv = document.querySelector("body");
divv.append(div);

//ul
var ul=document.createElement("ul")

//para
var para3 = document.createElement('p')
para3.innerText = "Topic for Today`s Session:"
para3.style.fontSize="25px"
para3.style.margin="15px"

var btnn = document.querySelector("div");
btnn.after(btn);
btnn.append(p)
btnn.append(para2)
btnn.append(img)
btnn.append(para3)
btnn.append(ul)


//list
values = [
    "DataTypes and Variables.",
    "Loops and Functions.",
    "Arrays.",
    "DOM-part1",
    "DOM-part2",
    "Events",
    "Api Calls"
];
var ull = document.querySelector("ul")
for(i=0;i<values.length;i++){
    var li = document.createElement("li")
    li.innerText = values[i]
    li.style.fontSize = "20px"
    para3.style.margin="3px"
    ull.append(li)
}

//heading
var h1 = document.createElement("h1");
h1.innerHTML = "<i>Welcome to JavaScript Practice Session!</i>"

divv.before(h1);


//event handling
btn.addEventListener("click", ()=>{
    console.log("Button clicked!")
    alert("Loading your form!")
})