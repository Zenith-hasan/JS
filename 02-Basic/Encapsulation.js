// Example of Encapsulation 

function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`Clicked ${click} Times!`);
    } else {
      console.error("Click Limit Exceeded!");
    }
  };
}

let getClick = clickLimiter();
getClick();
getClick();
getClick();
getClick();
getClick();