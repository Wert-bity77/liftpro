document.addEventListener('DOMContentLoaded', () => {
  const viewDetailButtons = document.querySelectorAll('.view-details-btn');

  const modal = document.getElementById('detailsModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalSpecs = document.getElementById('modalSpecs');
  const closeBtn = document.querySelector('.close-modal');

  // Batafsil tugmasini bosganda modalni to‘ldirish va ko‘rsatish
  viewDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modelId = button.getAttribute('data-model');
      const item = document.getElementById(modelId);

      if (!item) return;

      const title = item.querySelector('.item-title').innerText;
      const description = item.querySelector('.item-description').innerText;
      const specs = item.querySelectorAll('.item-specs .spec');

      modalTitle.innerText = title;
      modalDescription.innerText = description;

      modalSpecs.innerHTML = '';
      specs.forEach(spec => {
        const iconHTML = spec.querySelector('i').outerHTML;
        const text = spec.querySelector('span').innerText;
        modalSpecs.innerHTML += `<p>${iconHTML} ${text}</p>`;
      });


      function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
      }
    
      function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
      }
    
      window.onclick = function(event) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      };
    
      // Avtomatik bog‘lash (agar kerak bo‘lsa):
      document.querySelectorAll(".view-details-btn").forEach(button => {
        button.addEventListener("click", () => {
          const modelId = button.getAttribute("data-model");
          openModal("modal" + modelId.replace("model", ""));
        });
      });
    

      

      modal.style.display = 'flex'; // Modalni ko‘rsatish
    });
  });

  const categoryFilter = document.getElementById('category-filter');
  const capacityFilter = document.getElementById('capacity-filter');
  const materialFilter = document.getElementById('material-filter');

  categoryFilter.addEventListener('change', applyFilters);
  capacityFilter.addEventListener('change', applyFilters);
  materialFilter.addEventListener('change', applyFilters);

  function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedCapacity = capacityFilter.value;
    const selectedMaterial = materialFilter.value;

    const models = document.querySelectorAll('.catalog-item');

    models.forEach(model => {
      const category = model.getAttribute('data-category');
      const capacity = model.getAttribute('data-capacity');
      const material = model.getAttribute('data-material');

      const matchCategory = selectedCategory === 'all' || category === selectedCategory;
      const matchCapacity = selectedCapacity === 'all' || capacity === selectedCapacity;
      const matchMaterial = selectedMaterial === 'all' || material === selectedMaterial;

      if (matchCategory && matchCapacity && matchMaterial) {
        model.style.display = 'block';
      } else {
        model.style.display = 'none';
      }
    });
  }


  // Modalni yopish tugmasi funksiyasi
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Modal tashqarisiga bosilganda ham yopish
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

  // 360 rasmlarni yuklash va ko‘rsatish
  let currentAngle = 0;
  const totalAngles = 36;

  function load360Images(modelId) {
    const viewerWrapper = document.querySelector(`#viewer-${modelId} .360-image`);
    const imageBasePath = `img/360/${modelId}/`;

    // Avvalgi rasm(lar)ni o‘chiramiz
    viewerWrapper.innerHTML = '';

    // Yangi <img> yaratamiz
    const img = document.createElement('img');
    img.src = `${imageBasePath}1.jpg`;
    img.alt = `Angle 1`;
    img.classList.add('angle-frame');
    viewerWrapper.appendChild(img);

    currentAngle = 0;

    // Tugmalarni bog‘lash
    const prevBtn = document.querySelector('.prev-angle');
    const nextBtn = document.querySelector('.next-angle');

    if (prevBtn && nextBtn) {
      prevBtn.onclick = () => {
        currentAngle = (currentAngle - 1 + totalAngles) % totalAngles;
        img.src = `${imageBasePath}${currentAngle + 1}.jpg`;
      };

      nextBtn.onclick = () => {
        currentAngle = (currentAngle + 1) % totalAngles;
        img.src = `${imageBasePath}${currentAngle + 1}.jpg`;
      };
    }
  }

  // 'Batafsil' tugmasi orqali 360 ko‘rishni ochish
  viewDetailButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modelId = this.getAttribute('data-model');
      const modal360 = document.getElementById('modal-360');

      load360Images(modelId);

      modal360.style.display = "block";
    });
  });



  // Modalni yopish tugmasi
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Foydalanuvchi modal tashqarisiga bosganda ham yopiladi
  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });




