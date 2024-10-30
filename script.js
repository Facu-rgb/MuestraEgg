document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que la página se recargue

    // Datos correctos
    const correctUsername = 'facu';
    const correctPassword = '3202';

    // Obtener los valores ingresados
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Elemento donde se mostrará el dígito secreto
    const secretMessage = document.getElementById('secret');

    // Verificar si coinciden con los datos correctos
    if (username === correctUsername && password === correctPassword) {
        // Mostrar el dígito o mensaje secreto
        secretMessage.textContent = '¡Felicidades! El dígito secreto es: 2, el siguiente digito esta en la computadora 10 dividido 5';
        secretMessage.style.color = 'green'; // Cambiar color para destacarlo
    } else {
        // Mostrar mensaje de error
        document.getElementById('error').textContent = 'Usuario o contraseña incorrectos';
        secretMessage.textContent = ''; // Limpiar el dígito secreto si es incorrecto
    }
});
