// ============================================
// ДАННЫЕ ДЛЯ РАБОТЫ
// ============================================

const DATA = {
    numbers: [12, 7, 23, 45, 18, 31, 6, 42, 19, 8],
    fruits: ["яблоко", "банан", "апельсин", "груша", "киви", "манго", "ананас"],
    users: [
        { name: "Анна", age: 25, city: "Москва" },
        { name: "Иван", age: 30, city: "СПб" },
        { name: "Мария", age: 22, city: "Москва" },
        { name: "Петр", age: 35, city: "Казань" },
        { name: "Елена", age: 28, city: "Москва" }
    ]
};

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

function displayOutput(title, content, type = 'info') {
    const output = document.getElementById('output');
    if (!output) return;
    
    let color = '';
    if (type === 'success') color = 'success-text';
    else if (type === 'error') color = 'error-text';
    else if (type === 'highlight') color = 'highlight';
    
    output.innerHTML = `<strong>📌 ${title}</strong>\n\n${content}`;
}

function formatArray(arr) {
    return `[${arr.join(', ')}]`;
}

// ============================================
// СОЗДАНИЕ ИНТЕРФЕЙСА
// ============================================

function createUI() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <!-- Вывод результатов -->
        <div class="section">
            <h2>📤 Результаты</h2>
            <div class="output" id="output">
                Нажмите на кнопку задания, чтобы увидеть результат
            </div>
        </div>

        <!-- Задание 1: Что такое функция -->
        <div class="section">
            <h2>📌 Задание 1: Знакомство с функциями</h2>
            
            <div class="task">
                <h4>1.1 Простейшая функция</h4>
                <button onclick="demoSimpleFunction()">Показать простую функцию</button>
            </div>
            
            <div class="task">
                <h4>1.2 Функция с параметрами</h4>
                <div class="flex">
                    <button onclick="demoGreeting()">Приветствие</button>
                    <button onclick="demoCalculator()">Калькулятор</button>
                </div>
            </div>
            
            <div class="task">
                <h4>1.3 Функция с возвратом значения</h4>
                <button onclick="demoReturn()">Демонстрация return</button>
            </div>
        </div>

        <!-- Задание 2: Разные виды функций -->
        <div class="section">
            <h2>📌 Задание 2: Виды функций</h2>
            
            <div class="task">
                <h4>2.1 Функция без параметров</h4>
                <button onclick="demoNoParams()">Функция без параметров</button>
            </div>
            
            <div class="task">
                <h4>2.2 Параметры по умолчанию</h4>
                <button onclick="demoDefaultParams()">Параметры по умолчанию</button>
            </div>
        </div>

        <!-- Задание 3: Простые задачи -->
        <div class="section">
            <h2>📌 Задание 3: Решаем задачи с функциями</h2>
            
            <div class="task">
                <h4>3.1 Проверка возраста</h4>
                <div class="flex">
                    <input type="number" id="ageInput" placeholder="Возраст..." value="20" min="0" max="120">
                    <button onclick="taskCheckAge()">Проверить</button>
                </div>
            </div>
            
            <div class="task">
                <h4>3.2 Перевод температуры</h4>
                <div class="flex">
                    <input type="number" id="tempInput" placeholder="°C..." value="25">
                    <button onclick="taskConvertTemp()">Перевести в °F</button>
                </div>
            </div>
            
            <div class="task">
                <h4>3.3 Максимум из двух чисел</h4>
                <div class="flex">
                    <input type="number" id="num1Input" placeholder="Число 1..." value="10" style="width:100px;">
                    <input type="number" id="num2Input" placeholder="Число 2..." value="20" style="width:100px;">
                    <button onclick="taskMaxNumber()">Найти максимум</button>
                </div>
            </div>
        </div>

        <!-- Задание 4: Работа с массивами -->
        <div class="section">
            <h2>📌 Задание 4: Функции для работы с массивами</h2>
            
            <div class="task">
                <h4>4.1 Сумма элементов массива</h4>
                <button onclick="taskSumArray()">Сумма чисел</button>
            </div>
            
            <div class="task">
                <h4>4.2 Поиск максимального</h4>
                <button onclick="taskMaxInArray()">Максимальное число</button>
            </div>
            
            <div class="task">
                <h4>4.3 Фильтрация чисел</h4>
                <div class="flex">
                    <input type="number" id="filterInput" placeholder="Порог..." value="15">
                    <button onclick="taskFilterArray()">Числа больше порога</button>
                </div>
            </div>
        </div>

        <!-- Задание 5: Работа с объектами -->
        <div class="section">
            <h2>📌 Задание 5: Функции для работы с объектами</h2>
            
            <div class="task">
                <h4>5.1 Информация о пользователе</h4>
                <button onclick="taskUserInfo()">Показать пользователей</button>
            </div>
            
            <div class="task">
                <h4>5.2 Поиск по имени</h4>
                <div class="flex">
                    <input type="text" id="searchNameInput" placeholder="Имя..." value="Анна">
                    <button onclick="taskFindUser()">Найти пользователя</button>
                </div>
            </div>
            
            <div class="task">
                <h4>5.3 Средний возраст</h4>
                <button onclick="taskAverageAge()">Средний возраст</button>
            </div>
        </div>

        <!-- Задание 6: Комбинированные задачи -->
        <div class="section">
            <h2>📌 Задание 6: Комбинируем всё вместе</h2>
            
            <div class="task">
                <h4>6.1 Статистика по пользователям</h4>
                <button onclick="taskUserStats()">Полная статистика</button>
            </div>
            
            <div class="task">
                <h4>6.2 Группировка по городам</h4>
                <button onclick="taskGroupByCity()">Группировка</button>
            </div>
        </div>
    `;
}

// ============================================
// РЕАЛИЗАЦИЯ ЗАДАНИЙ
// ============================================

// ----- Задание 1: Что такое функция -----

function demoSimpleFunction() {
    // Простейшая функция
    function sayHello() {
        return "Привет, мир! Это моя первая функция! 🎉";
    }
    
    // Вызываем функцию
    let message = sayHello();
    
    const result = `
