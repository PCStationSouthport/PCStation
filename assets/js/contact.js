document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Simulating form submission process
    let success = Math.random() > 0.5;  // Randomly simulate success or error

    if (success) {
        // Show success message
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("errorMessage").classList.add("hidden");

        // Optionally, clear the form fields after success
        document.getElementById("contactForm").reset();
    } else {
        // Show error message
        document.getElementById("errorMessage").classList.remove("hidden");
        document.getElementById("successMessage").classList.add("hidden");
    }
});
