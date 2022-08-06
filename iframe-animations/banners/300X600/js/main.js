
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img1');
function imagehandle1() {
    image1.classList.add('show')
}
setTimeout(imagehandle1, 2000);

function imagehandle2() {
    image2.classList.add('show2')
}
setTimeout(imagehandle2, 4000);

// image2
var frontimage=document.querySelector('.img2')
var frontimage=document.querySelector('.img2')

function imagefront() {
    frontimage.classList.add('move')
}
setTimeout(imagefront,2000)

function imagefront2() {
    frontimage.classList.add('move2')
}
setTimeout(imagefront2,4000)


var button=document.querySelector('.btn')
function showbtn() {
    button.classList.add('show')
}
function btnout() {
    button.classList.add('hide')
}
setTimeout(btnout,13500)
setTimeout(showbtn,6000)


var text1=document.querySelector('.text-1')
function textorder(){
    text1.classList.add("show")
}
function textout(params) {
    text1.classList.add('hide')
}
setTimeout(textout,13400)
setTimeout(textorder,500)


var text2=document.querySelector('.text-2')
function textorder2() {
    text2.classList.add('show')
}
function textout1() {
    text2.classList.add('hide')
}
setTimeout(textout1,12000)
setTimeout(textorder2,800)


var text3=document.querySelector('.text-3')
function textorder3() {
    text3.classList.add('show')
}
function textout2() {
    text3.classList.add('hide')
}
setTimeout(textout2,12500)
setTimeout(textorder3,1000)

var text4=document.querySelector('.text-4')
function textorder4() {
    text4.classList.add('show')
}
function textout3() {
    text4.classList.add('hide')
}
setTimeout(textout3,13000)
setTimeout(textorder4,1300)


