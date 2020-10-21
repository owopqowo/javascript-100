const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const author = document.querySelector('.author');

const quotes = [
    {
        quote: '삶이 있는 한 희망은 있다',
        author : '키케로'
    },
    {
        quote: '너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다',
        author : '랄프 왈도 에머슨'
    },
    {
        quote: '일하는 시간과 노는 시간을 뚜렷이 구분하라 . 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다',
        author : '루이사 메이올콧'
    },
    {
        quote: '화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다',
        author : '머더 테레사'
    },
    {
        quote: '사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다',
        author : '괴테'
    },
    {
        quote: '재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다',
        author : '세르반테스'
    },
    {
        quote: '모든것들에는 나름의 경이로움과 심지어 어둠과 침묵이 있고 , 내가 어떤 상태에 있더라도 나는 그속에서 만족하는 법을 배운다',
        author : '헬렌켈러'
    },
    {
        quote: '삶이 그대를 속일지라도 슬퍼하거나 노하지 말아라 슬픈 날에 참고 견디라 . 즐거운 날은 오고야 말리니 마음은 미래를 바라느니 현재는 한없이 우울한것 모든건 하염없이 사라지나가 버리고 그리움이 되리니',
        author : '푸쉬킨'
    },
    {
        quote: '이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라',
        author : '탈무드'
    },
    {
        quote: '인간의 삶 전체는 단지 한 순간에 불과하다 . 인생을 즐기자',
        author : '플루타르코스'
    },
    {
        quote: '삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다',
        author : '알베르트 아인슈타인'
    },
]

const quotesLength = quotes.length;


btn.addEventListener('click', function(){
    quotesIndex = Math.floor(Math.random() * quotesLength);
    text.textContent = quotes[quotesIndex].quote;
    author.textContent = quotes[quotesIndex].author;
});
