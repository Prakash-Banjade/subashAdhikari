let menu = document.getElementById('menu_toggle');
let menuOpen = false;
const tab = document.getElementById('tab');
menu.addEventListener('click', () => {
    if (!menuOpen) {
        document.querySelector('.menuToggle').classList.add('open');
        tab.style.display = "flex";
        tab.style.transform = "scaleY(1)";
        // tab.style.transition = 'all 4s ease-in-out';
        menuOpen = true;
    } else {
        document.querySelector('.menuToggle').classList.remove('open');
        tab.style.display = "none";
        tab.style.transform = "scaleY(0)";
        // tab.style.transition = 'all 4s ease-in-out';
        menuOpen = false;

    }





})