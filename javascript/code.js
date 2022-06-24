
let btn_user=document.querySelector('#users');

//1 asociar el input de cada persona con su respectiva clave guardada en el array

 //va a guardar el 'name' guardado en el local.storage cuando se le da click al input

if(btn_user){
    btn_user.addEventListener('click', (e)=>{
        //console.log(e.target.name);
        localStorage.setItem('nombre',e.target.name); //agregar el 'name' de cada usuario
        window.location="password.html"; 
    })
    
}

