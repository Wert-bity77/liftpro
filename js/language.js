// language.js

// Sahifa yuklanganda ishlaydi
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
  
    // localStorage dan oldingi tanlangan tilni olish
    const savedLanguage = localStorage.getItem('language') || 'uz'; // Default: O'zbek tili
    if (languageSelect) {
      languageSelect.value = savedLanguage;
      applyLanguage(savedLanguage);
    }
  
    // Til o'zgartirilganda
    if (languageSelect) {
      languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        localStorage.setItem('language', selectedLanguage);
        applyLanguage(selectedLanguage);
        window.location.reload(); // Sahifani qayta yuklash
      });
    }
  });
  
  // Tilni qo'llash funksiyasi
  function applyLanguage(lang) {
    // Tarjimalar ob'ekti
    const translations = {
      uz: {
        // Umumiy
        home: "Bosh Sahifa",
        catalog: "Katalog",
        about: "Kompaniya Haqida",
        contact: "Bog'lanish",
        objects: "Obyektlar",
        footer_logo: "LIFT<span class='highlight'>PRO</span>",
        footer_description: "Zamonaviy va ishonchli lift yechimlari yetkazib beruvchi yetakchi kompaniya.",
        footer_quick_links: "Tezkor Havolalar",
        footer_contact: "Bog'lanish",
        footer_social: "Ijtimoiy Tarmoqlar",
        footer_address: "Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi, 12-uy",
        footer_phone: "+998 91 014 70 70",
        footer_email: "info@liftpro.uz",
        copyright: "© 2025 LIFTPRO. Barcha huquqlar himoyalangan.",
  
        // catalog.html
        catalog_title: "Lift Kabinalari Katalogi",
        filter_category: "Kategoriya:",
        filter_capacity: "Yuk ko'tarish quvvati:",
        filter_material: "Material:",
        filter_all_categories: "Barcha kategoriyalar",
        filter_premium: "Premium",
        filter_standard: "Standart",
        filter_economy: "Ekonom",
        filter_all_capacities: "Barcha quvvatlar",
        filter_small: "Kichik (320-450 kg)",
        filter_medium: "O'rta (450-630 kg)",
        filter_large: "Katta (630-1000 kg)",
        filter_extra: "Ekstra (1000+ kg)",
        filter_all_materials: "Barcha materiallar",
        filter_steel: "Zanglamaydigan po'lat",
        filter_glass: "Shisha",
        filter_wood: "Yog'och",
        filter_marble: "Marmar",
        filter_button: "Filtrlash",
        filter_input_placeholder: "Lift modelini yozing...",
        cta_title: "Katalogda kerakli modelni topa olmadingizmi?",
        cta_description: "Biz bilan bog'laning va bizning mutaxassislarimiz sizga yordam beradi",
        cta_button: "Bog'lanish",
  
        // contact.html
        contact_title: "Bog'lanish",
        breadcrumbs_home: "Bosh Sahifa",
        contact_address: "Manzil",
        contact_phone: "Telefon",
        contact_email: "Elektron pochta",
        contact_hours: "Ish vaqti",
        contact_address_text: "Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi, 12-uy",
        contact_phone1: "+998 91 014 70 70",
        contact_phone2: "+998 71 227 41 07",
        contact_email1: "info@liftpro.uz",
        contact_email2: "sales@liftpro.uz",
        contact_hours1: "Dushanba - Juma: 9:00 - 19:30",
        contact_hours2: "Shanba: 9:00 - 16:00",
        form_title: "So'rov yuborish",
        form_description: "Bizga xabar yuboring va mutaxassislarimiz siz bilan tez orada bog'lanishadi.",
        form_name: "Ism-familiya",
        form_company: "Kompaniya nomi",
        form_email: "Elektron pochta",
        form_phone: "Telefon raqami",
        form_subject: "Mavzu",
        form_message: "Xabar",
        form_agree: "Shaxsiy ma'lumotlarimni qayta ishlashga rozilik bildiraman",
        form_submit: "Yuborish",
        form_name_placeholder: "Ism va familiyangizni kiriting",
        form_company_placeholder: "Kompaniya nomini kiriting",
        form_email_placeholder: "Elektron pochta manzilingizni kiriting",
        form_phone_placeholder: "+998 XX XXX XX XX",
        form_subject_default: "Mavzuni tanlang",
        form_subject_order: "Buyurtma berish",
        form_subject_consultation: "Konsultatsiya olish",
        form_subject_service: "Texnik xizmat",
        form_subject_other: "Boshqa",
        form_message_placeholder: "Xabar matnini kiriting",
        faq_title: "Ko'p beriladigan savollar",
        faq_q1: "Lift o'rnatish qancha vaqt oladi?",
        faq_a1: "Lift o'rnatish muddati loyihaning murakkabligiga va lift turiga qarab 3 haftadan 3 oygacha davom etishi mumkin. Aniq muddatni mutaxassislarimiz ob'ektni ko'rib chiqqandan so'ng aytishadi.",
        faq_q2: "Liftlarni texnik xizmat ko'rsatish qanchalik tez-tez o'tkaziladi?",
        faq_a2: "Xalqaro standartlarga muvofiq, liftlar har oyda kamida bir marta texnik xizmat ko'rsatilishi kerak. Biz har bir mijoz uchun qulay texnik xizmat ko'rsatish rejasini taklif qilamiz.",
        faq_q3: "Lifting kafolatli muddati qancha?",
        faq_a3: "Barcha liftlarimizga standart 2 yillik kafolat beriladi. Bundan tashqari, uzoqroq muddatli kafolat beruvchi qo'shimcha xizmat paketlarini ham taklif qilamiz.",
        faq_q4: "Lift o'rnatish uchun qanday hujjatlar talab qilinadi?",
        faq_a4: "Lift o'rnatish uchun bino loyihasi, texnik talablar va tegishli ruxsatnomalar kerak bo'ladi. Mutaxassislarimiz barcha zarur hujjatlarni tayyorlashda yordam berishadi.",
        faq_q5: "Siz qanday to'lov usullarini qabul qilasiz?",
        faq_a5: "Biz turli xil to'lov usullarini qabul qilamiz, jumladan naqd pul, bank o'tkazmasi va korporativ mijozlar uchun bo'lib to'lash imkoniyati ham mavjud.",
        cta_contact_title: "Lift o'rnatish bo'yicha bepul konsultatsiya oling",
        cta_contact_description: "Mutaxassislarimiz sizning talablaringizga mos keladigan eng yaxshi yechimni topishda yordam beradi",
        cta_contact_button: "Qo'ng'iroq qilish",
        modal_success_title: "Xabaringiz yuborildi!",
        modal_success_description: "Xabaringiz muvaffaqiyatli yuborildi. Mutaxassislarimiz siz bilan tez orada bog'lanishadi.",
        modal_success_button: "OK",
  
        // about.html
        about_title: "Kompaniya Haqida",
        about_intro_title: "Schindler Haqida",
        about_intro_p1: "<strong>Schindler</strong> - 2010 yildan buyon O'zbekiston bozorida faoliyat yuritib kelayotgan liftlar ishlab chiqarish va o'rnatish bo'yicha yetakchi kompaniya. Biz mahalliy va xalqaro mijozlar uchun yuqori sifatli lift yechimlari va xizmatlarini taqdim etamiz.",
        about_intro_p2: "Bizning kompaniyamiz jahon standartlariga mos keladigan zamonaviy liftlarni ishlab chiqarish, o'rnatish va xizmat ko'rsatish bo'yicha to'liq xizmatlar paketini taqdim etadi. Ko'p yillik tajriba va malakali mutaxassislar jamoasi tufayli biz har qanday murakkablikdagi loyihalar bo'yicha optimal yechimlar taklif qila olamiz.",
        about_stat_experience: "yillik tajriba",
        about_stat_lifts: "o'rnatilgan liftlar",
        about_stat_models: "model turlari",
        about_stat_satisfaction: "mijozlar mamnuniyati",
        mission_title: "Bizning Missiyamiz",
        mission_text: "Mijozlarimiz uchun eng yuqori sifatli, ishonchli va xavfsiz lift yechimlarini taqdim etish orqali ularning binolaridagi vertikal transport tizimini takomillashtirish.",
        vision_title: "Bizning Ko'zimiz",
        vision_text: "O'zbekistonda lift sanoatida yetakchi o'rin egallash va Markaziy Osiyo mintaqasidagi eng yuqori sifatli lift yechimlari yetkazib beruvchiga aylanish.",
        values_title: "Bizning Qadriyatlarimiz",
        value_quality: "Sifat",
        value_quality_text: "Biz barcha mahsulotlarimiz va xizmatlarimizda eng yuqori sifatni kafolatlaymiz, chunki sifat bizning asosiy qadriyatimizdir.",
        value_safety: "Xavfsizlik",
        value_safety_text: "Xavfsizlik bizning ustuvor vazifamiz bo'lib, barcha liftlarimiz eng yuqori xavfsizlik standartlariga javob beradi.",
        value_trust: "Ishonch",
        value_trust_text: "Biz mijozlar bilan ishonchli munosabatlar o'rnatishga intilamiz va har doim o'z va'dalarimizni bajaramiz.",
        value_innovation: "Innovatsiya",
        value_innovation_text: "Biz doimiy ravishda yangilanib, zamonaviy texnologiyalar va innovatsion yechimlardan foydalanamiz.",
        team_title: "Bizning Jamoa",
        team_description: "Bizning eng katta boyligimiz - bu yuqori malakali va tajribali mutaxassislardan iborat jamoa. Bizning har bir xodimimiz o'z sohasining mutaxassisi hisoblanadi.",
        team_member1_name: "Aziz Karimov",
        team_member1_position: "Bosh Direktor",
        team_member2_name: "Malika Azizova",
        team_member2_position: "Bosh Muhandis",
        team_member3_name: "Sardor A'loyev",
        team_member3_position: "Santexnik",
        team_member4_name: "Bill Gates",
        team_member4_position: "Savdo Menejeri",
        history_title: "Kompaniya Tarixi",
        history_2010_title: "Kompaniya tashkil etilishi",
        history_2010_text: "Schindler kompaniyasi tashkil etilib, O'zbekiston bozorida liftlar bo'yicha xizmatlar ko'rsatishni boshladi.",
        history_2013_title: "Birinchi ishlab chiqarish sexi",
        history_2013_text: "Toshkentda birinchi ishlab chiqarish sexi ochildi va mahalliy lift qismlarini ishlab chiqarish boshlandi.",
        history_2015_title: "Xalqaro hamkorlikning boshlanishi",
        history_2015_text: "Yevropa va Osiyo ishlab chiqaruvchilari bilan hamkorlik o'rnatildi va zamonaviy texnologiyalar o'zlashtirildi.",
        history_2018_title: "Yangi zavod qurilishi",
        history_2018_text: "Toshkent viloyatida yangi zamonaviy lift ishlab chiqarish zavodi qurildi va ishga tushirildi.",
        history_2021_title: "ISO sertifikati olindi",
        history_2021_text: "Kompaniya ISO 9001:2015 sifat menejmenti tizimi sertifikatini qo'lga kiritdi.",
        history_2023_title: "Markaziy Osiyoda kengayish",
        history_2023_text: "Qo'shni davlatlarda vakolatxonalar ochilib, Markaziy Osiyo bozorida faoliyat boshlandi.",
        history_2025_title: "Bizning shaxsiy Saytimiz Yasaldi",
        history_2025_text: "Bizning saytni 10 yili tajribaga ega odam, abduvaliyev sirojiddin",
        partners_title: "Bizning Hamkorlar",
        partners_subtitle: "Biz bilan ishlayotgan 100+ ishonchli hamkorlar mavjud.",
        cta_team_title: "Bizning jamoaga qo'shiling",
        cta_team_description: "Agar siz o'z sohasida yuqori tajribaga ega bo'lgan mutaxassis bo'lsangiz, bizga rezyumengizni yuboring",
        cta_team_button: "Bog'lanish",
  
        // obyekt.html
        objects_title: "Bizning Obyektlar",
        objects_subtitle: "Schindler sifati bilan jihozlangan zamonaviy binolar",
        project1_title: "Toshkent Business Center",
        project1_description: "Ushbu obyektda Schindler liftlari o'rnatilgan. Yevropa sifati, zamonaviy dizayn va to'liq xavfsizlik bilan ta'minlangan tizim.",
        project1_specs_floors: "Qavatlar: 15",
        project1_specs_lifts: "Liftlar: 4 ta",
        project2_title: "Toshkent Mall",
        project2_description: "Schindler kompaniyasi liftlarni Yevropa sifatida va zamonaviy xavfsizlik standartlariga mos ravishda taqdim etadi. Piramit kompaniyasi bilan hamkorlikda amalga oshirilgan loyiha.",
        project2_specs_floors: "Qavatlar: 8",
        project2_specs_lifts: "Liftlar: 6 ta",
        project3_title: "Piramit Majmuasi",
        project3_description: "Siz ko'rayotgan ushbu majmuada Schindler kompaniyasi 2 yildan beri to'xtovsiz ishlamoqda. Bu yerda zamonaviy oddiy lift va Germaniya modelidagi liftlarni ko'rishingiz mumkin.",
        project3_specs_floors: "Qavatlar: 12",
        project3_specs_lifts: "Liftlar: 3 ta",
        project4_title: "Golden House",
        project4_description: "Bu obyekt Schindler liftlari bilan Golden House kompaniyasi hamkorligida amalga oshirilgan. Schindler ishonchli zamonaviy liftlarni o'rnatgan.",
        project4_specs_floors: "Qavatlar: 20",
        project4_specs_lifts: "Liftlar: 8 ta",
        project_status_completed: "Tugatilgan",
        project_status_in_progress: "Jarayonda",
        project_status_premium: "Premium",
        cta_objects_title: "Sizning loyihangiz uchun professional yechim?",
        cta_objects_description: "Biz bilan bog'laning va eng yaxshi taklifni oling",
        cta_objects_button: "Bog'lanish",
      },
      ru: {
        // Umumiy
        home: "Главная",
        catalog: "Каталог",
        about: "О компании",
        contact: "Контакты",
        objects: "Объекты",
        footer_logo: "LIFT<span class='highlight'>PRO</span>",
        footer_description: "Ведущая компания, поставляющая современные и надежные лифтовые решения.",
        footer_quick_links: "Быстрые ссылки",
        footer_contact: "Контакты",
        footer_social: "Социальные сети",
        footer_address: "г. Ташкент, Чиланзарский район, ул. Бунёдкор, 12",
        footer_phone: "+998 91 014 70 70",
        footer_email: "info@liftpro.uz",
        copyright: "© 2025 LIFTPRO. Все права защищены.",
  
        // catalog.html
        catalog_title: "Каталог лифтовых кабин",
        filter_category: "Категория:",
        filter_capacity: "Грузоподъемность:",
        filter_material: "Материал:",
        filter_all_categories: "Все категории",
        filter_premium: "Премиум",
        filter_standard: "Стандарт",
        filter_economy: "Эконом",
        filter_all_capacities: "Все грузоподъемности",
        filter_small: "Малый (320-450 кг)",
        filter_medium: "Средний (450-630 кг)",
        filter_large: "Большой (630-1000 кг)",
        filter_extra: "Экстра (1000+ кг)",
        filter_all_materials: "Все материалы",
        filter_steel: "Нержавеющая сталь",
        filter_glass: "Стекло",
        filter_wood: "Дерево",
        filter_marble: "Мрамор",
        filter_button: "Фильтровать",
        filter_input_placeholder: "Введите модель лифта...",
        cta_title: "Не нашли нужную модель в каталоге?",
        cta_description: "Свяжитесь с нами, и наши специалисты помогут вам",
        cta_button: "Связаться",
  
        // contact.html
        contact_title: "Контакты",
        breadcrumbs_home: "Главная",
        contact_address: "Адрес",
        contact_phone: "Телефон",
        contact_email: "Электронная почта",
        contact_hours: "Часы работы",
        contact_address_text: "г. Ташкент, Чиланзарский район, ул. Бунёдкор, 12",
        contact_phone1: "+998 91 014 70 70",
        contact_phone2: "+998 71 227 41 07",
        contact_email1: "info@liftpro.uz",
        contact_email2: "sales@liftpro.uz",
        contact_hours1: "Пн - Пт: 9:00 - 19:30",
        contact_hours2: "Сб: 9:00 - 16:00",
        form_title: "Отправить запрос",
        form_description: "Отправьте нам сообщение, и наши специалисты свяжутся с вами в ближайшее время.",
        form_name: "Имя и фамилия",
        form_company: "Название компании",
        form_email: "Электронная почта",
        form_phone: "Номер телефона",
        form_subject: "Тема",
        form_message: "Сообщение",
        form_agree: "Я согласен на обработку моих персональных данных",
        form_submit: "Отправить",
        form_name_placeholder: "Введите ваше имя и фамилию",
        form_company_placeholder: "Введите название компании",
        form_email_placeholder: "Введите ваш адрес электронной почты",
        form_phone_placeholder: "+998 XX XXX XX XX",
        form_subject_default: "Выберите тему",
        form_subject_order: "Заказать",
        form_subject_consultation: "Получить консультацию",
        form_subject_service: "Техническое обслуживание",
        form_subject_other: "Другое",
        form_message_placeholder: "Введите текст сообщения",
        faq_title: "Часто задаваемые вопросы",
        faq_q1: "Сколько времени занимает установка лифта?",
        faq_a1: "Срок установки лифта зависит от сложности проекта и типа лифта и может составлять от 3 недель до 3 месяцев. Точные сроки наши специалисты сообщат после осмотра объекта.",
        faq_q2: "Как часто проводится техническое обслуживание лифтов?",
        faq_a2: "Согласно международным стандартам, лифты должны обслуживаться не реже одного раза в месяц. Мы предлагаем удобные планы обслуживания для каждого клиента.",
        faq_q3: "Каков гарантийный срок на лифты?",
        faq_a3: "На все наши лифты предоставляется стандартная гарантия 2 года. Также мы предлагаем дополнительные пакеты услуг с более длительным гарантийным сроком.",
        faq_q4: "Какие документы нужны для установки лифта?",
        faq_a4: "Для установки лифта необходимы проект здания, технические требования и соответствующие разрешения. Наши специалисты помогут подготовить все необходимые документы.",
        faq_q5: "Какие способы оплаты вы принимаете?",
        faq_a5: "Мы принимаем различные способы оплаты, включая наличные, банковские переводы, а также возможность рассрочки для корпоративных клиентов.",
        cta_contact_title: "Получите бесплатную консультацию по установке лифта",
        cta_contact_description: "Наши специалисты помогут подобрать оптимальное решение для ваших требований",
        cta_contact_button: "Позвонить",
        modal_success_title: "Ваше сообщение отправлено!",
        modal_success_description: "Ваше сообщение успешно отправлено. Наши специалисты свяжутся с вами в ближайшее время.",
        modal_success_button: "OK",
  
        // about.html
        about_title: "О компании",
        about_intro_title: "О Schindler",
        about_intro_p1: "<strong>Schindler</strong> - ведущая компания по производству и установке лифтов, работающая на рынке Узбекистана с 2010 года. Мы предоставляем высококачественные лифтовые решения и услуги для местных и международных клиентов.",
        about_intro_p2: "Наша компания предлагает полный спектр услуг по производству, установке и обслуживанию современных лифтов, соответствующих мировым стандартам. Благодаря многолетнему опыту и команде квалифицированных специалистов мы можем предложить оптимальные решения для проектов любой сложности.",
        about_stat_experience: "лет опыта",
        about_stat_lifts: "установленных лифтов",
        about_stat_models: "типов моделей",
        about_stat_satisfaction: "удовлетворенности клиентов",
        mission_title: "Наша миссия",
        mission_text: "Предоставлять клиентам самые качественные, надежные и безопасные лифтовые решения, совершенствуя системы вертикального транспорта в их зданиях.",
        vision_title: "Наше видение",
        vision_text: "Занять лидирующую позицию в лифтовой индустрии Узбекистана и стать ведущим поставщиком высококачественных лифтовых решений в регионе Центральной Азии.",
        values_title: "Наши ценности",
        value_quality: "Качество",
        value_quality_text: "Мы гарантируем высочайшее качество всех наших продуктов и услуг, поскольку качество является нашей основной ценностью.",
        value_safety: "Безопасность",
        value_safety_text: "Безопасность является нашим приоритетом, и все наши лифты соответствуют самым высоким стандартам безопасности.",
        value_trust: "Доверие",
        value_trust_text: "Мы стремимся устанавливать доверительные отношения с клиентами и всегда выполняем свои обещания.",
        value_innovation: "Инновации",
        value_innovation_text: "Мы постоянно обновляемся, используя современные технологии и инновационные решения.",
        team_title: "Наша команда",
        team_description: "Наше самое большое богатство - это команда высококвалифицированных и опытных специалистов. Каждый наш сотрудник является экспертом в своей области.",
        team_member1_name: "Азиз Каримов",
        team_member1_position: "Генеральный директор",
        team_member2_name: "Малика Азизова",
        team_member2_position: "Главный инженер",
        team_member3_name: "Сардор Аълоев",
        team_member3_position: "Сантехник",
        team_member4_name: "Билл Гейтс",
        team_member4_position: "Менеджер по продажам",
        history_title: "История компании",
        history_2010_title: "Основание компании",
        history_2010_text: "Компания Schindler была основана и начала предоставлять услуги в сфере лифтов на рынке Узбекистана.",
        history_2013_title: "Первый производственный цех",
        history_2013_text: "В Ташкенте был открыт первый производственный цех, началось производство местных лифтовых компонентов.",
        history_2015_title: "Начало международного сотрудничества",
        history_2015_text: "Установлено сотрудничество с европейскими и азиатскими производителями, освоены современные технологии.",
        history_2018_title: "Строительство нового завода",
        history_2018_text: "В Ташкентской области построен и запущен новый современный завод по производству лифтов.",
        history_2021_title: "Получение сертификата ISO",
        history_2021_text: "Компания получила сертификат системы менеджмента качества ISO 9001:2015.",
        history_2023_title: "Расширение в Центральной Азии",
        history_2023_text: "Открыты представительства в соседних странах, начата деятельность на рынке Центральной Азии.",
        history_2025_title: "Создан наш персональный сайт",
        history_2025_text: "Наш сайт был создан человеком с 10-летним опытом, Абдувалиевым Сирожиддином.",
        partners_title: "Наши партнеры",
        partners_subtitle: "У нас более 100 надежных партнеров, сотрудничающих с нами.",
        cta_team_title: "Присоединяйтесь к нашей команде",
        cta_team_description: "Если вы являетесь высококвалифицированным специалистом в своей области, отправьте нам свое резюме",
        cta_team_button: "Связаться",
  
        // obyekt.html
        objects_title: "Наши объекты",
        objects_subtitle: "Современные здания, оснащенные качеством Schindler",
        project1_title: "Ташкентский бизнес-центр",
        project1_description: "На этом объекте установлены лифты Schindler. Европейское качество, современный дизайн и полная безопасность системы.",
        project1_specs_floors: "Этажи: 15",
        project1_specs_lifts: "Лифты: 4 шт.",
        project2_title: "Ташкентский молл",
        project2_description: "Компания Schindler предоставляет лифты европейского качества, соответствующие современным стандартам безопасности. Проект реализован в сотрудничестве с компанией Пирамит.",
        project2_specs_floors: "Этажи: 8",
        project2_specs_lifts: "Лифты: 6 шт.",
        project3_title: "Комплекс Пирамит",
        project3_description: "На этом комплексе компания Schindler работает бесперебойно уже 2 года. Здесь вы можете увидеть современные простые лифты и лифты немецкой модели.",
        project3_specs_floors: "Этажи: 12",
        project3_specs_lifts: "Лифты: 3 шт.",
        project4_title: "Golden House",
        project4_description: "Этот объект реализован с лифтами Schindler в сотрудничестве с компанией Golden House. Schindler установил надежные современные лифты.",
        project4_specs_floors: "Этажи: 20",
        project4_specs_lifts: "Лифты: 8 шт.",
        project_status_completed: "Завершено",
        project_status_in_progress: "В процессе",
        project_status_premium: "Премиум",
        cta_objects_title: "Профессиональное решение для вашего проекта?",
        cta_objects_description: "Свяжитесь с нами и получите лучшее предложение",
        cta_objects_button: "Связаться",
      },
      en: {
        // Umumiy
        home: "Home",
        catalog: "Catalog",
        about: "About Company",
        contact: "Contact",
        objects: "Objects",
        footer_logo: "LIFT<span class='highlight'>PRO</span>",
        footer_description: "A leading company delivering modern and reliable elevator solutions.",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact",
        footer_social: "Social Media",
        footer_address: "Tashkent city, Chilanzar district, Bunyodkor street, 12",
        footer_phone: "+998 91 014 70 70",
        footer_email: "info@liftpro.uz",
        copyright: "© 2025 LIFTPRO. All rights reserved.",
  
        // catalog.html
        catalog_title: "Elevator Cabins Catalog",
        filter_category: "Category:",
        filter_capacity: "Load Capacity:",
        filter_material: "Material:",
        filter_all_categories: "All Categories",
        filter_premium: "Premium",
        filter_standard: "Standard",
        filter_economy: "Economy",
        filter_all_capacities: "All Capacities",
        filter_small: "Small (320-450 kg)",
        filter_medium: "Medium (450-630 kg)",
        filter_large: "Large (630-1000 kg)",
        filter_extra: "Extra (1000+ kg)",
        filter_all_materials: "All Materials",
        filter_steel: "Stainless Steel",
        filter_glass: "Glass",
        filter_wood: "Wood",
        filter_marble: "Marble",
        filter_button: "Filter",
        filter_input_placeholder: "Enter elevator model...",
        cta_title: "Couldn’t find the desired model in the catalog?",
        cta_description: "Contact us, and our specialists will assist you",
        cta_button: "Contact",
  
        // contact.html
        contact_title: "Contact",
        breadcrumbs_home: "Home",
        contact_address: "Address",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_hours: "Working Hours",
        contact_address_text: "Tashkent city, Chilanzar district, Bunyodkor street, 12",
        contact_phone1: "+998 91 014 70 70",
        contact_phone2: "+998 71 227 41 07",
        contact_email1: "info@liftpro.uz",
        contact_email2: "sales@liftpro.uz",
        contact_hours1: "Mon - Fri: 9:00 - 19:30",
        contact_hours2: "Sat: 9:00 - 16:00",
        form_title: "Send a Request",
        form_description: "Send us a message, and our specialists will contact you soon.",
        form_name: "Full Name",
        form_company: "Company Name",
        form_email: "Email",
        form_phone: "Phone Number",
        form_subject: "Subject",
        form_message: "Message",
        form_agree: "I consent to the processing of my personal data",
        form_submit: "Send",
        form_name_placeholder: "Enter your full name",
        form_company_placeholder: "Enter company name",
        form_email_placeholder: "Enter your email address",
        form_phone_placeholder: "+998 XX XXX XX XX",
        form_subject_default: "Select a subject",
        form_subject_order: "Place an Order",
        form_subject_consultation: "Get a Consultation",
        form_subject_service: "Technical Service",
        form_subject_other: "Other",
        form_message_placeholder: "Enter your message",
        faq_title: "Frequently Asked Questions",
        faq_q1: "How long does it take to install an elevator?",
        faq_a1: "The installation period depends on the project complexity and elevator type, ranging from 3 weeks to 3 months. Our specialists will provide exact timelines after site inspection.",
        faq_q2: "How often is elevator maintenance performed?",
        faq_a2: "According to international standards, elevators must be maintained at least once a month. We offer convenient maintenance plans for each client.",
        faq_q3: "What is the warranty period for elevators?",
        faq_a3: "All our elevators come with a standard 2-year warranty. We also offer additional service packages with extended warranties.",
        faq_q4: "What documents are required for elevator installation?",
        faq_a4: "Building plans, technical requirements, and relevant permits are needed for elevator installation. Our specialists will assist in preparing all necessary documents.",
        faq_q5: "What payment methods do you accept?",
        faq_a5: "We accept various payment methods, including cash, bank transfers, and installment options for corporate clients.",
        cta_contact_title: "Get a Free Consultation for Elevator Installation",
        cta_contact_description: "Our specialists will help you find the best solution for your requirements",
        cta_contact_button: "Call",
        modal_success_title: "Your Message Has Been Sent!",
        modal_success_description: "Your message was successfully sent. Our specialists will contact you soon.",
        modal_success_button: "OK",
  
        // about.html
        about_title: "About Company",
        about_intro_title: "About Schindler",
        about_intro_p1: "<strong>Schindler</strong> is a leading company in elevator manufacturing and installation, operating in the Uzbekistan market since 2010. We provide high-quality elevator solutions and services for local and international clients.",
        about_intro_p2: "Our company offers a full range of services for the production, installation, and maintenance of modern elevators that meet global standards. Thanks to years of experience and a team of qualified specialists, we can provide optimal solutions for projects of any complexity.",
        about_stat_experience: "years of experience",
        about_stat_lifts: "installed elevators",
        about_stat_models: "model types",
        about_stat_satisfaction: "client satisfaction",
        mission_title: "Our Mission",
        mission_text: "To provide clients with the highest quality, reliable, and safe elevator solutions, enhancing vertical transportation systems in their buildings.",
        vision_title: "Our Vision",
        vision_text: "To become a leader in the elevator industry in Uzbekistan and the leading supplier of high-quality elevator solutions in the Central Asia region.",
        values_title: "Our Values",
        value_quality: "Quality",
        value_quality_text: "We guarantee the highest quality in all our products and services, as quality is our core value.",
        value_safety: "Safety",
        value_safety_text: "Safety is our priority, and all our elevators meet the highest safety standards.",
        value_trust: "Trust",
        value_trust_text: "We strive to build trusting relationships with clients and always fulfill our promises.",
        value_innovation: "Innovation",
        value_innovation_text: "We continuously evolve, utilizing modern technologies and innovative solutions.",
        team_title: "Our Team",
        team_description: "Our greatest asset is our team of highly qualified and experienced professionals. Each employee is an expert in their field.",
        team_member1_name: "Aziz Karimov",
        team_member1_position: "CEO",
        team_member2_name: "Malika Azizova",
        team_member2_position: "Chief Engineer",
        team_member3_name: "Sardor A'loyev",
        team_member3_position: "Plumber",
        team_member4_name: "Bill Gates",
        team_member4_position: "Sales Manager",
        history_title: "Company History",
        history_2010_title: "Company Foundation",
        history_2010_text: "Schindler was founded and began providing elevator services in the Uzbekistan market.",
        history_2013_title: "First Production Workshop",
        history_2013_text: "The first production workshop was opened in Tashkent, starting the production of local elevator components.",
        history_2015_title: "Start of International Cooperation",
        history_2015_text: "Cooperation with European and Asian manufacturers was established, and modern technologies were adopted.",
        history_2018_title: "New Factory Construction",
        history_2018_text: "A new modern elevator manufacturing factory was built and launched in Tashkent region.",
        history_2021_title: "ISO Certification Obtained",
        history_2021_text: "The company received the ISO 9001:2015 quality management system certification.",
        history_2023_title: "Expansion in Central Asia",
        history_2023_text: "Representative offices were opened in neighboring countries, and operations began in the Central Asian market.",
        history_2025_title: "Our Personal Website Was Created",
        history_2025_text: "Our website was created by a person with 10 years of experience, Sirojiddin Abduvaliyev.",
        partners_title: "Our Partners",
        partners_subtitle: "We have over 100 trusted partners working with us.",
        cta_team_title: "Join Our Team",
        cta_team_description: "If you are a highly experienced professional in your field, send us your resume",
        cta_team_button: "Contact",
  
        // obyekt.html
        objects_title: "Our Objects",
        objects_subtitle: "Modern buildings equipped with Schindler quality",
        project1_title: "Tashkent Business Center",
        project1_description: "Schindler elevators are installed in this object. European quality, modern design, and complete system safety.",
        project1_specs_floors: "Floors: 15",
        project1_specs_lifts: "Elevators: 4 units",
        project2_title: "Tashkent Mall",
        project2_description: "Schindler provides elevators of European quality, meeting modern safety standards. The project was implemented in collaboration with Piramit company.",
        project2_specs_floors: "Floors: 8",
        project2_specs_lifts: "Elevators: 6 units",
        project3_title: "Piramit Complex",
        project3_description: "Schindler has been operating seamlessly at this complex for 2 years. You can see modern standard elevators and German-model elevators here.",
        project3_specs_floors: "Floors: 12",
        project3_specs_lifts: "Elevators: 3 units",
        project4_title: "Golden House",
        project4_description: "This object was implemented with Schindler elevators in collaboration with Golden House company. Schindler installed reliable modern elevators.",
        project4_specs_floors: "Floors: 20",
        project4_specs_lifts: "Elevators: 8 units",
        project_status_completed: "Completed",
        project_status_in_progress: "In Progress",
        project_status_premium: "Premium",
        cta_objects_title: "Professional solution for your project?",
        cta_objects_description: "Contact us and get the best offer",
        cta_objects_button: "Contact",
      },
    };
  
    // HTML elementlarini yangilash
    // Umumiy navigatsiya
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 5) {
      navLinks[0].textContent = translations[lang].home;
      navLinks[1].textContent = translations[lang].catalog;
      navLinks[2].textContent = translations[lang].about;
      navLinks[3].textContent = translations[lang].contact;
      navLinks[4].textContent = translations[lang].objects;
    }
  
    // Footer
    const footerLogo = document.querySelector('.footer-logo .logo-text');
    if (footerLogo) footerLogo.innerHTML = translations[lang].footer_logo;
    const footerDescription = document.querySelector('.footer-description');
    if (footerDescription) footerDescription.textContent = translations[lang].footer_description;
    const footerQuickLinks = document.querySelector('.footer-title:nth-child(1)');
    if (footerQuickLinks) footerQuickLinks.textContent = translations[lang].footer_quick_links;
    const footerContact = document.querySelector('.footer-title:nth-child(2)');
    if (footerContact) footerContact.textContent = translations[lang].footer_contact;
    const footerSocial = document.querySelector('.footer-title:nth-child(3)');
    if (footerSocial) footerSocial.textContent = translations[lang].footer_social;
    const footerAddress = document.querySelector('.contact-info li:nth-child(1)');
    if (footerAddress) footerAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[lang].footer_address}`;
    const footerPhone = document.querySelector('.contact-info li:nth-child(2)');
    if (footerPhone) footerPhone.innerHTML = `<i class="fas fa-phone"></i> ${translations[lang].footer_phone}`;
    const footerEmail = document.querySelector('.contact-info li:nth-child(3)');
    if (footerEmail) footerEmail.innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang].footer_email}`;
    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.textContent = translations[lang].copyright;
  
    // catalog.html
    if (window.location.pathname.includes('catalog.html')) {
      document.title = translations[lang].catalog_title;
      const pageTitle = document.querySelector('.page-title');
      if (pageTitle) pageTitle.textContent = translations[lang].catalog_title;
      const filterCategoryLabel = document.querySelector('.filter-group:nth-child(1) .filter-label');
      if (filterCategoryLabel) filterCategoryLabel.textContent = translations[lang].filter_category;
      const filterCapacityLabel = document.querySelector('.filter-group:nth-child(2) .filter-label');
      if (filterCapacityLabel) filterCapacityLabel.textContent = translations[lang].filter_capacity;
      const filterMaterialLabel = document.querySelector('.filter-group:nth-child(3) .filter-label');
      if (filterMaterialLabel) filterMaterialLabel.textContent = translations[lang].filter_material;
      const categoryFilter = document.getElementById('category-filter');
      if (categoryFilter) {
        categoryFilter.options[0].textContent = translations[lang].filter_all_categories;
        categoryFilter.options[1].textContent = translations[lang].filter_premium;
        categoryFilter.options[2].textContent = translations[lang].filter_standard;
        categoryFilter.options[3].textContent = translations[lang].filter_economy;
      }
      const capacityFilter = document.getElementById('capacity-filter');
      if (capacityFilter) {
        capacityFilter.options[0].textContent = translations[lang].filter_all_capacities;
        capacityFilter.options[1].textContent = translations[lang].filter_small;
        capacityFilter.options[2].textContent = translations[lang].filter_medium;
        capacityFilter.options[3].textContent = translations[lang].filter_large;
        capacityFilter.options[4].textContent = translations[lang].filter_extra;
      }
      const materialFilter = document.getElementById('material-filter');
      if (materialFilter) {
        materialFilter.options[0].textContent = translations[lang].filter_all_materials;
        materialFilter.options[1].textContent = translations[lang].filter_steel;
        materialFilter.options[2].textContent = translations[lang].filter_glass;
        materialFilter.options[3].textContent = translations[lang].filter_wood;
        materialFilter.options[4].textContent = translations[lang].filter_marble;
      }
      const filterButton = document.querySelector('.filter-button');
      if (filterButton) filterButton.innerHTML = `<i class="fas fa-filter"></i> ${translations[lang].filter_button}`;
      const filterInput = document.getElementById('filter-input');
      if (filterInput) filterInput.placeholder = translations[lang].filter_input_placeholder;
      const ctaTitle = document.querySelector('.cta-title');
      if (ctaTitle) ctaTitle.textContent = translations[lang].cta_title;
      const ctaDescription = document.querySelector('.cta-description');
      if (ctaDescription) ctaDescription.textContent = translations[lang].cta_description;
      const ctaButton = document.querySelector('.cta .btn-primary');
      if (ctaButton) ctaButton.textContent = translations[lang].cta_button;
    }
  
    // contact.html
    if (window.location.pathname.includes('contact.html')) {
      document.title = translations[lang].contact_title;
      const pageTitle = document.querySelector('.page-title');
      if (pageTitle) pageTitle.textContent = translations[lang].contact_title;
      const breadcrumbsHome = document.querySelector('.breadcrumbs a');
      if (breadcrumbsHome) breadcrumbsHome.textContent = translations[lang].breadcrumbs_home;
      const contactAddressTitle = document.querySelector('.contact-card:nth-child(1) .contact-title');
      if (contactAddressTitle) contactAddressTitle.textContent = translations[lang].contact_address;
      const contactPhoneTitle = document.querySelector('.contact-card:nth-child(2) .contact-title');
      if (contactPhoneTitle) contactPhoneTitle.textContent = translations[lang].contact_phone;
      const contactEmailTitle = document.querySelector('.contact-card:nth-child(3) .contact-title');
      if (contactEmailTitle) contactEmailTitle.textContent = translations[lang].contact_email;
      const contactHoursTitle = document.querySelector('.contact-card:nth-child(4) .contact-title');
      if (contactHoursTitle) contactHoursTitle.textContent = translations[lang].contact_hours;
      const contactAddressText = document.querySelector('.contact-card:nth-child(1) .contact-text');
      if (contactAddressText) contactAddressText.textContent = translations[lang].contact_address_text;
      const contactPhone1 = document.querySelector('.contact-card:nth-child(2) .contact-text:nth-child(1)');
      if (contactPhone1) contactPhone1.textContent = translations[lang].contact_phone1;
      const contactPhone2 = document.querySelector('.contact-card:nth-child(2) .contact-text:nth-child(2)');
      if (contactPhone2) contactPhone2.textContent = translations[lang].contact_phone2;
      const contactEmail1 = document.querySelector('.contact-card:nth-child(3) .contact-text:nth-child(1)');
      if (contactEmail1) contactEmail1.textContent = translations[lang].contact_email1;
      const contactEmail2 = document.querySelector('.contact-card:nth-child(3) .contact-text:nth-child(2)');
      if (contactEmail2) contactEmail2.textContent = translations[lang].contact_email2;
      const contactHours1 = document.querySelector('.contact-card:nth-child(4) .contact-text:nth-child(1)');
      if (contactHours1) contactHours1.textContent = translations[lang].contact_hours1;
      const contactHours2 = document.querySelector('.contact-card:nth-child(4) .contact-text:nth-child(2)');
      if (contactHours2) contactHours2.textContent = translations[lang].contact_hours2;
      const formTitle = document.querySelector('.form-side .section-title');
      if (formTitle) formTitle.textContent = translations[lang].form_title;
      const formDescription = document.querySelector('.form-description');
      if (formDescription) formDescription.textContent = translations[lang].form_description;
      const formNameLabel = document.querySelector('label[for="name"]');
      if (formNameLabel) formNameLabel.innerHTML = `${translations[lang].form_name} <span class="required">*</span>`;
      const formCompanyLabel = document.querySelector('label[for="company"]');
      if (formCompanyLabel) formCompanyLabel.textContent = translations[lang].form_company;
      const formEmailLabel = document.querySelector('label[for="email"]');
      if (formEmailLabel) formEmailLabel.innerHTML = `${translations[lang].form_email} <span class="required">*</span>`;
      const formPhoneLabel = document.querySelector('label[for="phone"]');
      if (formPhoneLabel) formPhoneLabel.innerHTML = `${translations[lang].form_phone} <span class="required">*</span>`;
      const formSubjectLabel = document.querySelector('label[for="subject"]');
      if (formSubjectLabel) formSubjectLabel.innerHTML = `${translations[lang].form_subject} <span class="required">*</span>`;
      const formMessageLabel = document.querySelector('label[for="message"]');
      if (formMessageLabel) formMessageLabel.innerHTML = `${translations[lang].form_message} <span class="required">*</span>`;
      const formAgreeLabel = document.querySelector('label[for="agree"]');
      if (formAgreeLabel) formAgreeLabel.textContent = translations[lang].form_agree;
      const formSubmitButton = document.querySelector('.btn-submit');
      if (formSubmitButton) formSubmitButton.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[lang].form_submit}`;
      const formNameInput = document.getElementById('name');
      if (formNameInput) formNameInput.placeholder = translations[lang].form_name_placeholder;
      const formCompanyInput = document.getElementById('company');
      if (formCompanyInput) formCompanyInput.placeholder = translations[lang].form_company_placeholder;
      const formEmailInput = document.getElementById('email');
      if (formEmailInput) formEmailInput.placeholder = translations[lang].form_email_placeholder;
      const formPhoneInput = document.getElementById('phone');
      if (formPhoneInput) formPhoneInput.placeholder = translations[lang].form_phone_placeholder;
      const formSubjectSelect = document.getElementById('subject');
      if (formSubjectSelect) {
        formSubjectSelect.options[0].textContent = translations[lang].form_subject_default;
        formSubjectSelect.options[1].textContent = translations[lang].form_subject_order;
        formSubjectSelect.options[2].textContent = translations[lang].form_subject_consultation;
        formSubjectSelect.options[3].textContent = translations[lang].form_subject_service;
        formSubjectSelect.options[4].textContent = translations[lang].form_subject_other;
      }
      const formMessageTextarea = document.getElementById('message');
      if (formMessageTextarea) formMessageTextarea.placeholder = translations[lang].form_message_placeholder;
      const faqTitle = document.querySelector('.faq-section .section-title');
      if (faqTitle) faqTitle.textContent = translations[lang].faq_title;
      const faqQuestions = document.querySelectorAll('.accordion-header h3');
      const faqAnswers = document.querySelectorAll('.accordion-content p');
      if (faqQuestions.length >= 5 && faqAnswers.length >= 5) {
        faqQuestions[0].textContent = translations[lang].faq_q1;
        faqAnswers[0].textContent = translations[lang].faq_a1;
        faqQuestions[1].textContent = translations[lang].faq_q2;
        faqAnswers[1].textContent = translations[lang].faq_a2;
        faqQuestions[2].textContent = translations[lang].faq_q3;
        faqAnswers[2].textContent = translations[lang].faq_a3;
        faqQuestions[3].textContent = translations[lang].faq_q4;
        faqAnswers[3].textContent = translations[lang].faq_a4;
        faqQuestions[4].textContent = translations[lang].faq_q5;
        faqAnswers[4].textContent = translations[lang].faq_a5;
      }
      const ctaContactTitle = document.querySelector('.cta .cta-title');
      if (ctaContactTitle) ctaContactTitle.textContent = translations[lang].cta_contact_title;
      const ctaContactDescription = document.querySelector('.cta .cta-description');
      if (ctaContactDescription) ctaContactDescription.textContent = translations[lang].cta_contact_description;
      const ctaContactButton = document.querySelector('.cta .btn-primary');
      if (ctaContactButton) ctaContactButton.innerHTML = `<i class="fas fa-phone"></i> ${translations[lang].cta_contact_button}`;
      const modalSuccessTitle = document.querySelector('#success-modal .modal-title');
      if (modalSuccessTitle) modalSuccessTitle.textContent = translations[lang].modal_success_title;
      const modalSuccessDescription = document.querySelector('#success-modal .modal-description');
      if (modalSuccessDescription) modalSuccessDescription.textContent = translations[lang].modal_success_description;
      const modalSuccessButton = document.querySelector('.close-success');
      if (modalSuccessButton) modalSuccessButton.textContent = translations[lang].modal_success_button;
    }
  
    // about.html
    if (window.location.pathname.includes('about.html')) {
      document.title = translations[lang].about_title;
      const pageTitle = document.querySelector('.page-title');
      if (pageTitle) pageTitle.textContent = translations[lang].about_title;
      const breadcrumbsHome = document.querySelector('.breadcrumbs a');
      if (breadcrumbsHome) breadcrumbsHome.textContent = translations[lang].breadcrumbs_home;
      const aboutIntroTitle = document.querySelector('.about-intro .section-title');
      if (aboutIntroTitle) aboutIntroTitle.textContent = translations[lang].about_intro_title;
      const aboutIntroP1 = document.querySelector('.about-paragraph:nth-child(2)');
      if (aboutIntroP1) aboutIntroP1.innerHTML = translations[lang].about_intro_p1;
      const aboutIntroP2 = document.querySelector('.about-paragraph:nth-child(3)');
      if (aboutIntroP2) aboutIntroP2.textContent = translations[lang].about_intro_p2;
      const statLabels = document.querySelectorAll('.stat-label');
      if (statLabels.length >= 4) {
        statLabels[0].textContent = translations[lang].about_stat_experience;
        statLabels[1].textContent = translations[lang].about_stat_lifts;
        statLabels[2].textContent = translations[lang].about_stat_models;
        statLabels[3].textContent = translations[lang].about_stat_satisfaction;
      }
      const missionTitle = document.querySelector('.mission-box .box-title');
      if (missionTitle) missionTitle.textContent = translations[lang].mission_title;
      const missionText = document.querySelector('.mission-box .box-text');
      if (missionText) missionText.textContent = translations[lang].mission_text;
      const visionTitle = document.querySelector('.vision-box .box-title');
      if (visionTitle) visionTitle.textContent = translations[lang].vision_title;
      const visionText = document.querySelector('.vision-box .box-text');
      if (visionText) visionText.textContent = translations[lang].vision_text;
      const valuesTitle = document.querySelector('.company-values .section-title');
      if (valuesTitle) valuesTitle.textContent = translations[lang].values_title;
      const valueTitles = document.querySelectorAll('.value-title');
      const valueDescriptions = document.querySelectorAll('.value-description');
      if (valueTitles.length >= 4 && valueDescriptions.length >= 4) {
        valueTitles[0].textContent = translations[lang].value_quality;
        valueDescriptions[0].textContent = translations[lang].value_quality_text;
        valueTitles[1].textContent = translations[lang].value_safety;
        valueDescriptions[1].textContent = translations[lang].value_safety_text;
        valueTitles[2].textContent = translations[lang].value_trust;
        valueDescriptions[2].textContent = translations[lang].value_trust_text;
        valueTitles[3].textContent = translations[lang].value_innovation;
        valueDescriptions[3].textContent = translations[lang].value_innovation_text;
      }
      const teamTitle = document.querySelector('.team .section-title');
      if (teamTitle) teamTitle.textContent = translations[lang].team_title;
      const teamDescription = document.querySelector('.team .section-description');
      if (teamDescription) teamDescription.textContent = translations[lang].team_description;
      const teamMembers = document.querySelectorAll('.member-name');
      const teamPositions = document.querySelectorAll('.member-position');
      if (teamMembers.length >= 4 && teamPositions.length >= 4) {
        teamMembers[0].textContent = translations[lang].team_member1_name;
        teamPositions[0].textContent = translations[lang].team_member1_position;
        teamMembers[1].textContent = translations[lang].team_member2_name;
        teamPositions[1].textContent = translations[lang].team_member2_position;
        teamMembers[2].textContent = translations[lang].team_member3_name;
        teamPositions[2].textContent = translations[lang].team_member3_position;
        teamMembers[3].textContent = translations[lang].team_member4_name;
        teamPositions[3].textContent = translations[lang].team_member4_position;
      }
      const historyTitle = document.querySelector('.timeline .section-title');
      if (historyTitle) historyTitle.textContent = translations[lang].history_title;
      const historyItems = document.querySelectorAll('.timeline-content h3');
      const historyTexts = document.querySelectorAll('.timeline-content p');
      if (historyItems.length >= 7 && historyTexts.length >= 7) {
        historyItems[0].textContent = translations[lang].history_2010_title;
        historyTexts[0].textContent = translations[lang].history_2010_text;
        historyItems[1].textContent = translations[lang].history_2013_title;
        historyTexts[1].textContent = translations[lang].history_2013_text;
        historyItems[2].textContent = translations[lang].history_2015_title;
        historyTexts[2].textContent = translations[lang].history_2015_text;
        historyItems[3].textContent = translations[lang].history_2018_title;
        historyTexts[3].textContent = translations[lang].history_2018_text;
        historyItems[4].textContent = translations[lang].history_2021_title;
        historyTexts[4].textContent = translations[lang].history_2021_text;
        historyItems[5].textContent = translations[lang].history_2023_title;
        historyTexts[5].textContent = translations[lang].history_2023_text;
        historyItems[6].textContent = translations[lang].history_2025_title;
        historyTexts[6].textContent = translations[lang].history_2025_text;
      }
      const partnersTitle = document.querySelector('.clients .section-title');
      if (partnersTitle) partnersTitle.textContent = translations[lang].partners_title;
      const partnersSubtitle = document.querySelector('.clients .section-subtitle');
      if (partnersSubtitle) partnersSubtitle.textContent = translations[lang].partners_subtitle;
      const ctaTeamTitle = document.querySelector('.cta .cta-title');
      if (ctaTeamTitle) ctaTeamTitle.textContent = translations[lang].cta_team_title;
      const ctaTeamDescription = document.querySelector('.cta .cta-description');
      if (ctaTeamDescription) ctaTeamDescription.textContent = translations[lang].cta_team_description;
      const ctaTeamButton = document.querySelector('.cta .btn-primary');
      if (ctaTeamButton) ctaTeamButton.textContent = translations[lang].cta_team_button;
    }
  
    // obyekt.html
    if (window.location.pathname.includes('obyekt.html')) {
      document.title = translations[lang].objects_title;
      const pageTitle = document.querySelector('.page-title');
      if (pageTitle) pageTitle.textContent = translations[lang].objects_title;
      const pageSubtitle = document.querySelector('.page-subtitle');
      if (pageSubtitle) pageSubtitle.textContent = translations[lang].objects_subtitle;
      const projectTitles = document.querySelectorAll('.obyekt-title');
      const projectDescriptions = document.querySelectorAll('.obyekt-description');
      const projectBadges = document.querySelectorAll('.project-badge');
      const projectStats = document.querySelectorAll('.project-stats .stat-item .ka');
      const showDetailsButtons = document.querySelectorAll('.show-details');
      if (projectTitles.length >= 4 && projectDescriptions.length >= 4 && projectBadges.length >= 4 && projectStats.length >= 8 && showDetailsButtons.length >= 4) {
        projectTitles[0].textContent = translations[lang].project1_title;
        projectDescriptions[0].textContent = translations[lang].project1_description;
        projectStats[0].textContent = translations[lang].project1_specs_floors.split(': ')[1];
        projectStats[1].textContent = translations[lang].project1_specs_lifts.split(': ')[1];
        showDetailsButtons[0].setAttribute('data-title', translations[lang].project1_title);
        showDetailsButtons[0].setAttribute('data-description', translations[lang].project1_description);
        showDetailsButtons[0].setAttribute('data-specs', `<strong>${translations[lang].project1_specs_floors.split(':')[0]}:</strong> ${translations[lang].project1_specs_floors.split(': ')[1]}<br><strong>${translations[lang].project1_specs_lifts.split(':')[0]}:</strong> ${translations[lang].project1_specs_lifts.split(': ')[1]}`);
  
        projectTitles[1].textContent = translations[lang].project2_title;
        projectDescriptions[1].textContent = translations[lang].project2_description;
        projectStats[2].textContent = translations[lang].project2_specs_floors.split(': ')[1];
        projectStats[3].textContent = translations[lang].project2_specs_lifts.split(': ')[1];
        showDetailsButtons[1].setAttribute('data-title', translations[lang].project2_title);
        showDetailsButtons[1].setAttribute('data-description', translations[lang].project2_description);
        showDetailsButtons[1].setAttribute('data-specs', `<strong>${translations[lang].project2_specs_floors.split(':')[0]}:</strong> ${translations[lang].project2_specs_floors.split(': ')[1]}<br><strong>${translations[lang].project2_specs_lifts.split(':')[0]}:</strong> ${translations[lang].project2_specs_lifts.split(': ')[1]}`);
  
        projectTitles[2].textContent = translations[lang].project3_title;
        projectDescriptions[2].textContent = translations[lang].project3_description;
        projectStats[4].textContent = translations[lang].project3_specs_floors;
        projectStats[5].textContent = translations[lang].project3_specs_lifts;
        showDetailsButtons[2].setAttribute('data-title', translations[lang].project3_title);
        showDetailsButtons[2].setAttribute('data-description', translations[lang].project3_description);
        showDetailsButtons[2].setAttribute('data-specs', `<strong>${translations[lang].project3_specs_floors.split(':')[0]}:</strong> ${translations[lang].project3_specs_floors.split(': ')[1]}<br><strong>${translations[lang].project3_specs_lifts.split(':')[0]}:</strong> ${translations[lang].project3_specs_lifts.split(': ')[1]}`);
  
        projectTitles[3].textContent = translations[lang].project4_title;
        projectDescriptions[3].textContent = translations[lang].project4_description;
        projectStats[6].textContent = translations[lang].project4_specs_floors.split(': ')[1];
        projectStats[7].textContent = translations[lang].project4_specs_lifts.split(': ')[1];
        showDetailsButtons[3].setAttribute('data-title', translations[lang].project4_title);
        showDetailsButtons[3].setAttribute('data-description', translations[lang].project4_description);
        showDetailsButtons[3].setAttribute('data-specs', `<strong>${translations[lang].project4_specs_floors.split(':')[0]}:</strong> ${translations[lang].project4_specs_floors.split(': ')[1]}<br><strong>${translations[lang].project4_specs_lifts.split(':')[0]}:</strong> ${translations[lang].project4_specs_lifts.split(': ')[1]}`);
  
        projectBadges[0].textContent = translations[lang].project_status_completed;
        projectBadges[1].textContent = translations[lang].project_status_in_progress;
        projectBadges[2].textContent = translations[lang].project_status_completed;
        projectBadges[3].textContent = translations[lang].project_status_premium;
      }
      const showDetailsButtonText = document.querySelectorAll('.show-details');
      showDetailsButtonText.forEach(btn => {
        btn.innerHTML = `<i class="fas fa-info-circle"></i> ${translations[lang].details_button || 'Details'}`;
      });
      const ctaObjectsTitle = document.querySelector('.cta-content h2');
      if (ctaObjectsTitle) ctaObjectsTitle.textContent = translations[lang].cta_objects_title;
      const ctaObjectsDescription = document.querySelector('.cta-content p');
      if (ctaObjectsDescription) ctaObjectsDescription.textContent = translations[lang].cta_objects_description;
      const ctaObjectsButton = document.querySelector('.cta-content .btn-primary');
      if (ctaObjectsButton) ctaObjectsButton.textContent = translations[lang].cta_objects_button;
    }
  }