// 1. Acceder a Elementos del DOM
// Usamos diferentes métodos para seleccionar elementos del DOM.
// Selecciona un elemento por su ID
const elementById = document.getElementById('mi-id');
// Selecciona todos los elementos por su clase
const elementsByClassName = document.getElementsByClassName('mi-clase');
// Selecciona todos los elementos por su etiqueta
const elementsByTagName = document.getElementsByTagName('div');
// Selecciona el primer elemento que coincide con el selector CSS
const elementQuerySelector = document.querySelector('.mi-clase');
// Selecciona todos los elementos que coinciden con el selector CSS
const elementsQuerySelectorAll = document.querySelectorAll('.mi-clase');


// 2. Manipulación de Contenido y Atributos
// Modificar el contenido y los atributos de los elementos.
// Cambiar el texto de un elemento
elementById.textContent = 'Nuevo texto';
// Cambiar el HTML de un elemento
elementById.innerHTML = '<span>Texto en negrita</span>';
// Cambiar un atributo de un elemento
elementById.setAttribute('class', 'nueva-clase');
// Obtener el valor de un atributo
const classValue = elementById.getAttribute('class');
// Eliminar un atributo
elementById.removeAttribute('class');


// 3. Estilos y Clases
// Manipulación de estilos CSS y clases de elementos.
// Cambiar el estilo directamente
elementById.style.color = 'blue';
elementById.style.fontSize = '20px';
// Añadir una clase
elementById.classList.add('mi-nueva-clase');
// Eliminar una clase
elementById.classList.remove('mi-nueva-clase');
// Alternar una clase
elementById.classList.toggle('mi-clase');


// 4. Eventos
// Agregar y manejar eventos.
// Agregar un evento de clic
elementById.addEventListener('click', function() {
    alert('Elemento clickeado!');
});

// Agregar un evento de carga a la ventana
window.addEventListener('load', function() {
    console.log('Página cargada completamente');
});

// Función separada como manejador de eventos
function manejarClick(event) {
    console.log('Elemento clickeado:', event.target);
}
elementById.addEventListener('click', manejarClick);


// 5. Crear y Añadir Elementos
// Crear nuevos elementos y añadirlos al DOM.
// Crear un nuevo elemento
const nuevoElemento = document.createElement('div');
// Añadir contenido al nuevo elemento
nuevoElemento.textContent = 'Este es un nuevo div';
// Añadir el nuevo elemento al final de un elemento existente
elementById.appendChild(nuevoElemento);
// Insertar el nuevo elemento antes de un elemento específico
elementById.insertBefore(nuevoElemento, elementById.firstChild);


// 6. Eliminar Elementos
// Eliminar elementos del DOM.
// Eliminar un elemento
elementById.remove();
// Eliminar un hijo específico de un elemento
elementById.removeChild(elementById.firstChild);


// 7. Navegar por el DOM
// Moverse entre los elementos del DOM.
// Obtener el elemento padre
const parentElement = elementById.parentElement;
// Obtener el primer hijo
const firstChild = elementById.firstChild;
// Obtener el último hijo
const lastChild = elementById.lastChild;
// Obtener el siguiente hermano
const nextSibling = elementById.nextElementSibling;
// Obtener el hermano anterior
const previousSibling = elementById.previousElementSibling;
