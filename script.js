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
