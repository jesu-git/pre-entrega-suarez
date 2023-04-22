
let ejecutor = true

alert("Binvenido a nuestro servicio de pedidos online")
let pedido = Number(prompt("Seleccione su combo:\n1-PROMO hambuerguesa y bebida($1500)\n2-PROMO lomo y bebida($2000)\n3-PROMO empanadas($1200)\n4-PROMO pizzas($1000)\n5-Salir "))

function tomarPedido() {

    while (ejecutor) {
        switch (pedido) {
            case 1:
                cajaMenu(pedido, 1500)

                break;
            case 2:
                cajaMenu(pedido, 2000)

                break;
            case 3:
                cajaMenu(pedido, 1200)

                break;
            case 4:
                cajaMenu(pedido, 1000)
                break;
            case 5:
                alert("Vuelva pronto")
                ejecutor = false
                break;
            default:
                alert("No existe ese producto")
                pedido = Number(prompt("Seleccione su combo:\n1-hambuerguesa y bebida\n2-Lomo y bebida\n3-empanadas\n4-pizzas\n 5-Salir "))
                break;
        }
    }
}



function cajaMenu(pedido, prom) {

    let paso2 = Number(prompt(`Has elejido promocion ${pedido}: $ ${prom}\n1-Pagar\n2-Volver a menu principal`))

    if (paso2 === 1) {
        let modoPago = Number(prompt("Elige tu modo de pago:\n1-Pago efectivo\n2-Pago con tarjeta"))
        cobroTarjeta(modoPago, prom)



    }
    else if (paso2 === 2) {
        tomarPedido()
    }
}



function cobroTarjeta(modoPago, prom) {

    if (modoPago === 1) {
        let envio = Number(prompt("Desea sumar el envio a domicilio(valor : $200)\n1-SI\n2-NO"))
        if( envio === 1){
          alert("El envio ha sido agregado con exito")
          alert("Muchas gracias por su compra, su pedido estara listo en 40 min")
          ejecutor = false
        }
        else{
            alert("Muchas gracias por su compra, su pedido estara listo en 40 min")

        }

    }
    else if (modoPago === 2) {
            let envio = Number(prompt("Desea sumar el envio a domicilio(valor : $200)\n1-SI\n2-NO"))

         if(envio === 2){
            let tarjeta = prompt("Ingrese su numero de tarjeta")
            let seguridad = prompt("Ingrese numero de seguridad")
            alert(`Su pago de $ ${prom} ha sido exitoso,gracias por su compra\n Vuelva pronto!!`)
            ejecutor = false
            
        
        }
        else if( envio === 1){ 
                
                alert ("Se ha sumado el envio con exito")
                let tarjeta = prompt("Ingrese su numero de tarjeta")
                let seguridad = prompt("Ingrese numero de seguridad")
                alert(`Su pago de $ ${(prom + 200)} ha sido exitoso,gracias por su compra`)
                ejecutor = false
                 }

    } }




tomarPedido()