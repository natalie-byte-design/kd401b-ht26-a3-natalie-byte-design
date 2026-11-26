const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
});

// ---------- Light and Dark Mode ----------

const themeButton = document.querySelector("#theme");
const palette = document.querySelector("#palette");

themeButton.addEventListener("click", () => {

    const isLightMode = palette.getAttribute("href") === "light.css";

    if (isLightMode) {
        palette.setAttribute("href", "dark.css");
        themeButton.textContent = "Light mode";
    } else {
        palette.setAttribute("href", "light.css");
        themeButton.textContent = "Dark mode";
    }

});