Простая функция:

function sayHello() {
    return "Привет, мир! Это моя первая функция! 🎉";
}

✅ Результат вызова:
   ${message}

📝 Объяснение:
   - function — ключевое слово для создания функции
   - sayHello — имя функции
   - () — скобки для параметров (здесь их нет)
   - {} — тело функции (код, который выполняется)
   - return — возвращает результат
    `;
    
    displayOutput('Простейшая функция', result);
}

function demoGreeting() {
    // Функция с параметром
    function greet(name) {
        return "Привет, " + name + "! Добро пожаловать! 😊";
    }
    
    const names = ["Анна", "Иван", "Мария", "Петр"];
    let results = names.map(name => `   ${greet(name)}`);
    
    const result = `
Функция с параметром:

function greet(name) {
    return "Привет, " + name + "! Добро пожаловать! 😊";
}

📊 Вызов с разными именами:
${results.join('\n')}

📝 Объяснение:
   - name — параметр (переменная, которую мы передаем)
   - При вызове подставляется конкретное значение
   - Одна функция — много разных результатов
    `;
    
    displayOutput('Приветствие', result);
}

function demoCalculator() {
    // Функция-калькулятор с двумя параметрами
    function add(a, b) {
        return a + b;
    }
    
    function multiply(a, b) {
        return a * b;
    }
    
    function subtract(a, b) {
        return a - b;
    }
    
    function divide(a, b) {
        if (b === 0) {
            return "⚠️ На ноль делить нельзя!";
        }
        return a / b;
    }
    
    const a = 10, b = 5;
    
    const result = `
Калькулятор (функции с двумя параметрами):

Числа: ${a} и ${b}

📊 Результаты:
   Сложение: ${a} + ${b} = ${add(a, b)}
   Вычитание: ${a} - ${b} = ${subtract(a, b)}
   Умножение: ${a} × ${b} = ${multiply(a, b)}
   Деление: ${a} ÷ ${b} = ${divide(a, b)}

📝 Объяснение:
   - Функции принимают два параметра
   - Каждая функция выполняет свою операцию
   - Возвращают результат вычислений
    `;
    
    displayOutput('Калькулятор', result);
}

function demoReturn() {
    // Функция без return
    function withoutReturn() {
        let x = 10 + 5;
        // Ничего не возвращает
    }
    
    // Функция с return
    function withReturn() {
        let x = 10 + 5;
        return x;  // Возвращаем значение
    }
    
    const result = `
Демонстрация return:

1️⃣ Функция БЕЗ return:
   function withoutReturn() {
       let x = 10 + 5;
   }
   Результат: ${withoutReturn()} (undefined)

2️⃣ Функция С return:
   function withReturn() {
       let x = 10 + 5;
       return x;
   }
   Результат: ${withReturn()}

3️⃣ Код после return не выполняется:
   function test() {
       return "Результат";
       console.log("Это не выполнится!");
   }
   Результат: "Результат"

📝 Вывод:
   - return возвращает значение и завершает функцию
   - Без return функция возвращает undefined
   - Код после return игнорируется
    `;
    
    displayOutput('Демонстрация return', result);
}

// ----- Задание 2: Виды функций -----

function demoNoParams() {
    // Функция без параметров
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString();
    }
    
    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    const result = `
Функции без параметров:

1️⃣ Текущее время:
   getCurrentTime() = ${getCurrentTime()}

