function startad() {
    setTimeout(function () {
        document.getElementById('road-img').style.top='0';
        document.getElementById('road-img').style.transition='all 6s linear';
        document.getElementById('car').style.transform='translate(60px, 70px)'
        document.getElementById('car').style.transition='all 0.8s linear';
    },270)
    setTimeout (function(){
        document.getElementById('frame').style.transform='translate(0px, 0px) scale(1)'
        document.getElementById('frame').style.transition='all 0.5s linear';
        document.getElementById('dot').style.opacity = 1;
        document.getElementById('dot').style.transition = 'all 0.5s linear'
        document.getElementById('dot-02').style.opacity = 1;
        document.getElementById('dot-02').style.transition = 'all 0.5s linear'
        document.getElementById('frame2').style.transform='translate(0px, 0px) scale(1)'
        document.getElementById('frame2').style.transition='all 0.5s linear';
    
        document.getElementById('line').style.transform='rotate(331deg) scale(1)'
        document.getElementById('line').style.transition='all 0.5s linear';
        document.getElementById('line2').style.transform='rotate(14deg) scale(1)'
        document.getElementById('line2').style.transition='all 0.5s linear';
     },1200)
     setTimeout (function(){
        document.getElementById('logo1').style.opacity='1'
        document.getElementById('tracker-1').style.transform='scale(1)'
        document.getElementById('tracker-1').style.transition='all 0.1s linear';
    
    },2000)
     setTimeout (function(){
        document.getElementById('logo1').style.opacity='0'
        document.getElementById('tracker-1').style.transform='scale(0)'
        document.getElementById('logo2').style.opacity='1'
    
        document.getElementById('tracker-2').style.transform='scale(1)'
    
        document.getElementById('tracker-2').style.transition='all 0.1s linear';
    
    },2600)
    setTimeout(function(){
        document.getElementById('frame2').style.transform = 'scale(1)';
        document.getElementById('frame2').style.transition = 'all 0.8s';
    },1000) 
setTimeout(function(){
    document.getElementById('icon-1-1').style.opacity = 1;
    document.getElementById('icon-1-1').style.transition = '0.2s';
    document.getElementById('tracker-1').style.transform = 'scale(1)';
    document.getElementById('tracker-1').style.transition = '0.2s';
},3000)

setTimeout(function(){
    document.getElementById('deer').style.transform = 'translate(-67px , 83px) scale(1.3)';
    document.getElementById('deer').style.transition = ' all 3s';
},1500)
setTimeout(function(){
    document.getElementById('man').style.transform = 'translate(48px , 48px) scale(1.2)';
    document.getElementById('man').style.transition = ' all 2s';
    document.getElementById('border-1').style.transform = 'translate(45px , 42px) scale(1.3)';
    document.getElementById('border-1').style.transition = ' all 2s';
    document.getElementById('border-2').style.transform = 'translate(45px , 17px) scale(1.3)';
    document.getElementById('border-2').style.transition = ' all 2s';
},2000)

setTimeout(function(){
     document.getElementById('frame').style.transform = 'scale(0)';
    document.getElementById('frame').style.transition = ' all 0.7s';
    document.getElementById('dot').style.opacity = 0;
    document.getElementById('dot').style.transition = 'all 0.7s ';
    document.getElementById('dot-02').style.opacity = 0;
    document.getElementById('dot-02').style.transition = 'all 0.7s ';
    
    document.getElementById('frame2').style.transform = 'scale(0)';
    document.getElementById('frame2').style.transition = ' all 0.7s';
},3700)

setTimeout(function(){
    document.getElementById('corner-text').style.opacity = 1;
    document.getElementById('corner-text').style.transition = 'all 0.2s'
},6000)
setTimeout(function(){
    document.getElementById('sprite-1').style.opacity = 1;
    document.getElementById('sprite-1').style.transition = 'all 0.5s'
},6200)
setTimeout(function(){
    document.getElementById('sprite-2').style.opacity = 1;
    document.getElementById('sprite-2').style.transition = 'all 0.5s'
},6700)
setTimeout(function(){
    document.getElementById('sprite-3').style.opacity = 1;
    document.getElementById('sprite-3').style.transition = 'all 0.5s'
},7200)
setTimeout(function(){
    document.getElementById('sprite-4').style.opacity = 1;
    document.getElementById('sprite-4').style.transition = 'all 0.5s'
},7700)
setTimeout(function(){
    document.getElementById('sprite-5').style.opacity = 1;
    document.getElementById('sprite-5').style.transition = 'all 0.5s'
},8200)
setTimeout(function(){
    document.getElementById('sprite-6').style.opacity = 1;
    document.getElementById('sprite-6').style.transition = 'all 0.5s'
},8700)
setTimeout(function(){
    document.getElementById('bgimg').style.transform = 'translatey(0%)';
    document.getElementById('bgimg').style.transition = 'all 1s'
},9500)
setTimeout(function(){
    document.getElementById('sprite-7').style.opacity = 1;
    document.getElementById('sprite-7').style.transition = 'all 0.5s'
},10500)
setTimeout(function(){
    document.getElementById('sprite-8').style.opacity = 1;
    document.getElementById('sprite-8').style.transition = 'all 0.5s'
},11000)
setTimeout(function(){
    document.getElementById('sprite-9').style.opacity = 1;
    document.getElementById('sprite-9').style.transition = 'all 0.5s'
},11500)
setTimeout(function(){
    document.getElementById('sprite-10').style.opacity = 1;
    document.getElementById('sprite-10').style.transition = 'all 0.5s'
},12000)
setTimeout(function(){
    document.getElementById('sprite-11').style.opacity = 1;
    document.getElementById('sprite-11').style.transition = 'all 1.5s'
},13500)
}
window.load=startad()