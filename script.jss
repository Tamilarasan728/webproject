document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Thank you for reaching out!";
  this.reset();
});
