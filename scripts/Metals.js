import { setMetalChoice } from "./TransientState.js";

const handleMetalChoice = (event) => {
  if (event.target.name === "metal") {
    setMetalChoice(parseInt(event.target.value));
  }
};

export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  document.addEventListener("change", handleMetalChoice);

  let optionsHTML = "";

  // Use map() to generate new array of strings
  const divStringArray = metals.map((metal) => {
    return `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`;
  });

  // This function needs to return a single string, not an array of strings
  optionsHTML += divStringArray.join("");

  return optionsHTML;
};
