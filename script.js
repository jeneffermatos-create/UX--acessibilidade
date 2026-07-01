const form = document.querySelector('.contact-form');
const status = document.querySelector('[data-status]');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = form.querySelectorAll('input, textarea');
    let isValid = true;

    fields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.setAttribute('aria-invalid', 'true');
      } else {
        field.removeAttribute('aria-invalid');
      }
    });

    if (!isValid) {
      status.textContent = 'Preencha todos os campos para enviar sua mensagem.';
      return;
    }

    status.textContent = 'Mensagem enviada com sucesso. Obrigado por entrar em contato!';
    form.reset();
  });
}
