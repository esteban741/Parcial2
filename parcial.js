
const calculate = function(operation) {
    const a = parseFloat(document.getElementById("numA").value);
    const b = parseFloat(document.getElementById("numB").value);
    const c = parseFloat(document.getElementById("numC").value);
    let result;

    switch (operation) {
        case 'sum':
            result = (a, b) => a + b;
            break;
        case 'sub':
            result = (a, b) => a - b;
            break;
        case 'mul':
            result = (a, b) => a * b;
            break;
        case 'div':
            result = (a, b) => b !== 0 ? a / b : "Error: División por cero";
            break;
        case 'linear':
            result = function() {
                return a !== 0 ? `x = ${-b / a}` : "No tiene solución";
            };
            break;
        case 'quadratic':
            result = function() {
                const d = b * b - 4 * a * c;
                if (d > 0) {
                    return `x1 = ${(-b + Math.sqrt(d)) / (2 * a)}, x2 = ${(-b - Math.sqrt(d)) / (2 * a)}`;
                } else if (d === 0) {
                    return `x = ${-b / (2 * a)}`;
                } else {
                    return "No tiene solución real";
                }
            };
            break;
        case 'triangle':
            result = function() {
                if (a + b > c && a + c > b && b + c > a) {
                    if (a === b && b === c) return "Equilátero";
                    if (a === b || b === c || a === c) return "Isósceles";
                    return "Escaleno";
                }
                return "No es un triángulo";
            };
            break;
        case 'factorial':
            const factorial = function(n) {
                if (n < 0 || !Number.isInteger(n)) return "Debe ser entero positivo";
                let f = 1;
                for (let i = 2; i <= n; i++) f *= i;
                return f;
            };
            result = factorial(a);
            break;
        default:
            result = "Operación no válida";
    }

    document.getElementById("result").innerText = typeof result === "function" ? result() : result;
};