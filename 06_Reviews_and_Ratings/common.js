const img = document.querySelector('.img');
const star = document.querySelector('.star_on');
const title = document.querySelector('.content-title');
const text = document.querySelector('.text');
const name = document.querySelector('.name');
const part = document.querySelector('.part');
const btn = document.querySelectorAll('.btn');

const contents = [
    {
        img : 'person1',
        star : 6,
        title: '이해하지 말고 그냥 즐기자',
        text : '독특한 소재, 엄청난 스케일, 웅장한 음악. 크리스토퍼 놀란의 <테넷>은 관객들이 기대하는 모든 것을 담아 특별한 영화적 체험을 선사한다. 시간의 역행이라는 복잡한 개념과 블록버스터급 스펙터클을 균형 있게 담아냈고, CG에 의존하지 않고 아날로그 방식을 통한 현실감 넘치는 특수효과로 시각적 경이로움을 구현한다. 다만 영화가 담고 있는 시간의 분절과 이동 등 선뜻 이해하기 어려운 과학적 이론을 설명하는 과정은 지루하며, 장면들을 이어 사건의 연속성을 보여주는 시도들도 서사를 제대로 파악하기에 부족한 점이 있다. 궁금한 점이 많은 관객의 질문에 내놓은 친절하지 않은 대답.',
        name : '심규한',
        part : '<씨네플레이> 기자',
    },
    {
        img : 'person2',
        star : 8,
        title: '전무후무한 시간설계도',
        text : '아예 다른 차원에서 만들어진 영화 같다. 이전에 본 적 없는 이미지가 있고, 그 무엇과도 닮지 않은 시간 여행이 있으며, 당신의 지적 호기심에 불을 지피거나 열패감에 젖게 하는 얽히고설킨 플롯에, 거대 자본이 투입된 블록버스터를 만들면서 자신의 취향을 극한으로 밀어붙인 작가의 야심이 있다. 관람의 두통을 안기는 고난도 매커니즘의 영화는 보통 관객의 ‘대량 이탈’을 부르기 마련인데 <테넷>이 거꾸로 많은 관객으로 하여금 더 바짝 당겨 앉게 하는 건 크리스토퍼 논란의 작품이기 때문이기도 하지만, 복잡한 와중에도 ‘뭔가 굉장한 걸 보고 있다’는 확신을 지속적으로 전달하고 있기 때문일 테다. 대칭으로 접힌 기기묘묘한 시간 속에 관찰자로 동승한다는 기분만으로도 적잖이 흥분된다. 어디가 역주행이고 어디가 정주행인지 구분 제시가 불친절해서 오는 난해함은 아쉽지만, 그럼에도 모든 퍼즐이 맞춰질 때 다가오는 저릿함이 상당하며, 필름을 되돌리며 순간순간을 짚는 과정은 이 차갑던 영화에 뜨거운 피를 돌게 한다. “이해하려 하지 말고 느껴라”라는 대사가 <테넷> 감상법으로 제시되는 분위기지만, 놀란이 진짜 전하고 싶은 핵심은 다른 데 있는 것 같다. 바로 이것 “새로운 시각으로 세상(영화)을 보라!',
        name : '정시우',
        part : '영화 저널리스트',
    },
    {
        img : 'person3',
        star : 7,
        title: '여전히 놀랍지만 단점도 보인다',
        text : '놀란 감독의 강점이 극대화된 영화다. 이번에도 전작을 뛰어넘으려는 기술적인 시도, 완벽을 추구하는 테크니션이라는 존재감이 또렷하다. 소재, 장르에 대한 새로운 접근법과 영화적 기술을 총합해 최상급 엔터테인먼트를 제공하는 체험을 또 한 번 기꺼이 받아들이도록 만든다. 지금껏 보지 못한 장면을 눈앞에 펼쳐놓는 능력은 여전히 독보적이다. 그렇다고 완벽한 영화라고 볼 수는 없다. 불친절한 화법을 떼놓고서라도 캐릭터 구축이나 주제 전달 방식에서 약점이 드러나고, 기술 면에서도 과잉으로 여겨지는 부분들이 없지 않다. 감독의 장기인 SF와 그가 열망해온 첩보 장르가 모처럼 만난 블록버스터 오락 영화인데, 장르적 쾌감이 크거나 보편적이지 않다는 점 또한 곱씹어 봐야 한다.',
        name : '정유미',
        part : '<더 스크린> 에디터',
    },
]

let num = 0;

btn.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.classList.contains('btn-prev')){
            if(num <= 0) {
                num = contents.length-1
            } else {
                num--
            }
        } else {
            if(num >= contents.length-1) {
                num = 0
            } else {
                num++
            }
        }
        img.style = `background-image: url(img/${contents[num].img}.jpg`;
        star.style = `width: ${contents[num].star/10*100}%`;
        title.textContent = contents[num].title;
        text.textContent = contents[num].text;
        name.textContent = contents[num].name;
        part.textContent = contents[num].part;
    });
});