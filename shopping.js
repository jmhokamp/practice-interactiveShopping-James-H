//Get the Elements from HTML
const addButton = document.getElementById(`addButton`);
const itemButton = document.getElementById(`itemButton`);
const shoppingList = document.getElementById(`shoppingList`);

//Create Elements and Add items to the list 
addButton.addEventListener("click", () => {
      const userText = itemInput.value.trim(); //get the items and remove extra space
  if (userText) {
    const li = document.createElement("li"); //create list

    const span = document.createElement("span"); //display the text
    span.textContent = userText;

    const editBtn = document.createElement("button"); //Adds Edit Button
    editBtn.textContent = "Edit";

    const removeBtn = document.createElement("button"); //Adds remove button
    removeBtn.textContent = "Remove";

    // Edit button logic to save
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

    // Remove button added
    removeBtn.addEventListener("click", () => {
      li.remove();
    });
    //Add them to the page
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    shoppingList.appendChild(li);

    itemInput.value = ""; // clear input field
  }
});