document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.nav-link[data-bs-toggle="dropdown"]');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const arrowImg = this.querySelector('img');

            if (this.getAttribute('aria-expanded') === 'true') {
                arrowImg.src = '/images/icon-arrow-up.svg';
            } else {
                arrowImg.src = '/images/icon-arrow-down.svg';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function moveNavItems() {
        const navItems = document.getElementById("navbar-items");
        const sidebarItems = document.getElementById("sidebar-items");
        const navRightItems = document.getElementById("nav-item-right");
        
        if (window.innerWidth < 768) {
            // Move items to sidebar
            if (!sidebarItems.contains(navItems)) {
                sidebarItems.appendChild(navItems);
                sidebarItems.appendChild(navRightItems);
            }
        } else {
            // Move items back to navbar
            if (!document.getElementById("navbarNavDropdown").contains(navItems)) {
                document.getElementById("navbarNavDropdown").appendChild(navItems);
                document.getElementById("navbarNavDropdown").appendChild(navRightItems);
            }
        }
    }

    // Initial move
    moveNavItems();

    // Listen for window resize
    window.addEventListener("resize", moveNavItems);
});