document.addEventListener('DOMContentLoaded', () => {
    fetch('Src/Components/Footer/index.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.querySelectorAll('.footer-component');
            footerContainer.forEach(container => {
                container.innerHTML = data;
            });
        }); 
});