function login() {
    const nickname = document.getElementById('nickname').value;
    if (nickname) {
        document.getElementById('welcome-section').style.display = 'block';
        document.getElementById('nickname-display').innerText = nickname;
        document.getElementById('login-section').style.display = 'none';
        return false;
    } else {
        alert('Por favor, ingresa tu nickname.');
        return false;
    }
}

function logout() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

