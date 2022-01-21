var key = document.querySelector("#key");
var code = document.querySelector("#code");

document.addEventListener("keypress", function (e) {
  //   $("#key").slidToggle();
  key.textContent = e.key;
  code.textContent = e.charCode;
});
