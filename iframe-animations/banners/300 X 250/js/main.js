function startad() {
    setTimeout(function () {
        document.getElementById('container').style.transition='all 2s'
        document.getElementById('container').style.opacity=1;
    },100)
    setTimeout(function () {
        document.getElementById('bgimg').style.transform=' translate(-155px)';
        document.getElementById('bgimg').style.transition='all 7s ';
    },500 )
    setTimeout(function () {
        document.getElementById('box1').style.top='-180px'
        document.getElementById('box1').style.transition='all 0.5s ';
        document.getElementById('box2').style.bottom='-212px';
        document.getElementById('box2').style.transition='all 0.5s ';
    },600)
    setTimeout(function () {
        document.getElementById('text1').classList.add('show')
    },700)
    setTimeout(function () {
        document.getElementById('text2').classList.add('show')
    },1000)
    setTimeout(function () {
        document.getElementById('text3').style.transition='all 0.5s';
        document.getElementById('text3').style.opacity=1;
        document.getElementById('text4').style.transition='all 0.5s';
        document.getElementById('text4').style.opacity=1;
    }, 1900)
    setTimeout(function () {
         document.getElementById('btn').classList.add('width')
    },2500)
    setTimeout(function () {
        document.getElementById('btntext').style.fontSize='16px';
        document.getElementById('btntext').style.opacity=1;
        document.getElementById('btntext').style.transition='all 0.8s';
        
    },2500)
        setTimeout(function () {
            document.getElementById('link').style.opacity=1;
            document.getElementById('link').style.transform='translateY(-2px)';
            document.getElementById('link').style.transition='all 0.5s';
   },2900)
   setTimeout(function () {
    document.getElementById('logo').style.transform='translateY(13px)';
        document.getElementById('logo').style.transition='all 0.3s';
   },3300)

}
window.load=startad()