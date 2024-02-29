//theme toggle

const themeToggleDark = document.getElementById("themeToggleDark");
const themeToggleLight = document.getElementById("themeToggleLight");

const footerLogotypeLight = document.querySelector(".footer__logotype-light");
const footerLogotypeDark = document.querySelector(".footer__logotype-dark");

const commentsImageDark = document.querySelector(".comments__image-dark");
const commentsImageLight = document.querySelector(".comments__image-light");

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

    footerLogotypeLight.classList.toggle("none");
    footerLogotypeDark.classList.toggle("none");

    commentsImageDark.classList.toggle("none");
    commentsImageLight.classList.toggle("none");

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

    footerLogotypeLight.classList.toggle("none");
    footerLogotypeDark.classList.toggle("none");

    commentsImageDark.classList.toggle("none");
    commentsImageLight.classList.toggle("none");

    themeToggleDark.classList.toggle("header__button_active");
    themeToggleLight.classList.toggle("header__button_active");
  }
});
