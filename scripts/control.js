const mobileMenuButton = document.getElementById("mobile-menu");
const mobileMenuList = document.getElementById("mobile-navigation");

function showMobileMenu() {
    mobileMenuList.classList.toggle("open");
};

mobileMenuButton.addEventListener('click', () => [
    showMobileMenu()
])