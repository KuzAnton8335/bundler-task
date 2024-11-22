import logoImg from "./assets/image.png";
import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
  const title = document.createElement("h1");
  title.textContent = "I love JavaScript";

  const logo = logoImg;
  const image = document.createElement("img");
  image.src = logo;

  document.body.append(title);
  document.body.append(image);
  console.log("Hello World!");
});
