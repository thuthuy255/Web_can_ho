
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.btn-submit').addEventListener('click', function(event) {
                event.preventDefault();
                let isValid = true;
    
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const tel = document.getElementById('tel').value.trim();
    
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phonePattern = /^\d{10,11}$/;
    
                // Reset all error messages
                document.querySelectorAll('.form-message').forEach(function(element) {
                    element.classList.remove('active');
                });
    
                // Validate name
                if (!name) {
                    isValid = false;
                    document.getElementById('name-message').classList.add('active');
                }
    
                // Validate email
                if (!emailPattern.test(email)) {
                    isValid = false;
                    document.getElementById('email-message').classList.add('active');
                }
    
                // Validate phone
                if (!phonePattern.test(tel) || isNaN(tel)) {
                    isValid = false;
                    document.getElementById('tel-message').classList.add('active');
                }
    
                // Debugging output
                console.log("Name: ", name);
                console.log("Email: ", email);
                console.log("Phone: ", tel);
                console.log("Form is valid: ", isValid);
    
                // Check if the form is valid
                if (isValid) {
                    alert("Form submitted successfully!");
                    // Optionally, you can submit the form here if it needs to go to a server
                    // document.getElementById('form-contact_us').submit();
                }
            });
        });