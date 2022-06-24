userdata = JSON.parse(localStorage.getItem('datausers'));
console.log(userdata);
nom=localStorage.getItem('nombre');
nomArray=userdata.find(persona=>persona.nombre===nom);

rest=JSON.parse(localStorage.getItem('restante'));
//mostrar el monto final
let etiqueta_saldo=document.getElementById('etiqueta_saldo2')
etiqueta_saldo.innerHTML='$'+rest;

//hacer que el nomArray se actualice al dar clic al boton de hacer otra operación
let otra_oper=document.getElementById('otra_oper').addEventListener('operacion', otraOper)

function otraOper(nomArray){
    nomArray.dinero=rest;
    
    return nomArray
}
          
