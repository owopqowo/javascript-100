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

const NUM = 3

let tipVal = document.querySelector('input[name="tip"]:checked').value;

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
        } else {
            ++num
            split.textContent = num;
        }
    });
})

btnEnter.addEventListener('click', function(){
    if(total.textContent === '0') {
        alert('enter bill total')
    } else if(split.textContent === '0') {
        alert('enter split')
    } else {
        resultBill.textContent = Number(total.textContent) / Number(split.textContent);
        resultTip.textContent = Number(total.textContent) * (Number(tipVal) / 100);
        resultTotal.textContent = Number(resultBill.textContent) + Number(resultTip.textContent);
        toast.classList.add('show');
        setTimeout(function(){
            toast.classList.remove('show');
            total.textContent = '0';
            split.textContent = '0';
            customTip.textContent = '0';
            custom.parentElement.classList.remove('show');
            document.querySelector('#twenty').checked = true;
        },5000);
    }
});
