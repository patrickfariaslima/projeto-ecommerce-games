function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulando autenticação (verificação básica)
    if (username === "user" && password === "password") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("loggedInMessage").style.display = "block";
    } else {
        alert("Invalid username or password. Try again.");
    }
}