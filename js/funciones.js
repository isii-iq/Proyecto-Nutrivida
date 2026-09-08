const formularioRegistro = document.querySelector('#formulario-registro');
const formularioLogin = document.querySelector('#formulario-iniciar-sesion');
const patronRun = /^\d{6,8}[0-9Kk]$/;
const patronCorreo = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

if (formularioRegistro) {
  formularioRegistro.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const run = document.querySelector('#run');
    const nombre = document.querySelector('#nombre');
    const apellidos = document.querySelector('#apellidos');
    const correo = document.querySelector('#correo');
    const confirmarCorreo = document.querySelector('#confirmar-correo');
    const contrasena = document.querySelector('#contrasena');
    const confirmarContrasena = document.querySelector('#confirmar-contrasena');
    const direccion = document.querySelector('#direccion');
    const rol = document.querySelector('#rol');


    const errorRun = document.querySelector('#error-run');
    const errorNombre = document.querySelector('#error-nombre');
    const errorApellidos = document.querySelector('#error-apellidos');
    const errorCorreo = document.querySelector('#error-correo');
    const errorConfirmarCorreo = document.querySelector('#error-confirmar-correo');
    const errorContrasena = document.querySelector('#error-contrasena');
    const errorConfirmarContrasena = document.querySelector('#error-confirmar-contrasena');
    const errorDireccion = document.querySelector('#error-direccion');
    const errorRol = document.querySelector('#error-rol');

    let formularioValido = true;


    if (run.value.trim() === '') {
      run.classList.add('campo-error');
      errorRun.textContent = 'El RUN es requerido.';
      formularioValido = false;
    } else if (/[.\-]/.test(run.value.trim())) {
      run.classList.add('campo-error');
      errorRun.textContent = 'El RUN no debe contener puntos ni guion. Ej: 19011022K';
      formularioValido = false;
    } else if (run.value.trim().length < 7 || run.value.trim().length > 9) {
      run.classList.add('campo-error');
      errorRun.textContent = 'El RUN debe tener entre 7 y 9 caracteres.';
      formularioValido = false;
    } else if (!patronRun.test(run.value.trim())) {
      run.classList.add('campo-error');
      errorRun.textContent = 'El RUN no es válido. Ej: 19011022K';
      formularioValido = false;
    } else {
      run.classList.remove('campo-error');
      errorRun.textContent = '';
    }


    if (nombre.value.trim() === '') {
      nombre.classList.add('campo-error');
      errorNombre.textContent = 'El nombre es requerido.';
      formularioValido = false;
    } else if (nombre.value.trim().length > 50) {
      nombre.classList.add('campo-error');
      errorNombre.textContent = 'El nombre no puede superar los 50 caracteres.';
      formularioValido = false;
    } else {
      nombre.classList.remove('campo-error');
      errorNombre.textContent = '';
    }


    if (apellidos.value.trim() === '') {
      apellidos.classList.add('campo-error');
      errorApellidos.textContent = 'Los apellidos son requeridos.';
      formularioValido = false;
    } else if (apellidos.value.trim().length > 100) {
      apellidos.classList.add('campo-error');
      errorApellidos.textContent = 'Los apellidos no pueden superar los 100 caracteres.';
      formularioValido = false;
    } else {
      apellidos.classList.remove('campo-error');
      errorApellidos.textContent = '';
    }


    if (correo.value.trim() === '') {
      correo.classList.add('campo-error');
      errorCorreo.textContent = 'El correo es requerido.';
      formularioValido = false;
    } else if (correo.value.trim().length > 100) {
      correo.classList.add('campo-error');
      errorCorreo.textContent = 'El correo no puede superar los 100 caracteres.';
      formularioValido = false;
    } else if (!patronCorreo.test(correo.value.trim())) {
      correo.classList.add('campo-error');
      errorCorreo.textContent = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com';
      formularioValido = false;
    } else {
      correo.classList.remove('campo-error');
      errorCorreo.textContent = '';
    }


    if (confirmarCorreo.value.trim() === '') {
      confirmarCorreo.classList.add('campo-error');
      errorConfirmarCorreo.textContent = 'Debes confirmar tu correo.';
      formularioValido = false;
    } else if (confirmarCorreo.value.trim() !== correo.value.trim()) {
      confirmarCorreo.classList.add('campo-error');
      errorConfirmarCorreo.textContent = 'Los correos no coinciden.';
      formularioValido = false;
    } else {
      confirmarCorreo.classList.remove('campo-error');
      errorConfirmarCorreo.textContent = '';
    }


    if (contrasena.value === '') {
      contrasena.classList.add('campo-error');
      errorContrasena.textContent = 'La contraseña es requerida.';
      formularioValido = false;
    } else if (contrasena.value.length < 8) {
      contrasena.classList.add('campo-error');
      errorContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres.';
      formularioValido = false;
    } else {
      contrasena.classList.remove('campo-error');
      errorContrasena.textContent = '';
    }


    if (confirmarContrasena.value === '') {
      confirmarContrasena.classList.add('campo-error');
      errorConfirmarContrasena.textContent = 'Debes confirmar tu contraseña.';
      formularioValido = false;
    } else if (confirmarContrasena.value !== contrasena.value) {
      confirmarContrasena.classList.add('campo-error');
      errorConfirmarContrasena.textContent = 'Las contraseñas no coinciden.';
      formularioValido = false;
    } else {
      confirmarContrasena.classList.remove('campo-error');
      errorConfirmarContrasena.textContent = '';
    }


    if (direccion.value.trim() === '') {
      direccion.classList.add('campo-error');
      errorDireccion.textContent = 'La dirección es requerida.';
      formularioValido = false;
    } else if (direccion.value.trim().length > 300) {
      direccion.classList.add('campo-error');
      errorDireccion.textContent = 'La dirección no puede superar los 300 caracteres.';
      formularioValido = false;
    } else {
      direccion.classList.remove('campo-error');
      errorDireccion.textContent = '';
    }

    if (formularioValido) {
      document.querySelector('#confirmacion').textContent = '¡Registro completado correctamente!';
      formularioRegistro.reset();
    }

    if (rol.value === '') {
      rol.classList.add('campo-error');
      errorRol.textContent = 'Debes seleccionar un rol.';
      formularioValido = false;
    } else {
      rol.classList.remove('campo-error');
      errorRol.textContent = '';
    }


  });
}

