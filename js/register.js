const registerUser = () => {
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const userName = document.getElementById('inputUserName').value;
    const password = document.getElementById('inputPassword').value;
    const confirmPassword = document.getElementById('inputConfirmPassword').value;

    if(name === '' || email === '' || userName === '' || password === '' || confirmPassword === ''){
        alert('Todos los campos deben ser completados')
        return
    }


    if(password !== confirmPassword){
        alert('Las contraseñas no coinciden')
    }else{
        fetch('http://localhost:3000/users',{
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                userName,
                password,
                role: 'client'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        window.location.href = "../index.html"
    }
}
