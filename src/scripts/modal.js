document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('callbackModal');
    const openBtn = document.querySelectorAll('.call-button');
    const closeBtn = document.getElementById('modalClose');

    openBtn.forEach(button => {
        button.addEventListener('click', () => {
        modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
        modal.style.display = 'none';
        }
    });

    
    
});