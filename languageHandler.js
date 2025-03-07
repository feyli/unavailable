window.addEventListener('load', () => applyLanguage());

function applyLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('fr')) {
        document.querySelectorAll('[data-fr]').forEach((element) => {
            element.textContent = element.getAttribute('data-fr')
        });
    } else {
        document.querySelectorAll('[data-en]').forEach((element) => {
           element.textContent = element.getAttribute('data-en');
        });
    }
}
