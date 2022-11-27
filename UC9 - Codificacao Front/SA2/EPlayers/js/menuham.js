const btnCelular = document.getElementById('btn-celular');

function alteraMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnCelular.addEventListener('click',alteraMenu);