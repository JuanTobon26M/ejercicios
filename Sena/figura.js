function calcular() {
    const figura = prompt("Elige la figura: triangulo, rectangulo, cuadrado, circulo").toLowerCase();

    switch (figura) {

        case "triangulo":
            const a = parseFloat(prompt("Ingresa lado a:"));
            const b = parseFloat(prompt("Ingresa lado b (base):"));
            const c = parseFloat(prompt("Ingresa lado c:"));
            const h = parseFloat(prompt("Ingresa la altura h:"));
            const tipoT = prompt("¿Quieres calcular 'area' o 'perimetro'?").toLowerCase();

            if (tipoT === "area") {
                console.log("Área del triángulo: " + (b * h) / 2);
            } else {
                console.log("Perímetro del triángulo: " + (a + b + c));
            }
            break;


        case "rectangulo":
            const base = parseFloat(prompt("Ingresa base:"));
            const altura = parseFloat(prompt("Ingresa altura:"));
            const tipoR = prompt("¿Quieres 'area' o 'perimetro'?").toLowerCase();

            if (tipoR === "area") {
                console.log("Área del rectángulo: " + (base * altura));
            } else {
                console.log("Perímetro del rectángulo: " + (2 * (base + altura)));
            }
            break;



        case "cuadrado":
            const lado = parseFloat(prompt("Ingresa lado:"));
            const tipoCua = prompt("¿Quieres 'area' o 'perimetro'?").toLowerCase();

            if (tipoCua === "area") {
                console.log("Área del cuadrado: " + (lado * lado));
            } else {
                console.log("Perímetro del cuadrado: " + (4 * lado));
            }
            break;



        case "circulo":
            const r = parseFloat(prompt("Ingresa radio:"));
            const tipoCi = prompt("¿Quieres 'area' o 'perimetro'? (perímetro = circunferencia)").toLowerCase();

            if (tipoCi === "area") {
                console.log("Área del círculo: " + (Math.PI * r * r));
            } else {
                console.log("Perímetro del círculo: " + (2 * Math.PI * r));
            }
            break;


            
        default:
            console.log("Figura no válida.");
    }
}
