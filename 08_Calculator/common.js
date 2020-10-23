const input = document.querySelector('input');
const btnList = document.querySelectorAll('.btn-list button');
const btnEqual = document.querySelector('.btn-equal');


btnList.forEach(function(element){
    element.addEventListener('click', function(){
        const inputVal = input.value;
        const dataText = element.textContent;
        if(dataText == 'C') {
            input.value = '';
        } else {
            input.value = inputVal+dataText;
        }
    });
});

btnEqual.addEventListener('click', function(){
    let inputVal = input.value;
    inputVal = inputVal.replace("×", "*");
    inputVal = inputVal.replace("÷", "/");
    const anwser = eval(inputVal)
    input.value = anwser;
});