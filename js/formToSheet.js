const form = document.getElementById("content-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataForm = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbygC1mMwk8L0SixavpbbSnHXHlh3xCn18wn3HkT7euC9pA9BT7Adlyk944mNDLsVx3wwg/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
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
        .querySelector(".handle-form .close")
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
  container.className = "handle-form";

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

  const buttonCheck = document.createElement("button");
  const buttonCheckTxt = document.createTextNode("ok");
  buttonCheck.appendChild(buttonCheckTxt);
  buttonCheck.className = "btn close";

  container.appendChild(span);
  container.appendChild(alertTxt);
  container.appendChild(buttonCheck);

  document.body.appendChild(container);
}
