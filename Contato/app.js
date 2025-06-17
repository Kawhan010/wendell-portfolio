document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contato');
    const botaoEnviar = document.getElementById('botao-enviar');
    const statusMensagem = document.getElementById('status-mensagem');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Desabilita o botão durante o envio
        botaoEnviar.disabled = true;
        botaoEnviar.textContent = 'Enviando...';
        statusMensagem.textContent = '';
        statusMensagem.className = 'status-mensagem';

        // Coleta os dados do formulário
        const dados = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            assunto: document.getElementById('assunto').value,
            mensagem: document.getElementById('mensagem').value
        };

        // Envia o email usando EmailJS
        emailjs.send('service_gyehf6n', 'template_27fzcik', dados)
            .then(function() {
                // Sucesso
                statusMensagem.textContent = 'Mensagem enviada com sucesso!';
                statusMensagem.className = 'status-mensagem sucesso';
                formulario.reset();
            })
            .catch(function(error) {
                // Erro
                statusMensagem.textContent = 'Erro ao enviar mensagem. Por favor, tente novamente.';
                statusMensagem.className = 'status-mensagem erro';
                console.error('Erro:', error);
            })
            .finally(function() {
                // Reabilita o botão
                botaoEnviar.disabled = false;
                botaoEnviar.textContent = 'Enviar Mensagem';
            });
    });
});
