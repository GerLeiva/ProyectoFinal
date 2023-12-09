function toggleNavbar() {
    const navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
}


function login() {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    const storedUserJSON = localStorage.getItem('user');

    
    if (!storedUserJSON) {
        alert('Usuario no registrado. Por favor, regístrate primero.');
        return;
    }

    
    const storedUser = JSON.parse(storedUserJSON);

    
    if (email === storedUser.email && password === storedUser.password) {
        alert('Inicio de sesión exitoso. Bienvenido, ' + storedUser.firstName + ' ' + storedUser.lastName + '!');       
        window.location.href = '../index.html';
    } else {
        alert('Credenciales incorrectas. Por favor, verifica tu correo electrónico y contraseña.');
    }
}
/* fetch*/

let contenido = document.getElementById(`finanzas`);
let url = `https://finnhub.io/api/v1/news?category=general&token=clpvq0hr01qr1q7fgd10clpvq0hr01qr1q7fgd1g`;

fetch(url).then((respuesta)=> respuesta.json()).then(data =>{
    console.log(data);
    let noticias = data;
    noticias.map(function(info){
        let div = document.createElement(`div`);
        div.className = `news`;
        div.innerHTML = `<br>
                        <img style = "max-widht:100%; border-radius:10px" src=${info.image}>
                        <br>
                        <h1>${info.headline}</h1>
                        <br>
                        <h1>${info.summary}</h1>
                        <h1><a href=${info.url}>Seguir Leyendo</a></h1>`;
        contenido.appendChild(div);
                        
                        
    })
})