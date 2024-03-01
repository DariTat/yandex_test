import './css/style.css';

const sliders = [...document.querySelectorAll('.main-block-four-item')]
const number = document.querySelector('.main-block-four-control-number')
const btnLeft = document.querySelector('.main-block-four-btn.left')
// const btnRight = document.querySelector('.main-block-four-btn.right')
const items = [...document.querySelectorAll('.main-block-three-item')]
let sliderArr = [] 
let timer


function setMobile () {
        const itemsInvisible = items.slice(2, 7)
        itemsInvisible.map(item => item.classList.add('invisible'))
    
        sliders.forEach(slider => slider.classList.contains('visible') ? slider.classList.remove('visible') : null)
        number.textContent = sliders[0].id
        sliders[0].classList.add('visible')
    
        if (number.textContent == 1) {
            btnLeft.classList.add('disabled')
        } else if (number.textContent > 1) {
            btnLeft.classList.remove('disabled')
        }
    
        // btnRight.addEventListener('click', () => {
        //     sliders.forEach(slider => slider.classList.contains('visible') ? slider.classList.remove('visible') : null)
        //     sliders[number.textContent].classList.add('visible')
        //     number.textContent = sliders[number.textContent].id
        // })
    
        // if (number.textContent == 6) {
        //     btnRight.classList.add('disabled')
        // } else  if (number.textContent < 6) {
        //     btnRight.classList.remove('disabled')
        // }
    
        // btnLeft.addEventListener('click', () => {
        //     console.log('нажата левая кнопка')
        //     sliders.forEach(slider => slider.classList.contains('visible') ? slider.classList.remove('visible') : null)
        //     sliders[number.textContent - 1].classList.add('visible')
        //     number.textContent = sliders[number.textContent - 1].id
        // })
    }

function setDeskTop() {
    items.map(item => item.classList.contains('invisible') ? item.classList.remove('invisible') : null)
    btnLeft.classList.remove('disabled')
    number.textContent = 0
    if (number.textContent == 0) {
        sliderArr = sliders.slice(0, 3)
        sliderArr.forEach(slider => slider.classList.add('visible'))
        number.textContent = 3
    }
    timer = setInterval(() => {
        if (number.textContent == 6) {
            sliderArr.forEach(slider => slider.classList.remove('visible'))
            sliderArr = sliders.slice(0, 3)
            sliderArr.forEach(slider => slider.classList.add('visible'))
            number.textContent = 3
            
        } else if (number.textContent == 3) {
            sliderArr.forEach(slider => slider.classList.remove('visible'))
            sliderArr = sliders.slice(3, 6)
            sliderArr.forEach(slider => slider.classList.add('visible'))
            number.textContent = 6
        }
    }, 4000)
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 375.2) {
        clearInterval(timer)
        setMobile()   
    } else if (window.innerWidth <= 1920.2 && window.innerWidth >= 1366) {
        clearInterval(timer)
        setDeskTop()
    }
})


if (window.innerWidth <= 1920 && window.innerWidth >= 1366) {
    clearInterval(timer)
    setDeskTop()
}

if (window.innerWidth <= 375.2) {
    setMobile()
}








