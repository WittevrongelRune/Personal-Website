
init();

function init() {
    renderCopyrightYear();
    renderAge();
}

function renderCopyrightYear() {
const currentYear = new Date().getFullYear();
const $year = document.querySelector('#copyrightYear');
$year.textContent = currentYear;
}

function renderAge() {
    const birthDate = new Date(2005, 10, 8);
    const currentDate = new Date();
    
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    const $age = document.querySelector('#ageYear');
    if ($age) {
        $age.textContent = age;
    }
}

