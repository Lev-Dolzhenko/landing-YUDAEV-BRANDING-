//theme toggle

const themeToggleDark = document.getElementById("themeToggleDark");
const themeToggleLight = document.getElementById("themeToggleLight");

const logotypeLight = document.getElementById("logotypeLight");
const logotypeDark = document.getElementById("logotypeDark");

themeToggleLight.addEventListener("click", () => {
  const currTheme = document.body.className;
  if (currTheme === "light-theme") {
    return;
  } else {
    document.body.classList = "light-theme";

    logotypeLight.classList.toggle("none");
    logotypeDark.classList.toggle("none");

    themeToggleDark.classList.toggle("header__button_active");
    themeToggleLight.classList.toggle("header__button_active");
  }
});

themeToggleDark.addEventListener("click", () => {
  const currTheme = document.body.className;
  if (currTheme === "dark-theme") {
    return;
  } else {
    document.body.classList = "dark-theme";

    logotypeLight.classList.toggle("none");
    logotypeDark.classList.toggle("none");

    themeToggleDark.classList.toggle("header__button_active");
    themeToggleLight.classList.toggle("header__button_active");
  }
});
