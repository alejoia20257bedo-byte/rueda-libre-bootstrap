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

    const hideAlert = () => {
        if (alertBox && !alertBox.classList.contains('d-none')) {
            alertBox.classList.remove('show');
            setTimeout(() => {
                alertBox.classList.add('d-none');
            }, 150); // Matches Bootstrap fade transition
        }
    };

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
        closeBtn.addEventListener('click', hideAlert);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideAlert();
        }
    });

    // Close on click outside alert box
    document.addEventListener('click', (e) => {
        if (alertBox && !alertBox.classList.contains('d-none')) {
            if (!alertBox.contains(e.target) && openBtn && !openBtn.contains(e.target)) {
                hideAlert();
            }
        }
    });

    // 3. Dynamic minimum reservation date (using local date instead of UTC to avoid timezone shift)
    const fechaInput = document.getElementById('validationFecha');
    if (fechaInput) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const localToday = `${year}-${month}-${day}`;

        if (!fechaInput.min || fechaInput.min < localToday) {
            fechaInput.min = localToday;
        }
    }

    // 4. Form validation for all forms with .needs-validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Show confirmation message if present
                const successMsg = document.getElementById('reservationSuccess');
                if (successMsg) {
                    successMsg.classList.remove('d-none');
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    alert('¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.');
                }
                form.reset();
                form.classList.remove('was-validated');
                if (rangeInput && rangeOutput) {
                    rangeOutput.textContent = rangeInput.value;
                }
                return;
            }
            form.classList.add('was-validated');
        }, false);
    });
});
// ----------------------------------------------------------------------------------------
// Changing the color of the background in Noturna-rueda-libre 
