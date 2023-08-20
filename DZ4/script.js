/* Задача №1

Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage */

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const wrapUsers = document.querySelector(".users");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

try {
  const users = await getData(urlUsers);
  console.log(users);
} catch (error) {
  console.log("не правильно адреса ссылки");
}

const showUser = (element) => {
  wrapUsers.insertAdjacentHTML(
    "beforeend",
    `<figure class="user" id="${element.id}">
    <a href='#'><h2 class="user__name" id="${element.id}">${element.name}</h2></a>
  <button class="button__del">Удалить</button>
</figure>`
  );
  localStorage.setItem(element.id, element);
};

const deleteButton = (button) =>
  button.addEventListener("click", () => {
    const id = button.parentElement.id;
    localStorage.removeItem(id);
    document.getElementById(id).remove();
  });

dataUsers.forEach((element) => showUser(element));

const arrayButtons = document.querySelectorAll(".button__del");
arrayButtons.forEach((element) => deleteButton(element));
