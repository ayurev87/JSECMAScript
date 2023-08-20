/* //localStorage

localStorage.setItem("name", "Bob");
localStorage.setItem("age", "30");
localStorage.setItem("gender", "male");
localStorage.setItem("nickName", "Cool Boy");

localStorage.removeItem("age");

const user = localStorage.getItem("name");
console.log(user);
console.log(localStorage.key(1));
localStorage.clear();

// localStorage.user = { name: "John" }; // показывать [object Object]
localStorage.user = JSON.stringify({ name: "Jhon" });
localStorage.name = JSON.stringify("Alex");
localStorage.nickName = "Alex1";

const newUser = JSON.parse(localStorage.user);
console.log(newUser); */

// import { data } from "./def";

//модули импорт и экспорт
/* import add from "./add.js";
import { def, data } from "./def.js";
import calc from "./mult.js";

console.log(add(4, 5));
console.log(def(6, 4));
console.log(data);
console.log(calc.div(5, 3)); */

//асинхронщина

/* const myPromise = new Promise((resolve, reject) => {});
console.log(myPromise);

myPromise
  .then((value) => {
    //value - значение, переданное методом resolve
  })
  .catch((error) => {
    //действия для обработки ошибки
  }); */

// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Что-то пошло не так"));

// delayedMessage = (message, delay) => setTimeout();

// Упрощение

/* const getData = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

getData(url)
  .then((data) => console.log(data))
  .catch((error) => console.error("Что-то пошло не так")); */

//asyns / await

/*   const getData2 = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    return data

  };

  const users = await getData2(url);
  console.log(users);

  try {
     const users = await getData2(url);
  console.log(users);
  } catch (error) {
    console.error('Что-то пошло не так');
  }
 */
//Axios

//Проект Nasa - Равбота с API
//async await

const nasaURL =
  "https://api.nasa.gov/planetary/apod?api_key=1OIzkVrQ3970RM6T2PWmKdKSqD2aQp6oemeaMlvD&count=10";

const div = document.querySelector(".wrapper");

const getData3 = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
try {
  const data = await getData3(nasaURL);
  data.forEach((element) => {
    div.insertAdjacentHTML(
      "beforeend",
      `
        <figure>
            <img src="${element.url}" alt="pic" />
            <figcaption>${element.explanation}</figcaption>
            <button>Удалить</button>
        </figure>

        `
    );
  });
  const btns = document.querySelectorAll("button");
  console.log(btns);
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("клик");
    });
  });
} catch (error) {
  console.error("Что-то пошло не так");
}
