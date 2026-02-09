(function () {
  "use strict";

  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const submitBtn = document.getElementById("submit-btn");

  const messages = {
    emailRequired: "メールアドレスを入力してください",
    emailInvalid: "有効なメールアドレスを入力してください",
    passwordRequired: "パスワードを入力してください",
    passwordMinLength: "パスワードは8文字以上で入力してください",
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(element, message) {
    element.classList.add("error");
    return message;
  }

  function clearError(element) {
    element.classList.remove("error");
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    clearError(emailInput);
    if (!value) {
      emailError.textContent = showError(emailInput, messages.emailRequired);
      return false;
    }
    if (!emailRegex.test(value)) {
      emailError.textContent = showError(emailInput, messages.emailInvalid);
      return false;
    }
    emailError.textContent = "";
    return true;
  }

  function validatePassword() {
    const value = passwordInput.value;
    clearError(passwordInput);
    if (!value) {
      passwordError.textContent = showError(passwordInput, messages.passwordRequired);
      return false;
    }
    if (value.length < 8) {
      passwordError.textContent = showError(passwordInput, messages.passwordMinLength);
      return false;
    }
    passwordError.textContent = "";
    return true;
  }

  function setLoading(loading) {
    submitBtn.disabled = loading;
    submitBtn.classList.toggle("loading", loading);
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailError.textContent = "";
    passwordError.textContent = "";

    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    if (!emailValid || !passwordValid) {
      return;
    }

    setLoading(true);

    // ここで実際のAPI呼び出しに差し替えてください
    setTimeout(function () {
      console.log("Login attempt:", {
        email: emailInput.value.trim(),
        password: "[hidden]",
        remember: document.getElementById("remember").checked,
      });
      setLoading(false);
      // 例: window.location.href = "/dashboard";
    }, 800);
  }

  emailInput.addEventListener("blur", validateEmail);
  emailInput.addEventListener("input", function () {
    if (emailInput.classList.contains("error")) validateEmail();
  });

  passwordInput.addEventListener("blur", validatePassword);
  passwordInput.addEventListener("input", function () {
    if (passwordInput.classList.contains("error")) validatePassword();
  });

  form.addEventListener("submit", handleSubmit);
})();
