function updateWindowSize() {
    var width = window.innerWidth;
    const headerList = document.querySelector(".navbar-nav");
    const navLines = document.querySelectorAll(".nav-link");
    if (width < 992) {
        headerList.style.flexDirection = "column";
        navLines.forEach(navLine => {
            navLine.classList.add('hide-after');
        });
    } else {
        headerList.style.flexDirection = "row";
        navLines.forEach(navLine => {
            navLine.classList.remove('hide-after');
        });
    };
};

window.onload = () => {
    updateWindowSize();
};

window.onresize = () => {
    updateWindowSize();
};