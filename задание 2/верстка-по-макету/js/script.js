const btnDrop = document.querySelectorAll('.main__timing-btn_drop');
const dropContent = document.querySelectorAll('.main__dropdown-content');

for (let i = 0; i < btnDrop.length; i++) {
    btnDrop[i].addEventListener('click', function () {
        dropContent[i].classList.toggle('main__dropdown-content_active')
    })
}