2️⃣ Случайное число (1-100):
   getRandomNumber() = ${getRandomNumber()}

📝 Объяснение:
   - Функции не требуют входных данных
   - Используют внутреннюю логику
   - Каждый вызов может давать разный результат
    `;
    
    displayOutput('Функции без параметров', result);
}

function demoDefaultParams() {
    // Параметры по умолчанию
    function greet(name = "Гость", age = 18) {
        return "Привет, " + name + "! Тебе " + age + " лет.";
    }
    
    const result = `
Параметры по умолчанию:

function greet(name = "Гость", age = 18) {
    return "Привет, " + name + "! Тебе " + age + " лет.";
}

📊 Примеры вызова:
   1️⃣ Без параметров: ${greet()}
   2️⃣ Только имя: ${greet("Анна")}
   3️⃣ Имя и возраст: ${greet("Иван", 25)}
   4️⃣ Только возраст: ${greet(undefined, 30)} (имя = "Гость")

📝 Объяснение:
   - Если параметр не передан, используется значение по умолчанию
   - Это делает функции более гибкими
   - Можно передавать только часть параметров
    `;
    
    displayOutput('Параметры по умолчанию', result);
}

// ----- Задание 3: Простые задачи -----

function taskCheckAge() {
    const input = document.getElementById('ageInput');
    const age = parseInt(input.value);
    
    if (isNaN(age) || age < 0) {
        displayOutput('Ошибка', '❌ Пожалуйста, введите корректный возраст', 'error');
        return;
    }
    
    function checkAge(age) {
        if (age < 18) {
            return "🔴 Тебе меньше 18 лет. Голосовать пока нельзя.";
        } else if (age >= 18 && age < 65) {
            return "🟢 Тебе от 18 до 65 лет. Можешь голосовать!";
        } else {
            return "🟡 Тебе больше 65 лет. Удачи и здоровья!";
        }
    }
    
    const result = `
Проверка возраста:

Возраст: ${age} лет

✅ Результат:
   ${checkAge(age)}

📝 Объяснение:
   - Функция проверяет возраст
   - Использует условные операторы (if/else)
   - Возвращает разные сообщения для разных возрастов
    `;
    
    displayOutput('Проверка возраста', result);
}

function taskConvertTemp() {
    const input = document.getElementById('tempInput');
    const celsius = parseFloat(input.value);
    
    if (isNaN(celsius)) {
        displayOutput('Ошибка', '❌ Пожалуйста, введите температуру', 'error');
        return;
    }
    
    function celsiusToFahrenheit(c) {
        return (c * 9/5) + 32;
    }
    
    function fahrenheitToCelsius(f) {
        return (f - 32) * 5/9;
    }
    
    const fahrenheit = celsiusToFahrenheit(celsius);
    
    const result = `
Перевод температуры:

🌡️ ${celsius}°C = ${fahrenheit.toFixed(1)}°F

📊 Шкала:
   Замерзание: 0°C = 32°F
   Кипение: 100°C = 212°F
   Комнатная: 20°C = 68°F

📝 Формула: °F = (°C × 9/5) + 32
    `;
    
    displayOutput('Перевод температуры', result);
}

function taskMaxNumber() {
    const num1 = parseFloat(document.getElementById('num1Input').value);
    const num2 = parseFloat(document.getElementById('num2Input').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        displayOutput('Ошибка', '❌ Пожалуйста, введите числа', 'error');
        return;
    }
    
    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
    
    function min(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
    
    const result = `
Максимум из двух чисел:

Числа: ${num1} и ${num2}

📊 Результаты:
   Максимум: ${max(num1, num2)}
   Минимум: ${min(num1, num2)}

📝 Объяснение:
   - Функция сравнивает два числа
   - Возвращает большее (или меньшее)
   - Использует условный оператор if/else
    `;
    
    displayOutput('Максимум из двух чисел', result);
}

// ----- Задание 4: Работа с массивами -----

function taskSumArray() {
    const numbers = DATA.numbers;
    
    function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }
    
    const result = `
Сумма элементов массива:

📊 Массив: ${formatArray(numbers)}

✅ Сумма всех чисел: ${sumArray(numbers)}

📝 Объяснение:
   - Функция проходит по всем элементам массива
   - Складывает каждый элемент с общей суммой
   - Возвращает итоговую сумму
    `;
    
    displayOutput('Сумма массива', result);
}

function taskMaxInArray() {
    const numbers = DATA.numbers;
    
    function findMax(arr) {
        if (arr.length === 0) return null;
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    const result = `
Максимальное число в массиве:

📊 Массив: ${formatArray(numbers)}

✅ Максимальное число: ${findMax(numbers)}

