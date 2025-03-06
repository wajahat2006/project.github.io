// Form validation logic
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission

    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const rating = document.getElementById('rating');
    const feedback = document.getElementById('feedback');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const ratingError = document.getElementById('ratingError');
    const feedbackError = document.getElementById('feedbackError');

    // Clear previous error messages and reset input styles
    nameError.textContent = '';
    emailError.textContent = '';
    ratingError.textContent = '';
    feedbackError.textContent = '';
    name.classList.remove('invalid');
    email.classList.remove('invalid');
    rating.classList.remove('invalid');
    feedback.classList.remove('invalid');

    // Name validation (no numbers allowed)
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        name.classList.add('invalid');
        isValid = false;
    } else {
        if (!nameRegex.test(name.value)) {
            nameError.textContent = 'Name cannot contain numbers or special characters.';
            name.classList.add('invalid');
            isValid = false;
        }
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        email.classList.add('invalid');
        isValid = false;
    } else {
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            email.classList.add('invalid');
            isValid = false;
        }
    }

    // Rating validation
    if (rating.value === '') {
        ratingError.textContent = 'Please select a rating.';
        rating.classList.add('invalid');
        isValid = false;
    } else {
        // No extra logic needed for rating selection
    }

    // Feedback validation
    if (feedback.value.trim() === '') {
        feedbackError.textContent = 'Feedback is required.';
        feedback.classList.add('invalid');
        isValid = false;
    } else {
        // No extra logic needed for feedback
    }

    // If all validations pass, show thank you message
    if (isValid) {
        document.querySelector('.container').innerHTML = `
            <div id="thankYouMessage" class="thank-you-message">
                <h3>Thank You for Your Feedback!</h3>
                <p>We appreciate your input.</p>
            </div>
        `;
    }
});