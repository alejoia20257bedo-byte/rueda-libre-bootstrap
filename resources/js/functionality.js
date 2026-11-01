// Functionality for Rueda Libre website

document.addEventListener('DOMContentLoaded', () => {
    // 1. Age Range Slider sync (reservas.html)
    const rangeInput = document.getElementById('rangeEdad');
    const rangeOutput = document.getElementById('rangeValue');
    if (rangeInput && rangeOutput) {
        rangeInput.addEventListener('input', function () {
            rangeOutput.textContent = this.value;
        });
    }

    // 2. Rental policies alert modal (reservas.html)
    const alertBox = document.getElementById('politicasAlert');
    const openBtn = document.getElementById('openAlertBtn');
    const closeBtn = document.getElementById('closeAlertBtn');

    if (alertBox && openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alertBox.classList.remove('d-none');
            setTimeout(() => {
                alertBox.classList.add('show');
            }, 10);
        });
    }

    if (alertBox && closeBtn) {
        closeBtn.addEventListener('click', () => {
            alertBox.classList.remove('show');
            setTimeout(() => {
                alertBox.classList.add('d-none');
            }, 150); // Matches Bootstrap fade transition
        });
    }

    // 3. Dynamic minimum reservation date
    const fechaInput = document.getElementById('validationFecha');
    if (fechaInput) {
        const today = new Date().toISOString().split('T')[0];
        if (!fechaInput.min || fechaInput.min < today) {
            fechaInput.min = today;
        }
    }

    // 4. Form validation for all forms with .needs-validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});
