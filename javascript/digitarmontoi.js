
userdata = JSON.parse(localStorage.getItem('datausers'));
console.log(userdata);
nom=localStorage.getItem('nombre');
nomArray=userdata.find(persona=>persona.nombre===nom);

let monto=parseInt('');
let monto_pantalla=document.querySelector('#monto');
let btn_num=document.getElementById('btn_num');
const btn_continuar1=document.getElementById('btn_continuar1').addEventListener('click', ing);

//funcionalidad del teclado

function num_1(){
    monto = monto_pantalla.value+'1';
    monto_pantalla.value=monto; 
}

function num_2(){
    monto = monto_pantalla.value+'2';
    monto_pantalla.value=monto; 
}

function num_3(){
    monto = monto_pantalla.value+'3';
    monto_pantalla.value=monto; 
}

function num_4(){
    monto = monto_pantalla.value+'4';
    monto_pantalla.value=monto; 
}

function num_5(){
    monto = monto_pantalla.value+'5';
    monto_pantalla.value=monto; 
}

function num_6(){
    monto = monto_pantalla.value+'6';
    monto_pantalla.value=monto; 
}

function num_7(){
    monto = monto_pantalla.value+'7';
    monto_pantalla.value=monto; 
}

function num_8(){
    monto = monto_pantalla.value+'8';
    monto_pantalla.value=monto; 
}

function num_9(){
    monto = monto_pantalla.value+'9';
    monto_pantalla.value=monto; 
}

function num_0(){
    monto = monto_pantalla.value+'0';
    monto_pantalla.value=monto; 
}


let btn_borrar1=document.querySelector('#btn_borrar1').addEventListener('click',borrar1)

function borrar1(){
    let pantalla1 = monto_pantalla.value;
    let newValue1 = pantalla1.substring(0,pantalla1.length - 1);
    monto_pantalla.value = newValue1;
}

//operación para ingresar dinero

let restante='';  
let rest='';

function ing(){
    restante=parseInt(nomArray.dinero)+parseInt(monto);
    if(restante>10 && restante<990){
        localStorage.setItem('restante',JSON.stringify(restante));
        window.location='exito.html';   
    }else if(monto===0){
        alert('Ingrese una cantidad mayor a 0');
    }else{
        alert('Su cuenta no deberá tener cantidades menores a $10 ni mayores a $990');
    }
    rest =JSON.parse(localStorage.getItem('restante'));
    return (restante,rest)
}




//nomArray.dinero=rest