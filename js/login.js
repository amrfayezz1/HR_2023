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
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    for (let i = 0; i < accounts.length; i++) {
        if (username === accounts[i].username && password === accounts[i].password) {
            showTooltip("Login successful!", "green");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
            return true;
        }
    }
    if(username=="" || password==""){
        showTooltip("Empty username or password!", "red");
    } else{
        showTooltip("Invalid username or password!", "red");
    }
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    return false;
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', verifyLogin);