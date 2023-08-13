console.log('1 задание\n');
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
class Book {
     title = 'Turbo pascal';
     author = 'С.А.Немнюгин';
     pages = 544;

     constructor(){
        this.displayInfo = this.displayInfo.bind(this)
     }
     displayInfo(){
        console.log(`Название книга: "${this.title}" \n Автор ее: ${this.author} \n Количество страниц ее: ${this.pages} страниц`);
     }
}

const book = new Book();
book.displayInfo();

console.log('\n\n');

console.log('2 задание \n');
/* Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
javascript

// Пример использования класса
const student1 = new Student(""John Smith"", 16, ""10th grade"");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade" */

class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
            }
    displayInfo(){
        console.log(`Вывод:\nФИО: ${this.name}\nВозраст: ${this.age}лет\nКласс: ${this.grade}\n`);
    }
}

const student1 = new Student('Павел Юрьев', 11, '5В');
student1.displayInfo();
const student2 = new Student('Алексей Юрьев', 36, '12Б' );
student2.displayInfo();
console.log('\n\n');
console.log('3 задание');
/* Это расширенная версия задачи с банком, которую мы решлали на семинаре:

Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

Пример работы:

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321); */

class Bank {
        newClientNumber = 0;
        scoreNumber = 0;  

    constructor(name) {
        this.name = name;
        this.clientList = [];
        this.scoreList = [];
    }
    addClient = (getClient) => {
        this.newClientNumber++;
        let clientNumber = this.newClientNumber;
        const newObjClient = {clientNumber, getClient};
        this.clientList.push(newObjClient); 
        console.log(`Добавить клиент: №${clientNumber}\nФИО: ${getClient.name}\nвозраст: ${getClient.age}\n` );
    }
    openAccount = (getClient , getAmount) => {
        this.scoreNumber++;
        let getScoreNumber = this.scoreNumber;
        
        let currentClient = this.clientList.filter(element => { if(element.getClient === getClient) return  element})[0].clientNumber;
        const getClientNumber = currentClient;
        const ObjScore = {getClientNumber, getScoreNumber, getAmount};
        this.scoreList.push(ObjScore);
        console.log(`- ${getClient.name} открыть нового счета №${ObjScore.getScoreNumber} и в нем вложить деньги ${ObjScore.getAmount}₽\n`);

    }
    deposit = (getScoreNumber, setAmount) => {
        for(let key of this.scoreList){
            if(key.getScoreNumber === getScoreNumber){
                key.getAmount+=setAmount;
                console.log(`- Номер счет: №${getScoreNumber} пополнили на ${setAmount}₽\nТекущий: ${key.getAmount}₽\n`);
            }         
        }
    }
    withdraw = (getScoreNumber, setAmount) => {
        for(let key of this.scoreList){
            if(key.getScoreNumber === getScoreNumber){
                if(key.getAmount < setAmount) console.log(`${getScoreNumber} недостаточно средства`);
                else {
                    key.getAmount -= setAmount;
                    console.log(`№${getScoreNumber} счет списали денежного средства на -${setAmount}₽.\nТекущий:${key.getAmount}₽`);
                }
            }
        }
    }

    checkBalance = (getScoreNumber)=> {
        for(let key of this.scoreList) {
            if(key.getScoreNumber === getScoreNumber) {
                console.log(`№${getScoreNumber} счет текущее средство ${key.getAmount}₽\n`);
            }
        }
    }
}
class Client {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const bank = new Bank ('Сбер');
const client1 = new Client('Сергей Юрьев', 33);
const client2 = new Client('Павел Юрьев', 31);
const client3 = new Client('Татьяна Юрьева', 25);

bank.addClient(client1);
bank.addClient(client2);
bank.addClient(client3);
bank.openAccount(client1,1000);
bank.openAccount(client2,500);
bank.openAccount(client3,5000);
bank.deposit(2,2000);
bank.deposit(1,1000);
bank.withdraw(3,200);
bank.checkBalance(1);
bank.checkBalance(2);
bank.checkBalance(3);


