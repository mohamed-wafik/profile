const form = document.getElementById("content-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataForm = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbziQhmQA7tSZ523eBiH9eJJam65_FlHZMqYmAlMDKSOdSYnNVR_WVu6N3KzUYN9KUZd2A/exec",
    {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((res) => {
      if (res.result === "success") {
        status.textContent = "Message sent successfully!";
        form.reset();
        status.style.color = "green";
      } else {
        status.textContent = "Failed to send message.";
        status.style.color = "red";
      }
    })
    .catch((error) => {
      status.textContent = "Error sending message.";
      status.style.color = "red";
      console.error(error);
    });
});
