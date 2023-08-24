/* Задача №1

Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage */

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const wrapUsers = document.querySelector(".users");

/* const rowcellHead = (elementCell) => {
  const head4 = document.createElement("h4");
  head4.className = "title_table";
  const divRow = document.createElement("div");
  divRow.className = "row";
  head4.innerHTML = elementCell;
  divRow.appendChild(head4);
  blok.appendChild(divRow);
};

const rowcellId = (elementCell, id) => {
  const head4 = document.createElement("h4");
  head4.className = "title_table";
  const divRow = document.createElement("div");
  divRow.className = "row";
  head4.innerHTML = elementCell;
  divRow.appendChild(head4);
  blok.getAttribute(`id`);
  blok.appendChild(divRow);

};
const delButton =() => {
  const button__del = document.createElement("button");
  button__del.className = "button_del";
  divRow.appendChild( button__del);
  blok.appendChild(divRow);
} */
const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

// function objToString(obj) {
//   let str = "";
//   for (const [p, val] of Object.entries(obj)) {
//     str += `${val}, `;
//   }
//   return str;
// }
// function div(element, ID) {
//   blockUsers.insertAdjacentHTML(
//     "beforeend",
//     `
//       <div class="header__title row" id="${ID}">
//         <h4 class="title__table"> ${element}</h4>
//       </div>
//     `
//   );
// }
// function nameUpTable(keys) {
//   keys.forEach((element) => {
//     rowcellHead(element);
//   });
//   rowcellHead("Del");
//   wrapUsers.appendChild(blok);
// }

try {
  const users = await getData(urlUsers);
  console.log(users);
  const usersKeys = Object.keys(users[0]);
  console.log(usersKeys);
  wrapUsers.insertAdjacentHTML(
    "beforeend",
    `
  <div class="blok" id="head">
    
  </div>
  `
  );
  let head = document.getElementById("head");
  function nameUpTable(keys) {
    keys.forEach((element) => {
      head.insertAdjacentHTML(
        "beforeend",
        `
      <div class="header__title row">
        <h4 class="title__table"> ${element}</h4>
      </div>
    `
      );
    });
    head.insertAdjacentHTML(
      "beforeend",
      `
    <div class="header__title row">
      <h4 class="title__table"> Del</h4>
    </div>
  `
    );
  }
  nameUpTable(usersKeys);

  /* let blok = document.createElement("div");
blok.className = "blok";
blok.setAttribute("id", 'head');
nameUpTable(usersKeys);
wrapUsers.appendChild(blok);
users.forEach((element, id) => {
  
  let rowUsers = Object.values(element);
  let blok = document.createElement("div");
  blok.className = `blok blok-${id}`;
  blok.setAttribute("id", id);
  wrapUsers.appendChild(blok); */

  // function div(element, ID) {
  //   const blockUsers = document.getElementsByClassName(`blok-${id}`);
  //   blockUsers.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //       <div class="header__title row" id="${ID}">
  //         <h4 class="title__table"> ${element}</h4>
  //       </div>
  //     `
  //   );
  // }
  // rowUsers.forEach((elementuser, index) => {
  //       if (index === 4) {
  //         div(elementuser.city, id);
  //       } else if (index === 7) {
  //         div(elementuser.name, id);
  //       } else {
  //         div(elementuser, id);
  //       }
  //     });
  // rowUsers.forEach((elementuser, index) => {
  //   if (index === 4) {
  //     rowcellId(elementuser.city, id);
  //   } else if (index === 7) {
  //     rowcellId(elementuser.name,id);
  //   } else {
  //     rowcellId(elementuser, id);

  //   }
  // });

  // });

  users.forEach((element, id) => {
    let rowUsers = Object.values(element);
    console.log(rowUsers);
    wrapUsers.insertAdjacentHTML(
      "beforeend",
      `
    <div class="blok" id="${id}">
      
    </div>
    `
    );
    let blok = document.getElementById(id);
    function div(element) {
      blok.insertAdjacentHTML(
        "beforeend",
        `
      <div class="header__title row" >
        <h4 class="title__table"> ${element}</h4>
      </div>
    `
      );
    }
    rowUsers.forEach((elementuser, index) => {
      if (index === 4) {
        div(elementuser.city);
      } else if (index === 7) {
        div(elementuser.name);
      } else {
        div(elementuser);
      }
    });
    blok.insertAdjacentHTML(
      "beforeend",
      `
    <div class=" row" id="${id}">
      <button class="button__del">X</button>
    </div>
    `
    );
    localStorage.setItem(element.id - 1, element.name);
  });
  /* users.forEach((element, id) => {
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
}); */

  const deleteButton = (button) =>
    button.addEventListener("click", () => {
      let id = button.parentElement.id;
      localStorage.removeItem(id);
      document.getElementById(id).remove();
    });

  // const btns = document.querySelectorAll("id");
  // console.log(btns);
  // btns.forEach((element) => deleteButton(element));
  const arrayButtons = document.querySelectorAll(".button__del");
  console.log(arrayButtons);
  arrayButtons.forEach((element) => deleteButton(element));
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

///Задание 2
// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const dogUrl = "https://dog.ceo/api/breeds/image/random";
const wrapDogs = document.querySelector(".dogs");

try {
  setInterval(async () => {
    const conreteDog = await getData(dogUrl);
    wrapDogs.innerHTML = `<img src='${conreteDog.message}' alt='dog photo'>`;
  }, 3000);
} catch (error) {
  console.log("Что-то пошло не так");
}
