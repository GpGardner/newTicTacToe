var box = document.querySelectorAll(".box");
var part1 = document.querySelector(".part1");
var part2 = document.querySelector(".part2");
var part3 = document.querySelector(".part3");
var part4 = document.querySelector(".part4");
var part5 = document.querySelector(".part5");
var part6 = document.querySelector(".part6");
var part7 = document.querySelector(".part7");
var part8 = document.querySelector(".part8");
var part9 = document.querySelector(".part9");
var button = document.querySelector(".test");




//TODO : ADD WIN LOOP THAT STOPS AND RESETS -- PARTIALLY DONE
//       KEEP SCORE p1 and p2
//       ADD X's and O's
//       BEAUTIFY
//       REFACTOR
//       ADD ABILITY TO CHOOSE COLOR OF EACH PLAYER?


// Color Picker Game Loop

  for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function() {
    if (this.classList.contains("white")) {
      this.classList.remove("white");
      this.classList.add("green");
    } else if (this.classList.contains("green")) {
      this.classList.remove("green");
      this.classList.add("red");
    } else if(this.classList.contains("red")) {
      this.classList.remove("red");
      this.classList.add("white");
    }
  });
  }



// red win conditions

document.addEventListener("click", function() {
if (part1.classList.contains("red") && part4.classList.contains("red") && part7.classList.contains("red")) {
  console.log("youwin");
  alert("game over");  
  } if (part1.classList.contains("red") && part2.classList.contains("red") && part3.classList.contains("red")) {
    console.log("youwin");

    } if (part1.classList.contains("red") && part5.classList.contains("red") && part9.classList.contains("red")) {
      console.log("youwin");
      } if (part4.classList.contains("red") && part5.classList.contains("red") && part6.classList.contains("red")) {
        console.log("youwin");
        } if (part7.classList.contains("red") && part8.classList.contains("red") && part9.classList.contains("red")) {
          console.log("youwin");
          } if (part2.classList.contains("red") && part5.classList.contains("red") && part8.classList.contains("red")) {
            console.log("youwin");
            } if (part3.classList.contains("red") && part6.classList.contains("red") && part9.classList.contains("red")) {
              console.log("youwin");
              }  if (part3.classList.contains("red") && part5.classList.contains("red") && part7.classList.contains("red")) {
                console.log("youwin");
              }
              });

// green win conditions

document.addEventListener("click", function() {
  if (part1.classList.contains("green") && part4.classList.contains("green") && part7.classList.contains("green")) {
    console.log("youwin");
    } if (part1.classList.contains("green") && part2.classList.contains("green") && part3.classList.contains("green")) {
      console.log("youwin");
      } if (part1.classList.contains("green") && part5.classList.contains("green") && part9.classList.contains("green")) {
        console.log("youwin");
        } if (part4.classList.contains("green") && part5.classList.contains("green") && part6.classList.contains("green")) {
          console.log("youwin");
          } if (part7.classList.contains("green") && part8.classList.contains("green") && part9.classList.contains("green")) {
            console.log("youwin");
            } if (part2.classList.contains("green") && part5.classList.contains("green") && part8.classList.contains("green")) {
              console.log("youwin");
              } if (part3.classList.contains("green") && part6.classList.contains("green") && part9.classList.contains("green")) {
                console.log("youwin");
                }  if (part3.classList.contains("green") && part5.classList.contains("green") && part7.classList.contains("green")) {
                  console.log("youwin");
                }
                });


// RESET BUTTON (More specific later.)

button.addEventListener("click", function() {
  for (let i = 0; i < box.length; i++) {
    if (box[i].classList.contains("green")) {
      box[i].classList.remove("green");
      box[i].classList.add("white");
    }if (box[i].classList.contains("red")) {
      box[i].classList.remove("red");
      box[i].classList.add("white");
    }
  }
});