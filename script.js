document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.nav-link[data-bs-toggle="dropdown"]');
    const navItems = document.getElementById("navbar-items");
    const sidebarItems = document.getElementById("sidebar-items");
    const navRightItems = document.getElementById("nav-item-right");

    // Function to toggle dropdown arrow icons
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('shown.bs.dropdown', function () {
            this.querySelector('img').src = './images/icon-arrow-up.svg';
        });

        toggle.addEventListener('hidden.bs.dropdown', function () {
            this.querySelector('img').src = './images/icon-arrow-down.svg';
        });
    });

    // Function to move navigation items
    function moveNavItems() {
        if (window.innerWidth < 800) {
            if (!sidebarItems.contains(navItems)) {
                sidebarItems.appendChild(navItems);
                sidebarItems.appendChild(navRightItems);
            }
        } else {
            if (!document.getElementById("navbarNavDropdown").contains(navItems)) {
                document.getElementById("navbarNavDropdown").appendChild(navItems);
                document.getElementById("navbarNavDropdown").appendChild(navRightItems);
            }
        }
    }

    moveNavItems();
    window.addEventListener("resize", moveNavItems);
});
