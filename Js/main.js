$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(DDD) 00000-0000'
    })

    $('#formcontato').validate({
        rules:{
            nome: {
                maxlength: 40,
                minlength: 5,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 11,
                maxlength: 11
            },
            mensagem: {
                required: true,
                maxlength: 250,
                minlength: 50
            }
        },
        messages: {
            nome: 'Por favor, Insira seu nome completo',
            email: 'Por favor, Insira um email válido',
            telefone: 'Por favor, Insira um número de telefone válido',
            mensagem: 'Por favor, Coloque sua dúvida ou pedido de adoção!'
        },
        submitHandler: function(form) {
            alert("Sua mensagem foi recebida corretamente, aguarde que logo mais entraremos em contato!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            const camposInpreenchidos = validator.numberOfInvalids();
            if (camposInpreenchidos) {
                alert(`Por favor, Verifique as informações pois faltam ${camposInpreenchidos} informações para Enviar!`);
            }
        }
    })
})
