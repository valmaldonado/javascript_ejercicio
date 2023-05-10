//3)
//3.1) Dado el siguiente objeto
//let carrito = {
  //  montoTotal: 10,
    //productos: ["Leche"]
//}

//Crear las clases necesarias para generar carritos //respetando la estructura del objeto dado.

//3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
//agregarProducto(nombre, precio, unidades) {
    // Completar aca...
//}


//Ej:
//agregarProducto("Azucar", 5, 2);

//Resultado esperado
//carrito = {
  //  montoTotal: 20,
    //productos: ["Leche", "Azucar"]
//}

//3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”


/**/

class Carrito{
  
  constructor(montoTotal, productos, cantidadUnidades){
    this.montoTotal = montoTotal;
    this.productos = [productos];
    this.cantidadUnidades = cantidadUnidades;
  }
  
   agregarProductoAlCarrito(producto, precio, unidades){
    if(this.productos.includes(producto)){
      console.log("Ese producto ya fue agregado");
    }  else{
      this.productos.push(producto);
      
      
    } 
      
  }  



} 

let carrito1 = new Carrito("Leche", 260, 10);
agregarProductoAlCarrito("Arroz" , 180, 3);
console.log(carrito1);
  




 













