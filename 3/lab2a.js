// ============================================
// ИСХОДНЫЕ ДАННЫЕ
// ============================================
const INITIAL_DATA = {
    numbers: [12, 7, 23, 45, 18, 31, 6, 42, 19, 8],
    fruits: ["яблоко", "банан", "апельсин", "груша", "киви", "манго", "ананас"],
    students: [
        { id: 1, name: "Алексей", age: 20, group: "ИС-201", grade: 85 },
        { id: 2, name: "Мария", age: 19, group: "ИС-202", grade: 92 },
        { id: 3, name: "Иван", age: 21, group: "ИС-201", grade: 78 },
        { id: 4, name: "Екатерина", age: 20, group: "ИС-203", grade: 95 },
        { id: 5, name: "Дмитрий", age: 22, group: "ИС-201", grade: 67 },
        { id: 6, name: "Анна", age: 19, group: "ИС-202", grade: 88 }
    ],
    matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
};

// Глобальные рабочие копии
let numbers = [...INITIAL_DATA.numbers];
let fruits = [...INITIAL_DATA.fruits];
let students = INITIAL_DATA.students.map(s => ({ ...s }));
let matrix = INITIAL_DATA.matrix.map(row => [...row]);

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function formatArray(arr) {
    if (!Array.isArray(arr)) return String(arr);
    if (arr.length === 0) return "[]";
    return `[${arr.join(", ")}]`;
}

function formatStudentsList(list) {
    if (!list || list.length === 0) return "Список пуст";
    return list.map(s => `${s.name} | id: ${s.id} | возр: ${s.age} | гр: ${s.group} | оц: ${s.grade}`).join("\n");
}

function displayData(title, data) {
    const output = document.getElementById("output");
    if (!output) return; 

    let content = `<strong>📌 ${escapeHtml(title)}</strong>\n\n`;

    if (typeof data === "string") {
        content += escapeHtml(data);
    } else if (Array.isArray(data)) {
        if (data.length === 0) {
            content += "Массив пуст []";
        } else if (typeof data[0] === "object" && data[0] !== null) {
            content += escapeHtml(JSON.stringify(data, null, 2));
        } else {
            content += escapeHtml(`[${data.join(", ")}]\n\n📊 Длина: ${data.length}`);
        }
    } else {
        content += escapeHtml(JSON.stringify(data, null, 2));
    }

    output.innerHTML = content;
}

function updateDataDisplay() {
    const nDisp = document.getElementById("numbersDisplay");
    const fDisp = document.getElementById("fruitsDisplay");
    const sDisp = document.getElementById("studentsDisplay");
    const sCount = document.getElementById("studentsCount");
    const sList = document.getElementById("studentsList");

    if (nDisp) nDisp.textContent = `[${numbers.join(", ")}]`;
    if (fDisp) fDisp.textContent = `[${fruits.join(", ")}]`;
    if (sDisp) sDisp.textContent = `Всего: ${students.length} студентов`;
    if (sCount) sCount.textContent = students.length;
    if (sList) sList.textContent = students.map(s => s.name).join(", ");
}

function resetData() {
    numbers = [...INITIAL_DATA.numbers];
    fruits = [...INITIAL_DATA.fruits];
    students = INITIAL_DATA.students.map(s => ({ ...s }));
    matrix = INITIAL_DATA.matrix.map(row => [...row]);
    
    updateDataDisplay();
    displayData("Статус", "🔹 Данные сброшены к исходному состоянию");
}

// ============================================
// СОЗДАНИЕ ИНТЕРФЕЙСА
// ============================================

