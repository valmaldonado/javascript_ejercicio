//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
//para valor 6
//1
//12
//123
//1234
//12356

//para valor 3
//1
//12
//123


function piramideNumerica (number){
    number = []  
        for (i = 1; i <= 10; i++) {
            number.push(i);

            repeticion = console.log(number);
        }

    return repeticion    
} 


piramideNumerica(20);






 