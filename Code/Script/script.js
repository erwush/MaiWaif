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
