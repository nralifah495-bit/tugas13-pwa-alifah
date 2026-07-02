function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "Nur Alifah" && pass === "495812") {
        localStorage.setItem("login", "true");
        window.location.href = "profile alifah.html";
    } else {
        alert("Login gagal!");
    }
}