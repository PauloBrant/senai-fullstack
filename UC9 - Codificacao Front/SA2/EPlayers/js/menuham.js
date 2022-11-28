const btnCelular = document.getElementById('btn-celular');

function alteraMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnCelular.addEventListener('click',alteraMenu);
btnCelular.addEventListener('touchstart',alteraMenu);
