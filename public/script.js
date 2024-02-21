document.addEventListener('DOMContentLoaded', function () {
    setDefaultBackground();
    document.getElementById('download-btn').addEventListener('click', handleImageDownload);
    document.getElementById('login-btn').addEventListener('click', showLoginForm);
    document.getElementById('register-btn').addEventListener('click', showRegisterForm);
    document.getElementById('upload-btn').addEventListener('click', showUploadForm);
    document.getElementById('go-home-btn').addEventListener('click', goToHomePage);
});

function setDefaultBackground() {
    var backgroundContainer = document.body;
    var imagePath = 'images/capitu.jpg';
    backgroundContainer.style.backgroundImage = 'url(' + imagePath + ')';
}

function showUploadForm() {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    var uploadContainer = document.getElementById('upload-container');

    // Oculta os contêineres de login e registro
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'none';

    // Exibe o contêiner de upload
    uploadContainer.style.display = 'block';

    // Atualiza a opacidade dos contêineres
    updateOpacity([uploadContainer]);
}

// Adicione uma função para atualizar a opacidade dos contêineres
function updateOpacity(containers) {
    containers.forEach(function (container) {
        // Aguarde um breve momento antes de alterar a opacidade para garantir a transição
        setTimeout(function () {
            container.classList.toggle('fade-transition', true);
        }, 50);
    });
}

function goToHomePage() {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    var uploadContainer = document.getElementById('upload-container');

    // Oculta os contêineres de registro e upload
    registerContainer.style.display = 'none';
    uploadContainer.style.display = 'none';

    // Exibe o contêiner de login
    loginContainer.style.display = 'block';

    // Atualiza a opacidade dos contêineres
    updateOpacity([loginContainer]);
}

function handleImageUpload() {
    var fileInput = document.getElementById('bg-upload');
    var backgroundContainer = document.body;

    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            backgroundContainer.style.backgroundImage = 'url(' + e.target.result + ')';
            document.getElementById('download-btn').disabled = false;
        };

        reader.readAsDataURL(file);
    }
}

function handleImageDownload() {
    var backgroundContainer = document.body;
    var backgroundImageURL = getComputedStyle(backgroundContainer).backgroundImage;
    
    // Cria um link temporário para fazer o download da imagem
    var downloadLink = document.createElement('a');
    downloadLink.href = backgroundImageURL.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    downloadLink.download = 'downloaded-image.jpg';
    downloadLink.click();
}

function showLoginForm() {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    var uploadContainer = document.getElementById('upload-container');

    // Oculta os contêineres de registro e upload
    registerContainer.style.display = 'none';
    uploadContainer.style.display = 'none';

    // Exibe o contêiner de login
    loginContainer.style.display = 'block';

    // Atualiza a opacidade dos contêineres
    updateOpacity([loginContainer]);
}



function login() {
    // Implementação básica de login simulado
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de verificação de credenciais (substitua isso com sua lógica de autenticação real)
    if (username === 'usuario' && password === 'senha') {
        var loginContainer = document.getElementById('login-container');
        var logoutContainer = document.getElementById('logout-container');

        // Adiciona e remove a classe fade-transition aos contêineres após o login bem-sucedido
        loginContainer.classList.remove('fade-transition');
        logoutContainer.classList.add('fade-transition');

        // Altera a opacidade para esconder o loginContainer e mostrar o logoutContainer
        loginContainer.style.opacity = '0';
        logoutContainer.style.opacity = '1';

        // Habilita e torna visíveis o campo de upload e o botão de download
        document.getElementById('bg-upload').disabled = false;
        document.getElementById('bg-upload').style.opacity = '1';
        document.getElementById('download-btn').disabled = false;
        document.getElementById('download-btn').style.opacity = '1';

        document.getElementById('bg-upload').addEventListener('change', handleImageUpload);
    } else {
        // Login falhou
        alert('Login failed. Please check your credentials.');
    }
}

function redirectToRegister() {
    
    window.location.href = 'registroUsuario.html';
}

function showRegisterForm() {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    var uploadContainer = document.getElementById('upload-container');

    // Oculta os contêineres de login e upload
    loginContainer.style.display = 'none';
    uploadContainer.style.display = 'none';

    // Exibe o contêiner de registro
    registerContainer.style.display = 'block';

    // Atualiza a opacidade dos contêineres
    updateOpacity([registerContainer]);
}

function registerUser() {
    var newFullName = document.getElementById('new-fullname').value;
    var newCPF = document.getElementById('new-cpf').value;
    var newEmail = document.getElementById('new-email').value;

    // Função para validar CPF
    function isValidCPF(cpf) {
        return /^\d{11}$/.test(cpf);
    }

    // Função para validar Nome
    function isValidName(name) {
        return name.length <= 15;
    }

    // Função para validar Email
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Verificar se todos os requisitos estão preenchidos e são válidos
    if (newFullName && isValidName(newFullName) && newCPF && isValidCPF(newCPF) && newEmail && isValidEmail(newEmail)) {
        // Lógica de registro de usuário simulada
        alert('User registered successfully!');
        // Redirecionar ou realizar ações específicas da página de registro de usuário
        window.location.href = 'home.html'
    } else {
        alert('Please fill in all the required fields with valid data: Name (max 15 characters), CPF (11 digits), and Email.');
    }
}


function logout() {
    // Implementação básica de logout simulado
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('logout-container').style.display = 'none';
    document.getElementById('bg-upload').disabled = true;
    document.getElementById('download-btn').disabled = true;
}
