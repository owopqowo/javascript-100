const btn = document.querySelectorAll('button');
const counterText = document.querySelector('.counter')
let counter = 0;
let counterNum;

btn.forEach(function(element){
    element.addEventListener('click', function(){
        
        if(element.classList.contains('lower')){
            --counter
        } else if(element.classList.contains('add')) {
            ++counter
        }

        counterText.innerText = counter;
        counterNum =  Number(counterText.innerText);

        if(counterNum == 0) {
            counterText.style = "color:white";
        } else if(counterNum < 0) {
            counterText.style = "color:red";
        } else {
            counterText.style = "color:blue";
        }
        
    });
});