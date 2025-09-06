const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

document
  .querySelectorAll("#contactForm input, #contactForm textarea")
  .forEach((ele) => {
    ele.addEventListener("input", (e) => {
      const error = document.getElementById(`${e.target.name}Error`);
      if (error) {
        error.textContent = "";
        error.classList.remove("open");
      }
    });
  });
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  nameError.classList.remove("open");
  emailError.classList.remove("open");
  messageError.classList.remove("open");

  if (!name || name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    nameError.classList.add("open");
    isValid = false;
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    emailError.classList.add("open");
    isValid = false;
  }

  if (!message || message.length < 5) {
    messageError.textContent = "Message must be at least 5 characters";
    messageError.classList.add("open");
    isValid = false;
  }

  if (isValid) {
    let subject = encodeURIComponent("Contact Form Message from " + name);
    let body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
    );
    window.location.href = `mailto:wafikmohamed725@gmail.com?subject=${subject}&body=${body}`;
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  } else {
    return;
  }
});
