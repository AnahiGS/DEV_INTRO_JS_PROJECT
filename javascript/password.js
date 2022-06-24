userdata = JSON.parse(localStorage.getItem('datausers'));
console.log(userdata);

//Ingresar clave

let password='';
let pin_pantalla=document.querySelector('#pin');
const btn_entrar=document.querySelector('#entrar');


//1. darle funcionalidad al teclado.

function numero_1(){
    password = pin_pantalla.value+'1';
    pin_pantalla.value=password;  
}

function numero_2(){
    password = pin_pantalla.value+'2';
    pin_pantalla.value=password;  
}

function numero_3(){
    password = pin_pantalla.value+'3';
    pin_pantalla.value=password;
}

function numero_4(){
    password = pin_pantalla.value+'4';
    pin_pantalla.value=password;
}

function numero_5(){
    password = pin_pantalla.value+'5';
    pin_pantalla.value=password;
}

function numero_6(){
    password = pin_pantalla.value+'6';
    pin_pantalla.value=password;
}

function numero_7(){
    password = pin_pantalla.value+'7';
    pin_pantalla.value=password;
}

function numero_8(){
    password = pin_pantalla.value+'8';
    pin_pantalla.value=password;
}

function numero_9(){
    password = pin_pantalla.value+'9';
    pin_pantalla.value=password;
}

function numero_0(){
    password = pin_pantalla.value+'0';
    pin_pantalla.value=password;
}


let btn_borrar=document.querySelector('#btn_borrar').addEventListener('click',borrar)

function borrar(){
    let pantalla = pin_pantalla.value;
    let newValue = pantalla.substring(0,pantalla.length - 1);
    pin_pantalla.value = newValue;
}

//2. Validar el usuario y la clave: Hacer que cuando digite la clave y sea igual a la clave guardada en array "usuario", entre y nos presente las opciones de operación bancaria
let access=false;
let nom='';

nom=localStorage.getItem('nombre');

let nomArray=userdata.find(persona=>persona.nombre===nom);

//console.log(nomArray.clave);

function acceso(){
  if(password===nomArray.clave){
      access=true;
  }
  password = "";
  return access;
}

btn_entrar.addEventListener('click',entrar)

function entrar(){
  access = acceso();
  if(access===true){
      window.location='opciones.html';
  }else{
      alert('Clave incorrecta, vuelva a intentarlo');
  }
}


let etiqueta_name=document.getElementById('etiqueta_name');
etiqueta_name.innerHTML='Bienvenidx'+' '+nom;