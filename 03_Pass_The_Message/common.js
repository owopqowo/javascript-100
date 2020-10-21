const input = document.querySelector('input');
const btn = document.querySelector('button');
const warn = document.querySelector('.warn');
const last = document.querySelector('.last');
let setTime;

btn.addEventListener('click', function(){
    message();
});

input.addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
        message();
    }
});


function message(){
    if(input.value) {
        last.textContent = input.value;
    } else {
        if(setTime) {
            clearTimeout(setTime);
        }
        warn.style = "display: block";
        setTime = setTimeout(function(){warn.style = "display: none"}, 2000);
    }
}