const fulImgBox = document.getElementById('fulImgBox')
const bgmodal = document.getElementById('bgmodal')
const slide = document.getElementById('containerslide')
let imgs = slide.getElementsByClassName('imgslide')

fulImg = document.getElementById('fulImg')

function openFulImg(reference) {

    fulImgBox.style.display = 'block'
    fulImg.src = reference

}
const closeImg = () => {

    fulImgBox.style.display = 'none'

}

function next(){

    slide.append(item[0]);

}

window.onkeyup = function (event) {

    if(event.keyCode = '27') {

        fulImgBox.style.display = 'none'

    }

}