function createUI() {
    const app = document.getElementById("app");
    
    app.innerHTML = `
        <div class="section">
            <h2>📋 Текущие данные</h2>
            <div class="data-display">
                <p><strong>Числа:</strong> <span id="numbersDisplay"></span></p>
                <p><strong>Фрукты:</strong> <span id="fruitsDisplay"></span></p>
                <p><strong>Студенты:</strong> <span id="studentsDisplay"></span> <span class="badge" id="studentsCount">0</span></p>
                <p><strong>Имена:</strong> <span id="studentsList"></span></p>
            </div>
            <button class="danger" onclick="resetData()">🔄 Сбросить данные</button>
        </div>

        <div class="section">
            <h2>📤 Результаты операций</h2>
            <div class="output" id="output">Нажмите на кнопку для вывода результата...</div>
        </div>

        <!-- Задание 1 -->
        <div class="section">
            <h2>📌 Задание 1: Базовые операции</h2>
            <div class="task">
                <h4>1.1 Добавление/Удаление</h4>
                <div class="flex">
                    <input type="text" id="newNumberInput" placeholder="Число..." style="width:100px;">
                    <button onclick="addNumber()">В конец</button>
                    <button onclick="addNumberFront()">В начало</button>
                    <button class="danger" onclick="removeLastNumber()">Удалить последний</button>
                    <button class="danger" onclick="removeFirstNumber()">Удалить первый</button>
                </div>
            </div>
             <div class="task">
                <h4>1.2 Индексные операции</h4>
                <div class="flex">
                    <input type="number" id="removeIndexInput" placeholder="Индекс" style="width:80px;" min="0">
                    <button class="danger" onclick="removeAtIndex()">Удалить по индексу</button>
                    <button onclick="insertAtIndex()">Вставить по индексу</button>
                </div>
            </div>
        </div>

        <!-- Задание 2 -->
        <div class="section">
            <h2>📌 Задание 2: Map, Filter, Reduce</h2>
            <div class="task">
                <h4>Преобразование и Фильтрация</h4>
                <button onclick="doubleNumbers()">Удвоить числа (map)</button>
                <button onclick="filterEven()">Только четные (filter)</button>
                <button onclick="sumNumbers()">Сумма всех (reduce)</button>
                <button onclick="maxNumber()">Максимум (reduce)</button>
            </div>
            <div class="task">
                <h4>Поиск</h4>
                 <div class="flex">
                    <input type="number" id="findNumberInput" placeholder="Число" style="width:80px;">
                    <button onclick="findNumber()">Найти число</button>
                    
                    <input type="text" id="findStudentInput" placeholder="Имя студента" style="width:120px;">
                    <button onclick="findStudent()">Найти студента</button>
                </div>
            </div>
        </div>

        <!-- Задание 3 -->
        <div class="section">
            <h2>📌 Задание 3: Проверка и Сортировка</h2>
            <div class="task">
                <button onclick="checkEvenExists()">Есть ли четные? (some)</button>
                <button onclick="checkAllEven()">Все ли четные? (every)</button>
                <button onclick="sortNumbersAsc()">Сортировать ↑</button>
                <button onclick="sortNumbersDesc()">Сортировать ↓</button>
            </div>
        </div>

        <!-- Задание 4 -->
        <div class="section">
            <h2>📌 Задание 4: Матрицы и Статистика</h2>
            <div class="task">
                <button onclick="sumMatrix()">Сумма матрицы</button>
                <button onclick="transposeMatrix()">Транспонировать</button>
                <button onclick="flattenMatrix()">Развернуть (flat)</button>
            </div>
             <div class="task">
                <button onclick="groupStudentsByGroup()">Группировка студентов</button>
                <button onclick="statsByGroup()">Статистика по группам</button>
            </div>
        </div>

        <!-- Задание 5 -->
        <div class="section">
            <h2>📌 Задание 5: Комбинированные задачи</h2>
            <div class="task">
                <button onclick="getTopStudents()">Топ-3 студентов</button>
                <button onclick="getUniqueAges()">Уникальные возрасты</button>
            </div>
        </div>

        <!-- ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ -->
        <div class="section">
            <h2>📌 Доп. задания: Самостоятельная работа</h2>
            
            <div class="task">
                <h4>1. Числа</h4>
                <button onclick="showPrimes()">Простые числа</button>
                <button onclick="showSquares()">Квадраты чисел</button>
                <button onclick="showProduct()">Произведение (reduce)</button>
            </div>

            <div class="task">
                <h4>2. Строки</h4>
                <button onclick="showLongestWord()">Самое длинное слово</button>
                <button onclick="showShortestWord()">Самое короткое слово</button>
                <button onclick="showWordLengthStats()">Слова по длине</button>
            </div>

            <div class="task">
                <h4>3. Объекты (CRUD)</h4>
                <div class="flex" style="margin-bottom:10px;">
                     <input type="text" id="groupFindInput" placeholder="Группа (напр. ИС-201)" style="width:150px;">
                     <button onclick="showFindByGroup()">Найти по группе</button>
                </div>
                <div class="flex" style="margin-bottom:10px;">
                    <input type="number" id="updateStudentIdInput" placeholder="ID" style="width:60px;">
                    <input type="text" id="updateStudentNameInput" placeholder="Новое имя" style="width:100px;">
                    <input type="number" id="updateStudentGradeInput" placeholder="Нова оценка" style="width:100px;">
                    <button class="success" onclick="showUpdateStudent()">Обновить</button>
                </div>
                <div class="flex">
                    <input type="number" id="deleteStudentIdInput" placeholder="ID для удаления" style="width:120px;">
                    <button class="danger" onclick="showDeleteStudent()">Удалить</button>
                </div>
            </div>

            <div class="task">
                <h4>4. Аналитика</h4>
                <button onclick="showTopStudentInGroup()">Лучший в каждой группе</button>
                <button onclick="showAgeDistribution()">Распределение по возрасту</button>
                <div class="flex" style="margin-top:10px;">
                    <input type="number" id="thresholdInput" placeholder="Порог оценки" style="width:120px;">
                    <button onclick="showPassingStudents()">Студенты >= порога</button>
                </div>
            </div>
        </div>
    `;
    
    updateDataDisplay();
}

