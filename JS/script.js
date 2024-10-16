document.getElementById("formulario").addEventListener('submit' , (event) =>{
    event.preventDefault();

    //Validar nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introduzca su nombre';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    // Validar correo
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patron de validacion basico

    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introduzca un mail valido';
        emailError.classList.add('error-message');
    }else{
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    // Validar contrasena
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/; // Patron de validacion basico

    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La contrasena debe tener al menos 8 caracteres, mayusculas, minusculas y caracteres especiales';
        contrasenaError.classList.add('error-message');
    }else{
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    }

    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        alert('El formulario se ha enviado con exito');
        document.getElementById('formulario').reset(); // Se limpia el formulario
    }


})