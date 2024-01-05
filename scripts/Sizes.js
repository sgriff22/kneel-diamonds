import { setSizeChoice } from "./TransientState.js";

const handleSizeChoice = (event) => {
  if (event.target.name === "size") {
    setSizeChoice(parseInt(event.target.value));
  }
};

export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  document.addEventListener("change", handleSizeChoice);

  let optionsHTML = "";

  const divStringArray = sizes.map((size) => {
    return `<div>
            <input type='radio' name='size' value='${size.id}'/> ${size.carets}
        </div>`;
  });
  optionsHTML += divStringArray.join("");

  return optionsHTML;
};
