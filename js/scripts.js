

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
       
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sp-sidenav-toggled');
            localStorage.setItem('sp|sidebar-toggle', document.body.classList.contains('sp-sidenav-toggled'));


        });
    }

    
    // menu open
    const navLinks = document.querySelectorAll('.nav-link');

    // Add a click event listener to each link menu open
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove "active" class from all links
            navLinks.forEach(item => item.classList.remove('active'));

            // Add "active" class to the clicked link
            link.classList.add('active');
        });
    });


     // Get all the navigation links active
    
        $(document).ready(function () {
            $('.nav-link').click(function () {
                // Remove "active" class from all navigation links
                $('.nav-link').removeClass('active');
                
                // Add "active" class to the clicked link
                $(this).addClass('active');
            });
        });
   
 
});






