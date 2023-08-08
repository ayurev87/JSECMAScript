const studentGroup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: 'Petrov',
        practiceTime: 120
    },
    {
        firstName: 'Sidorov',
        practiceTime: 148
    },
    {
        firstName: 'Belkin',
        practiceTime: 20
    },
    {
        firstName: 'Avdeev',
        practiceTime: 160
    }

];
const studentGroup2PracticeTime = [
    {
        firstName: 'Mahkov',
        practiceTime: 87
    },
    {
        firstName: 'Kistin',
        practiceTime: 133
    },
    {
        firstName: 'Kotlyarov',
        practiceTime: 140
    },
    {
        firstName: 'Peskov',
        practiceTime: 10
    }
]
//Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов, и находить максимум среди них. Функция должна вызываться подобным образом: const maximum = findMax(4, 7, 10);
function findMax(){
    const values = arguments;//arguments - переменная доступная внутри каждой функции, которая содержит в себе все оргументы, переданные в функцию. Является псевдомассивом.
    let maxValue = -Infinity;
    //Так как arguments явялется псевдомассивом, мы не можем применять к нему новые методы массивов такие как ForEach или reduce, пОЭТОМУ БУДЕМ ИТЕРИРОВАТЬ по старинке.
    for (let index=0; index < values.length; index++){
        if(values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};
//Мы должны передавать в нашу функции только числа, а в наших массивах содержаться объекты, поэтому создадим массивы только со значениями времени отработанными студентами.

const group1PracticeTime = studentGroup1PracticeTime.map((student) => student.practiceTime);
const group2PracticeTime = studentGroup2PracticeTime.map((student) => student.practiceTime);
// Тепер можем вызывать нашу функцию поиска максимального значения. Она принимает множество числовых аргументов, а у нас есть только массив, вот тут нам и поможет оператор spred.
const maxTimeFromGroup1 = findMax(...group1PracticeTime); //... group1PractiveTime) - Вытянет из массиса все эелеинтв и передаст их функцию как переменнве
console.log(maxTimeFromGroup1 //160);
 )
const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2 //140);
 )
 //Давайте также найдем максимально отработанные время среди двух групп. Мы можем сделать это передав данные обоих массивов в функцию таким образом:
 // findMax(...group1PracticeTime, ...group2PracticeTime);
 // А можем объединить два массива в один - это очень частная операция и оператор расширения (spread) очень в том помогает.

 const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
 console.log(bothGroupsTime);
 // для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива. Также мы могли бы добавить в него и другие элементы. 
 const maxTimeBothGroups = findMax(...bothGroupsTime);
 console.log(maxTimeBothGroups); //160