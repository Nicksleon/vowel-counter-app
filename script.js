const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
  const wordInput = input.value;
  const countVowels = (item) =>
    Array.from(item).filter((letter) => "aeiouAEIOU".includes(letter)).length;
  alert("Has " + countVowels(wordInput) + " vowels.");
});
