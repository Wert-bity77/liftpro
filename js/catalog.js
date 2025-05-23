/**
 * JavaScript for the Catalog Page
 * Handles filtering, product details, and 360 viewer
 */

// DOM Elements
const catalogItems = document.querySelectorAll('.catalog-item');
const filterButton = document.getElementById('apply-filters');
const categoryFilter = document.getElementById('category-filter');
const capacityFilter = document.getElementById('capacity-filter');
const materialFilter = document.getElementById('material-filter');
const viewDetailButtons = document.querySelectorAll('.view-details-btn');
const qrButtons = document.querySelectorAll('.qr-btn');
const view360Badges = document.querySelectorAll('.view-360-badge');
const thumbnails = document.querySelectorAll('.thumbnail');
const viewControls = document.querySelectorAll('.view-controls button');
const modalOpenButtons = document.querySelectorAll('.open-360-view');
const modalContactBtn = document.getElementById('modal-contact-btn');

// Elevator Model Data
const elevatorModels = {
  'model1': {
    title: 'K-01 Premium',
    description: 'Qora marmar panelli premium lift kabinasi',
    capacity: '8 kishi',
    weight: '630 kg',
    dimensions: '1100 x 1400 mm',
    speed: '1.6 m/s',
    material: 'Qora marmar va zanglamaydigan po`lat',
    lighting: 'Kvadrat LED chiroqlar',
    indicators: 'Raqamli LCD displey',
    safety: 'Avtomatik qutqarish tizimi, Sensor eshiklar',
    features: [
      'Ovoz xabarlari',
      'Havoni tozalash tizimi',
      'Wi-Fi ulanish imkoniyati',
      'Energiya tejash rejimi',
      'Sensor boshqaruv paneli',
      'Yuqori sifatli tosh pol'
    ],
    panoramaUrl: 'https://pannellum.org/images/alma.jpg' // Placeholder, replace with actual
  },
  'model2': {
    title: 'K-02 Modern',
    description: 'Metall panelli zamonaviy lift kabinasi',
    capacity: '6 kishi',
    weight: '450 kg',
    dimensions: '1000 x 1250 mm',
    speed: '1.2 m/s',
    material: 'Brushed zanglamaydigan po`lat',
    lighting: 'Chiziqli LED panellar',
    indicators: 'Raqamli displey',
    safety: 'Avtomatik qutqarish tizimi',
    features: [
      'Ovoz xabarlari',
      'Avtomatik havo almashtirish',
      'Energiya tejash rejimi',
      'Sensor boshqaruv paneli'
    ],
    panoramaUrl: 'https://pannellum.org/images/cerro-toco-0.jpg' // Placeholder, replace with actual
  },
  'model3': {
    title: 'K-03 Klassik',
    description: 'Klassik dizayndagi lift kabinasi',
    capacity: '6 kishi',
    weight: '450 kg',
    dimensions: '1000 x 1250 mm',
    speed: '1.0 m/s',
    material: 'Yog`och va shisha panellar',
    lighting: 'Klassik LED chiroqlar',
    indicators: 'Analog displey',
    safety: 'Qutqarish tizimi, Mexanik bloklash',
    features: [
      'Ovoz xabarlari',
      'Klassik dizayn',
      'Energiya tejash rejimi',
      'Yuqori sifatli pol qoplamasi'
    ],
    panoramaUrl: 'https://pannellum.org/images/bma-1.jpg' // Placeholder, replace with actual
  },
  'model4': {
    title: 'K-04 Panorama',
    description: 'Panoramali shisha lift kabinasi',
    capacity: '10 kishi',
    weight: '800 kg',
    dimensions: '1200 x 1500 mm',
    speed: '1.8 m/s',

    lighting: 'LED chiroq panellari',
    indicators: 'Sensorli displey paneli',
    safety: 'To`liq xavfsizlik tizimi, Avtomatik nazorat',
    features: [
      'Panoramali ko`rinish',
      'Havoni tozalash tizimi',
      'Wi-Fi ulanish imkoniyati',
      'Energiya tejash rejimi',
      'Sensorli boshqaruv paneli',
      'Yuqori tezlik'
    ],
    panoramaUrl: 'https://pannellum.org/images/jfk.jpg' // Placeholder, replace with actual
  },
  'model5': {
    title: 'K-05 Ekonom',
    description: 'Iqtisodiy sinfga mansub lift kabinasi',
    capacity: '4 kishi',
    weight: '320 kg',
    dimensions: '900 x 1100 mm',
    speed: '0.8 m/s',
    material: 'Standart metall panellar',
    lighting: 'Standart LED chiroqlar',
    indicators: 'Raqamli displey',
    safety: 'Standart xavfsizlik tizimlari',
    features: [
      'Ovoz xabarlari',
      'Energiya tejash rejimi',
      'Ishonchli konstruktsiya',
      'Tushunarli boshqaruv paneli'
    ],
    panoramaUrl: 'https://pannellum.org/images/misery.jpg' // Placeholder, replace with actual
  },
  'model6': {
    title: 'K-06 Elegance',
    description: 'Yog`och panelli elegent lift kabinasi',
    capacity: '8 kishi',
    weight: '630 kg',
    dimensions: '1100 x 1400 mm',
    speed: '1.4 m/s',
    material: 'Yuqori sifatli yog`och panellar',
    lighting: 'Dekorativ LED chiroqlar',
    indicators: 'Raqamli displey',
    safety: 'To`liq xavfsizlik tizimi',
    features: [
      'Yuqori sifatli yog`och qoplamalar',
      'Dekorativ yoritish',
      'Wi-Fi ulanish imkoniyati',
      'Energiya tejash rejimi',
      'Sensor boshqaruv paneli',
      'Yuqori sifatli granit pol'
    ],
    panoramaUrl: 'https://pannellum.org/images/ortler.jpg' // Placeholder, replace with actual
  }
};

