// ===== LOGIN SCRIPT =====

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload stop

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // 🔐 Correct credentials
    const correctUsername = "Jadon Academy";
    const correctPassword = "Jad@fees2000";

    if (username === correctUsername && password === correctPassword) {
        // ✅ Success → redirect
        window.location.href = "/index.html";
    } else {
        // ❌ Error message
        document.getElementById("errorMsg").style.display = "block";
    }
});
