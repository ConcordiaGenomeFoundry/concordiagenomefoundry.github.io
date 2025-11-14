window.addEventListener('load', (event) => {
    console.log("Page loaded.");

    const nav = document.querySelector("#navbar");
    const navLogoDark = nav.querySelector('#navLogoDark');
    const navLogoLight = nav.querySelector('#navLogoLight');
    const hamburger = nav.querySelector('.navbar-toggler');
    // console.log(nav);

    // Smooth scrolling adjustment for fixed navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Adjust for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.onscroll = (event) => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            nav.classList.add('bg-light');
            nav.classList.remove('navbar-dark');
            navLogoDark.width = 230;
            navLogoLight.width = 230;
            navLogoDark.style.opacity = 1;
            navLogoLight.style.opacity = 0;
        } else {
            nav.classList.add('navbar-dark');
            nav.classList.remove('bg-light');
            nav.style.background = "none";
            navLogoDark.width = 280;
            navLogoLight.width = 280;
            navLogoDark.style.opacity = 0;
            navLogoLight.style.opacity = 1;
            if (!hamburger.classList.contains("collapsed") && window.getComputedStyle(hamburger).display !== "none") {
                nav.classList.add('bg-light');
                nav.classList.remove('navbar-dark');
                navLogoDark.style.opacity = 1;
                navLogoLight.style.opacity = 0;
            }
        }
    };

    hamburger.onclick = (event) => {
        if (hamburger.classList.contains("collapsed") && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)) {
            nav.classList.add('navbar-dark');
            nav.classList.remove('bg-light');
            nav.style.background = "none";
            navLogoDark.style.opacity = 0;
            navLogoLight.style.opacity = 1;
        } else if (!hamburger.classList.contains("collapsed") && (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)) {
            nav.classList.add('bg-light');
            nav.classList.remove('navbar-dark');
            navLogoDark.style.opacity = 1;
            navLogoLight.style.opacity = 0;
        }
    };
});