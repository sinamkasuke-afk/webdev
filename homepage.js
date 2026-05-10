function openLogin(){
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin(){
  document.getElementById("loginModal").style.display = "none";
}

function loginEmployee(){
  localStorage.setItem("role", "employee");
  window.location.href = "employee.html";
}

function loginAdmin(){
  localStorage.setItem("role", "admin");
  window.location.href = "admin.html";
}