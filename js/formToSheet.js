// Cache DOM elements
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

if (contactForm && nameInput && emailInput && messageInput) {
  // Debounce function for input events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Clear error message on input
  const handleInputChange = debounce((e) => {
    const errorElement = document.getElementById(`${e.target.name}Error`);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove("open");
    }
  }, 200);

  // Attach input listener to form fields
  contactForm.addEventListener("input", handleInputChange, true);

  // Email validation regex
  const emailRegex = /^\S+@\S+\.\S+$/;

  // Form submission handler
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Clear all errors
    [nameError, emailError, messageError].forEach((el) => {
      el.textContent = "";
      el.classList.remove("open");
    });

    let isValid = true;

    // Validate name
    if (!name || name.length < 3) {
      nameError.textContent = "Name must be at least 3 characters";
      nameError.classList.add("open");
      isValid = false;
    }

    // Validate email
    if (!email || !emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address";
      emailError.classList.add("open");
      isValid = false;
    }

    // Validate message
    if (!message || message.length < 5) {
      messageError.textContent = "Message must be at least 5 characters";
      messageError.classList.add("open");
      isValid = false;
    }

    if (isValid) {
      // Encode data for mailto
      const subject = encodeURIComponent(`Contact Form Message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      );

      // Trigger mailto
      window.location.href = `mailto:wafikmohamed725@gmail.com?subject=${subject}&body=${body}`;

      // Reset form
      contactForm.reset();
    }
  });
}
