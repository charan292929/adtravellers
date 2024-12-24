// JavaScript for responsiveness and interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Responsive Navigation Toggle
    const nav = document.querySelector("nav");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Menu";
    toggleButton.classList.add("nav-toggle");
    nav.parentNode.insertBefore(toggleButton, nav);

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("visible");
    });

    // Adjust nav visibility based on screen size
    const adjustNavVisibility = () => {
        if (window.innerWidth > 768) {
            nav.classList.add("visible");
        } else {
            nav.classList.remove("visible");
        }
    };

    window.addEventListener("resize", adjustNavVisibility);
    adjustNavVisibility();

    // Form validation for Contact Us form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                event.preventDefault();
                alert("All fields are required. Please fill out the form completely.");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
