const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        const delButton = document.createElement("button");

        li.textContent = input.value;
        delButton.textContent = "❌";

        li.append(delButton);
        list.append(li);

        input.value = "";
        input.focus();
    } else {
        input.focus();
    }
});

list.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        input.focus();
    }
});
