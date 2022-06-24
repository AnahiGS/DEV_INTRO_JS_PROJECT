let usuarios=[ {
    nombre:'pedro',
    clave:'2645',
    dinero: 800,
},
{
    nombre:'sandra',
    clave:'8974',
    dinero: 550,
},
{
    nombre:"juan",
    clave:'6739',
    dinero: 378,
}
];

localStorage.setItem('datausers',JSON.stringify(usuarios));
let userdata = JSON.parse(localStorage.getItem('datausers'));
console.log(userdata);