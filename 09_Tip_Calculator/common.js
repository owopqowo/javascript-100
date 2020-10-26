const textBox = document.querySelectorAll('.text-box');
const radio = document.querySelectorAll('input[name="tip"]');
const custom = document.querySelector('#custom');
const btnVariation = document.querySelectorAll('.btn-variation');
const split = document.querySelector('#split');
const btnEnter = document.querySelector('.btn-enter');
const toast = document.querySelector('.toast');
const customTip = document.querySelector('.custom-tip');
const resultTotal = document.querySelector('.result-total');
const resultBill = document.querySelector('.result-bill');
const resultTip = document.querySelector('.result-tip');
const total = document.querySelector('#total');
const popup = document.querySelector('.popup');
const popupText = document.querySelector('.popup-text');
const btnOk = document.querySelector('.btn-ok');

const NUM = 3

let tipVal = document.querySelector('input[name="tip"]:checked').value;

function popupShow(text) {
    popup.classList.add('show');
    popupText.textContent = text;
}

function popupHide() {
    popup.classList.remove('show');
}

function toastShow() {
    toast.classList.add('show');
}

function toastHide() {
    toast.classList.remove('show');
}

function calcTip() {
    let calcBill = Number(total.textContent) / Number(split.textContent);
    let calcTip = Number(total.textContent) * (Number(tipVal) / 100);
    let calcTotal = calcBill + calcTip;
    resultBill.textContent = calcBill.toFixed(2);
    resultTip.textContent = calcTip.toFixed(2);
    resultTotal.textContent = calcTotal.toFixed(2);
}

function reset() {
    toastHide();
    total.textContent = '0';
    split.textContent = '0';
    customTip.textContent = '0';
    num = 0;
    custom.parentElement.classList.remove('show');
    document.querySelector('#twenty').checked = true;
}

customTip.addEventListener('keypress', function(e){
    if (customTip.textContent.length >= NUM) {
        e.preventDefault();
    }
})
customTip.addEventListener('keyup', function(){
    tipVal = Number(customTip.textContent);
});

textBox.forEach(function(element){
    const input = element.querySelector('.input');
    input.addEventListener('keypress', function(e){
        if (isNaN(String.fromCharCode(e.which))) {
            e.preventDefault();
        }
    })
});

radio.forEach(function(element){
    element.addEventListener('change', function(){
        const elementId = element.id;
        if(elementId === 'custom') {
            custom.parentElement.classList.add('show');
        } else {
            custom.parentElement.classList.remove('show');
            tipVal = element.value;
        }
        
    });
});

let num = split.textContent;
btnVariation.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.classList.contains('btn-minus')){
            if(num <= 0) {
                num = 0
            } else {
                --num
            }
            split.textContent = num;
        } else if(element.classList.contains('btn-plus')) {
            ++num
            split.textContent = num;
        }
    });
})

btnEnter.addEventListener('click', function(){
    if(total.textContent === '0') {
        popupShow('enter bill total');
    } else if(split.textContent === '0') {
        popupShow('enter split');
    } else {
        calcTip();
        toastShow();
        setTimeout(function(){
            reset();
        },5000);
    }
});

btnOk.addEventListener('click', function(){
    popupHide();
})