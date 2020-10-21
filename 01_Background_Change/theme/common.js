const themeCss = document.querySelector('#theme')
const colorItem = document.querySelectorAll('.color-item');
const profile = document.querySelector('.profile');
const profileList = document.querySelector('.profile-list');
const btnFullscreen = document.querySelector('.btn-fullscreen')

colorItem.forEach(function(element){
    element.addEventListener('change', function(){
        const colorName = element.getAttribute('data-color');
        themeCss.setAttribute('href', 'theme-'+colorName+'.css');
    });
});

document.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.classList.contains('profile') || e.target.closest('.profile')){
        profileList.classList.toggle('open');
    } else {
        profileList.classList.remove('open');
    }
});


btnFullscreen.addEventListener('click', toggleFullScreen)

function toggleFullScreen() {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}