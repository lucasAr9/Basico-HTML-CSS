const checkCookies = () => {
    let text = navigator.cookieEnabled ? 'Las cookies estan habilitadas.' : 'No estan habilitadas las cookies.'
    document.getElementById('texto').innerHTML = text
}

// Guardar datos en localStorage
// Para guardar datos en localStorage, se utiliza el método setItem().
// Guardar una cadena de texto
localStorage.setItem('clave', 'valor');
// Ejemplo: Guardar el nombre de usuario
localStorage.setItem('username', 'JuanPerez');

// Obtener datos de localStorage
// Para obtener datos de localStorage, se utiliza el método getItem().
// Obtener la cadena de texto
const valor = localStorage.getItem('clave');
console.log(valor); // 'valor'
// Ejemplo: Obtener el nombre de usuario
const username = localStorage.getItem('username');
console.log(username); // 'JuanPerez'

// Eliminar datos de localStorage
// Para eliminar un solo dato de localStorage, se utiliza el método removeItem().
// Eliminar un dato
localStorage.removeItem('clave');
// Ejemplo: Eliminar el nombre de usuario
localStorage.removeItem('username');
// Limpiar todos los datos
localStorage.clear();

// Ejemplo de uso:
function guardarNombre() {
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    document.getElementById('resultado').innerText = 'Nombre guardado!';
}

function mostrarNombre() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('resultado').innerText = 'Nombre de usuario: ' + username;
    } else {
        document.getElementById('resultado').innerText = 'No hay nombre de usuario guardado.';
    }
}

function eliminarNombre() {
    localStorage.removeItem('username');
    document.getElementById('resultado').innerText = 'Nombre eliminado!';
}
