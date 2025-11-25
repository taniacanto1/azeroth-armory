const buttons = document.querySelectorAll('.character-name');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // evita que se cierre si hay otros clicks
        btn.closest('.character-card').classList.toggle('expanded');
    });
});
