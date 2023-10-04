const LoginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();


    if (username && password) {
        // Send a POST request to the login endpoint with the input values as JSON data
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        //   If successful reload page, others provide alert
        if (response.ok) {
            document.location.replace('/');
        } else {

            alert('Failed to log in.');
        }
    }
};

// Event listener
const LoginForm = document.querySelector('#login-form');
if (LoginForm) {
    LoginForm.addEventListener('submit', LoginFormHandler);
}
