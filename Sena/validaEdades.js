function procesarEdades() {
    const edades = [];
    let menores = 0;
    let mayores = 0;
    let adultosMayores = 0;

    // Ingreso y validación
    for (let i = 0; i < 10; i++) {
        let edad;

        do {
            edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1} (1 a 120):`));

            if (isNaN(edad) || edad < 1 || edad > 120) {
                alert("Valor inválido. Ingrese una edad entre 1 y 120.");
            }

        } while (isNaN(edad) || edad < 1 || edad > 120);

        edades.push(edad);
    }

    // Procesamiento
    let edadMin = Math.min(...edades);
    let edadMax = Math.max(...edades);
    let suma = 0;

    edades.forEach(edad => {
        suma += edad;

        if (edad < 18) {
            menores++;
        } else {
            mayores++;
        }

        if (edad >= 60) {
            adultosMayores++;
        }
    });

    let promedio = suma / edades.length;

    // Resultados
    console.log("Edades ingresadas:", edades);
    console.log("Menores de edad:", menores);
    console.log("Mayores de edad:", mayores);
    console.log("Adultos mayores (60+):", adultosMayores);
    console.log("Edad más baja:", edadMin);
    console.log("Edad más alta:", edadMax);
    console.log("Promedio de edades:", promedio.toFixed(2));
}
