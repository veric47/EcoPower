// =========================
// CONTACT FORM FUNCTIONALITY
// =========================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page reload

        // Get input values
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const subject = form.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = form.querySelector("textarea").value.trim();

        // Simple validation
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Success message (replace alert with better UI later if you want)
        alert("Message sent successfully! We will get back to you soon.");

        // Reset form
        form.reset();
    });

});