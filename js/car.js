//dropdown topbar
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  document.addEventListener("click", (event) => {
      let clickedDropdown = null;
      dropdowns.forEach((dropdown) => {
          const toggle = dropdown.querySelector(".custom-dropdown-toggle");
          const icon = toggle.querySelector("i");
          
          if (!dropdown.contains(event.target)) {
              toggle.setAttribute("aria-expanded", false);
              dropdown.classList.remove("open");
              icon.classList.remove("fa-angle-up");
              icon.classList.add("fa-angle-down");
          } else if (event.target === toggle) {
              clickedDropdown = dropdown;
          }
      });

      if (clickedDropdown) {
          const toggle = clickedDropdown.querySelector(".custom-dropdown-toggle");
          const menu = clickedDropdown.querySelector(".custom-dropdown-menu");
          const icon = toggle.querySelector("i");
          const isExpanded = toggle.getAttribute("aria-expanded") === "true";
          
          toggle.setAttribute("aria-expanded", !isExpanded);
          clickedDropdown.classList.toggle("open", !isExpanded);
          
          if (!isExpanded) {
              icon.classList.remove("fa-angle-down");
              icon.classList.add("fa-angle-up");
          } else {
              icon.classList.remove("fa-angle-up");
              icon.classList.add("fa-angle-down");
          }
          
          menu.querySelectorAll("li").forEach((item, index) => {
              item.style.animationDelay = `${index * 0.1}s`; 
          });
      }
  });
});


//all category bar box

document.addEventListener("DOMContentLoaded", () => {
    const categoryDropdown = document.querySelector(".category-dropdown");
    const categoryToggle = document.getElementById("category-btn");
    const categoryMenu = document.getElementById("category-menu");
    const icon = document.getElementById("toggle-icon");

    // Hide menu initially
    categoryMenu.classList.remove("show");

    categoryToggle.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent immediate closing when clicking button
        const isExpanded = categoryToggle.getAttribute("aria-expanded") === "true";

        // Toggle menu visibility with animation
        categoryToggle.setAttribute("aria-expanded", !isExpanded);
        if (!isExpanded) {
            categoryMenu.style.display = "block"; // Ensure it appears before animation
            setTimeout(() => categoryMenu.classList.add("show"), 10);
        } else {
            categoryMenu.classList.remove("show");
            setTimeout(() => (categoryMenu.style.display = "none"), 300); // Hide after animation
        }

        // Change icon
        icon.classList.toggle("fa-bars", isExpanded);
        icon.classList.toggle("fa-times", !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!categoryDropdown.contains(event.target)) {
            categoryToggle.setAttribute("aria-expanded", false);
            categoryMenu.classList.remove("show");
            setTimeout(() => (categoryMenu.style.display = "none"), 300); // Hide after animation
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});
