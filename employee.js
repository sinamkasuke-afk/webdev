// CHECK ROLE
const role = localStorage.getItem("role");

if (role !== "employee") {
  window.location.href = "homepage.html";
}

// LOGOUT
function logout() {
  localStorage.removeItem("role");
  window.location.href = "homepage.html";
}

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

// SUBMIT ALERT
document.querySelectorAll("button").forEach(btn => {
  if (btn.textContent.includes("Submit")) {
    btn.addEventListener("click", () => {
      alert("Request submitted!");
    });
  }
});