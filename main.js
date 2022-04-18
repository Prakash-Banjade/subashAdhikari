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

let boxes = document.querySelectorAll('.learning');
for (item of boxes) {
    item.addEventListener('mouseover', (e) => {
        e.target.children[1].style.animation = "fadeIn .3s";
        e.target.children[1].style.opacity = "1";

    })
}

for (item of boxes) {
    item.addEventListener('mouseleave', (e) => {
        e.target.children[1].style.animation = "fadeOut .3s";
        window.tar = e;
        setTimeout(() => {
            window.tar.target.children[1].style.opacity = '0'
        }, 280);
    })
}

document.getElementById('logo').children[0].addEventListener('click', () => {
    location.href = 'index.html';
})