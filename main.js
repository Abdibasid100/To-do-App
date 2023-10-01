let inputBox = document.querySelector(".input-box");
let listContainer = document.querySelector(".listContainer");
let btn = document.querySelector(".btn");

// function Addtask() {
//   if (inputBox.value === "") {
//     alert("You must write something");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendchild(li);
//   }
//   inputBox.value = "";
// }

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputBox.value == "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savData();
    }
  },
  false
);

function savData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showtask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
