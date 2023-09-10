const form = document.querySelector("#form1");
const input = document.querySelector("#input1");
// console.log(form);
// console.log(input);

const list = document.querySelector(".list");
// console.log(list);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // alert("submitted");
const name = input.value;
  createHarid(name);
  input.value = "";
  input.focus;
  
  });
function createHarid(a) {
  // console.log(a);
  const newHTML = ` <li style="margin:10px">${a}<button onclick="deleteHarid(this)">delete</button></li>`;
  list.insertAdjacentHTML('beforeend', newHTML);
}

function deleteHarid(ele) {
  // console.log(ele.parentElement.remove)
  ele.parentElement.remove();
}