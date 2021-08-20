const btn0 = document.getElementById('btn0')
const btn1 = document.getElementById('btn1')
const btnClr = document.getElementById('btnClr')
const btnEql = document.getElementById('btnEql')
const btnSum = document.getElementById('btnSum')
const btnSub = document.getElementById('btnSub')
const btnMul = document.getElementById('btnMul')
const btnDiv = document.getElementById('btnDiv')

const res = document.getElementById('res')

let number1 = null
let number2 = null
let currentOperator = '';
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor((a / b))
}

btn0.addEventListener('click', function () {
    setOuput(btn0)
})

btn1.addEventListener('click', function () {
    setOuput(btn1)
})

btnClr.addEventListener('click', function () {
    setOuput()
})

btnEql.addEventListener('click', function () {
    let numbers = res.innerHTML.split(/[\+\-\*\/]/)
    number1 = parseInt(numbers[0], 2)
    number2 = parseInt(numbers[1], 2)

    res.innerHTML = operations[currentOperator](number1, number2).toString(2)
    number1 = null
    number2 = null
})

btnSum.addEventListener('click', function () {
    setOuput(btnSum,btnSum.innerHTML)
})

btnSub.addEventListener('click', function () {
    setOuput(btnSub,btnSub.innerHTML)
})

btnMul.addEventListener('click', function () {
    setOuput(btnMul,btnMul.innerHTML)
})

btnDiv.addEventListener('click', function () {
    setOuput(btnDiv,btnDiv.innerHTML)
})


function setOuput(el = null,operator = '') {
    if (el) {
        res.innerHTML = res.innerHTML + el.innerHTML
        if (operator) {
            currentOperator = operator
        }
    } else {
        res.innerHTML = ''
        currentOperator = ''
    }
}