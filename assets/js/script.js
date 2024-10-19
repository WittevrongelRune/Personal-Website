
init();

function init() {
    renderCopyrightYear();
}

function renderCopyrightYear() {
const currentYear = new Date().getFullYear();
console.log(currentYear);
const $year = document.querySelector('#copyrightYear');
$year.textContent = currentYear;
}