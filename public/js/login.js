const loginButton = $('#loginButton')

const loginFormHandler = async () => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: document.getElementById('usernameInput').value,
        password: document.getElementById('passwordInput').value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      // Handle non-successful responses, such as displaying an error message
      const errorMessage = await response.text();
      document.getElementById('errorMessage').innerText = errorMessage;
      return;
    }

    const data = await response.json();

    if (data.success) {
      window.location.href = '/dashboard';
    } else {
      document.getElementById('errorMessage').innerText = data.message;
    }
  } catch (error) {
    console.error(error);
    // Handle any errors that occurred during the request
  }
};

loginButton.on('click', loginFormHandler);