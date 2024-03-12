// VALIDAR ROL DE USUARIO
const validationUser = () => {
    const roleUser = localStorage.getItem('role');

    if(roleUser === 'admin'){
        alert('Bienvenido al panel de Adm');
    }else{
        window.location.href = '../pages/paguina_principal.html'
    }
}

validationUser();

//ADMINISTRAR A TODOS LOS USUARIOS

const usuariosAdm = async () => {
    const users = await fetch('http://localhost:3000/users');
    const usuarios = await users.json();
    
    console.log(usuarios);
    
    const tableBody = document.getElementById('tableBody');

    const usuario = usuarios.map(user => {
       return `<tr>
            <th scope="row">${user.id}</th>
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><button onclick=upgradeUser()>Editar</button></td>
        </tr>
        `
    });

    tableBody.innerHTML = usuario.join('');
}

usuariosAdm();

