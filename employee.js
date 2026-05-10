const role = localStorage.getItem("role");

console.log("Current role:", role);

// CLOCK
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

// LOGOUT MODAL
window.openLogout = function () {
  document.getElementById("logoutModal").style.display = "flex";
};

window.closeLogout = function () {
  document.getElementById("logoutModal").style.display = "none";
};

window.confirmLogout = function () {
  localStorage.removeItem("role");
  window.location.href = "homepage.html";
};