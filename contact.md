---
layout: cont
title: Contact Us
permalink: /contact/
---



<!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Contact Us</h1>
        <p>Have a question? Reach out to us, we're here to help with repairs, custom builds, and more!</p>
        <a href="#contact-form" class="btn-primary">Get in Touch</a>
    </div>
</section>

<!-- Contact Info and Form Section -->
<section class="contact-info-form">
    <div class="container">
        <!-- Send a Message Section (50%) -->
        <div class="contact-form-container">
            <div class="contact-form">
                <h2>Got a Question, Send Us a Message</h2>

                <form id="contact-form" action="https://formsubmit.co/b8476fda8d53692914cdb6922f2f6216" method="POST"   data-recaptcha="true">
    
    <input type="hidden" name="_next" value="https://pcstationsouthport.github.io/PCStation/thank-you/"> <!-- Redirect after submission -->
    



                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required aria-label="Enter your name">
                    
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required aria-label="Enter your email address">
                    
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required aria-label="Enter your message"></textarea>

   <!-- reCAPTCHA -->
    <div class="g-recaptcha" data-sitekey="6LfkzAMrAAAAAEqO5HeaBSBvlNP5GgXGwnX8I8QH"></div>


                    <button type="submit">Send Message</button>
                </form>

                <!-- Success Message -->
                <div id="successMessage" class="feedback-message success hidden">
                    <p>Thank you for your message! We'll get back to you shortly.</p>
                </div>

                <!-- Error Message -->
                <div id="errorMessage" class="feedback-message error hidden">
                    <p>Oops! Something went wrong. Please try again later.</p>
                </div>
            </div>
        </div>

        <!-- Contact Info Section (25%) -->
        <div class="contact-info">
            <h2>Contact Info</h2>
            <p><i class="fas fa-map-marker-alt"></i> <strong>Address:</strong> Southport</p>
            <p><i class="fas fa-phone"></i> <strong>Phone:</strong> 07948566211</p>
            <p><i class="fas fa-envelope"></i> <strong>Email:</strong> PC-Station@gmail.com</p>
            <p><i class="fas fa-clock"></i> <strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>

            <!-- Social Media Links -->
            <div class="social-links">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
</section>

<script src="/assets/js/contact.js"></script>
<!-- Include Google reCAPTCHA Script -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
