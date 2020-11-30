document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll("input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("form-error");
  });
  inputs.forEach((input) =>
    input.addEventListener("focus", () => {
      form.classList.remove("form-error");
    })
  );
});
