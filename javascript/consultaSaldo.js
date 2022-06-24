//Consulta de saldo

userdata = JSON.parse(localStorage.getItem('datausers'));
console.log(userdata);
nom=localStorage.getItem('nombre');
nomArray=userdata.find(persona=>persona.nombre===nom);

//rest =JSON.parse(localStorage.getItem('restante'));

let saldoTotal=nomArray.dinero;

const etiqueta_saldo=document.querySelector('#etiqueta_saldo');
etiqueta_saldo.innerHTML='$'+saldoTotal;


/*function actualizar(){
    nomArray.dinero=rest;
    return(nomArray.dinero)
}
*/