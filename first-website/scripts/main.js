const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc == "images/boston_skyline.jpg") {
    myImage.setAttribute("src", "images/boston_skyline_day.jpg");
  } else {
    myImage.setAttribute("src", "images/boston_skyline.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Boston, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Boston, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

