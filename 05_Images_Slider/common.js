const slide = document.querySelector('.slide');
const btn = document.querySelectorAll('.slider-navi button');
const img = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
]
let slideCount = 0;

btn.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.classList.contains('btn-prev')){
            if(slideCount <= 0) {
                slideCount = img.length - 1;
            } else {
                --slideCount;
            }
        } else if(element.classList.contains('btn-next')){
            if(slideCount >= img.length - 1) {
                slideCount = 0;
            } else {
                ++slideCount;
            }
        }
        slide.style = `background-image: url(img/${img[slideCount]})`
    });
});