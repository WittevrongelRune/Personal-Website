
init();

function init() {
    renderCopyrightYear();
}

function renderCopyrightYear() {
const currentYear = new Date().getFullYear();
const $year = document.querySelector('#copyrightYear');
$year.textContent = currentYear;
}