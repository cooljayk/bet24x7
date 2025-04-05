// Replace with your backend URL
const baseUrl = "https://bet24x7-3.onrender.com";

fetch(`${baseUrl}/`)
  .then((res) => res.text())
  .then((message) => {
    console.log("✅ Backend says:", message);
    document.body.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
  })
  .catch((err) => {
    console.error("❌ Failed to connect to backend:", err);
    document.body.insertAdjacentHTML("beforeend", `<p style="color:red;">Backend error: ${err.message}</p>`);
  });
