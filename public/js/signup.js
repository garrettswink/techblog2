
const SignupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  // Event listener
  const SignupForm = document.querySelector('#signup-form');
  if (SignupForm) {
    SignupForm.addEventListener('submit', SignupFormHandler);
  }
  
  