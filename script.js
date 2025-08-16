// Dark Mode Toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// Animate skill bars
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        const top = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 50) {
            skill.style.width = skill.style.width; // already set in HTML
        }
    });
});
