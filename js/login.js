// LOGEO DE USUARIO
const loginUser = async () => {
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPassword = document.getElementById('inputPassword').value;

    
    const usersLogin = await fetch('http://localhost:3000/users');
    const results = await usersLogin.json();

    const usuario = results.find(user => user.email === inputEmail && user.password === inputPassword);

    if(inputEmail === '' || inputPassword === ''){
        alert('Debe colocar su usuario y su contraseña!')
        return
    }

    if(usuario){
        localStorage.setItem('role', usuario.role);
        window.location.href = '../index.html'
    }else{
        alert('LA Cuenta es inexistente')
    }
};

