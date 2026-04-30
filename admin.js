const role = localStorage.getItem("role");

if (role !== "admin") {
  window.location.href = "homepage.html";
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "homepage.html";
}

document.querySelectorAll(".green").forEach(button => {
  button.addEventListener("click", function () {
    alert("Leave request approved!");
  });
});

document.querySelectorAll(".red").forEach(button => {
  button.addEventListener("click", function () {
    alert("Action completed!");
  });
});

document.querySelectorAll(".export").forEach(button => {
  button.addEventListener("click", function () {
    alert("PDF export demo only.");
  });
});