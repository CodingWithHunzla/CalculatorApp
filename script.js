const buttons = document.querySelectorAll(".btn");
let display = document.querySelector("#display");
let string = "";

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.value == "=") {
      try {
        string = eval(string);
        display.value = string;
      } catch {
        string = "error";
        display.value = string;
      }
    } else if (e.target.value == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.value == "DE") {
      string = string.slice(0, -1);
      display.value = string;
    } else {
      string += e.target.value;
      display.value = string;
    }
  });
});
