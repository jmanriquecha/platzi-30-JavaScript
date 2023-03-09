// Día 1

let solucion1 = document.getElementById("solucion1");


function solution(valor){
    return typeof(valor);
}

solucion1.innerHTML += "<p> <strong>Tipo de dato:</strong> " + solution(1) + "</p>";
solucion1.innerHTML += "<p> <strong>Tipo de dato:</strong> " + solution("Dieguillo") + "</p>";
solucion1.innerHTML += "<p> <strong>Tipo de dato:</strong> " + solution(true) + "</p>";
