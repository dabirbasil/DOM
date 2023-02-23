var container = document.querySelector(".container");
var modalContain = document.querySelector(".modal-container");
var modalX = document.querySelector(".modal-cross");
var modalBtn = document.querySelector("#modalBtn");
var modalScore = document.querySelector(".percentage");
var Box = document.querySelectorAll(".box");
var shipLoc = 0;
var shipNum = Box.length;
var shipNos = [];
var heading = document.querySelector(".Game-Identifier");
var num;
var Try = 0;
var fallBack = length.shipNos;
var Result;
let son;
var colorBtn = document.querySelector(".color-btn")
var color = colorBtn.value

document.body.style.setProperty('--accent', color);

colorBtn.addEventListener("input",(e)=>{
 
  
document.body.style.setProperty('--accent', e.target.value);
})

console.log(color,"color");
// var newImg = document.createElement('img')

let darkMode = localStorage.getItem("darkMode");
const darkBtn = document.querySelector("#darkBtn");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", true);
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", false);
};

if (darkMode == "true") {
  enableDarkMode();
} else {
  disableDarkMode();
}

fetch("cordinates.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    var randomNum = Math.floor(Math.random() * 9 + 1);

    console.log(randomNum);

    Box.forEach((box, index) => {
      let boxId = box.dataset.box;

      if (json["points" + randomNum].includes(boxId)) {
        box.style.backgroundColor = "green";
        var newImg = document.createElement("img");

        newImg.setAttribute(
          "src",
          "https://www.pngitem.com/pimgs/b/620-6201468_navy-ship-png.png"
        );
        newImg.setAttribute("width", "100%");
        newImg.setAttribute("animation", "rotation");
        newImg.setAttribute("draggable", "false");
        newImg.classList.add("rotation");
        box.appendChild(newImg);
      } else {
        box.style.backgroundColor = "red";
        var newImg = document.createElement("img");

        newImg.setAttribute(
          "src",
          "https://www.pngfind.com/pngs/b/90-905672_close-icon-png.png"
        );
        newImg.setAttribute("width", "70%");
        newImg.setAttribute("draggable", "false");
        box.appendChild(newImg);
      }
    });
  });

console.log(darkMode);

darkBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode == "true") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

console.log(darkBtn);

var random;
while (shipNos.length < 8) {
  random = Math.floor(Math.random() * 20 + 1);
  while (shipNos.indexOf(random) > -1) {
    random = Math.floor(Math.random() * 20 + 1);
  }
  shipNos.push(random);
}

Box.forEach((box, index) => {
  box.addEventListener("click", (elem) => {
    console.log("hello");

    // fallBack++;

    if (box.style.opacity != 1 && box.style.backgroundColor == "red") {
      Try++;
      heading.innerHTML = "It's a Miss";
    }

    if (box.style.opacity != 1 && box.style.backgroundColor == "green") {
      Try++;
      shipLoc++;
      heading.innerHTML = "It's a hit!";
      if (shipLoc === 9) {
        heading.innerHTML = "You won in " + Try + "tries";
        modalContain.style.display = "flex";
        let score = (shipLoc / Try) * 100;
        
        score = parseInt(score);
        
        modalScore.innerHTML = score + "%" + " Percent Accuracy";
      }
    }

    console.log(Try);
    box.style.opacity = 1;
  });
});

modalX.addEventListener("click", (elem) => {
  modalContain.style.display = "none";

  console.log("hello");
});

modalBtn.addEventListener("click", (elem) => {
  modalContain.style.display = "none";

  console.log("hello");
});

console.log("shipNos record", shipNos);

console.log("No of Boxes:", shipNum);

console.log(shipLoc);
