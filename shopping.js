//Get the Elements from HTML
const addButton = document.getElementById(`addButton`);
const itemButton = document.getElementById(`itemButton`);
const shoppingList = document.getElementById(`shoppingList`);

//Add items to the list 
addButton.addEventListener("click", () => {
      const text = itemInput.value.trim();
  if (text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    // Edit button logic
    editBtn.addEventListener("click", () => {
      if (editBtn.textContent === "Edit") {
        const input = document.createElement("input");
        input.value = span.textContent;
        li.replaceChild(input, span);
        editBtn.textContent = "Save";
      } else {
        span.textContent = li.querySelector("input").value;
        li.replaceChild(span, li.querySelector("input"));
        editBtn.textContent = "Edit";
      }
    });

    // Remove button logic
    removeBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    shoppingList.appendChild(li);

    itemInput.value = ""; // clear input field
  }
});