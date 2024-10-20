const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;
const logo = document.getElementById('logo');

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        toggleThemeBtn.textContent = '☀️';
        logo.src = 'Assets/Images/topperformancerehab-dark.png';
    } else {
        body.classList.add('light-mode');
        toggleThemeBtn.textContent = '🌙';
        logo.src = 'Assets/Images/topperformancerehab-light.png';
    }

    loadContent('pt');
});

toggleThemeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleThemeBtn.textContent = '🌙';
        logo.src = 'Assets/Images/topperformancerehab-light.png';
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleThemeBtn.textContent = '☀️';
        logo.src = 'Assets/Images/topperformancerehab-dark.png';
        localStorage.setItem('theme', 'dark-mode');
    }
});

function switchLanguage(language) {
    loadContent(language);
}

function loadContent(language) {
    fetch('Assets/Data/content.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log('Conteúdo carregado:', data);
            const content = data[language];
            document.getElementById('about-title').innerText = content.aboutTitle;
            document.getElementById('project-title').innerText = content.projectTitle;
            document.getElementById('project-description').innerText = content.projectDescription;
            document.getElementById('footer-text').innerText = content.footerText;
            document.getElementById('contact-title').innerText = content.contactTitle;
            document.getElementById('contact-message').innerText = content.contactMessage;
            const viewButton = document.querySelector('.view-button');
            viewButton.innerText = content.viewButton;
            viewButton.disabled = true;
        })
        .catch(error => {
            console.error('Erro ao carregar o conteúdo:', error);
        });
}

