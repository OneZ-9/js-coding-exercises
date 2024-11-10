const btnEl = document.querySelector(".btn");
const h1El = document.querySelector(".output");

const convertTitleCase = (title) => {
  const capitalize = (word) => {
    return word.at(0).toUpperCase() + word.slice(1);
  };

  const exceptions = [
    "a",
    "is",
    "an",
    "and",
    "the",
    "but",
    "or",
    "on",
    "of",
    "in",
    "with",
  ];

  const convertedTitle = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(convertedTitle);
};

const handleClick = () => {
  const title = prompt("Enter your title to capitalize");

  h1El.textContent = convertTitleCase(title);
};

btnEl.addEventListener("click", handleClick);

// console.log(convertTitleCase("and this is a nice title"));
// console.log(convertTitleCase("Don't do it!"));
// console.log(convertTitleCase("This is a LONG title, and not TOO Long!"));
