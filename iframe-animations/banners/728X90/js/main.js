function startad() {
    setTimeout (function() {
        document.getElementById('box1').style.width=0;
        document.getElementById('box2').style.width=0;
        document.getElementById('box1').style.transition='all 0.2s';
        document.getElementById('box2').style.transition='all 0.2s';
    },250)

    setTimeout(function () {
        document.getElementById('firstword').style.transition='all 0.3s';
        document.getElementById('firstword').style.transform='translatex(-126px)';
    } ,350)
    setTimeout(function () {
        document.getElementById('secword').style.opacity=1;
        document.getElementById('secword').style.transition='all 0.6s';
        document.getElementById('secword').style.transform='translatex(-123px)';
    },380)
    setTimeout(function () {
        document.getElementById('thirdword').style.opacity=1;
        document.getElementById('thirdword').style.transition='all 0.5s';
        document.getElementById('thirdword').style.transform='translatey(2px)';
    } ,900)
    setTimeout(function () {
        document.getElementById('logo').style.transform='translateY(20px)';
        document.getElementById('logo').style.transition='all 0.4s'
    } ,1000)
    setTimeout(function () {
        document.getElementById('icon1').style.transform='scale(1)';
        document.getElementById('icon1').style.transition='all 0.5s';
    } ,1200)
    setTimeout(function () {
        document.getElementById('icon2').style.transform='scale(1)';
        document.getElementById('icon2').style.transition='all 0.5s';
    } ,1300)
    setTimeout(function () {
        document.getElementById('icon3').style.transform='scale(1)';
        document.getElementById('icon3').style.transition='all 0.5s';
    } ,1400)
    setTimeout(function () {
        document.getElementById('icon4').style.transform='scale(1)';
        document.getElementById('icon4').style.transition='all 0.5s';
    } ,1500)
    setTimeout(function () {
        document.getElementById('btn').style.opacity=1;
        document.getElementById('btn').style.transform='scale(1)';
        document.getElementById('btn').style.transition='all 0.5s';
    },1700)
}
window.load=startad();