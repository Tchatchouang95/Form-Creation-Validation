document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim(); 
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const isValid = true;
        const messages = [];

        //Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('The username should be atleast 3 letters');
        }
        
        //Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Insert a vilid email');
        }

        //Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password too short. Atleast 8 characteracters');
        }

        //Checking the above validity and tappropriate action

        //1-Setting the feedbackDiv to block since it was initally hidden
        feedbackDiv.style.display = 'block';

        //2-Checking which of the 3 inputs are valid
        if (isValid) {
            feedbackDiv.textContent ='Registration successful!';
            feedbackDiv.style.color = '#28a745';
        }
        else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'
        }
    })
})