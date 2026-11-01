// Alerta de politicas de alquiler
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert theme-${type}" role="alert">`,
        `   <p>${message}</p>`,
        '   <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('<h3>Estas son las políticas:</h3> <ol><li>Presenta tu documento de identidad original al recoger la bicicleta.</li> <li>Revisa la bicicleta con el asesor antes de salir.</li> <li>Cada 15 minutos de retraso en la devolución tienen un recargo de $5.000.</li> <li>Los daños por mal uso se cobran según el costo de la reparación.</li><li> Los menores de edad deben estar acompañados por un adulto responsable.</li></ol>', 'success')
    })
}

// Form 
// Fetch all forms that need custom Bootstrap validation styles
const forms = document.querySelectorAll('.needs-validation');

// Loop over them and prevent submission on invalid data
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
});