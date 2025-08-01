function count() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}
let fnc = count();
fnc();
fnc();
fnc();

console.log("--------------------")

let func2 = count();
func2();
func2();
func2();
func2();
