
class ingreso {
    constructor(nombre,precio,bebida){
        this.nombre = nombre;
        this.precio = precio;
        this.bebida = bebida;
    }
 }
 // Array de obj pre-cargados
 let combos = [    
           
    {  
    nombre:"lomo",
    precio:2500,
    bebida: "con bebida"

   },
    { 
    nombre:"hamburguesa",
    precio: 1800,
    bebida:"con bebida"

   },            
    {
    nombre:"pancho",
    precio: 1000,
    bebida:"sin bebida"
    
   },
   {  
    nombre:"pizza",
    precio: 2500,
    bebida:"sin bebida" 

   },
   {  
    nombre:"pizzas",
    precio: 3500,
    bebida:"con bebida" 

   },

   {

    nombre:"papas",
    precio: 1000,
    bebida:"sin bebida"
   }
 ]
let combosPorContructor = []//Array donde se pasaran los obj despues de ser pasados por function objPorContructor() o los nuevos obj a ingresar
const carrito = []

let initMenu = true

alert("Bienvenido a nuestro servicio de pedidos online")


function principal(){ //Esta funcion opera como Menu principal de las demas funciones

    let selecMenu = prompt("Arma tu pedido:\n1-Ver productos\n2-Mostrar economicos\n3-Buscar productos\n4-Comprar\n5-Cargar nuevos productos\n6-Salir")
console.log(combosPorContructor)
while(initMenu){
    switch (selecMenu) {
        case "1":
            mostrar(combosPorContructor,alert)
            break;
        case "2":
            mostrarEconomicos()
            break;
        case "3":
            buscador()
            break;   
        case "4":
            comprar()
            break;
        case "5":
            agregarIndi()
            break;
        case "6":
            initMenu = false
            break;
    
        default:
            alert("Has ingresado numero incorrecto")
            principal()
            break;
    }
}
}
function mostrar(arr,fn){
    
    arr.forEach( (cont) => {     
                  fn(cont.nombre + "\n"+ cont.bebida +"\n"+"$"+cont.precio)
                  

    })                            

    alert("fin de la lista")
    principal()
}
function mostrarEconomicos(){
    let stock = combosPorContructor.map((cont)=>{
        return {nombre :cont.nombre,
                precio :cont.precio,
                bebida :cont.bebida }
    })

    let valores = stock.map((cont)=> cont.precio)
    const precioMin = Math.min(...valores)
    
    let menor = stock.filter((cont) => cont.precio === precioMin)

    mostrar(menor,alert)







}
function buscador(){

     let pedir = prompt("Que desea buscar?")
     const buscador = combosPorContructor.filter(x => x.nombre == pedir || x.precio == pedir || x.bebida == pedir)
     console.log(buscador)
 
     if ( buscador.length > 0){
         alert(`Se encontraron: ${buscador.length} resultados`)
         mostrar(buscador, alert)
     }
     else{
 
         alert("Disculpe no contamos con ese producto ")
         principal()
     }
       
}
function agregarIndi(){
   
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = Number(prompt("Ingrese el precio del producto"));
    let bebida = prompt("Identifique bebida con las palabras:\n con bebida / sin bebida  ");
    
    while (initMenu) {
        
        if( nombre == "" || precio == 0 || bebida == "") { 
           
            alert("Los datos ingresados son incorrectos")
            let nombre = prompt("Ingrese el nombre del producto")
            let precio = Number(prompt("Ingrese el precio del producto"))
            let bebida = prompt("Identifique bebida con las palabras:\n con bebida / sin bebida  ")
                     } 
        else{

            let individual = new ingreso(nombre,precio,bebida)
            combosPorContructor.push(individual)
            console.log(combos)
            principal()

            
            
        }
    
    }   

        
            

}
function comprar(){
 
    let compra = prompt("Que producto desea comprar")
    let producto = combosPorContructor.find(x =>{
        return x.nombre == compra
    })
   console.log(producto)
    if (producto){ 
        alert(`Producto encontrado es:\n${producto.nombre}\n${producto.bebida}\n${producto.precio}`)
        let seguirCompra = prompt("Desea agregarlo al carrito?\n1-SI\2-NO\n3-Salir")
        if(seguirCompra == 1){
            carrito.push(producto)
            console.log(carrito)
            alert("Has agregado el producto al carrito con exito")
            seguirSumando()
        }
        else if( seguirCompra == 2){
         alert("No se ha sumado el producto")
            principal()


        }
        else{
            principal()
        }

    }

}
function carritoEnd(){
    
    let reduceCar = carrito.reduce((acum,sumador) =>{

        return acum + sumador.precio},0)
    
    alert(`Su total acumulado es: ${reduceCar}`)
    let pago = prompt("Que desea hacer:\n1-Retiro en sucursal\n2-Sumarle envio y pagar(pago c/tarjeta)\n3-Sumar envio y pago domicilio")

    switch(pago){
        case "1":
             alert("Muchas gracias por su compra, lo esperamos por nuestra sucursal")
             initMenu = false
             break;

        case"2":
            alert(`Se ha agregado su envio el total de su compra es:${reduceCar + 250}`)
            let tarjeta = prompt("Ingrese su numero de tarjeta")
            let seguridad = prompt("Ingrese numero de seguridad")
            alert(`Su pago de $ ${reduceCar + 250} ha sido exitoso,gracias por su compra\n Vuelva pronto!!`)
            initMenu = false
            break;
            
        case "3":
            
            alert(`Se ha agregado el envio al total de su compra: ${reduceCar + 250} \npronto estaremos en su domicilio.\nGracias por su compra `) 
            initMenu = false
            break;
             
        default:
           alert("eleccion no valida, seleciona opcion correcta")
           carritoEnd()


    }

    
}
function seguirSumando(){
    let seguir = prompt("Desea seguir comprando?\n1-SI\n2-NO")

    if (seguir == 1){
        
        comprar()  

    }
    else if( seguir == 2){

        carritoEnd()

    }


}
function objPorConstructor(){
    combos.forEach(x =>{combosPorContructor.push(new ingreso(x.nombre,x.precio,x.bebida))})
    alert("base de datos actualizada")
    console.log(combosPorContructor)
}
objPorConstructor()//Pasa los obj pre colocados por el contructor para darle la misma herencia que los nuevos obj
console.log(objPorConstructor)
principal()