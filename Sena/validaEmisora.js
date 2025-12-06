// Máximo de personas
const MAX_PERSONAS = 6;

// Vector donde se almacenarán las personas
const personas = [];

// Función para agregar una persona
function agregarPersona() {
    if (personas.length >= MAX_PERSONAS) {
        alert("Ya se registraron las 6 personas permitidas.");
        return;
    }

    const persona = {};

    persona.nombre = prompt("Nombre completo:");
    persona.cedula = prompt("Número de identificación (cédula):");
    persona.fechaNacimiento = prompt("Fecha de nacimiento (DD/MM/AAAA):");
    persona.correo = prompt("Correo electrónico:");
    persona.ciudadResidencia = prompt("Ciudad de residencia:");
    persona.ciudadOrigen = prompt("Ciudad de origen:");

    // Canciones favoritas
    persona.canciones = [];
    alert("Ingrese hasta 3 canciones favoritas (artista + título).");

    for (let i = 0; i < 3; i++) {
        let artista = prompt(`Artista de la canción ${i + 1}:`);
        let titulo = prompt(`Título de la canción ${i + 1}:`);
        persona.canciones.push({ artista, titulo });
    }

    personas.push(persona);
    alert("Persona registrada correctamente.");
}

// Función para mostrar datos de una persona por posición
function mostrarPersona() {
    if (personas.length === 0) {
        alert("Aún no se ha registrado ninguna persona.");
        return;
    }

    let pos = parseInt(prompt(`Ingrese la posición (1 a ${personas.length}):`));

    if (isNaN(pos) || pos < 1 || pos > personas.length) {
        alert("Posición inválida.");
        return;
    }

    const p = personas[pos - 1];

    console.log("=== Información de la Persona ===");
    console.log("Nombre:", p.nombre);
    console.log("Cédula:", p.cedula);
    console.log("Fecha de nacimiento:", p.fechaNacimiento);
    console.log("Correo:", p.correo);
    console.log("Ciudad de residencia:", p.ciudadResidencia);
    console.log("Ciudad de origen:", p.ciudadOrigen);
    console.log("Canciones favoritas:");
    p.canciones.forEach((c, i) => {
        console.log(`   ${i + 1}. Artista: ${c.artista} | Título: ${c.titulo}`);
    });
    console.log("===============================");
}

// Menú principal
function menu() {
    let opcion;

    do {
        opcion = prompt(
            "MENÚ PRINCIPAL\n" +
            "a. Agregar una persona\n" +
            "b. Mostrar información de una persona\n" +
            "c. Salir\n\n" +
            "Seleccione una opción:"
        ).toLowerCase();

        switch (opcion) {
            case "a":
                agregarPersona();
                break;

            case "b":
                mostrarPersona();
                break;

            case "c":
                alert("Saliendo del programa...");
                break;

            default:
                alert("Opción inválida. Intente nuevamente.");
        }

    } while (opcion !== "c");
}

// Ejecutar menú
menu();
