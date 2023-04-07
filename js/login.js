const accounts = [
    { username: "amr", password: "amr" },
    { username: "omar", password: "omar" },
    { username: "malak", password: "malak" },
    { username: "yousef", password: "yousef" },
];

function showTooltip(message, color) {
    const tooltip = document.createElement("div");
    tooltip.textContent = message;
    tooltip.classList.add("tooltip");
    tooltip.style.backgroundColor=color;
    document.body.appendChild(tooltip);
    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 1500);
}

function verifyLogin(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for (let i = 0; i < accounts.length; i++) {
        if (username === accounts[i].username && password === accounts[i].password) {
            showTooltip("Login successful!", "green");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
            return true;
        }
    }
    showTooltip("Invalid username or password!", "red");
    return false;
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', verifyLogin);