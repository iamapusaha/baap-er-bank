document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email')
    const email = emailField.value;

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    if (email === 'apu@apusaha.com' && password === 'goruchor') {
        location.href = 'bank.html';
    } else {
        alert('invalid usernamd and password!')
    }
})