function sortAlphabet(str) {
  return [...str].sort((a, b) => a.localeCompare(b)).join("");
}
console.log((sortAlphabet("Hello")))