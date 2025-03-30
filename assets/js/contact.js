    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission




        // Get the reCAPTCHA response token
        var recaptchaResponse = grecaptcha.getResponse();

        // Check if CAPTCHA is filled
        if (recaptchaResponse.length == 0) {
            alert('Please complete the CAPTCHA');
            return;
        }

        // Append the token to the form and submit the form
        var hiddenRecaptcha = document.createElement('input');
        hiddenRecaptcha.setAttribute('type', 'hidden');
        hiddenRecaptcha.setAttribute('name', 'g-recaptcha-response');
        hiddenRecaptcha.setAttribute('value', recaptchaResponse);
        document.getElementById('contact-form').appendChild(hiddenRecaptcha);

        // Submit the form
        this.submit();
    });

function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LfkzAMrAAAAAEqO5HeaBSBvlNP5GgXGwnX8I8QH', {action: 'LOGIN'});
    });
  }
