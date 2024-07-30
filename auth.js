document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedUser = JSON.parse(localStorage.getItem(username));

            if (storedUser && storedUser.password === password) {
                localStorage.setItem('loggedin', 'true');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const name = document.getElementById('name').value;

            const user = { email, password, name };
            localStorage.setItem(username, JSON.stringify(user));
            localStorage.setItem('loggedin', 'true');
            window.location.href = 'index.html';
        });
    }

    if (window.location.pathname.endsWith('index.html')) {
        if (localStorage.getItem('loggedin') !== 'true') {
            window.location.href = 'login.html';
        }
    }
});
