const houses = [];
let i = 0;
while (i < 10) {
  let house = function () {
    // функция «дом»
    console.log(i); // выводит номер дома
  };
  houses.push(house);
  i++;
}
houses[0](); // 10 — у нулевого дома номер 10
houses[7](); // 10 — и у седьмого дома номер 10

/////////////

let house = function () {
  // функция «дом»
  // лексическое окружение: { i: 10 }
  console.log(i); // выводит номер дома
};

/////////////

const houses1 = [];
let ind = 0;
while (ind < 10) {
  let houseNumber = ind; // Здесь мы создаём блочную переменную, которая сохранит значение ind для конкретной итерации цикла, и именно её значение попадёт в лексическое окружение функции house.
  let house1 = function () {
    // функция «дом»
    console.log(houseNumber); // выводит номер дома
  };
  houses1.push(house1);
  ind++;
}
houses1[0](); // 0 — у нулевого дома номер 0
houses1[7](); // 7 — и у седьмого дома номер 7

//////////////

const houses2 = [];
let index = 0;
while (index < 10) {
  let house2 = function () {
    // функция «дом»
    let houseNumber = index; // Здесь мы создаём блочную переменную, которая сохранит значение index, и именно её значение попадёт в лексическое окружение функции house.
    console.log(houseNumber); // выводит номер дома
  };
  houses2.push(house2);
  index++;
}
houses2[0](); // 0 — у нулевого дома номер 0
houses2[7](); // 7 — и у седьмого дома номер 7
