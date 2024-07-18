document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.NavbarContainer');
    const aboutSection = document.getElementById('about');
    const experiencesSection = document.getElementById('experiences');
    const aboutSectionTop = aboutSection.offsetTop - 150;
    const experiencesSectionTop = experiencesSection.offsetTop;

    let lastScrollTop = 0;
    let scrollTimeout;

    function showNavbar() {
        navbar.style.transition = 'opacity 0.5s ease';
        navbar.style.opacity = 1;
        navbar.classList.add('scrolled');
        navbar.classList.remove('hidden');
    }

  
    function hideNavbar() {
        navbar.style.transition = 'opacity 0.5s ease';
        navbar.style.opacity = 0;
        navbar.classList.add('hidden');
    }

   
    function toggleNavbarVisibility() {
        const scrollTop = window.scrollY;

        if (scrollTop <= 0) {
            
            navbar.style.position = 'fixed';
            navbar.style.opacity = 1;
            navbar.classList.remove('scrolled', 'hidden');
            clearTimeout(scrollTimeout);
        } else if (scrollTop >= aboutSectionTop && scrollTop <= (experiencesSectionTop + experiencesSection.offsetHeight)) {
           
            if (scrollTop < lastScrollTop) {
                showNavbar();
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(function() {
                    hideNavbar();
                }, 2000);
            } else {
                hideNavbar();
            }
            navbar.style.position = 'fixed';
        } else {
            navbar.style.position = 'absolute';
            navbar.style.opacity = 0;
        }

        lastScrollTop = scrollTop; 
    }
    toggleNavbarVisibility();

    window.addEventListener('scroll', toggleNavbarVisibility);
});
