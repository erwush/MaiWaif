
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

const gearIcon = document.getElementById("gearIcon");
const settingBar = document.getElementById("settingBar");

const menuButton = document.getElementById("menuButton");
const sideBar = document.getElementById("sidebar");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  sideBar.classList.toggle("active");
  if (settingBar.classList.contains("active")) {
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

settingBtn.addEventListener("click", () => {
  settingBar.classList.toggle("active");
  rotated = !rotated;
  gearIcon.style.transform = rotated ? "rotate(360deg)" : "rotate(0deg)";
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("musicToggle");
  const music = document.getElementById("bgMusic");
  const slash = document.getElementById("slash");

  // Fungsi untuk ambil dan terapkan musik dari tema
  function updateMusicFromTheme() {
    const bgMusic = getComputedStyle(document.documentElement)
      .getPropertyValue("--bg-music")
      .trim()
      .replace(/["']/g, "");

    // cek apakah src berbeda
    const currentSrc = music.src.split("/").pop(); // ambil nama file saja
    const newSrc = bgMusic.split("/").pop();

    if (currentSrc !== newSrc) {
      const wasPlaying = !music.paused; // simpan status
      music.src = bgMusic;
      if (wasPlaying) {
        music.play().catch(() => {}); // lanjutkan jika sebelumnya sedang play
      }
    }
  }

  // Pertama kali jalan
  updateMusicFromTheme();

  // Pantau perubahan tema
  const observer = new MutationObserver(updateMusicFromTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Tombol play/pause
  toggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      slash.style.display = "none";
    } else {
      music.pause();
      slash.style.display = "block";
    }
  });
});
