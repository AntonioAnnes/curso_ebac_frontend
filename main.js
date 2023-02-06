const form = document.getElementById('form-valida');
let valorA = parseFloat(document.getElementById('valor-compra').value)
let valorB = parseFloat(document.getElementById('saldo-conta').value)

formEvalido = false;

function numerovalida (valorA, valorB){
    return valorB > valorA
}

form.addEventListener('submit', function(e){

    e.preventDefault();
    const mensagemSucesso = `Conta feita com sucesso!`;

    formEvalido = numerovalida(valor-compra.value, saldo-conta.value);
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'

        valorA.value = '';
        valorB.value = '';

    }
    else {
        document.querySelector('.error-message').style.display = 'block'
    }
})