if (formularioLogin) {
  formularioLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    const correo = document.querySelector('#correo');
    const contrasena = document.querySelector('#contrasena');
    const rol = document.querySelector('#rol');

    const errorCorreo = document.querySelector('#error-correo');
    const errorContrasena = document.querySelector('#error-contrasena');
    const errorRol = document.querySelector('#error-rol');

    let formularioValido = true;

    if (correo.value.trim() === '') {
      correo.classList.add('campo-error');
      errorCorreo.textContent = 'El correo es requerido.';
      formularioValido = false;
    } else if (!patronCorreo.test(correo.value.trim())) {
      correo.classList.add('campo-error');
      errorCorreo.textContent = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com';
      formularioValido = false;
    } else {
      correo.classList.remove('campo-error');
      errorCorreo.textContent = '';
    }

    if (contrasena.value === '') {
      contrasena.classList.add('campo-error');
      errorContrasena.textContent = 'La contraseña es requerida.';
      formularioValido = false;
    } else if (contrasena.value.length < 8) {
      contrasena.classList.add('campo-error');
      errorContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres.';
      formularioValido = false;
    } else {
      contrasena.classList.remove('campo-error');
      errorContrasena.textContent = '';
    }

    if (rol.value === '') {
      rol.classList.add('campo-error');
      errorRol.textContent = 'Debes seleccionar un rol.';
      formularioValido = false;
    } else {
      rol.classList.remove('campo-error');
      errorRol.textContent = '';
    }

    if (formularioValido) {
      if (rol.value === 'administrador') {
        window.location.href = 'administrador.html';
      } else if (rol.value === 'nutricionista') {
        window.location.href = 'nutricionista.html';
      } else if (rol.value === 'paciente') {
        window.location.href = 'paciente.html';
      }
    }

    if (formularioValido) {
      document.querySelector('#confirmacion').textContent = '¡Sesión iniciada correctamente!';
      formularioLogin.reset();
    }
  });
}