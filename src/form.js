import { db, auth } from "./index";

let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Enviando...");
});
