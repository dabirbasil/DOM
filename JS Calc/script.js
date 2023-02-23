var valc = document.querySelector(".calc-val");
var calcBtns = document.querySelectorAll(".calc-btn");
var equa = document.querySelector("#equal");
var adder = document.querySelector("#addition");
var calcValues = [];
var equalPressed = false;

calcBtns.forEach(function (calcBtn) {
  calcBtn.addEventListener("click", function () {
    if (equalPressed) {
      calcValues = [];
      valc.innerHTML = '';
    }

    valc.innerHTML += calcBtn.innerHTML;

    // calcValues += parseInt(calcBtn.innerHTML);
    calcValues.push(calcBtn.innerHTML);
    equalPressed = false;

    console.log(calcBtn.innerHTML);
    console.table(calcValues, "This is Calculator Value");
  });
});

console.log(equal);

adder.addEventListener("click", function () {});

equa.addEventListener("click", function () {
  equalPressed = true;
  console.log(calcValues, calcValues.join(""));

  let result = eval(calcValues.join(""));
 
  console.table(result, "This is Calculator Value");
  valc.innerHTML = result;
});