const liftData = {
  1: ['Lift A1', 'Lift A2', 'Lift A3'],
  2: ['Lift B1', 'Lift B2'],
  3: ['Lift C1', 'Lift C2', 'Lift C3', 'Lift C4']
};



function renderLifts(page) {
  catalogContainer.innerHTML = ''; // eski lift boxlarni tozalash

  liftData[page].forEach(lift => {
    const liftBox = document.createElement('div');
    liftBox.className = 'lift-box';
    liftBox.textContent = lift;
    catalogContainer.appendChild(liftBox);
  });
}

pageLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    pageLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const page = link.getAttribute('data-page');
    renderLifts(page);
  });
});

document.getElementById("category-filter").addEventListener("change", function () {
  const selectedCategory = this.value;
  const catalogItems = document.querySelectorAll(".catalog-item");

  catalogItems.forEach(function (item) {
    const itemCategory = item.getAttribute("data-category");

    if (selectedCategory === "all" || itemCategory === selectedCategory) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

const capacity_filter = document.getElementById("capacity-filter");

  capacityFilter.addEventListener("change", function () {
    const selectedCapacity = this.value;
    const catalogItems = document.querySelectorAll(".catalog-item");

    catalogItems.forEach(function (item) {
      const itemCapacity = item.getAttribute("data-capacity"); // small, medium, large, extra

      if (selectedCapacity === "all" || itemCapacity === selectedCapacity) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  const material_Filter = document.getElementById("material-filter");

  materialFilter.addEventListener("change", function () {
    const selectedMaterial = this.value;
    const catalogItems = document.querySelectorAll(".catalog-item");

    catalogItems.forEach(function (item) {
      const itemMaterial = item.getAttribute("data-material");

      if (selectedMaterial === "all" || itemMaterial === selectedMaterial) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  const filterBtn = document.getElementById('apply-filters');
  const filterInput = document.getElementById('filter-input');
  const catalogItems = document.querySelectorAll('.catalog-item');

  // Tugma bosilganda inputni ko'rsat/berkit
  filterBtn.addEventListener('click', () => {
    filterInput.style.display = filterInput.style.display === 'none' ? 'block' : 'none';
    filterInput.focus();
  });

  // Filtr funksiyasi - real-time ishlaydi
  filterInput.addEventListener('input', () => {
    const searchText = filterInput.value.toLowerCase();

    catalogItems.forEach(item => {
      const itemName = item.dataset.name.toLowerCase();
      if (itemName.includes(searchText)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});





// Boshlanishida birinchi sahifani ko‘rsatish
renderLifts(1);

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
  },
  'model7': {
  title: 'K-07 GlassLine',
  description: 'Shishadan yasalgan zamonaviy lift kabinasi',
  capacity: '8 kishi',
  weight: '630 kg',
  dimensions: '1100 x 1400 mm',
  speed: '1.6 m/s',
  material: 'Zanglamaydigan po‘lat va shisha',
  lighting: 'Yorqin LED yoritish',
  indicators: 'Sensorli ekran',
  safety: 'Avtomatik to‘xtash tizimi, xavfsizlik sensorlari',
  features: [
    'Panoramali dizayn',
    'Sensorli boshqaruv',
    'Wi-Fi imkoniyati',
    'Shovqinsiz harakat',
    'Energiya tejovchi tizim',
    'Yorqin LED panel'
  ],
  panoramaUrl: 'https://pannellum.org/images/pano-fallback.jpg'
},
'model8': {
  title: 'K-08 EcoSmart',
  description: 'Ekologik toza materiallardan tayyorlangan lift kabinasi',
  capacity: '6 kishi',
  weight: '450 kg',
  dimensions: '1000 x 1250 mm',
  speed: '1.0 m/s',
  material: 'Qayta ishlangan yog‘och va plastmassa',
  lighting: 'Ekologik LED panellar',
  indicators: 'Raqamli ko‘rsatkichlar',
  safety: 'Standart xavfsizlik tizimi',
  features: [
    'Ekologik dizayn',
    'Kam energiya sarfi',
    'Oddiy boshqaruv paneli',
    'Havoni tozalovchi filtrlar',
    'Yog‘och uslubidagi ichki ko‘rinish'
  ],
  panoramaUrl: 'https://pannellum.org/images/bma-1.jpg'
},
'model9': {
  title: 'K-09 SkyLux',
  description: 'Lyuks darajadagi osmon rangli lift kabinasi',
  capacity: '10 kishi',
  weight: '800 kg',
  dimensions: '1200 x 1500 mm',
  speed: '2.0 m/s',
  material: 'Ko‘zguli zanglamaydigan po‘lat',
  lighting: 'Ko‘k LED yoritish',
  indicators: 'To‘liq sensorli displey',
  safety: 'Avto-qutqaruv va to‘liq nazorat tizimi',
  features: [
    'Lyuks interyer',
    'Sky ambient yoritish',
    'Wi-Fi va bluetooth',
    'Sensorli boshqaruv',
    'Ovozli buyruqlar',
    'Maxsus xavfsizlik kamerasi'
  ],
  panoramaUrl: 'https://pannellum.org/images/jfk.jpg'
},
'model10': {
  title: 'K-10 UrbanLift',
  description: 'Shahar arxitekturasi uchun mos dizayn',
  capacity: '6 kishi',
  weight: '450 kg',
  dimensions: '1000 x 1250 mm',
  speed: '1.2 m/s',
  material: 'Mat qora po‘lat',
  lighting: 'Neft LED yoritish',
  indicators: 'Raqamli displey',
  safety: 'Standart xavfsizlik tizimi',
  features: [
    'Urban dizayn',
    'Anti-vandal qoplama',
    'Oddiy boshqaruv paneli',
    'Havoni avtomatik aylantirish'
  ],
  panoramaUrl: 'https://pannellum.org/images/cerro-toco-0.jpg'
},
'model11': {
  title: 'K-11 Crystal',
  description: 'Kristall dizaynli yoritilgan lift kabinasi',
  capacity: '5 kishi',
  weight: '400 kg',
  dimensions: '950 x 1150 mm',
  speed: '1.1 m/s',
  material: 'Kristalli shisha va metall',
  lighting: 'Kristall LED nur',
  indicators: 'Sensorli LED displey',
  safety: 'To‘liq xavfsizlik va ogohlantirish tizimi',
  features: [
    'Kristall effektli yoritish',
    'Yumshoq harakat',
    'Wi-Fi ulanishi',
    'Sensor boshqaruv paneli'
  ],
  panoramaUrl: 'https://pannellum.org/images/misery.jpg'
},
'model12': {
  title: 'K-12 SmartCore',
  description: 'Intellektual tizimga ega lift',
  capacity: '8 kishi',
  weight: '630 kg',
  dimensions: '1100 x 1400 mm',
  speed: '1.5 m/s',
  material: 'Yorqin zanglamaydigan po‘lat',
  lighting: 'Oq chiziqli LED',
  indicators: 'AI asosidagi displey',
  safety: 'Avtomatik tormoz va xavfsizlik tizimi',
  features: [
    'Sun’iy intellekt bilan boshqaruv',
    'Harakatni optimallashtirish',
    'Xotira bilan ishlovchi boshqaruv paneli',
    'Ovozli ogohlantirishlar'
  ],
  panoramaUrl: 'https://pannellum.org/images/alma.jpg'
},
'model13': {
  title: 'K-13 ComfortLift',
  description: 'Yuqori qulaylikdagi lift modeli',
  capacity: '7 kishi',
  weight: '500 kg',
  dimensions: '1050 x 1300 mm',
  speed: '1.3 m/s',
  material: 'Shovqinsiz qoplamali po‘lat',
  lighting: 'Yumshoq LED yoritish',
  indicators: 'Oddiy raqamli displey',
  safety: 'Qutqarish tizimi',
  features: [
    'Shovqinsiz harakat',
    'Yumshoq yoritish',
    'Oddiy dizayn',
    'Past energiya sarfi'
  ],
  panoramaUrl: 'https://pannellum.org/images/ortler.jpg'
},
'model14': {
  title: 'K-14 MirrorLine',
  description: 'To‘liq oynali ichki dizayn',
  capacity: '8 kishi',
  weight: '630 kg',
  dimensions: '1100 x 1400 mm',
  speed: '1.6 m/s',
  material: 'Oynali zanglamaydigan po‘lat',
  lighting: 'Ko‘zguli LED',
  indicators: 'Sensorli displey',
  safety: 'Avtomatik qutqarish tizimi',
  features: [
    'Oynali dizayn',
    'Sensorli boshqaruv',
    'Yoritilgan shift',
    'Yupqa LED panel'
  ],
  panoramaUrl: 'https://pannellum.org/images/pano-fallback.jpg'
},
'model15': {
  title: 'K-15 ZenLift',
  description: 'Minimalistik va tinch dizayn',
  capacity: '5 kishi',
  weight: '400 kg',
  dimensions: '950 x 1200 mm',
  speed: '1.0 m/s',
  material: 'Mat yog‘och va oq panellar',
  lighting: 'Tinch LED yoritish',
  indicators: 'Oddiy displey',
  safety: 'Xavfsiz tormoz tizimi',
  features: [
    'Zen uslubidagi interyer',
    'Yumshoq yoritish',
    'Oddiy boshqaruv',
    'Minimalistik ko‘rinish'
  ],
  panoramaUrl: 'https://pannellum.org/images/bma-1.jpg'
},

'model16': {
  title: 'K-16 FutureLine',
  description: 'Kelajak dizayni asosida yaratilgan lift',
  capacity: '10 kishi',
  weight: '800 kg',
  dimensions: '1200 x 1500 mm',
  speed: '2.5 m/s',
  material: 'Kompozit nano-metall',
  lighting: 'Neon LED yoritish',
  indicators: 'To‘liq interaktiv ekran',
  safety: 'AI yordamida boshqariluvchi xavfsizlik',
  features: [
    'Interaktiv boshqaruv paneli',
    'Avtonom energiya tizimi',
    'Panoramik sensorlar',
    'Virtual yordamchi',
    'Ovozli buyruqlar'
  ],
  panoramaUrl: 'https://pannellum.org/images/jfk.jpg'
},
'model17': {
  title: 'K-17 WoodStyle',
  description: 'Yog‘och dizaynli klassik lift modeli',
  capacity: '6 kishi',
  weight: '450 kg',
  dimensions: '1000 x 1250 mm',
  speed: '1.0 m/s',
  material: 'Yog‘och va metall aralashmasi',
  lighting: 'Issiq oq LED',
  indicators: 'Klassik raqamli displey',
  safety: 'Standard xavfsizlik tizimi',
  features: [
    'Klassik dizayn',
    'Yog‘och dekor',
    'Sokin harakat',
    'Past shovqin',
    'Yaxshi izolyatsiya'
  ],
  panoramaUrl: 'https://pannellum.org/images/misery.jpg'
},
'model18': {
  title: 'K-18 SkyTube',
  description: 'Shisha tubus shaklidagi panoramali lift',
  capacity: '5 kishi',
  weight: '400 kg',
  dimensions: '1000 x 1200 mm',
  speed: '1.8 m/s',
  material: 'Tozalangan shisha',
  lighting: 'Ichki spiral LED',
  indicators: 'Aylanuvchi sensor displey',
  safety: 'Panorama xavfsizlik sensorlari',
  features: [
    '360° ko‘rinish',
    'Shisha devorlar',
    'Spiral LED',
    'Sensorli boshqaruv',
    'Yumshoq yurish'
  ],
  panoramaUrl: 'https://pannellum.org/images/cerro-toco-0.jpg'
},
'model19': {
  title: 'K-19 SteelCore',
  description: 'Sanoat uslubidagi kuchli model',
  capacity: '12 kishi',
  weight: '1000 kg',
  dimensions: '1300 x 1600 mm',
  speed: '1.4 m/s',
  material: 'Qalin zanglamaydigan po‘lat',
  lighting: 'Sanoat LED bloklari',
  indicators: 'Katta displey',
  safety: 'Qo‘shimcha yuk nazorati',
  features: [
    'Yirik hajm',
    'Og‘ir yuk uchun mos',
    'Mexanik boshqaruv imkoniyati',
    'Mustahkam shift va pol'
  ],
  panoramaUrl: 'https://pannellum.org/images/alma.jpg'
},
'model20': {
  title: 'K-20 AquaView',
  description: 'Suvsimon dizayndagi tinchlantiruvchi lift',
  capacity: '6 kishi',
  weight: '500 kg',
  dimensions: '1000 x 1300 mm',
  speed: '1.2 m/s',
  material: 'Yarim shaffof akril va alyuminiy',
  lighting: 'Ko‘k-yashil LED nur',
  indicators: 'Suv to‘lqini animatsiyasi bilan',
  safety: 'Tinchlantiruvchi xavfsizlik tizimi',
  features: [
    'Suvli effektlar',
    'Ichki akvarium (ixtiyoriy)',
    'Tinch ovozlar',
    'Havo namlagichi'
  ],
  panoramaUrl: 'https://pannellum.org/images/bma-1.jpg'
},
'model21': {
  title: 'K-21 MinimalPro',
  description: 'Juda sodda va professional ko‘rinishdagi lift',
  capacity: '4 kishi',
  weight: '320 kg',
  dimensions: '850 x 1100 mm',
  speed: '1.0 m/s',
  material: 'Oq metall panellar',
  lighting: 'LED chiziq',
  indicators: 'Oddiy displey',
  safety: 'Avtomatik eshik blokirovkasi',
  features: [
    'Minimalistik ko‘rinish',
    'Kichik joylar uchun mos',
    'Oson parvarish',
    'Kam energiya sarfi'
  ],
  panoramaUrl: 'https://pannellum.org/images/pano-fallback.jpg'
},
'model22': {
  title: 'K-22 RetroLift',
  description: 'Vintage dizaynli nostalgiya uslubidagi model',
  capacity: '5 kishi',
  weight: '400 kg',
  dimensions: '900 x 1150 mm',
  speed: '1.1 m/s',
  material: 'Bronza va yog‘och elementlar',
  lighting: 'Sariq rangli LED',
  indicators: 'Mexanik ko‘rsatkich',
  safety: 'Ikki darajali blokirovka',
  features: [
    'Retro uslub',
    'Bronza tugmalar',
    'Nostalgiya muhiti',
    'Moslashtirilgan audio signal'
  ],
  panoramaUrl: 'https://pannellum.org/images/jfk.jpg'
},
'model23': {
  title: 'K-23 AirLift',
  description: 'Engil va havo tuzilishli model',
  capacity: '6 kishi',
  weight: '450 kg',
  dimensions: '1000 x 1250 mm',
  speed: '1.5 m/s',
  material: 'Yengil alyuminiy va polikarbonat',
  lighting: 'Yumshoq oq LED',
  indicators: 'Sensorli panel',
  safety: 'Tezkor tormoz va eshik nazorati',
  features: [
    'Havoli dizayn',
    'Yengil struktura',
    'Kuchli shamollatish',
    'Tozalikni ushlab turuvchi qoplama'
  ],
  panoramaUrl: 'https://pannellum.org/images/ortler.jpg'
},
'model24': {
  title: 'K-24 CubeLine',
  description: 'Kvadrat shaklli zamonaviy lift kabinasi',
  capacity: '8 kishi',
  weight: '630 kg',
  dimensions: '1100 x 1400 mm',
  speed: '1.6 m/s',
  material: 'Mat qora po‘lat',
  lighting: 'LED chiziqlar bilan ramka',
  indicators: 'Raqamli displey',
  safety: 'To‘liq bloklash tizimi',
  features: [
    'Modern dizayn',
    'Ramkali yoritish',
    'Anti-vandal',
    'Sensorli tugmalar'
  ],
  panoramaUrl: 'https://pannellum.org/images/misery.jpg'
},
'model25': {
  title: 'K-25 SilentGo',
  description: 'Shovqinsiz texnologiyali lift',
  capacity: '7 kishi',
  weight: '500 kg',
  dimensions: '1050 x 1300 mm',
  speed: '1.4 m/s',
  material: 'Shovqinni yutuvchi kompozitlar',
  lighting: 'Past nurli LED',
  indicators: 'Displey va ovozli ogohlantirish',
  safety: 'Aqlli xavfsizlik sensorlari',
  features: [
    'Shovqinsiz yurish',
    'Yumshoq eshik ochilishi',
    'Kam energiya sarfi',
    'Akustik dizayn'
  ],
  panoramaUrl: 'https://pannellum.org/images/cerro-toco-0.jpg'
},
'model26': {
  title: 'K-26 GreenLift',
  description: 'Ekologik muvofiqlikka ega model',
  capacity: '6 kishi',
  weight: '450 kg',
  dimensions: '1000 x 1250 mm',
  speed: '1.2 m/s',
  material: 'Bioplastik va qayta ishlangan metall',
  lighting: 'Quyosh batareyali LED',
  indicators: 'Energiya iste’molini ko‘rsatuvchi panel',
  safety: 'Yuqori samarali xavfsizlik tizimi',
  features: [
    'Quyosh paneli bilan ishlaydi',
    'Ekologik materiallar',
    'Energiya nazorati',
    'Atrof-muhitga mos'
  ],
  panoramaUrl: 'https://pannellum.org/images/bma-1.jpg'
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