/**
 * Main JavaScript for LIFTPRO Website
 * Handles common functionality across all pages
 */

// DOM Elements
const loader = document.querySelector('.loader-container');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const header = document.querySelector('.main-header');
const modals = document.querySelectorAll('.modal');
const closeModalButtons = document.querySelectorAll('.close-modal');

// Page load handler
document.addEventListener('DOMContentLoaded', () => {
  // Remove loader after page load
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 800);

  // Initialize page-specific functionality
  initCommonFunctionality();
});

/**
 * Initialize common functionality across all pages
 */
function initCommonFunctionality() {
  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.querySelector('i').classList.toggle('fa-bars');
      menuToggle.querySelector('i').classList.toggle('fa-times');
    });
  }

  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Modal functionality
  initializeModals();
}

/**
 * Initialize modal functionality
 */
function initializeModals() {
  // Close modal when clicking the close button
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  // Close modal when clicking outside the modal content
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          closeModal(modal);
        }
      });
    }
  });
}

/**
 * Open a modal by id
 * @param {string} modalId - The id of the modal to open
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close a modal
 * @param {HTMLElement} modal - The modal element to close
 */
function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Generate a QR code for a specific model
 * @param {string} modelId - The id of the model
 */
function generateQRCode(modelId) {
  const qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = '';
  
  // Generate the URL for the 360 view
  const viewUrl = `${window.location.origin}/view-360.html?model=${modelId}`;
  
  // Generate QR code
  new QRCode(qrcodeContainer, {
    text: viewUrl,
    width: 200,
    height: 200,
    colorDark: '#3d56b2',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
  
  // Open QR modal
  openModal('qr-modal');
}

// Export functions for use in other modules
window.utils = {
  openModal,
  closeModal,
  generateQRCode
};