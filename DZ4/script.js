/* Задача №1

Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage */

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const wrapUsers = document.querySelector(".users");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

function objToString(obj) {
  let str = "";
  for (const [p, val] of Object.entries(obj)) {
    str += `${val}, `;
  }
  return str;
}
function div(element, ID) {
  wrapUsers.insertAdjacentHTML(
    "beforeend",
    `
      <div class="header__title row" id="${ID}">
        <h4 class="title__table"> ${element}</h4>
      </div>
    `
  );
}

try {
  const users = await getData(urlUsers);
  console.log(users);
  const usersKeys = Object.keys(users[0]);
  console.log(usersKeys);
  usersKeys.forEach((element) => {
    wrapUsers.insertAdjacentHTML(
      "beforeend",
      `
      <div class="header__title row">
        <h1 class="title__table"> ${element}</h1>
      </div>
    `
    );
  });
  wrapUsers.insertAdjacentHTML(
    "beforeend",
    `
      <div class="header__title row">
        <h1 class="title__table"> DEL</h1>
      </div>
      `
  );
  users.forEach((element, id) => {
    let rowUsers = Object.values(element);
    console.log(rowUsers);
    rowUsers.forEach((elementuser, index) => {
      if (index === 4) {
        div(elementuser.city, id);
      } else if (index === 7) {
        div(elementuser.name, id);
      } else {
        div(elementuser, id);
      }
    });
    wrapUsers.insertAdjacentHTML(
      "beforeend",
      `
      <div class=" row" id="${id}">
        <button class="button__del">X</button>
      </div>
      `
    );
    localStorage.setItem(element.id - 1, element.name);
  });

  const deleteButton = (button) =>
    button.addEventListener("click", () => {
      const id = button.parentElement.id;
      localStorage.removeItem(id);
      document.getelementById(id).remove();
    });

  const btns = document.querySelectorAll("button");
  console.log(btns);
  btns.forEach((element) => deleteButton(element));
} catch (error) {
  console.log("Что-то пошло не так");
}

// const showUser = (element) => {
//   wrapUsers.insertAdjacentHTML(
//     "beforeend",
//     `<figure class="user" id="${element.id}">
//     <a href='#'><h2 class="user__name" id="${element.id}">${element.name}</h2></a>
//   <button class="button__del">Удалить</button>
// </figure>`
//   );
//   localStorage.setItem(element.id, element);
// };

// const deleteButton = (button) =>
//   button.addEventListener("click", () => {
//     const id = button.parentElement.id;
//     localStorage.removeItem(id);
//     document.getElementById(id).remove();
//   });

// users.forEach((element) => showUser(element));

// const arrayButtons = document.querySelectorAll(".button__del");
// arrayButtons.forEach((element) => deleteButton(element));
