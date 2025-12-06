function leerVector(nombre) {
    const vec = [];
    let valor;

    for (let i = 0; i < 5; i++) {
        do {
            valor = parseInt(prompt(`Ingrese el valor ${i + 1} del vector ${nombre} (orden ascendente):`));

            if (isNaN(valor)) {
                alert("Debe ingresar un número entero.");
                continue;
            }

            if (i > 0 && valor <= vec[i - 1]) {
                alert("El valor debe ser mayor que el anterior. El vector debe estar en orden ascendente.");
                valor = NaN;
            }

        } while (isNaN(valor));

        vec.push(valor);
    }

    return vec;
}

function mezclarVectores() {
    // Leer ambos vectores validados
    const A = leerVector("A");
    const B = leerVector("B");

    // Mezcla ordenada estilo "merge" clásico
    const resultado = [];
    let i = 0, j = 0;

    while (i < A.length && j < B.length) {
        if (A[i] <= B[j]) {
            resultado.push(A[i]);
            i++;
        } else {
            resultado.push(B[j]);
            j++;
        }
    }

    // Copiar elementos restantes
    while (i < A.length) resultado.push(A[i++]);
    while (j < B.length) resultado.push(B[j++]);

    // Mostrar resultados
    console.log("Vector A:", A);
    console.log("Vector B:", B);
    console.log("Mezcla ordenada:", resultado.join(" "));
}
