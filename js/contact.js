/**
 * JavaScript for the Contact Page
 * Handles form submission and FAQ accordion
 */

// DOM Elements
const contactForm = document.getElementById('contact-form');
const accordionItems = document.querySelectorAll('.accordion-item');
const successModal = document.getElementById('success-modal');
const closeSuccessButton = document.querySelector('.close-success');

// Page load handler
document.addEventListener('DOMContentLoaded', () => {
  initContactPage();
});

/**
 * Initialize contact page functionality
 */
function initContactPage() {
  // Initialize accordion
  initAccordion();
  
  // Form submission handler
  initFormSubmission();
  
  // Success modal close button handler
  if (closeSuccessButton) {
    closeSuccessButton.addEventListener('click', () => {
      window.utils.closeModal(successModal);
    });
  }
  
  // Initialize Google Maps interactive elements
  initMapInteraction();
}

/**
 * Initialize accordion functionality
 */
function initAccordion() {
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
      // Toggle active class on the clicked item
      item.classList.toggle('active');
      
      // Close other items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Initialize form submission
 */
function initFormSubmission() {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    if (!validateForm()) {
      return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('.btn-submit');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
    
    // Simulate server request
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Yuborish';
      
      // Reset form
      contactForm.reset();
      
      // Show success modal
      window.utils.openModal('success-modal');
    }, 1500);
  });
}

/**
 * Validate contact form
 * @returns {boolean} - Whether the form is valid
 */
function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const agree = document.getElementById('agree');
  
  let isValid = true;
  
  // Reset error state
  const formGroups = contactForm.querySelectorAll('.form-group');
  formGroups.forEach(group => {
    group.classList.remove('error');
  });
  
  // Validate name
  if (!name.value.trim()) {
    markError(name, 'Ism-familiya kiritilishi shart');
    isValid = false;
  }
  
  // Validate email
  if (!email.value.trim() || !isValidEmail(email.value)) {
    markError(email, 'To\'g\'ri elektron pochta manzili kiritilishi shart');
    isValid = false;
  }
  
  // Validate phone
  if (!phone.value.trim() || !isValidPhone(phone.value)) {
    markError(phone, 'To\'g\'ri telefon raqami kiritilishi shart');
    isValid = false;
  }
  
  // Validate subject
  if (!subject.value || subject.value === '') {
    markError(subject, 'Mavzu tanlanishi shart');
    isValid = false;
  }
  
  // Validate message
  if (!message.value.trim()) {
    markError(message, 'Xabar matni kiritilishi shart');
    isValid = false;
  }
  
  // Validate agreement
  if (!agree.checked) {
    markError(agree, 'Shaxsiy ma\'lumotlaringizni qayta ishlashga rozilik bildirishingiz shart');
    isValid = false;
  }
  
  return isValid;
}

/**
 * Mark form field as having an error
 * @param {HTMLElement} element - The form field
 * @param {string} message - The error message
 */
function markError(element, message) {
  const formGroup = element.closest('.form-group');
  formGroup.classList.add('error');
  
  // Add error message if it doesn't exist
  if (!formGroup.querySelector('.error-message')) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    formGroup.appendChild(errorMessage);
  }
}

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

/**
 * Validate phone number format
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone number is valid
 */
function isValidPhone(phone) {
  // Allow various formats, but require at least 9 digits
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/;
  return re.test(phone.replace(/\s+/g, ''));
}

/**
 * Initialize Google Maps interaction
 */
function initMapInteraction() {
  // This would normally involve Google Maps API functionality
  // For now, we'll just add some basic interaction with the iframe
  const mapContainer = document.querySelector('.map-container');
  
  if (mapContainer) {
    // Add hover effect
    mapContainer.addEventListener('mouseenter', () => {
      mapContainer.classList.add('active');
    });
    
    mapContainer.addEventListener('mouseleave', () => {
      mapContainer.classList.remove('active');
    });
  }
}

// Add CSS for error and map interaction
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .form-group.error input,
    .form-group.error select,
    .form-group.error textarea {
      border-color: var(--error-color);
    }
    
    .error-message {
      color: var(--error-color);
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }
    
    .map-container {
      transition: box-shadow var(--transition-medium);
    }
    
    .map-container.active {
      box-shadow: var(--shadow-lg);
    }
  </style>
`);