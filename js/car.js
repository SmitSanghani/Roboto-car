//dropdown topbar
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".custom-dropdown");
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


//time counter section 
function startCountdown(duration) {
    let timer = duration;
    setInterval(() => {
        let days = Math.floor(timer / (24 * 60 * 60));
        let hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        let minutes = Math.floor((timer % (60 * 60)) / 60);
        let seconds = timer % 60;
        
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
        
        if (timer > 0) {
            timer--;
        }
    }, 1000);
}

startCountdown(5 * 24 * 60 * 60 + 12 * 60 * 60 + 30 * 60 + 45); // Initial countdown value


// footer email subscribe 
document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });

//   collection dropdown
$(document).ready(function() {
    $("#collection-btn").click(function(e) {
        e.preventDefault();
        $("#collection-dropdown").slideToggle();
    });

    // Close dropdown when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest("#collection-btn, #collection-dropdown").length) {
            $("#collection-dropdown").slideUp();
        }
    });
});

//   new arrival dropdown
$(document).ready(function() {
    $("#new-arrival-btn").click(function(e) {
        e.preventDefault();
        $("#new-arrival-dropdown").slideToggle();
    });

    // Close dropdown when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest("#new-arrival-btn, #new-arrival-dropdown").length) {
            $("#new-arrival-dropdown").slideUp();
        }
    });
});

// profile dropdown
$(document).ready(function() {
    $("#profile-btn").click(function(e) {
        e.preventDefault();
        $("#profile-dropdown").slideToggle();
    });

    // Click outside to close
    $(document).click(function(event) {
        if (!$(event.target).closest("#profile-btn, #profile-dropdown").length) {
            $("#profile-dropdown").slideUp();
        }
    });
});

// nav-item active class
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-link');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// category dropdown sider bar

$(document).ready(function() {
    $(".toggle-category").click(function() {
        $(this).next(".subcategory-list").slideToggle();
        $(this).find(".arrow").toggleClass("rotated");
    });
});

// pagination
let currentPage = 1;
let totalPages = 10;

function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    updatePagination();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
}

function updatePagination() {
    let pages = document.querySelectorAll(".page-item");
    
    pages.forEach(page => {
        if (!page.classList.contains("dots")) {
            page.classList.remove("active");
        }
        
        if (parseInt(page.innerText) === currentPage) {
            page.classList.add("active");
        }
    });
}