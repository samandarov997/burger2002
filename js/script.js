const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');
secNum = document.querySelector('.second');



function clock() {
    let date = new Date(),
        secArr = date.getSeconds() * 6,
        minArr = date.getMinutes() * 6,
        hourArr = date.getHours() * 30

    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000);
    hourNum.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    minNum.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    secNum.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
}
clock()
const tabsItem = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem');
    for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {

        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove("active")
            content[j].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        content[i].classList.add("active")

    })
}