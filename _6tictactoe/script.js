var color;
var box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
box[i].addEventListener("click", function() {
  if (this.classList.contains("white")) {
    this.classList.remove("white");
    this.classList.add("green");
  } else if (this.classList.contains("green")) {
    this.classList.remove("green");
    this.classList.add("red");
  } else {
    this.classList.remove("red");
    this.classList.add("white");
  }
});
}
