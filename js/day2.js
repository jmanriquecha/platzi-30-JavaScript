// Día 2

let solucion2 = document.getElementById("solucion2"); 

function calculateTip(billAmount, tipPercentage){
    let propina = 0;
    if((typeof(billAmount) === "number") && (typeof(tipPercentage) === "number")){
        if (billAmount >= 0 && tipPercentage >= 0) {
            propina = (billAmount * tipPercentage)/100;
        }
    }    
    return propina;
}

solucion2.innerHTML += "<p> <strong>Propina:</strong> " + calculateTip(100, 10) + "</p>";
solucion2.innerHTML += "<p> <strong>Propina:</strong> " + calculateTip(1524.33, 25) + "</p>";

