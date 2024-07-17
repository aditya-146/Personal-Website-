document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.NavbarContainer');
    const aboutSection = document.getElementById('about');
    const experiencesSection = document.getElementById('experiences');
    const aboutSectionTop = aboutSection.offsetTop - 150;
    const experiencesSectionTop = experiencesSection.offsetTop;

    let lastScrollTop = 0;
    let scrollTimeout;

    // Function to show the navbar
    function showNavbar() {
        navbar.style.transition = 'opacity 0.5s ease';
        navbar.style.opacity = 1;
        navbar.classList.add('scrolled');
        navbar.classList.remove('hidden');
    }

    // Function to hide the navbar
    function hideNavbar() {
        navbar.style.transition = 'opacity 0.5s ease';
        navbar.style.opacity = 0;
        navbar.classList.add('hidden');
    }

    // Function to handle navbar visibility based on scroll direction and position
    function toggleNavbarVisibility() {
        const scrollTop = window.scrollY;

        if (scrollTop <= 0) {
            // Ensure the navbar is fixed and visible on the top of the page
            navbar.style.position = 'fixed';
            navbar.style.opacity = 1;
            navbar.classList.remove('scrolled', 'hidden');
            clearTimeout(scrollTimeout);
        } else if (scrollTop >= aboutSectionTop && scrollTop <= (experiencesSectionTop + experiencesSection.offsetHeight)) {
            // Handle navbar visibility in the About and Experiences sections
            if (scrollTop < lastScrollTop) {
                // Show navbar when scrolling up
                showNavbar();
                // Clear the previous timeout
                clearTimeout(scrollTimeout);
                // Hide the navbar after 1 second of no scrolling
                scrollTimeout = setTimeout(function() {
                    hideNavbar();
                }, 2000);
            } else {
                // Hide navbar when scrolling down
                hideNavbar();
            }
            navbar.style.position = 'fixed'; // Fix navbar position in About and Experiences sections
        } else {
            // Reset position for other sections
            navbar.style.position = 'absolute';
            navbar.style.opacity = 0;
        }

        lastScrollTop = scrollTop; // Update last scroll position
    }

    // Initial check in case the user loads the page already scrolled
    toggleNavbarVisibility();

    // Add scroll event listener
    window.addEventListener('scroll', toggleNavbarVisibility);
});
