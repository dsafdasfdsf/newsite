document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") { 
        document.getElementById("message").textContent = "Giriş başarılı!";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        document.getElementById("message").textContent = "Hatalı giriş!";
    }
});
