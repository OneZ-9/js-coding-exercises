const btnEl = document.querySelector(".btn");
const h1El = document.querySelector(".output");
// console.log(btnEl);

// with array operations
function reverseString(str) {
  //   const splittedStr = str.split("");
  //   const reversedStr = splittedStr.reverse().join("");
  //   console.log(`Reversed ${str} is ${reversedStr}`);

  const reversedStr = str.slice().split("").reverse().join("");
  return reversedStr;
}

const handleClick = () => {
  const str = prompt("Enter string to reverse");

  h1El.textContent = reverseString(str);
};

btnEl.addEventListener("click", handleClick);
