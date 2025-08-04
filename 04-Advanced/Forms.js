let nme = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (nme.value.length <= 2) {
    document.getElementById("hide").style.display = "initial";
  }
});
