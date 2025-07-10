
init();

function init() {
    renderCopyrightYear();
    renderAge();
    renderSection();
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

function renderSection() {

    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('hidden');
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
            observer.unobserve(section);
          }
        });
        observer.observe(section);
      });

}

