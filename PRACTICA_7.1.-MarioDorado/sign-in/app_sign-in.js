document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Realizar la solicitud a la API utilizando fetch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(users => {
                console.log('Usuarios obtenidos:', users);
                console.log('Email:', email);
                console.log('Password:', password);
                console.log('Usuarios obtenidos:', users);
                // Verificar credenciales utilizando el campo zipcode como contraseña
                let user = users.find(u => u.email === email && u.zipcode === password);

                if (user = true) {
                    // Inicio de sesión exitoso, abrir la página blog.html
                    window.open('../blog/blog.html', '_self'); 
                } else {
                    alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
                }
            })
            .catch(error => {
                console.error('Error al obtener usuarios:', error);
            });
    });

   
});
