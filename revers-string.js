const btnEl = document.querySelector(".btn");
const h1El = document.querySelector(".output");

// with array operations
/*
function reverseString(str) {
  const reversedStr = str.slice().split("").reverse().join("");

  return reversedStr;
}*/

// without array methods, only for loop
function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const handleClick = () => {
  const str = prompt("Enter string to reverse");

  h1El.textContent = `Reversed '${str}' to '${reverseString(str)}'`;
};

btnEl.addEventListener("click", handleClick);
