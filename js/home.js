/**
 * JavaScript for the Home Page
 * Handles testimonial slider and 360 viewer
 */

// DOM Elements
const testimonials = document.querySelectorAll('.testimonial');
const sliderDots = document.querySelectorAll('.slider-dots .dot');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const view360Badges = document.querySelectorAll('.view-360-badge');

// Variables
let currentSlide = 0;
const slideCount = testimonials.length;

// Page load handler
document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
});

/**
 * Initialize home page functionality
 */
function initHomePage() {
  // Initialize testimonial slider
  initTestimonialSlider();
  
  // 360 view badges click handler
  view360Badges.forEach(badge => {
    badge.addEventListener('click', function() {
      const modelId = this.getAttribute('data-model');
      window.utils.generateQRCode(modelId);
    });
  });
  
  // Initialize animation observers
  initScrollAnimations();
}

/**
 * Initialize testimonial slider
 */
function initTestimonialSlider() {
  // Hide all testimonials except the first one
  testimonials.forEach((testimonial, index) => {
    if (index !== 0) {
      testimonial.style.display = 'none';
    }
  });
  
  // Slider dots click handler
  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Previous slide button click handler
  if (sliderPrev) {
    sliderPrev.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  }
  
  // Next slide button click handler
  if (sliderNext) {
    sliderNext.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  }
  
  // Auto slide every 5 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

/**
 * Show slide at the specified index
 * @param {number} index - The index of the slide to show
 */
function showSlide(index) {
  // Handle index boundaries
  if (index < 0) {
    index = slideCount - 1;
  } else if (index >= slideCount) {
    index = 0;
  }
  
  // Hide current slide
  testimonials[currentSlide].style.display = 'none';
  sliderDots[currentSlide].classList.remove('active');
  
  // Show new slide
  testimonials[index].style.display = 'block';
  sliderDots[index].classList.add('active');
  
  // Update current slide
  currentSlide = index;
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
  // Animate elements when they come into view
  const animatedElements = document.querySelectorAll('.feature-card, .model-card, .hero-content');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    animatedElements.forEach(element => {
      element.classList.add('animated');
    });
  }
}