
//seleccionar la clase del boton

const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btn.addEventListener('click', mostrar);

function mostrar() {

    if (footer.classList.contains('activo')) {

        footer.classList.remove('activo');

    } else {
        footer.classList.add('activo');

    }

}
console.log(footer.classList);

//recojer eventos con addEventListener

const contenedorimg = document.querySelector('.img-container'); //recojer la clase

contenedorimg.addEventListener('mouseout', () => {
    console.log('saliendo...');
    contenedorimg.style.background = 'transparent';
})



contenedorimg.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion')
    contenedorimg.style.background = 'black';
});

//recojer enventos 

const sec = document.querySelector('.sec-div');

sec.addEventListener('mouseenter', () =>{
   console.log('entrando al div');
    sec.style.background = 'white';

sec.addEventListener('mouseout', () => {
    sec.style.background = 'red';
})

})