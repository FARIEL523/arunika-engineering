/**
 * ARUNIKA INDUSTRIAL SOLUTIONS - MAIN.JS
 * Application Initialization
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Initialize Navigation Module
  if (window.ArunikaNav && typeof window.ArunikaNav.init === 'function') {
    window.ArunikaNav.init();
  }

  // Initialize GSAP Animations Module
  if (window.ArunikaAnimations && typeof window.ArunikaAnimations.init === 'function') {
    window.ArunikaAnimations.init();
  }

  // Initialize Contact Form Client-side Validation
  initContactForm();

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    const fields = [
      { id: 'contact-name', errorId: 'error-name', validate: (val) => val.trim().length > 0 },
      { id: 'contact-company', errorId: 'error-company', validate: (val) => val.trim().length > 0 },
      { id: 'contact-email', errorId: 'error-email', validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) },
      { id: 'contact-message', errorId: 'error-message', validate: (val) => val.trim().length > 0 }
    ];

    fields.forEach((field) => {
      const input = document.getElementById(field.id);
      if (input) {
        input.addEventListener('input', function () {
          const group = input.closest('.form-group');
          if (group && group.classList.contains('has-error')) {
            if (field.validate(input.value)) {
              group.classList.remove('has-error');
            }
          }
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      fields.forEach((field) => {
        const input = document.getElementById(field.id);
        const group = input ? input.closest('.form-group') : null;
        if (input && group) {
          if (!field.validate(input.value)) {
            group.classList.add('has-error');
            isValid = false;
          } else {
            group.classList.remove('has-error');
          }
        }
      });

      if (feedback) {
        if (isValid) {
          feedback.className = 'form-feedback is-success';
          feedback.textContent = 'Thank you. Your inquiry has been prepared successfully. Our team will review your requirement and reach out shortly.';
          form.reset();
        } else {
          feedback.className = 'form-feedback is-error';
          feedback.textContent = 'Please fill out all required fields correctly before submitting.';
        }
      }
    });
  }
});
