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

const settingBtn = document.getElementById("settingBtn");

const gearIcon = document.getElementById('gearIcon');
const settingBar = document.getElementById("settingBar");

const menuButton = document.getElementById("menuButton");
const sideBar = document.getElementById("sidebar");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  sideBar.classList.toggle("active");
  if(settingBar.classList.contains("active")){
    settingBar.classList.toggle("active");
  }
  
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


// const settingsBtn = document.getElementById('settingsBtn');
// const gearIcon = document.getElementById('gearIcon');

// settingsBtn.addEventListener('click', () => {
//   sidebar.classList.toggle('expanded');
//   gearIcon.classList.add('rotating');
//   setTimeout(() => gearIcon.classList.remove('rotating'), 600);
// });


// settingBtn.addEventListener('click', () => {
//     settingBar.classList.toggle('active');
//   if (gearIcon.classList.contains('rotating')) return; 
//   gearIcon.classList.add('rotating');
//   setTimeout(() => gearIcon.classList.remove('rotating'), 600);
// });

let rotated = false;

settingBtn.addEventListener('click', () => {
  settingBar.classList.toggle('active');
  rotated = !rotated;
  gearIcon.style.transform = rotated ? "rotate(360deg)" : "rotate(0deg)";
});