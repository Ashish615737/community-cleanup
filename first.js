// Store users data in localStorage (if not already there)
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([])); // Initialize empty array for users
}

// Toggle between login and register form
function toggleRegister() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const formTitle = document.getElementById('formTitle');

    if (formTitle.textContent === 'Login') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'Register';
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        formTitle.textContent = 'Login';
    }
}

// Handle User Registration
function registerUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const users = JSON.parse(localStorage.getItem('users'));

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert('Username already taken. Please choose another one.');
        return;
    }

    // Create new user object
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    };

    // Add new user to users array and save to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');

    // Switch back to Login form
    toggleRegister();
}

// Handle User Login
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users'));

    // Find the user matching the credentials
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'admin.html'; // Redirect to admin page after successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
