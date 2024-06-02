function generateNumber() {
  // generate a random integer(hint : Math.random)
   let num = Math.floor(Math.random()*100);
   return num ;
}

function checkOddEven(num) {
  // logic for even / odd
  if(num % 2==0){
    return "Even - The number is even" ;
  }else{
    return "Odd - The number is odd" ;
  }
}

window.onload = function () {
  // add event listeners to the button here
let btn = document.getElementById("generate-number");
let div1 = document.getElementById("number");
let div2 = document.getElementById("odd-even");
btn.addEventListener("click",()=>{
  let n = generate-number();
  div1.innerText = n;

  let x = checkOddEven(n)
  div2.innerText = x;
});
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
