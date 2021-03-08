const dodger = document.getElementById("dodger"); 
undefined
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

  function moveDodgerRight() {
    const newPosition = dodger.style.left.replace("px", "");
    const left = parseInt(newPosition, 10);

  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  } 


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 