async function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('https://casino-backend.onrender.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById('message').innerText = "✅ Registered successfully!";
    } else {
      document.getElementById('message').innerText = "❌ " + (data.message || "Registration failed");
    }
  } catch (err) {
    console.error(err);
    document.getElementById('message').innerText = "❌ Server error";
  }
}

