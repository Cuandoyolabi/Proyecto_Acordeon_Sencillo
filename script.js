const toggle = document.querySelector('.toggle');

toggle.onclick = function(){
    
    const respuesta = document.querySelector('.respuesta');
    respuesta.classList.toggle('active');
    toggle.classList.toggle('active');
}

