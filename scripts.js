const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        toggleThemeBtn.textContent = '☀️';
    } else {
        body.classList.add('light-mode');
        toggleThemeBtn.textContent = '🌙';
    }

    loadContent('pt');
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
    loadContent(language);
}

function loadContent(language) {
    fetch('Assets/Data/content.json')
        .then(response => response.json())
        .then(data => {
            const content = data[language];
            document.getElementById('team-title').innerText = content.teamTitle;
            document.getElementById('team-description').innerText = content.teamDescription;
            document.getElementById('project-description').innerText = content.projectDescription;
        })
        .catch(error => {
            console.error('Erro ao carregar o conteúdo:', error);
        });
}
