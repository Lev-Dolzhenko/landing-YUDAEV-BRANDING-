//theme toggle

const themeTogglesDark = document.querySelectorAll(".themeToggleDark");
const themeTogglesLight = document.querySelectorAll(".themeToggleLight");

const themeTogglesDarkArray = Array.from(themeTogglesDark);
const themeTogglesLightArray = Array.from(themeTogglesLight);

const footerLogotypeLight = document.querySelector(".footer__logotype-light");
const footerLogotypeDark = document.querySelector(".footer__logotype-dark");

const commentsImageDark = document.querySelector(".comments__image-dark");
const commentsImageLight = document.querySelector(".comments__image-light");

const logotypeLight = document.getElementById("logotypeLight");
const logotypeDark = document.getElementById("logotypeDark");

for (let themeToggleLight of themeTogglesLight) {
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

      themeTogglesDarkArray.map((themeToggleDark) =>
        themeToggleDark.classList.toggle("header__button_active")
      );

      themeTogglesLightArray.map((themeToggleLight) =>
        themeToggleLight.classList.toggle("header__button_active")
      );
    }
  });
}

for (let themeToggleDark of themeTogglesDark) {
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

      themeTogglesDarkArray.map((themeToggleDark) =>
        themeToggleDark.classList.toggle("header__button_active")
      );

      themeTogglesLightArray.map((themeToggleLight) =>
        themeToggleLight.classList.toggle("header__button_active")
      );
    }
  });
}

const burgerButton = document.getElementById("menu-btn");
const navMobile = document.querySelector(".nav__mobile");
const overlay = document.querySelector(".overlay");

burgerButton.addEventListener("click", () => {
  if (burgerButton.checked) {
    navMobile.classList.add("nav__mobile-show");
    navMobile.classList.remove("nav__mobile-showRev");

    document.body.style.overflow = "hidden";

    overlay.classList.add("overlay-show");
    overlay.classList.remove("overlay-showRev");
  } else {
    navMobile.classList.add("nav__mobile-showRev");
    navMobile.classList.remove("nav__mobile-show");

    document.body.style.overflow = "visible";

    overlay.classList.add("overlay-showRev");
    overlay.classList.remove("overlay-show");
  }
});

//gsap

const tl = gsap.timeline();
const titleHero = new SplitType("#titleHero");

tl.fromTo(
  ".header__nav",
  {
    y: 100,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 0.8 }
)
  .fromTo(
    ".hero__item",
    {
      y: 20,
      opacity: 0,
    },
    { y: 0, opacity: 1, stagger: 0.4 }
  )
  .to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1,
  })
  .fromTo(
    ".hero__form",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }
  )
  .fromTo(
    ".hero__form_mobile",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    }
  );

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".works__card_purple",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".works__card",
      start: "top center",
      end: "top  center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".works__card_green",
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    zIndex: 20,
    scrollTrigger: {
      trigger: ".works__card",
      start: "top center",
      end: "top  center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".works__card_dark",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    zIndex: 20,
    scrollTrigger: {
      trigger: ".works__card",
      start: "top center",
      end: "top  center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".works__card_white",
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".works__card",
      start: "top center",
      end: "top  center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".benefits__title",
  {
    y: 200,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "top  center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".benefits__subtitle",
  {
    y: 200,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "top  center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".button_benefits",
  {
    x: 200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".container_benefits",
      start: "-50% center",
      end: "-50%  bottom",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".type__elem_white",
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".type",
      start: "top center",
      end: "30% center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".type__elem_green",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".type",
      start: "top center",
      end: "30% center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".title3_comments",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".comments",
      start: "top center",
      end: "20% center",
      scrub: true,
    },
  }
);

const commentsItems = document.querySelectorAll(".comments__item");

commentsItems.forEach((commentsItem) => {
  gsap.fromTo(
    commentsItem,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".comments",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    }
  );
});

gsap.fromTo(
  ".info__name",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".info",
      start: "top center",
      end: "30% center",
      scrub: true,
    },
  }
);


gsap.fromTo(
  ".info__title",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".info",
      start: "top center",
      end: "30% center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".info__subtitle",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".info",
      start: "top center",
      end: "50% center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".info__image-person",
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".info",
      start: "top center",
      end: "50% center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".footer",
      start: "-110% 90%",
      end: "-30% 90%",
      scrub: true,
    },
  }
);

