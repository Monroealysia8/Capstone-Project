"use strict";



const button = document.getElementById("startButton");
const output = document.getElementById("output")
button.addEventListener("click", clickHandler);

function clickHandler() {
  output.innerHTML = `<p>Take a look at my repositories!</p>`;
  button.style.display = "none";
}





const btns = document.querySelectorAll(".btn");
const learnMore = [
  "JavaScript: I love its versatility and how it brings interactivity to the web.",
  "CSS: Styling websites is like painting a canvas—it's creative and fun.",
  "Bootstrap: I enjoy how it speeds up development and ensures responsive designs.",
  "HTML: It's the foundation of the web, and I enjoy creating clean, semantic markup.",
];
btns.forEach((btn,i)=>{
    btn.addEventListener("click", ()=>{
        btn.innerHTML=`<p>
        ${learnMore[i]}</p>`
        btn.classList.remove("btn");
        btn.style.color = "#3193aee8";
        btn.classList.add("text-decoration-none");
        btn.classList.remove("btn-success");
    })
})