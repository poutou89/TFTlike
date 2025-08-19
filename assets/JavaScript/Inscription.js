// assets/JavaScript/register.js
document.addEventListener('DOMContentLoaded', function () {
  const pass1 = document.getElementById('register_type_form_plainPassword_first');
  const pass2 = document.getElementById('register_type_form_plainPassword_second');
  const registerBtn = document.getElementById('register-btn');

  function checkPasswords() {
    if (pass1.value && pass1.value === pass2.value) {
      registerBtn.disabled = false;
    } else {
      registerBtn.disabled = true;
    }
  }

  if (pass1 && pass2 && registerBtn) {
    pass1.addEventListener('input', checkPasswords);
    pass2.addEventListener('input', checkPasswords);
  }
});
