function logout() {
    usuarioIdentificado = false;
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('nickname').value = '';
    alert('Sesión cerrada.');
}

function logout() {
    usuarioIdentificado = false;
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('nickname').value = '';
    alert('Sesión cerrada.');
}


function logout() {
    usuarioIdentificado = false;
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('nickname').value = '';
    alert('Sesión cerrada.');
}

// Check if there is a nickname stored in localStorage
document.addEventListener("DOMContentLoaded", function() {
    const storedNickname = localStorage.getItem("nickname");
    if (storedNickname) {
        showWelcomeMessage(storedNickname);
    }
});

function login() {
    const nickname = document.getElementById('nickname').value;
    localStorage.setItem('nickname', nickname);
    showWelcomeMessage(nickname);
    return false; // Prevent form submission
}

function showWelcomeMessage(nickname) {
    document.getElementById('nickname-display').textContent = nickname;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('welcome-section').style.display = 'block';
}

function logout() {
    localStorage.removeItem('nickname');
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('welcome-section').style.display = 'none';
}
