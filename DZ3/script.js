/* Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов
const employee = new Employee(""John Smith"");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager(""Jane Doe"", ""Sales"");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales */
console.log('1 задание\n');
class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo = () => `Все информациия выводит о сотрудники: ${this.name}`;
}

class Manager extends Employee {
    constructor(name, deparment)
    {
        super(name);
        this.deparment = deparment;
    }

    displayInfo = () => `все инфо выведит от Manager: ${this.name}, ${this.deparment}`;

}

const employee = new Employee("John Smith");
console.log(employee.displayInfo());
const manager = new Manager("Jane Doe", "Sales");
console.log(manager.displayInfo());
console.log('\n\n');
/* ""Управление списком заказов""

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
}

const order = new Order(12345);

const product1 = new Product(""Phone"", 500);
order.addProduct(product1);

const product2 = new Product(""Headphones"", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600 */
console.log('2 задание\n');
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber){
    this.orderNumber = orderNumber;
    this.product = []

    }
    addProduct = (product) => this.product.push(product);
    getTotalPrice = () => this.product.reduce((acc, element) => acc+=element.price, 0);
}


const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(`Общая сумма заказа ${order.orderNumber} составляет ${order.getTotalPrice()}`);

console.log('\n\n');

console.log('3 задание\n');
/* Задача необязательная для выполнения

Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods

const student = new Student();
student.setName('Питер Паркер);
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo(); */

class Student {
    _name = '';
    _age = 0;
    _averageGrade = 0;

    constructor () {
        this._name = 'name';
        this._age = 0;
        this._averageGrade = 0;
    }

    setName = (name) => this._name = name;
    setAge = (age) => this._age = age;
    setAverageGrade = (averageGrade) => this._averageGrade = averageGrade;

    displayInfo = () => console.log(`Имя - ${this._name},\nВозраст - ${this._age},\nСредний бал - ${this._averageGrade}.`);

}

    const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();