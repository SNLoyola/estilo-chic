// // Buscador

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();

    cards.forEach((card) => {
      const title = card.querySelector(".card-title strong")?.textContent.toLowerCase();
      const price = card.querySelector(".precio")?.textContent.toLowerCase();
      const material = card.querySelector(".material")?.textContent.toLowerCase();
      const stock = card.querySelector(".stock")?.textContent.toLowerCase();
      const dimensions = card.querySelector(".dimensiones")?.textContent.toLowerCase();

      if (
        (title && title.includes(searchText)) ||
        (price && price.includes(searchText)) ||
        (material && material.includes(searchText)) ||
        (stock && stock.includes(searchText)) ||
        (dimensions && dimensions.includes(searchText))
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// // Menú hamburguesa

const toggleMenu = document.getElementById('toggleMenu');
const navMenu = document.getElementById('navMenu');

toggleMenu?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
});

// // Sub Menú

document.addEventListener("DOMContentLoaded", () => {
  const itemsConSubmenu = document.querySelectorAll(".nav-item[data-submenu]");
  const allSubmenus = document.querySelectorAll(".submenu");
  const submenuContainer = document.querySelector(".submenu-container");

  let submenuActivo = null;

  itemsConSubmenu.forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const submenuId = item.dataset.submenu;
      const submenu = document.getElementById(submenuId);

      if (submenu.classList.contains("active")) {
        submenu.classList.remove("active");
        submenuContainer.classList.remove("active");
        submenuActivo = null;
      } else {
        allSubmenus.forEach(sub => sub.classList.remove("active"));
        submenuContainer.classList.add("active");
        submenu.classList.add("active");
        submenuActivo = submenu;
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (
      submenuActivo &&
      !e.target.closest(".submenu-container") &&
      !e.target.closest(".nav-item[data-submenu]")
    ) {
      submenuActivo.classList.remove("active");
      submenuContainer.classList.remove("active");
      submenuActivo = null;
    }
  });
});

// adaptacion nueva
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item[data-submenu]");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Toggle el submenu solo en mobile
        const alreadyActive = item.classList.contains("active");
        document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
        if (!alreadyActive) {
          item.classList.add("active");
        }
      }
    });
  });
});
