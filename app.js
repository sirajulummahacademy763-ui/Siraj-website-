document.addEventListener("DOMContentLoaded", () => {
    console.log("Sirajul Ummatul Islamiyah Loaded Successfully");

    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    cards.forEach(card=>{
        card.style.opacity="0";
        card.style.transform="translateY(40px)";
        card.style.transition="0.8s";
        observer.observe(card);
    });
});


const GAS_WEB_APP_URL = "
    https://script.google.com/macros/s/AKfycbxhalPj8Dc1ZQz9ilpqt7007npiiKv8l4mb97yK4rJ9KYuYmIDH2IERsDsDFx_8dY6J/exec    ";

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const messageBox = document.getElementById("registerMessage");

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const country = document.getElementById("country").value.trim();
      const terms = document.getElementById("terms").checked;

      if (!terms) {
        messageBox.textContent = "You must agree to the Terms and Conditions.";
        messageBox.style.color = "red";
        return;
      }

      messageBox.textContent = "Creating account...";
      messageBox.style.color = "#0b5d3b";

      try {
        const response = await fetch(GAS_WEB_APP_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify({
            action: "register",
            fullName,
            email,
            phone,
            password,
            confirmPassword,
            country
          })
        });

        const result = await response.json();

        if (result.success) {
          messageBox.textContent = "Account created successfully. You can now log in.";
          messageBox.style.color = "green";
          registerForm.reset();
        } else {
          messageBox.textContent = result.message || "Registration failed.";
          messageBox.style.color = "red";
        }
      } catch (error) {
        messageBox.textContent = "Network error. Please try again.";
        messageBox.style.color = "red";
      }
    });
  }
});
