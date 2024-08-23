document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            // Hide all sections
            document.querySelectorAll('.page').forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            if (section) {
                section.style.display = 'block';
            }
        });
    });
});
