const NavBoton = document.querySelector(".boton-logo")
const NavMenu = document.querySelector(".nav-menu")
NavBoton.addEventListener("click", () => {
    NavMenu.classList.toggle('Navmenu_visible')
});

const loggedUser = () => {
    const headerLi = document.getElementById('navbarlist')
    const user = localStorage.getItem('role');
    const divHeader = document.createElement('li');

    if(user){
        divHeader.innerHTML = `
        <li class="nav-menu-item" onclick=deslogearUser()><a href="../pages/login.html" class="nav-menu-link navv-link">Deslogueate!</a></li>
        `
    };

    headerLi.append(divHeader);
}

loggedUser()

const deslogearUser = () => {
    localStorage.removeItem('role');
}