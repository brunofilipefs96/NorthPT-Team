const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        toggleThemeBtn.textContent = '☀️';
    } else {
        body.classList.add('light-mode');
        toggleThemeBtn.textContent = '🌙';
    }
});

toggleThemeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleThemeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleThemeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark-mode');
    }
});

function switchLanguage(language) {
    const title = document.getElementById('team-title');
    const description = document.getElementById('team-description');
    const projectDescription = document.getElementById('project-description');

    if (language === 'en') {
        title.innerText = 'NorthPT Team';
        description.innerText = 'We are NorthPT Team, a duo of developers based in the North of Portugal. Our mission is to build innovative digital solutions, offering expertise in web development.';

        projectDescription.innerHTML = `
            The Top Performance & Rehab Gym project began as a final course project at ATEC. However, we continued to collaborate with the client to finalize and launch the site. This project includes comprehensive gym management features, product sales, training packages, and more.`;
    } else if (language === 'pt') {
        title.innerText = 'NorthPT Team';
        description.innerText = 'Somos a NorthPT Team, uma equipa de dois programadores, localizada no Norte de Portugal. A nossa missão é desenvolver soluções digitais inovadoras, com foco em desenvolvimento web.';

        projectDescription.innerHTML = `
            O projeto do Ginásio Top Performance & Rehab começou como um trabalho final de curso na ATEC. No entanto, continuamos a colaborar com o cliente para finalizar e lançar o site. Este projeto inclui funcionalidades abrangentes para a gestão do ginásio, venda de produtos, pacotes de treino, e muito mais.`;
    }
}

