const btnList = document.querySelector('.btn-list');
const menuList = document.querySelectorAll('.menu-list li');
const input = document.querySelector('.shearch-box input');
const btnSearch = document.querySelector('.btn-search');
const name = document.querySelectorAll('.menu-list p');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup .img');
const menu = document.querySelector('.menu-list');
const btnPopup = document.querySelectorAll('.popup .btn');

btnList.addEventListener('click', function(e){
    if(e.target.classList.contains('btn')){
        const targetDataName = e.target.getAttribute('data-item');
        menuList.forEach(function(element){
            const elementCurrent = element.getAttribute('data-item');
            if(targetDataName == elementCurrent){
                element.style = 'display: block';
            } else {
                if(e.target.classList.contains('btn-all')){
                    element.style = 'display: block';
                } else {
                    element.style = 'display: none';
                }
            }
        });
    }
});

btnSearch.addEventListener('click', function(){
    const value = input.value;
    name.forEach(function(element){
        const text = element.textContent;
        if(text.indexOf(value) != -1) {
            element.closest('li').style = 'display: block';
        } else {
            element.closest('li').style = 'display: none';
        }
    });
});

menu.addEventListener('click', function(e){
    if(e.target.tagName == 'IMG') {
        const imgSrc = e.target.getAttribute('src');
        popupImg.style = `background-image: url(${imgSrc})`;
        popup.style = "display: block";
    }
});


btnPopup.forEach(function(element){
    element.addEventListener('click', function() {
        let popupNum = popup.getAttribute('data-num');
        if(element.classList.contains('btn-prev')){
            if(popupNum <= 0){
                popupNum = menuList2.length-1;
                popup.setAttribute('data-num', popupNum);
            } else {
                popupNum--;
                popup.setAttribute('data-num', popupNum);
            }
            const imgSrc = menuList[popupNum].children[0].children[0].getAttribute('src');
            popupImg.style = `background-image: url(${imgSrc})`;
        } else if (element.classList.contains('btn-next')) {
            if(popupNum >= menuList.length-1){
                popupNum = 0;
                popup.setAttribute('data-num', popupNum);
            } else {
                popupNum++;
                popup.setAttribute('data-num', popupNum);
            }
            const imgSrc = menuList[popupNum].children[0].children[0].getAttribute('src');
            popupImg.style = `background-image: url(${imgSrc})`;
        } else {
            popup.style = "display: none";
        }
    });
});

