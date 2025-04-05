async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('https://bet24x7-3.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById('balance').innerText = "Balance: " + data.balance;
    } else {
      document.getElementById('balance').innerText = "❌ " + (data.message || "Login failed");
    }

  } catch (err) {
    console.error(err);
    document.getElementById('balance').innerText = "❌ Server Error";
  }
}
