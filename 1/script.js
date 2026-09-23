// Проверка, хочет ли пользователь выполнять задания
document.getElementById('startBtn').addEventListener('click', function() {
    let isStart = confirm("Выполнить все 4 задания?");
    if (!isStart) {
        document.getElementById('cancelMessage').classList.remove('hidden');
        document.getElementById('startBtn').classList.add('hidden');
    } else {
        document.getElementById('tasksContainer').classList.remove('hidden');
        document.getElementById('startBtn').classList.add('hidden');
    }
});

// ============================================
// Задание 1. Калькулятор возраста
// ============================================
function calculateAge() {
    let birthYearInput = document.getElementById('birthYear');
    let resultDiv = document.getElementById('ageResult');
    
    let birthYearString = birthYearInput.value;
    
    if (birthYearString === "") {
        resultDiv.textContent = "Пожалуйста, введите год рождения.";
        resultDiv.className = "result error";
        return;
    }
    
    let birthYear = Number(birthYearString);
    let currentYear = new Date().getFullYear();
    
    if (
        isNaN(birthYear) ||
        birthYear % 1 !== 0 ||
        birthYear < 1900 ||
        birthYear > currentYear
    ) {
        resultDiv.textContent = "Введите корректный целый год от 1900 до " + currentYear + ".";
        resultDiv.className = "result error";
    } else {
        let age = currentYear - birthYear;
        resultDiv.innerHTML = "<strong>Ваш возраст:</strong> " + age + " лет";
        resultDiv.className = "result success";
        console.log("Задание 1. Текущий год:", currentYear);
        console.log("Задание 1. Год рождения:", birthYear);
        console.log("Задание 1. Возраст:", age);
    }
}

// ============================================
// Задание 2. Таблица умножения на 5
// ============================================
function showMultiplicationTable() {
    let resultDiv = document.getElementById('tableResult');
    
    console.log("Задание 2. Таблица умножения на 5:");
    let tableText = "";
    
    for (let i = 1; i <= 10; i++) {
        let result = 5 * i;
        let line = "5 × " + i + " = " + result;
        console.log(line);
        tableText += line + "\n";
    }
    
    resultDiv.textContent = tableText.trim();
    resultDiv.className = "result success";
}

// ============================================
// Задание 3. Поиск максимума из трёх чисел
// ============================================
function findMaximum() {
    let firstInput = document.getElementById('firstNumber');
    let secondInput = document.getElementById('secondNumber');
    let thirdInput = document.getElementById('thirdNumber');
    let resultDiv = document.getElementById('maxResult');
    
    let firstString = firstInput.value;
    let secondString = secondInput.value;
    let thirdString = thirdInput.value;
    
    if (firstString === "" || secondString === "" || thirdString === "") {
        resultDiv.textContent = "Пожалуйста, заполните все три поля.";
        resultDiv.className = "result error";
        return;
    }
    
    let a = Number(firstString);
    let b = Number(secondString);
    let c = Number(thirdString);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.textContent = "Все три значения должны быть числами.";
        resultDiv.className = "result error";
    } else {
        let max = a;
        if (b > max) {
            max = b;
        }
        if (c > max) {
            max = c;
        }
        resultDiv.innerHTML = "<strong>Максимальное число:</strong> " + max;
        resultDiv.className = "result success";
        console.log("Задание 3. Введённые числа:", a, b, c);
        console.log("Задание 3. Максимальное число:", max);
    }
}

// ============================================
// Задание 4. Факториал числа N
// ============================================
function calculateFactorial() {
    let nInput = document.getElementById('factorialN');
    let resultDiv = document.getElementById('factorialResult');
    
    let nString = nInput.value;
    
    if (nString === "") {
        resultDiv.textContent = "Пожалуйста, введите число N.";
        resultDiv.className = "result error";
        return;
    }
    
    let n = Number(nString);
    
    if (isNaN(n) || n < 0 || n % 1 !== 0) {
        resultDiv.textContent = "Введите целое неотрицательное число N.";
        resultDiv.className = "result error";
    } else if (n > 170) {
        resultDiv.textContent = "Слишком большое число. Введите N от 0 до 170.";
        resultDiv.className = "result error";
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial = factorial * i;
        }
        resultDiv.innerHTML = "<strong>" + n + "! =</strong> " + factorial;
        resultDiv.className = "result success";
        console.log("Задание 4. Факториал:", n + "! =", factorial);
    }
}