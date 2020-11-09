const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');
let ajax;

btn.addEventListener('click', function(){
  joke.textContent = '';
  joke.classList.add('loading');
  btn.disabled = true;
  
  ajax = new XMLHttpRequest();

  ajax.open('GET', 'https://api.chucknorris.io/jokes/random');

  ajax.onreadystatechange = function(){
    if(this.readyState === this.DONE){
      if (ajax.status === 200) {
        const data = JSON.parse(this.responseText);
        joke.classList.remove('loading');
        btn.disabled = false;
        joke.textContent = data.value;
      } else {
        console.error('error!')
      }   
    }
  }

  ajax.send();
});