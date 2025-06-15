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
        displayAlert("Message sent successfully!", "green", true);
        form.reset();
      } else {
        displayAlert("Failed to send message.", "red", false);
      }
    })
    .catch((error) => {
      displayAlert("Error sending message.", "red", false);
      console.error(error);
    })
    .finally(() => {
      document
        .querySelector(".finish-task .close")
        .addEventListener("click", (e) => {
          document.querySelector(".overlay").remove();
          e.target.parentNode.remove();
        });
    });
});

function displayAlert(message, color, check) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  document.body.appendChild(overlay);

  const container = document.createElement("div");
  container.className = "finish-task";

  const span = document.createElement("span");
  span.style.color = color;
  const checkIcon = document.createElement("i");
  if (check) {
    checkIcon.className = "fa-solid fa-check ";
  } else {
    checkIcon.className = "fa-solid fa-x";
  }
  span.appendChild(checkIcon);

  const alertTxt = document.createElement("h1");
  const alertTxtNode = document.createTextNode(message);
  alertTxt.appendChild(alertTxtNode);
  alertTxt.style.color = color;

  const buttonCheck = document.createElement("button");
  const buttonCheckTxt = document.createTextNode("ok");
  buttonCheck.appendChild(buttonCheckTxt);
  buttonCheck.className = "btn close";

  container.appendChild(span);
  container.appendChild(alertTxt);
  container.appendChild(buttonCheck);

  document.body.appendChild(container);
}
