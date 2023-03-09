let btnCompruebaAnnio = document.getElementById("btnCompruebaAnnio");

btnCompruebaAnnio.addEventListener("click", executeIsLeapYear);

function isLeapYear(year) {
    // Tu código aquí 👈
    let result;
    if((typeof(year) === "number" && year >= 0)){

        if( (((year % 4) === 0) && ((year % 100) !== 0)) || (((year % 100) === 0) && ((year % 400) ===0))){
            result = "es bisiesto";
        }else{
            result = "no es bisiesto";
        }

    }else{
        result = "no es bisiesto";
    }
    return result;    
  }

  function executeIsLeapYear(){
    let year = Number(document.getElementById("annio").value);
    alert("El año " + year + " " + isLeapYear(year)); 
      
}

/**Condicional switch */

alert(getPetExerciseInfo("ave", 8));

function getPetExerciseInfo(type, age) {
    // Tu Código aquí 👈
    type = String(type).toLowerCase();
    age = Number(age);
    let result;
    switch (type) {
        case "perro":
            if(age < 1){
                result = "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
            }else if(age => 1 && age === 7){
                result = "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
            }else if(age > 7){
                result = "Los perros viejos necesitan caminatas más cortas";
            }
            break;

        case "gato":
            if(age < 1){
                result = "Los gatitos necesitan frecuentes sesiones de juego";
            }else if(age >= 1 && age <= 7){
                result = "Los gatos a esta edad necesitan jugar diariamente";
            }else if(age > 7){
                result = "Los gatos viejos necesitan sesiones de juego más cortas";
            }
            break;

        case "ave":
            if(age < 1 ){
                result = "Las aves jóvenes necesitan mucho espacio para volar";
            }else if(age >= 1 && age <= 7 ){
                result = "Las aves necesitan jugar diariamente y un lugar para volar";
            }else if( age > 7){
                result = "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
            }
            break;
    
        default:
            result = "Tipo de mascota invalida";
            break;
    }
    return result;
}