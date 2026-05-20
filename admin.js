const role = localStorage.getItem("role");

if (role !== "admin") {
  window.location.href = "homepage.html";
}

function openLogout(){
  document.getElementById("logoutModal").style.display = "flex";
}

function closeLogout(){
  document.getElementById("logoutModal").style.display = "none";
}

function confirmLogout(){
  localStorage.removeItem("role");
  window.location.href = "homepage.html";
}

function logout(){
  openLogout();
}