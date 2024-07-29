document.addEventListener('DOMContentLoaded', () => {
    fetch('Src/Components/Header/index.html')
        .then(response => response.text())
        .then(data => {
            const headerContainers = document.querySelectorAll('.header-component');
            headerContainers.forEach(container => {
                container.innerHTML = data;
            });
        }); 
});