function loginEmployee() {
  localStorage.setItem("role", "employee");
  window.location.href = "homepage.html";
}

function loginAdmin() {
  localStorage.setItem("role", "admin");
  window.location.href = "homepage.html";
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "login.html";
}

const role = localStorage.getItem("role");

if (window.location.pathname.includes("homepage.html")) {
  const welcomeText = document.getElementById("welcomeText");
  const menu = document.getElementById("menu");

  if (!role) {
    window.location.href = "login.html";
  }

  if (role === "employee") {
    welcomeText.innerText = "Welcome Employee";

    menu.innerHTML = `
      <div class="menu-card" onclick="goToEmployee()">
        <h3>Employee Dashboard</h3>
        <p>Time in/out, view records, and request leave.</p>
      </div>
    `;
  }

  if (role === "admin") {
    welcomeText.innerText = "Welcome Admin";

    menu.innerHTML = `
      <div class="menu-card" onclick="goToAdmin()">
        <h3>Admin Dashboard</h3>
        <p>Manage attendance, employees, leave, and reports.</p>
      </div>
    `;
  }
}

function goToEmployee() {
  window.location.href = "employee.html";
}

function goToAdmin() {
  window.location.href = "admin.html";
}

if (window.location.pathname.includes("employee.html")) {
  if (role !== "employee") {
    window.location.href = "login.html";
  }
}

if (window.location.pathname.includes("admin.html")) {
  if (role !== "admin") {
    window.location.href = "login.html";
  }
}

function updateClock() {
  const clock = document.getElementById("clock");

  if (clock) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
}

setInterval(updateClock, 1000);
updateClock();
function showLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function hideLogin() {
  document.getElementById("loginModal").style.display = "none";
}