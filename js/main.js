let header =document.querySelector(".header")
let btnNavOpen = document.querySelector("#btnNavOpen")
let btnNavOpenI = document.querySelector("#btnNavOpen i")
let btnNavCloes = document.querySelector("#btnNavCloes")
let btnNavCloesI = document.querySelector("#btnNavCloes i")
let showCase = document.querySelector(".showcase")

btnNavOpen.onclick = function() {
        showCase.classList.add("active")
}
btnNavClose.onclick = function() {
        showCase.classList.remove("active")
}
let quran = document.querySelector("#quranAud")
let quranI = document.querySelector("#quranAud i")
let audio = document.querySelector("#aud")

quran.onclick = function () {
    if(quranI.classList.value === "fas fa-quran") {
        audio.play()
        quranI.classList.remove('fas', 'fa-quran')
        quranI.classList.add('fas', 'fa-pause')
    }else {
        audio.pause()
        quranI.classList.remove('fas', 'fa-pause')
        quranI.classList.add('fas', 'fa-quran')
    }
}
