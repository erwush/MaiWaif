const selector = document.getElementById("themeSelector");

// Ganti tema berdasarkan pilihan
selector.addEventListener("change", () => {
  const theme = selector.value;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

// Saat reload, gunakan tema terakhir
const savedTheme = localStorage.getItem("theme") || "cyrene";
document.documentElement.setAttribute("data-theme", savedTheme);
selector.value = savedTheme;



const menuButton = document.getElementById("menuButton");
const sideBar = document.getElementById("sidebar");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  sideBar.classList.toggle("active");
});

const headerImg = document.querySelectorAll(".headerInImg");

headerImg.forEach((img) => {
  const normalSrc = img.getAttribute("src");
  const hoverSrc = img.getAttribute("data-hover");

  img.addEventListener("mouseover", () => {
    img.setAttribute("src", hoverSrc);
  });

  img.addEventListener("mouseout", () => {
    img.setAttribute("src", normalSrc);
  });
});