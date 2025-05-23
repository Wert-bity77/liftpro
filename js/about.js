/**
 * JavaScript for the About Page
 * Handles timeline animations
 */

// DOM Elements
const timelineItems = document.querySelectorAll('.timeline-item');
const statItems = document.querySelectorAll('.stat-item');
const missionBox = document.querySelector('.mission-box');
const visionBox = document.querySelector('.vision-box');
const valueCards = document.querySelectorAll('.value-card');
const teamMembers = document.querySelectorAll('.team-member');

// Page load handler
document.addEventListener('DOMContentLoaded', () => {
  initAboutPage();
});

/**
 * Initialize about page functionality
 */
function initAboutPage() {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize counter animations for stats
  initStatCounters();
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
  if ('IntersectionObserver' in window) {
    // Timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    timelineItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.2}s`;
      timelineObserver.observe(item);
    });
    
    // Mission and vision boxes
    const boxObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          boxObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (missionBox) boxObserver.observe(missionBox);
    if (visionBox) boxObserver.observe(visionBox);
    
    // Value cards
    const valueObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          valueObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    valueCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
      valueObserver.observe(card);
    });
    
    // Team members
    const teamObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          teamObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    teamMembers.forEach((member, index) => {
      member.style.transitionDelay = `${index * 0.1}s`;
      teamObserver.observe(member);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    timelineItems.forEach(item => item.classList.add('animated'));
    if (missionBox) missionBox.classList.add('animated');
    if (visionBox) visionBox.classList.add('animated');
    valueCards.forEach(card => card.classList.add('animated'));
    teamMembers.forEach(member => member.classList.add('animated'));
  }
}

/**
 * Initialize counter animations for stats
 */
function initStatCounters() {
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumber = entry.target.querySelector('.stat-number');
          const targetValue = parseInt(statNumber.textContent);
          animateCounter(statNumber, 0, targetValue, 1500);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.7 });
    
    statItems.forEach(item => {
      counterObserver.observe(item);
    });
  }
}

/**
 * Animate counter from start to end value
 * @param {HTMLElement} element - The element to animate
 * @param {number} start - The starting value
 * @param {number} end - The ending value
 * @param {number} duration - The duration of the animation in milliseconds
 */
function animateCounter(element, start, end, duration) {
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current + (element.textContent.includes('+') ? '+' : '');
    
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      element.textContent = end + (element.textContent.includes('+') ? '+' : '');
      clearInterval(timer);
    }
  }, stepTime);
}

// Add CSS animations
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .timeline-item, .mission-box, .vision-box, .value-card, .team-member {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .timeline-item.animated, .mission-box.animated, .vision-box.animated, .value-card.animated, .team-member.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    .timeline-item:nth-child(even) {
      transform: translateY(30px);
    }
    
    .timeline-item:nth-child(odd) {
      transform: translateY(-30px);
    }
    
    .timeline-item.animated:nth-child(even),
    .timeline-item.animated:nth-child(odd) {
      transform: translateY(0);
    }
  </style>
`);