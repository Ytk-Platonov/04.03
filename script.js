// Проверка, хочет ли пользователь выполнять задания
let isStart = confirm("Выполнить все 4 задания?");

if (!isStart) {
    alert("Вы отменили выполнение заданий.");
} else {

    // ============================================
    // Задание 1. Калькулятор возраста
    // Запросить год рождения через prompt()
    // и вывести возраст
    // ============================================

    let birthYearString = prompt("Введите год рождения", "2000");

    if (birthYearString === null) {
        alert("Ввод года рождения отменён.");
    } else {
        let birthYear = Number(birthYearString);
        let currentYear = new Date().getFullYear();

        if (
            birthYearString.trim() === "" ||
            isNaN(birthYear) ||
            birthYear % 1 !== 0 ||
            birthYear < 1900 ||
            birthYear > currentYear
        ) {
            alert("Введите корректный целый год от 1900 до " + currentYear + ".");
        } else {
            let age = currentYear - birthYear;

            alert("Ваш возраст: " + age);
            console.log("Задание 1. Текущий год:", currentYear);
            console.log("Задание 1. Год рождения:", birthYear);
            console.log("Задание 1. Возраст:", age);
        }
    }


    // ============================================
    // Задание 2. Таблица умножения на 5
    // Вывести таблицу умножения на 5 от 1 до 10
    // ============================================

    console.log("Задание 2. Таблица умножения на 5:");

    let tableText = "";

    for (let i = 1; i <= 10; i++) {
        let result = 5 * i;
        let line = "5 × " + i + " = " + result;

        console.log(line);
        tableText += line + "\n";
    }

    alert("Таблица умножения на 5:\n" + tableText);


    // ============================================
    // Задание 3. Поиск максимума из трёх чисел
    // Даны три числа, найти максимальное с помощью условий
    // ============================================

    let firstString = prompt("Введите первое число", "10");
    let secondString = prompt("Введите второе число", "20");
    let thirdString = prompt("Введите третье число", "30");

    if (firstString === null || secondString === null || thirdString === null) {
        alert("Ввод чисел отменён.");
    } else {
        let a = Number(firstString);
        let b = Number(secondString);
        let c = Number(thirdString);

        if (
            firstString.trim() === "" ||
            secondString.trim() === "" ||
            thirdString.trim() === "" ||
            isNaN(a) ||
            isNaN(b) ||
            isNaN(c)
        ) {
            alert("Все три значения должны быть числами.");
        } else {
            let max = a;

            if (b > max) {
                max = b;
            }

            if (c > max) {
                max = c;
            }

            alert("Максимальное число: " + max);
            console.log("Задание 3. Введённые числа:", a, b, c);
            console.log("Задание 3. Максимальное число:", max);
        }
    }


    // ============================================
    // Задание 4. Факториал числа N
    // N! = 1 * 2 * 3 * ... * N
    // Вычислить с помощью цикла
    // ============================================

    let nString = prompt("Введите число N для вычисления факториала", "5");

    if (nString === null) {
        alert("Ввод числа N отменён.");
    } else {
        let n = Number(nString);

        if (
            nString.trim() === "" ||
            isNaN(n) ||
            n < 0 ||
            n % 1 !== 0
        ) {
            alert("Введите целое неотрицательное число N.");
        } else if (n > 170) {
            alert("Слишком большое число. Введите N от 0 до 170.");
        } else {
            let factorial = 1;

            for (let i = 2; i <= n; i++) {
                factorial = factorial * i;
            }

            alert(n + "! = " + factorial);
            console.log("Задание 4. Факториал:", n + "! =", factorial);
        }
    }

}