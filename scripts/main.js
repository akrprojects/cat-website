const myHeading = document.querySelector("h1");
myHeading.textContent = "Cat world!";

// conditionals code below

let iceCream = "chocolate";
if (iceCream === "chocolate"){
    alert("Yay! I love chocolate ice-cream");
} else{
    alert("Awww, but chocolate is my favorite...");
}       

// Event

// document.querySelector("html").addEventListener("click" , () => {
//     alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cute-cat.jpg"){
        myImage.setAttribute("src", "images/scottishFold.jpg");
    } else{
        myImage.setAttribute("src", "images/cute-cat.jpg");
    }
};

//Functions
// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result;
// }

// console.log(multiply(0,4));
