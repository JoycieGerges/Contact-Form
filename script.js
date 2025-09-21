document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Full name is required";
    isValid = false;
  }
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      isValid = false;
    }
  }
  if (subject === "") {
    document.getElementById("subjectError").textContent = "Subject is required";
    isValid = false;
  }
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  if (isValid) {
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
  }
});
