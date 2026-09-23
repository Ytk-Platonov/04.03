// =====================================
// Вспомогательная функция для парсинга массива из строки
// =====================================
function parseArray(inputId) {
    const rawValue = document.getElementById(inputId).value;
    if (!rawValue.trim()) return [];
    // Разделяем по запятой, убираем пробелы, преобразуем в число (если возможно)
    return rawValue.split(',').map(item => {
        const trimmed = item.trim();
        const num = Number(trimmed);
        return isNaN(num) ? trimmed : num; // Если это не число, оставляем строкой
    });
}

// =====================================
// Задание 1. Калькулятор
// =====================================
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Ошибка: деление на ноль";
    return a / b;
}

function handleCalc(operation) {
    const a = parseFloat(document.getElementById('calc-a').value);
    const b = parseFloat(document.getElementById('calc-b').value);
    const resultEl = document.getElementById('calc-result');

    if (isNaN(a) || isNaN(b)) {
        resultEl.textContent = "Пожалуйста, введите корректные числа";
        resultEl.classList.add('error');
        return;
    }

    let res;
    switch(operation) {
        case 'add': res = add(a, b); break;
        case 'subtract': res = subtract(a, b); break;
        case 'multiply': res = multiply(a, b); break;
        case 'divide': res = divide(a, b); break;
    }

    resultEl.classList.remove('error');
    resultEl.textContent = `Результат: ${res}`;
    
    if (typeof res === 'string' && res.includes('Ошибка')) {
        resultEl.classList.add('error');
    }
}

// =====================================
// Задание 2. Среднее арифметическое
// =====================================
function average(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function handleAverage() {
    const nums = parseArray('avg-input');
    const resultEl = document.getElementById('avg-result');
    
    // Фильтруем только числа для расчета
    const numericNums = nums.filter(n => typeof n === 'number');
    
    if (numericNums.length === 0) {
        resultEl.textContent = "Нет числовых данных для расчета";
        return;
    }

    const avg = average(numericNums);
    resultEl.textContent = `Средний балл: ${avg.toFixed(2)} (из ${numericNums.length} чисел)`;
}

// =====================================
// Задание 3. Обратный порядок
// =====================================
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

function handleReverse() {
    const arr = parseArray('reverse-input');
    const reversed = reverseArray(arr);
    document.getElementById('reverse-result').textContent = 
        `Исходный: [${arr.join(', ')}] → Обратный: [${reversed.join(', ')}]`;
}

// =====================================
// Задание 4. Уникальные элементы
// =====================================
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        if (!result.includes(currentItem)) {
            result.push(currentItem);
        }
    }
    return result;
}

function handleUnique() {
    const arr = parseArray('unique-input');
    const unique = removeDuplicates(arr);
    document.getElementById('unique-result').textContent = 
        `Без дубликатов: [${unique.join(', ')}]`;
}