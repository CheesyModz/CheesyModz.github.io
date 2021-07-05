// function pressButton(answer) {
//     if (answer == 1) document.getElementById("getImage").src  = "images/ganyu.jpg"
//     else document.getElementById("getImage").src = "images/miku.png"
// }

let img = document.querySelector("img");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", () => {
    img.src = "images/ganyu.jpg";
})


btn2.addEventListener("click", () => {
    img.src = "images/miku.png";
})


