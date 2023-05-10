//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

//Ejemplo:
//Array1: ['rojo', 'azul', 'amarillo']
//Array2: ['blanco', 'negro', 'rojo']
//Resultado: ['rojo']

//Ejemplo 2:
//Array1: [4, 3, true, 'manzana']
//Array2: ['pera', 3, f alse, true, 3, true]
//Resultado: [3, true]const algunaCoincidencia = 

const frutas = ['mango' , 'kiwi' , 'tomate' , 'banana', 'manzana'];
const verduras = ['lechuga' , 'papas', 'zanahoria' , 'tomate', 'manzana'];

    function repetido(array1 , array2){
        let nuevoArray = [];
        for(let i = 0; i < array1.length; i++){
            const elementoA = array1 [i];
                for(let i = 0; i < array2.length; i++){
                const elementoB = array2[i];
                    if(elementoA === elementoB){
                        nuevoArray.push(elementoA);
                    }
        
            }
        
        }
       return console.log("El repetido es " + nuevoArray + ".");
       
    }

 
repetido(frutas, verduras);


   


 



     
 













    
    