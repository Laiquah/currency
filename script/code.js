const input = document.querySelector("#input");
const option1 = document.querySelector("#select1");
const option2 = document.querySelector("#select2");
const result = document.querySelector("#result");
const convert = document.querySelector("#btn");

convert.addEventListener("click", () => {
  if (option1.value === "USD" && option2.value === "ZAR") {
    result.innerHTML = ''
    let methodForRands = input.value * 19.51;
    let newMethodForRands = methodForRands.toFixed(2);
    result.innerHTML += `R${newMethodForRands}`;
  } else if (option1.value === "ZAR" && option2.value === "USD") {
    result.innerHTML = ''
    let methodForDollars = input.value * 0.051;
    let newMethodForDollars = methodForDollars.toFixed(2);
    result.innerHTML += `$${newMethodForDollars}`;
  } else if (
    option1.value === "" ||
    option2.value === "" ||
    (option1.value && option2.value === "")
  ) {
    result.innerHTML = ''
    alert("PLEASE SELECT BOTHHH");
  } else if (option1.value === "ZAR" && option2.value === "ZAR") {
    result.innerHTML = ''
    result.innerHTML += input.value;
  } else if (option1.value === "USD" && option2.value === "USD") {
    result.innerHTML = ''
    result.innerHTML += input.value;
  }
});