📝 Объяснение:
   - Начинаем с первого элемента
   - Сравниваем с каждым следующим
   - Если находим больше — запоминаем его
    `;
    
    displayOutput('Максимальное число', result);
}

function taskFilterArray() {
    const input = document.getElementById('filterInput');
    const threshold = parseFloat(input.value);
    
    if (isNaN(threshold)) {
        displayOutput('Ошибка', '❌ Введите число', 'error');
        return;
    }
    
    const numbers = DATA.numbers;
    
    function filterGreater(arr, minValue) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > minValue) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    
    const filtered = filterGreater(numbers, threshold);
    
    const result = `
Фильтрация чисел:

📊 Массив: ${formatArray(numbers)}
🔢 Порог: ${threshold}

✅ Числа больше ${threshold}: ${formatArray(filtered)}
   Количество: ${filtered.length}

📝 Объяснение:
   - Создаем новый пустой массив
   - Проверяем каждый элемент
   - Если элемент подходит — добавляем в новый массив
    `;
    
    displayOutput('Фильтрация', result);
}

// ----- Задание 5: Работа с объектами -----

function taskUserInfo() {
    const users = DATA.users;
    
    function formatUser(user) {
        return `👤 ${user.name} | ${user.age} лет | г. ${user.city}`;
    }
    
    let result = '📊 Список пользователей:\n\n';
    for (let i = 0; i < users.length; i++) {
        result += `   ${i+1}. ${formatUser(users[i])}\n`;
    }
    
    displayOutput('Информация о пользователях', result);
}

function taskFindUser() {
    const input = document.getElementById('searchNameInput');
    const searchName = input.value.trim();
    
    if (!searchName) {
        displayOutput('Ошибка', '❌ Введите имя для поиска', 'error');
        return;
    }
    
    const users = DATA.users;
    
    function findUserByName(arr, name) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === name) {
                return arr[i];
            }
        }
        return null;  // Не найден
    }
    
    const user = findUserByName(users, searchName);
    
    if (user) {
        const result = `
✅ Пользователь найден!

   👤 Имя: ${user.name}
   📅 Возраст: ${user.age} лет
   🏙️ Город: ${user.city}
        `;
        displayOutput('Поиск пользователя', result);
    } else {
        displayOutput('Поиск пользователя', `❌ Пользователь "${searchName}" не найден`, 'error');
    }
}

function taskAverageAge() {
    const users = DATA.users;
    
    function calculateAverageAge(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i].age;
        }
        return sum / arr.length;
    }
    
    const avg = calculateAverageAge(users);
    
    let ages = users.map(u => `${u.name} (${u.age} лет)`).join(', ');
    
    const result = `
📊 Средний возраст пользователей:

Возраста: ${ages}

✅ Средний возраст: ${avg.toFixed(1)} лет
   Всего пользователей: ${users.length}
    `;
    
    displayOutput('Средний возраст', result);
}

// ----- Задание 6: Комбинированные задачи -----

function taskUserStats() {
    const users = DATA.users;
    
    function getStats(arr) {
        let total = arr.length;
        let sumAge = 0;
        let maxAge = arr[0].age;
        let minAge = arr[0].age;
        
        for (let user of arr) {
            sumAge += user.age;
            if (user.age > maxAge) maxAge = user.age;
            if (user.age < minAge) minAge = user.age;
        }
        
        return {
            total: total,
            averageAge: sumAge / total,
            maxAge: maxAge,
            minAge: minAge,
            cities: [...new Set(arr.map(u => u.city))]
        };
    }
    
    const stats = getStats(users);
    
    const result = `
📊 Полная статистика по пользователям:

👥 Всего пользователей: ${stats.total}

📅 Возраст:
   Средний: ${stats.averageAge.toFixed(1)} лет
   Максимальный: ${stats.maxAge} лет
   Минимальный: ${stats.minAge} лет

🏙️ Города: ${stats.cities.join(', ')}
    `;
    
    displayOutput('Статистика пользователей', result);
}

function taskGroupByCity() {
    const users = DATA.users;
    
    function groupByCity(arr) {
        let groups = {};
        
        for (let user of arr) {
            let city = user.city;
            if (!groups[city]) {
                groups[city] = [];
            }
            groups[city].push(user.name);
        }
        
        return groups;
    }
    
    const groups = groupByCity(users);
    
    let result = '📊 Группировка по городам:\n\n';
    for (let city in groups) {
        let names = groups[city];
        result += `🏙️ ${city} (${names.length} чел.)\n`;
        result += `   ${names.join(', ')}\n\n`;
    }
    
    displayOutput('Группировка по городам', result);
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createUI();
    console.log('🚀 Лабораторная работа 2б (для начинающих) загружена!');
    console.log('📊 Данные:', DATA);
    console.log('💡 Нажимайте кнопки и смотрите результаты!');
});