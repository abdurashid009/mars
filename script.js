document.addEventListener("DOMContentLoaded", function () {
  const idInput = document.getElementById("idInput");
  const passwordInput = document.getElementById("passwordInput");
  const loginButton = document.getElementById("loginBtn");
  const errorText = document.getElementById("errorText");
  const togglePassword = document.getElementById("togglePassword");

  // To'g'ri ID va parol
  const correctId = "1096578";
  const correctPassword = "37960";

  // Inputlarni tekshirish va tugmani faollashtirish
  function checkInputs() {
    if (idInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginButton.style.backgroundColor = "red";
        loginButton.style.color = "white";
      loginButton.disabled = false;
    } else {
      loginButton.style.backgroundColor = "";
      loginButton.disabled = true;
    }
  }

  idInput.addEventListener("input", checkInputs);
  passwordInput.addEventListener("input", checkInputs);

  // Kirish tugmasi bosilganda tekshirish
  loginButton.addEventListener("click", function () {
    if (
      idInput.value === correctId &&
      passwordInput.value === correctPassword
    ) {
      window.location.href = "index.html"; // To'g'ri bo'lsa, sahifaga o'tish
    } else {
      errorText.textContent = "Noto‘g‘ri ma’lumot kiritildi!";
        errorText.style.color = "red";
        
    }
  });

  // Parolni ko'rsatish/yashirish
  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.textContent = "👁";
    } else {
      passwordInput.type = "password";
      togglePassword.textContent = "👁‍🗨";
    }
  });
});


