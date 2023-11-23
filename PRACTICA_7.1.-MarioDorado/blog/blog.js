



function accedeUsers() {
    // Utiliza la URL del API para obtener la lista de usuarios
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Realiza una solicitud de tipo Fetch 
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => pintaUsuarios(data))
        .catch(error => console.error('Error:', error));
}


/* 
    este método para mostrar los usuarios obtiene una referencia al área de contenido en el HTML

    crea una tabla HTML dinámicamente a partir de la lista de usuarios proporcionada por el API.
*/


function pintaUsuarios(listausers) {
    const contenido = document.getElementById('contentArea');
    contenido.innerHTML = ''; // Limpiar el área de contenido

    // Crea la tabla
    const tabla = document.createElement('table');
    tabla.classList.add('table');

   
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Posts</th>
        </tr>
    `;
    tabla.appendChild(thead);

    // Crear el cuerpo de la tabla  y generar los usuarios dinámicamente usando los valores de usuario: ${user.id} , ${user.email}
    const tbody = document.createElement('tbody');
    listausers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td><a href="#" onclick="pintaUsuario(${user.id})" data-userid="${user.id}">${user.username}</a></td>
            <td>${user.email}</td>
            <td><a href="#" onclick="obtenerPosts(${user.id})" data-userid="${user.id}">Mostrar Posts</a></td>
        `;
        tbody.appendChild(row);
    });

    tabla.appendChild(tbody);

    // Agregar la tabla al área de contenido
    contentArea.appendChild(tabla);
}

function pintaUsuario(id) {
    // Implementar lógica para mostrar detalles del usuario
    alert(`Mostrar los detalles del usuario con ID: ${id}`);
}




/**************************************************************************************************************************************************************/



/* Acceder a una API y obtener los posts asociados a un usuario específico, identificado por su ID */ 

function obtenerPosts(userId) {
    // URL de la API para obtener los posts de un usuario específico
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    // Realizar una solicitud Fetch a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => pintaPosts(data))
        .catch(error => console.error('Error:', error));
}




/* 
    método para mostrar los posts: obtiene una referencia al área de contenido en el HTML
    y crea una tabla dinámicamente a partir de la lista de post proporcionada por el API.
*/

function pintaPosts(posts) {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // Limpiar el área de contenido

    // Crear una sección para mostrar los posts
    const postsSection = document.createElement('div');
    postsSection.innerHTML = '<h2>Posts</h2>';

    // Muestra solo los primeros 5 
    const postsMostrar = posts.slice(0, 5);

    // Crear la lista dinámicamente
    const listaposts = document.createElement('ul');
    postsMostrar.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            <p>Autor: <a href="#" onclick="pintaUsuario(${post.userId})">${post.username}</a></p>

        `;
        listaposts.appendChild(li);
    });

    postsSection.appendChild(listaposts);

    // Agregar botones para mostrar los siguientes 5 posts
    if (posts.length > 5) {
        const siguienteboton= document.createElement('button');
        siguienteboton.textContent = 'Mostrar 5 siguientes';
        siguienteboton.addEventListener('click', function () {
            const remainingPosts = posts.slice(5);
            pintaPosts(remainingPosts);
        });
        postsSection.appendChild(siguienteboton);
    }

    // Agregar la sección al área de contenido dinçamico
    contentArea.appendChild(postsSection);
}




/*   accede al API para obtener todos los posts y luego llama a pintaPosts para mostrar la información  */ 

function accedePosts() {
    // URL de la API para obtener todos los posts
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Realizar una solicitud Fetch a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => pintaPosts(data))
        .catch(error => console.error('Error:', error));
}




