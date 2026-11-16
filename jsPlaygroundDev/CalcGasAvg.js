
  let __loopProtection = true;

  function disableLoopProtection() {
    __loopProtection = false;
  }

  const __loopProtector = (function () {
    const maxIterationsOverall = 1_000_000;

    let counter = 0;

    return function () {
      if (__loopProtection) {
        if (counter > maxIterationsOverall) {
          throw new Error('Infinite loop detected. You can deactivate this check by adding the following to the top of your code: disableLoopProtection();');
        }
        counter++;
      }
    }
  })()
//mathew gachanja 11/15
let total = 0;
let frstWk = 0;
let avg;
let cr = 0;
let cnt = 0;
let username = prompt("Enter your name");
if (username == null) {
  alert(`You cancelled the name prompt`);
} else {
  username.trim();
}
function CalcGasAvg() {
  while (cr !== -1) {
    cr = parseFloat(prompt(`${total}`));
    total = cr + total;
    cnt++;
    __loopProtector();
  }
}
CalcGasAvg();
if (cnt > 0) {
  avg = total / cnt;
} else {
  avg = 0;
}
alert(`${username}'s average weekly gas bill is $${avg.toFixed(2)}`);
alert(`You entered ${cnt} gas totals.`);
