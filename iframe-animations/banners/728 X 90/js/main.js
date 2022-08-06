function startad() {
    setTimeout(function() {
        document.getElementById('line1').style.transition='all 1s';
       document.getElementById('line1').style.opacity=1; 
       document.getElementById('line1').style.transform='translateX(12px)';
    },900 );
    setTimeout(function() {
        document.getElementById('line2').style.transition='all 2s';
       document.getElementById('line2').style.opacity=1; 
       document.getElementById('line2').style.transform='scale(1)';
    },1200 );
    setTimeout(function() {
        document.getElementById('line3').style.transition='all 3s';
       document.getElementById('line3').style.opacity=1; 
       document.getElementById('line3').style.transform='translateX(122px)';
    },1500 );
    setTimeout(function() {
        document.getElementById('circle1').style.opacity=1; 
        document.getElementById('circle1').style.transition='all 0.7s';
       document.getElementById('circle1').style.transform='translate(-209px,7px)';
    },1800 );
    setTimeout(function () {
        document.getElementById('logo').style.transition='all 0.3s';
        document.getElementById('logo'). style.transform='translateY(14px)'
    },2000)
    setTimeout(function() {
        document.getElementById('btn').style.transition='all 0.2s';
    //    document.getElementById('btn').style.opacity=1; 
       document.getElementById('btn').style.transform='translateY(-8px)';
    },2500 );
   
}
window.load=startad();