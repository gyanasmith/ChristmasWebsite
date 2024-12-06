document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnSubmit").addEventListener("click", function() {
        // Get form fields' values
        let name = document.getElementById("name").value.trim();
        let country = document.getElementById("country").value.trim();
        let message = document.getElementById("message").value.trim();

        // Check if all fields have content
        if (name && country && message) {
            alert("Awesome! Your message has been sent to Santa!");
            // Optionally, you can clear the form after submission
            document.getElementById("contactForm").reset();
        } else {
            alert("Please fill out all fields before sending!");
        }
    });
});