// ============================================
// РЕАЛИЗАЦИЯ ЛОГИКИ (ВСЕ ФУНКЦИИ)
// ============================================

// --- Задание 1 ---
function addNumber() {
    const val = parseInt(document.getElementById('newNumberInput').value);
    if (isNaN(val)) return displayData("Ошибка", "❌ Введите число");
    numbers.push(val);
    document.getElementById('newNumberInput').value = '';
    updateDataDisplay();
    displayData("Добавление", `Добавлено ${val}. Массив: [${numbers.join(', ')}]`);
}
function addNumberFront() {
    const val = parseInt(document.getElementById('newNumberInput').value);
    if (isNaN(val)) return displayData("Ошибка", "❌ Введите число");
    numbers.unshift(val);
    document.getElementById('newNumberInput').value = '';
    updateDataDisplay();
    displayData("Добавление", `Добавлено ${val} в начало. Массив: [${numbers.join(', ')}]`);
}
function removeLastNumber() {
    if(numbers.length===0) return displayData("Ошибка", "Массив пуст");
    const rem = numbers.pop();
    updateDataDisplay();
    displayData("Удаление", `Удален последний: ${rem}. Массив: [${numbers.join(', ')}]`);
}
function removeFirstNumber() {
    if(numbers.length===0) return displayData("Ошибка", "Массив пуст");
    const rem = numbers.shift();
    updateDataDisplay();
    displayData("Удаление", `Удален первый: ${rem}. Массив: [${numbers.join(', ')}]`);
}
function removeAtIndex() {
    const idx = parseInt(document.getElementById('removeIndexInput').value);
    if(isNaN(idx) || idx < 0 || idx >= numbers.length) return displayData("Ошибка", "Некорректный индекс");
    const rem = numbers.splice(idx, 1)[0];
    document.getElementById('removeIndexInput').value = '';
    updateDataDisplay();
    displayData("Удаление", `Удален элемент под индексом ${idx}: ${rem}. Массив: [${numbers.join(', ')}]`);
}
function insertAtIndex() {
    const idx = parseInt(document.getElementById('removeIndexInput').value);
    const val = parseInt(document.getElementById('newNumberInput').value);
    if(isNaN(idx) || isNaN(val) || idx < 0 || idx > numbers.length) return displayData("Ошибка", "Некорректные данные");
    numbers.splice(idx, 0, val);
    document.getElementById('removeIndexInput').value = '';
    document.getElementById('newNumberInput').value = '';
    updateDataDisplay();
    displayData("Вставка", `Вставлено ${val} на позицию ${idx}. Массив: [${numbers.join(', ')}]`);
}

