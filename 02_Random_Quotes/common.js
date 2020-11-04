const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const author = document.querySelector('.author');

function randomQuotes(quotes) {
    const quotesLength = quotes.length;
    quotesIndex = Math.floor(Math.random() * quotesLength);
    text.textContent = quotes[quotesIndex].quote;
    author.textContent = quotes[quotesIndex].author;
}

/*

fetch (unsupported in IE)

function loadQuotes() {
    return fetch('data.json')
        .then(response => response.json())
        .then(json => json.quotes);
}
loadQuotes()
    .then(quotes => {
        randomQuotes(quotes);
        btn.addEventListener('click', function(){
            randomQuotes(quotes);
        });
    })
    .catch(console.log);

*/


/* ajax */
ajax = new XMLHttpRequest();

ajax.open('GET', 'data.json');

ajax.onreadystatechange = function(){
    if(this.readyState === this.DONE){
        if (ajax.status === 200) {
            const data = JSON.parse(this.responseText);
            const quotes = data.quotes;
            randomQuotes(quotes);
            btn.addEventListener('click', function(){
                randomQuotes(quotes);
            });
        } else {
            console.error('error!')
        }   
    }
}

ajax.send();


