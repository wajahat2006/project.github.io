
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent actual form submission

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let message = document.getElementById("message").value;

            let nameRegex = /^[A-Za-z\s]+$/;
            let phoneRegex = /^[0-9]*$/;

            if (!nameRegex.test(name)) {
                alert("Please enter only alphabets in the name field.");
                return;
            }

            if (phone !== "" && !phoneRegex.test(phone)) {
                alert("Please enter only numbers in the phone field.");
                return;
            }

            // Show success message
            document.getElementById("successMessage").style.display = "block";

            // Clear the form fields
            document.getElementById("contactForm").reset();
        });
