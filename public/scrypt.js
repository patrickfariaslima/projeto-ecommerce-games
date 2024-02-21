// Verifica se a página é a de login
if (window.location.pathname === '/login.html') {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        // Redirecionar para a página de logout após o envio do formulário
        window.location.href = 'logout.html';
    });
}
