console.log("Logica de la Aplicación")
/ Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el campo de texto
    input.value = "";

    // Actualizar visualmente la lista
    mostrarLista();
}

// Función para mostrar los nombres de amigos en la lista
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpiar lista

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML =
        `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;
}

// 📌 Detectar tecla Enter en el campo de texto
document.getElementById('amigo').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
