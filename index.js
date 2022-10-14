let form = document.getElementById('Contacto');

function sendForm(e) {
    console.log('hola');
    let data = {
        name: document.getElementById('Nombre').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone: document.getElementById('phone').value
    }


    fetch('http://cantilever.com.ar:7777', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


document.getElementById('sendbtn').addEventListener('click', sendForm());