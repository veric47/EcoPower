// =========================
// STICKY NAVBAR SCROLL EFFECT
// (drives the body.scrolled .navbar rule in style.css)
// =========================
(function () {
    const onScroll = () => {
        document.body.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
})();

// =========================
// CONTACT FORM FUNCTIONALITY
// =========================
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#contactForm");
    if (!form) return; // only runs on contact.html

    const status = form.querySelector("#formStatus");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const showStatus = (message, type) => {
        status.textContent = message;
        status.classList.remove("success", "error");
        status.classList.add(type);
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page reload (no backend yet)

        const name = form.fullName.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            showStatus("Please fill in all required fields.", "error");
            return;
        }

        if (!emailPattern.test(email)) {
            showStatus("Please enter a valid email address.", "error");
            return;
        }

        // No backend is connected yet — this confirms the form works
        // and gives the visitor feedback. Wire this up to a real
        // endpoint (Formspree, EmailJS, or a server route) before launch.
        showStatus("Message sent successfully! We'll get back to you soon.", "success");
        form.reset();
    });

});