// Elevator data API
const elevators = {
    model1: {
      id: 'model1',
      title: 'K-01 Premium',
      description: 'Qora marmar panelli premium lift kabinasi',
      image: 'img/Schindler 5500 SAO - Dusk Grey.jpg',
      capacity: '8 kishi',
      weight: '630 kg',
      dimensions: '1100 x 1400 mm',
      speed: '1.6 m/s',
      material: 'Qora marmar va zanglamaydigan po`lat',
      lighting: 'LED chiroqlar',
      features: [
        'Ovoz xabarlari',
        'Havoni tozalash tizimi',
        'Wi-Fi ulanish imkoniyati',
        'Energiya tejash rejimi'
      ],
      panorama: 'img/Schindler 5500 SAO - Dusk Grey.jpg',
      category: 'premium'
    },
    model2: {
      id: 'model2',
      title: 'K-02 Modern',
      description: 'Metall panelli zamonaviy lift kabinasi',
      image: 'img/Schindler 5500 SAO - Mercury Brushed.jpg',
      capacity: '6 kishi',
      weight: '450 kg',
      dimensions: '1000 x 1250 mm',
      speed: '1.2 m/s',
      material: 'Brushed zanglamaydigan po`lat',
      lighting: 'Chiziqli LED panellar',
      features: [
        'Ovoz xabarlari',
        'Avtomatik havo almashtirish',
        'Energiya tejash rejimi'
      ],
      panorama: 'img/Schindler 5500 SAO - Mercury Brushed.jpg',
      category: 'standard'
    },
    model3: {
      id: 'model3',
      title: 'K-03 Klassik',
      description: 'Klassik dizayndagi lift kabinasi',
      image: 'img/Schindler 5500 SAO - Navona Brushed.jpg',
      capacity: '6 kishi',
      weight: '450 kg',
      dimensions: '1000 x 1250 mm',
      speed: '1.0 m/s',
      material: 'Yog`och va shisha panellar',
      lighting: 'Klassik LED chiroqlar',
      features: [
        'Ovoz xabarlari',
        'Klassik dizayn',
        'Energiya tejash rejimi'
      ],
      panorama: 'img/Schindler 5500 SAO - Navona Brushed.jpg',
      category: 'standard'
    },
    model4: {
      id: 'model4',
      title: 'K-04 Panorama',
      description: 'Panoramali shisha lift kabinasi',
      image: 'img/Schindler 5500 SAO + SCG - Glacier Grey Glass.jpg',
      capacity: '10 kishi',
      weight: '800 kg',
      dimensions: '1200 x 1500 mm',
      speed: '1.8 m/s',
      material: 'Shisha va zanglamaydigan po`lat',
      lighting: 'LED chiroq panellari',
      features: [
        'Panoramali ko`rinish',
        'Havoni tozalash tizimi',
        'Wi-Fi ulanish imkoniyati'
      ],
      panorama: 'img/Schindler 5500 SAO + SCG - Glacier Grey Glass.jpg',
      category: 'premium'
    },
    model5: {
      id: 'model5',
      title: 'K-05 Ekonom',
      description: 'Iqtisodiy sinfga mansub lift kabinasi',
      image: 'img/Schindler 3000 + 5000 MR AP (001) - Pearl White + Clove Grey.jpg',
      capacity: '4 kishi',
      weight: '320 kg',
      dimensions: '900 x 1100 mm',
      speed: '0.8 m/s',
      material: 'Standart metall panellar',
      lighting: 'Standart LED chiroqlar',
      features: [
        'Ovoz xabarlari',
        'Energiya tejash rejimi',
        'Ishonchli konstruktsiya'
      ],
      panorama: 'img/Schindler 3000 + 5000 MR AP (001) - Pearl White + Clove Grey.jpg',
      category: 'economy'
    },
    model6: {
      id: 'model6',
      title: 'K-06 Elegance',
      description: 'Yog`och panelli elegent lift kabinasi',
      image: 'img/Schindler 3000 + 5000 MR AP (002) - Penthouse Wood.jpg',
      capacity: '8 kishi',
      weight: '630 kg',
      dimensions: '1100 x 1400 mm',
      speed: '1.4 m/s',
      material: 'Yuqori sifatli yog`och panellar',
      lighting: 'Dekorativ LED chiroqlar',
      features: [
        'Yuqori sifatli yog`och qoplamalar',
        'Dekorativ yoritish',
        'Wi-Fi ulanish imkoniyati'
      ],
      panorama: 'img/Schindler 3000 + 5000 MR AP (002) - Penthouse Wood.jpg',
      category: 'standard'
    }
  };
  
  // Get all elevators
  export function getAllElevators() {
    return Object.values(elevators);
  }
  
  // Get elevator by ID
  export function getElevatorById(id) {
    return elevators[id];
  }
  
  // Filter elevators by category
  export function filterElevatorsByCategory(category) {
    if (category === 'all') return getAllElevators();
    return Object.values(elevators).filter(elevator => elevator.category === category);
  }
  
  // Generate QR code URL for elevator
  export function generateQRCodeUrl(elevatorId) {
    const baseUrl = window.location.origin;
    return `${baseUrl}/view-360.html?model=${elevatorId}`;
  }