// --- Задание 2 ---
function doubleNumbers() {
    const res = numbers.map(n => n * 2);
    displayData("Map: Удвоение", `Результат: [${res.join(', ')}]`);
}
function filterEven() {
    const res = numbers.filter(n => n % 2 === 0);
    displayData("Filter: Четные", `Результат: [${res.join(', ')}] (${res.length} шт.)`);
}
function sumNumbers() {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    displayData("Reduce: Сумма", `Сумма: ${sum}`);
}
function maxNumber() {
    if(numbers.length === 0) return displayData("Ошибка", "Массив пуст");
    const max = numbers.reduce((m, n) => n > m ? n : m, numbers[0]);
    displayData("Reduce: Максимум", `Максимум: ${max}`);
}
function findNumber() {
    const val = parseInt(document.getElementById('findNumberInput').value);
    const found = numbers.find(n => n === val);
    if(found !== undefined) displayData("Find", `✅ Нашли число ${val}`);
    else displayData("Find", `❌ Число ${val} не найдено`);
}
function findStudent() {
    const name = document.getElementById('findStudentInput').value.trim().toLowerCase();
    const student = students.find(s => s.name.toLowerCase() === name);
    if(student) displayData("Find Student", JSON.stringify(student, null, 2));
    else displayData("Find Student", `❌ Студент "${name}" не найден`);
}

// --- Задание 3 ---
function checkEvenExists() {
    const has = numbers.some(n => n % 2 === 0);
    displayData("Some", has ? "✅ Есть четные" : "❌ Нет четных");
}
function checkAllEven() {
    const all = numbers.every(n => n % 2 === 0);
    displayData("Every", all ? "✅ Все четные" : "❌ Не все четные");
}
function sortNumbersAsc() {
    const sorted = [...numbers].sort((a,b) => a-b);
    displayData("Sort Asc", `[${sorted.join(', ')}]`);
}
function sortNumbersDesc() {
    const sorted = [...numbers].sort((a,b) => b-a);
    displayData("Sort Desc", `[${sorted.join(', ')}]`);
}

// --- Задание 4 ---
function sumMatrix() {
    let sum = 0;
    matrix.forEach(row => row.forEach(num => sum += num));
    displayData("Sum Matrix", `Сумма элементов матрицы: ${sum}`);
}
function transposeMatrix() {
    const t = [];
    for(let j=0; j<matrix[0].length; j++) {
        t[j] = [];
        for(let i=0; i<matrix.length; i++) {
            t[j][i] = matrix[i][j];
        }
    }
    displayData("Transpose", `Транспонированная:\n${t.map(r=>`[${r.join(',')}]`).join('\n')}`);
}
function flattenMatrix() {
    const flat = matrix.flat();
    displayData("Flatten", `Плоский массив: [${flat.join(', ')}]`);
}
function groupStudentsByGroup() {
    const groups = {};
    students.forEach(s => {
        if(!groups[s.group]) groups[s.group] = [];
        groups[s.group].push(s.name);
    });
    let res = "";
    for(const g in groups) {
        res += `${g}: ${groups[g].join(', ')}\n`;
    }
    displayData("Groups", res);
}
function statsByGroup() {
    const stats = {};
    students.forEach(s => {
        if(!stats[s.group]) stats[s.group] = {count:0, sum:0};
        stats[s.group].count++;
        stats[s.group].sum += s.grade;
    });
    let res = "";
    for(const g in stats) {
        const avg = (stats[g].sum / stats[g].count).toFixed(1);
        res += `${g}: Ср. балл ${avg} (${stats[g].count} чел.)\n`;
    }
    displayData("Stats", res);
}

// --- Задание 5 ---
function getTopStudents() {
    const top = [...students].sort((a,b)=>b.grade-a.grade).slice(0,3);
    displayData("Top 3", top.map((s,i)=>`${i+1}. ${s.name} - ${s.grade}`).join('\n'));
}
function getUniqueAges() {
    const ages = [...new Set(students.map(s=>s.age))].sort((a,b)=>a-b);
    displayData("Unique Ages", `Возрасты: ${ages.join(', ')}`);
}

