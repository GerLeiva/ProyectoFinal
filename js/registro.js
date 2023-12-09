/*barra de navegacion*/
function toggleNavbar() {
    const navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
}

function register() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (!firstName || !lastName || !email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    
    const userJSON = JSON.stringify(user);

    
    localStorage.setItem('user', userJSON);


    window.location.href = '../pages/inicioSesion.html';
}