// Page load handler
document.addEventListener('DOMContentLoaded', () => {
  initCatalogPage();
});

/**
 * Initialize catalog page functionality
 */
function initCatalogPage() {
  // Apply filters button click handler
  if (filterButton) {
    filterButton.addEventListener('click', applyFilters);
  }

  // View details buttons click handler
  viewDetailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modelId = this.getAttribute('data-model');
      showModelDetails(modelId);
    });
  });

  // QR buttons click handler
  qrButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modelId = this.getAttribute('data-model');
      window.utils.generateQRCode(modelId);
    });
  });

  // 360 view badges click handler
  view360Badges.forEach(badge => {
    badge.addEventListener('click', function() {
      const modelId = this.getAttribute('data-model');
      show360View(modelId);
    });
  });

  // Thumbnail click handler
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-src');
      document.getElementById('modal-main-image').src = imgSrc;
      
      // Update active thumbnail
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // View controls click handler
  initViewControls();

  // Modal open 360 button click handler
  modalOpenButtons.forEach(button => {
    button.addEventListener('click', function() {
      window.utils.closeModal(document.getElementById('model-details-modal'));
      const modelId = this.id.replace('modal-360-btn-', '');
      show360View(modelId);
    });
  });

  // Modal contact button click handler
  if (modalContactBtn) {
    modalContactBtn.addEventListener('click', () => {
      window.utils.closeModal(document.getElementById('model-details-modal'));
      window.location.href = 'contact.html';
    });
  }
}

/**
 * Apply filters to catalog items
 */
function applyFilters() {
  const category = categoryFilter.value;
  const capacity = capacityFilter.value;
  const material = materialFilter.value;
  
  catalogItems.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    const itemCapacity = item.getAttribute('data-capacity');
    const itemMaterial = item.getAttribute('data-material');
    
    const categoryMatch = category === 'all' || itemCategory === category;
    const capacityMatch = capacity === 'all' || itemCapacity === capacity;
    const materialMatch = material === 'all' || itemMaterial === material;
    
    if (categoryMatch && capacityMatch && materialMatch) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

/**
 * Show model details in a modal
 * @param {string} modelId - The id of the model to show
 */
function showModelDetails(modelId) {
  const model = elevatorModels[modelId];
  if (!model) return;
  
  // Set modal content
  document.getElementById('modal-model-title').textContent = model.title;
  document.getElementById('modal-model-description').textContent = model.description;
  document.getElementById('modal-capacity').textContent = model.capacity;
  document.getElementById('modal-weight').textContent = model.weight;
  document.getElementById('modal-dimensions').textContent = model.dimensions;
  document.getElementById('modal-speed').textContent = model.speed;
  document.getElementById('modal-material').textContent = model.material;
  document.getElementById('modal-lighting').textContent = model.lighting;
  document.getElementById('modal-indicators').textContent = model.indicators;
  document.getElementById('modal-safety').textContent = model.safety;
  
  // Set features
  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = '';
  model.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
    featuresList.appendChild(li);
  });
  
  // Set 360 view button
  document.getElementById('modal-360-btn').setAttribute('data-model', modelId);
  
  // Open modal
  window.utils.openModal('model-details-modal');
}

/**
 * Show 360 degree view of a model
 * @param {string} modelId - The id of the model to show
 */
function show360View(modelId) {
  const model = elevatorModels[modelId];
  if (!model) return;
  
  // Open modal
  window.utils.openModal('view-360-modal');
  
  // Initialize panorama viewer
  initPanoramaViewer(model.panoramaUrl);
}

/**
 * Initialize the Pannellum panorama viewer
 * @param {string} imageUrl - The URL of the panorama image
 */
function initPanoramaViewer(imageUrl) {
  const viewerContainer = document.getElementById('panorama-container');
  
  // Clear previous viewer if exists
  viewerContainer.innerHTML = '';
  
  // Initialize Pannellum viewer
  const viewer = pannellum.viewer('panorama-container', {
    type: 'equirectangular',
    panorama: imageUrl,
    autoLoad: true,
    autoRotate: -2,
    compass: false,
    hfov: 100, // Horizontal field of view
    showControls: false,
    showZoomCtrl: false,
    showFullscreenCtrl: false
  });
  
  // Store viewer in window for controls access
  window.panoramaViewer = viewer;
}

/**
 * Initialize the controls for the 360 degree view
 */
function initViewControls() {
  if (!viewControls.length) return;
  
  // Rotate left button
  document.getElementById('rotate-left').addEventListener('click', () => {
    if (window.panoramaViewer) {
      const yaw = window.panoramaViewer.getYaw();
      window.panoramaViewer.setYaw(yaw - 30);
    }
  });
  
  // Rotate right button
  document.getElementById('rotate-right').addEventListener('click', () => {
    if (window.panoramaViewer) {
      const yaw = window.panoramaViewer.getYaw();
      window.panoramaViewer.setYaw(yaw + 30);
    }
  });
  
  // Zoom in button
  document.getElementById('zoom-in').addEventListener('click', () => {
    if (window.panoramaViewer) {
      const hfov = window.panoramaViewer.getHfov();
      window.panoramaViewer.setHfov(hfov - 10);
    }
  });
  
  // Zoom out button
  document.getElementById('zoom-out').addEventListener('click', () => {
    if (window.panoramaViewer) {
      const hfov = window.panoramaViewer.getHfov();
      window.panoramaViewer.setHfov(hfov + 10);
    }
  });
}