// --- ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ ---

// 1. Числа
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function showPrimes() {
    const primes = numbers.filter(isPrime);
    displayData("Primes", `Простые: [${primes.join(', ')}]`);
}
function showSquares() {
    const squares = numbers.map(n => n*n);
    displayData("Squares", `Квадраты: [${squares.join(', ')}]`);
}
function showProduct() {
    const prod = numbers.reduce((acc, n) => acc * n, 1);
    displayData("Product", `Произведение: ${prod}`);
}

// 2. Строки
function showLongestWord() {
    const longest = fruits.reduce((l, w) => w.length > l.length ? w : l, "");
    displayData("Longest Word", `Самое длинное: "${longest}" (${longest.length})`);
}
function showShortestWord() {
    if(fruits.length === 0) return displayData("Error", "Нет слов");
    const shortest = fruits.reduce((s, w) => w.length < s.length ? w : s, fruits[0]);
    displayData("Shortest Word", `Самое короткое: "${shortest}" (${shortest.length})`);
}
function showWordLengthStats() {
    const counts = {};
    fruits.forEach(w => {
        counts[w.length] = (counts[w.length] || 0) + 1;
    });
    let res = "";
    Object.keys(counts).sort((a,b)=>a-b).forEach(len => {
        res += `Длина ${len}: ${counts[len]} слов\n`;
    });
    displayData("Word Lengths", res);
}

// 3. Объекты CRUD
function showFindByGroup() {
    const grp = document.getElementById('groupFindInput').value.trim();
    const found = students.filter(s => s.group === grp);
    displayData(`Find Group: ${grp}`, formatStudentsList(found));
}
function showUpdateStudent() {
    const id = parseInt(document.getElementById('updateStudentIdInput').value);
    const newName = document.getElementById('updateStudentNameInput').value.trim();
    const newGradeStr = document.getElementById('updateStudentGradeInput').value.trim();
    
    const idx = students.findIndex(s => s.id === id);
    if(idx === -1) return displayData("Error", "Студент не найден");

    if(newName) students[idx].name = newName;
    if(newGradeStr) students[idx].grade = parseInt(newGradeStr);

    // Clear inputs
    document.getElementById('updateStudentNameInput').value = '';
    document.getElementById('updateStudentGradeInput').value = '';
    
    updateDataDisplay();
    displayData("Updated", `Студент ID ${id} обновлен:\n${JSON.stringify(students[idx], null, 2)}`);
}
function showDeleteStudent() {
    const id = parseInt(document.getElementById('deleteStudentIdInput').value);
    const idx = students.findIndex(s => s.id === id);
    if(idx === -1) return displayData("Error", "Студент не найден");
    
    const deleted = students.splice(idx, 1)[0];
    document.getElementById('deleteStudentIdInput').value = '';
    updateDataDisplay();
    displayData("Deleted", `Удален: ${deleted.name}`);
}

// 4. Аналитика
function showTopStudentInGroup() {
    const best = {};
    students.forEach(s => {
        if(!best[s.group] || s.grade > best[s.group].grade) {
            best[s.group] = s;
        }
    });
    let res = "";
    for(const g in best) {
        res += `${g}: ${best[g].name} (${best[g].grade})\n`;
    }
    displayData("Best per Group", res);
}
function showAgeDistribution() {
    const dist = {};
    students.forEach(s => {
        dist[s.age] = (dist[s.age] || 0) + 1;
    });
    let res = "";
    Object.keys(dist).sort((a,b)=>a-b).forEach(age => {
        res += `${age} лет: ${dist[age]} чел.\n`;
    });
    displayData("Age Dist", res);
}
function showPassingStudents() {
    const thr = parseInt(document.getElementById('thresholdInput').value);
    if(isNaN(thr)) return displayData("Error", "Введите порог");
    const passed = students.filter(s => s.grade >= thr);
    displayData(`Passed (>= ${thr})`, formatStudentsList(passed));
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    createUI();
    console.log("✅ Lab 2a Loaded Successfully");
});