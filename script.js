// Global state management
const AppState = {
    currentLanguage: 'en',
    currentTheme: 'light',
    currentCurrency: 'USD',
    userLocation: null,
    chatHistory: [],
    isLoading: true,
    isInitialized: false
};

// Currency conversion rates with real pricing for SAR, EGP, and USD
const CURRENCY_RATES = {
    SAR: { symbol: 'ر.س', rate: 1 },
    EGP: { symbol: 'ج.م', rate: 1 },
    USD: { symbol: '$', rate: 1 }
};

// Real pricing from document - separated by currency
const SERVICE_PRICING = {
    SAR: {
        'graphic-design': { min: 50, max: 500 },
        'canva-pro': { 
            month: 2.99, 
            year: 6.99, 
            threeyears: 9.99, 
            lifetime: 14.99,
            panel: 100
        },
        'whatsapp-sender': {
            starter: 30,      // 8000 messages
            professional: 60, // 25000 messages
            enterprise: 120,  // 60000 messages
            monthly: 30,      // Monthly activation
            yearly: 60,       // Yearly activation
            lifetime: 150,    // Lifetime activation
            keys: 200,        // Key creation method
            session: 10       // Private session 60 min
        }
    },
    EGP: {
        'graphic-design': { min: 100, max: 1000 },
        'canva-pro': { 
            month: 30, 
            year: 80, 
            threeyears: 120, 
            lifetime: 150,
            panel: 1300
        },
        'whatsapp-sender': {
            starter: 350,     // 8000 messages
            professional: 650, // 25000 messages
            enterprise: 1200, // 60000 messages
            monthly: 300,     // Monthly activation
            yearly: 700,      // Yearly activation
            lifetime: 1500,   // Lifetime activation
            keys: 2000,       // Key creation method
            session: 100      // Private session 60 min
        }
    },
    USD: {
        'graphic-design': { min: 50, max: 500 },
        'canva-pro': { 
            month: 0.8, 
            year: 1.9, 
            threeyears: 2.7, 
            lifetime: 4,
            panel: 27
        },
        'whatsapp-sender': {
            starter: 8,      // 8000 messages
            professional: 16, // 25000 messages
            enterprise: 32,  // 60000 messages
            monthly: 8,      // Monthly activation
            yearly: 16,      // Yearly activation
            lifetime: 40,    // Lifetime activation
            keys: 53,        // Key creation method
            session: 3       // Private session 60 min
        }
    }
};

// Language translations
const TRANSLATIONS = {
    en: {
        // Navigation
        'Services': 'Services',
        'Pricing': 'Pricing',
        'Contact': 'Contact',

        // Hero Section
        'Professional Services That Boost Your Business': 'Professional Services That Boost Your Business',
        'Get premium graphic design, Canva Pro access, WhatsApp automation, and more with our comprehensive service package.': 'Get premium graphic design, Canva Pro access, WhatsApp automation, and more with our comprehensive service package.',
        'Explore Services': 'Explore Services',

        // Services
        'Our Services': 'Our Services',
        'Graphic Design': 'Graphic Design',
        'Professional graphic design services including logos, branding, social media posts, and marketing materials.': 'Professional graphic design services including logos, branding, social media posts, and marketing materials.',
        'Canva Pro': 'Canva Pro',
        'Get access to Canva Pro with premium templates, stock photos, and advanced design tools for your creative projects.': 'Get access to Canva Pro with premium templates, stock photos, and advanced design tools for your creative projects.',
        'WhatsApp Sender': 'WhatsApp Sender',
        'Automated WhatsApp messaging solutions for marketing campaigns, customer support, and bulk messaging services.': 'Automated WhatsApp messaging solutions for marketing campaigns, customer support, and bulk messaging services.',
        'Designer Library': 'Designer Library',
        'Comprehensive library of design resources, templates, fonts, and creative assets for professional designers.': 'Comprehensive library of design resources, templates, fonts, and creative assets for professional designers.',
        'Coming Soon': 'Coming Soon',
        'Starting from': 'Starting from',
        'Price': 'Price',
        'TBA': 'TBA',

        // Pricing
        'Transparent Pricing': 'Transparent Pricing',
        'Prices automatically adjusted based on your location': 'Prices automatically adjusted based on your location',
        'Current Currency:': 'Current Currency:',

        // Contact
        'Get In Touch': 'Get In Touch',
        'Contact Information': 'Contact Information',
        'WhatsApp': 'WhatsApp',
        'Telegram': 'Telegram',
        'TikTok': 'TikTok',
        'Facebook': 'Facebook',
        'Visit Page': 'Visit Page',
        'Quick Message': 'Quick Message',
        'Your Name': 'Your Name',
        'Your Email': 'Your Email',
        'Select Service': 'Select Service',
        'Other': 'Other',
        'Your Message': 'Your Message',
        'Send Message': 'Send Message',

        // Footer
        'Professional services that boost your business': 'Professional services that boost your business',
        '© 2025 Boosty. Owned by Abdelrhman Elkholy. All rights reserved.': '© 2025 Boosty. Owned by Abdelrhman Elkholy. All rights reserved.',

        // AI Chatbot
        'AI Assistant': 'AI Assistant',
        'Hello! I\'m your AI assistant. How can I help you with Boosty services today?': 'Hello! I\'m your AI assistant. How can I help you with Boosty services today?',
        'Type your message...': 'Type your message...',

        // Other
        'By Abdelrhman Elkholy': 'By Abdelrhman Elkholy'
    },
    ar: {
        // Navigation
        'Services': 'الخدمات',
        'Pricing': 'الأسعار',
        'Contact': 'اتصل بنا',

        // Hero Section
        'Professional Services That Boost Your Business': 'خدمات مهنية تعزز عملك',
        'Get premium graphic design, Canva Pro access, WhatsApp automation, and more with our comprehensive service package.': 'احصل على تصميم جرافيكي متميز، وصول Canva Pro، أتمتة WhatsApp، والمزيد مع حزمة خدماتنا الشاملة.',
        'Explore Services': 'استكشف الخدمات',

        // Services
        'Our Services': 'خدماتنا',
        'Graphic Design': 'التصميم الجرافيكي',
        'Professional graphic design services including logos, branding, social media posts, and marketing materials.': 'خدمات التصميم الجرافيكي المهنية تشمل الشعارات والهوية التجارية ومنشورات وسائل التواصل الاجتماعي والمواد التسويقية.',
        'Canva Pro': 'Canva Pro',
        'Get access to Canva Pro with premium templates, stock photos, and advanced design tools for your creative projects.': 'احصل على وصول إلى Canva Pro مع القوالب المميزة والصور المخزنة وأدوات التصميم المتقدمة لمشاريعك الإبداعية.',
        'WhatsApp Sender': 'مرسل واتساب',
        'Automated WhatsApp messaging solutions for marketing campaigns, customer support, and bulk messaging services.': 'حلول الرسائل الآلية لواتساب للحملات التسويقية ودعم العملاء وخدمات الرسائل المجمعة.',
        'Designer Library': 'مكتبة المصمم',
        'Comprehensive library of design resources, templates, fonts, and creative assets for professional designers.': 'مكتبة شاملة لموارد التصميم والقوالب والخطوط والأصول الإبداعية للمصممين المحترفين.',
        'Coming Soon': 'قريباً',
        'Starting from': 'يبدأ من',
        'Price': 'السعر',
        'TBA': 'سيعلن لاحقاً',

        // Pricing
        'Transparent Pricing': 'أسعار شفافة',
        'Prices automatically adjusted based on your location': 'الأسعار تتكيف تلقائياً حسب موقعك',
        'Current Currency:': 'العملة الحالية:',

        // Contact
        'Get In Touch': 'تواصل معنا',
        'Contact Information': 'معلومات الاتصال',
        'WhatsApp': 'واتساب',
        'Telegram': 'تيليجرام',
        'TikTok': 'تيك توك',
        'Facebook': 'فيسبوك',
        'Visit Page': 'زيارة الصفحة',
        'Quick Message': 'رسالة سريعة',
        'Your Name': 'اسمك',
        'Your Email': 'بريدك الإلكتروني',
        'Select Service': 'اختر الخدمة',
        'Other': 'أخرى',
        'Your Message': 'رسالتك',
        'Send Message': 'إرسال الرسالة',

        // Footer
        'Professional services that boost your business': 'خدمات مهنية تعزز عملك',
        '© 2025 Boosty. Owned by Abdelrhman Elkholy. All rights reserved.': '© 2025 Boosty. مملوك لعبدالرحمن الخولي. جميع الحقوق محفوظة.',

        // AI Chatbot
        'AI Assistant': 'المساعد الذكي',
        'Hello! I\'m your AI assistant. How can I help you with Boosty services today?': 'مرحباً! أنا مساعدك الذكي. كيف يمكنني مساعدتك في خدمات Boosty اليوم؟',
        'Type your message...': 'اكتب رسالتك...',

        // Other
        'By Abdelrhman Elkholy': 'بواسطة عبدالرحمن الخولي'
    }
};

// Utility Functions
const utils = {
    // Load preferences from localStorage with error handling
    loadPreferences() {
        try {
            const savedLang = localStorage.getItem('boosty-language');
            const savedTheme = localStorage.getItem('boosty-theme');
            const savedCurrency = localStorage.getItem('boosty-currency');

            if (savedLang && ['en', 'ar'].includes(savedLang)) {
                AppState.currentLanguage = savedLang;
            }

            if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
                AppState.currentTheme = savedTheme;
            }

            if (savedCurrency && ['SAR', 'EGP', 'USD'].includes(savedCurrency)) {
                AppState.currentCurrency = savedCurrency;
            }
        } catch (error) {
            console.warn('Could not load preferences from localStorage:', error);
        }
    },

    // Save preferences to localStorage with error handling
    savePreferences() {
        try {
            localStorage.setItem('boosty-language', AppState.currentLanguage);
            localStorage.setItem('boosty-theme', AppState.currentTheme);
            localStorage.setItem('boosty-currency', AppState.currentCurrency);
        } catch (error) {
            console.warn('Could not save preferences to localStorage:', error);
        }
    },

    // Detect user location for currency with timeout and fallback
    async detectLocation() {
        const timeout = 5000; // 5 seconds timeout

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);

            const response = await fetch('https://ipapi.co/json/', {
                signal: controller.signal,
                headers: {
                    'Accept': 'application/json'
                }
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data && data.country_code) {
                AppState.userLocation = data;

                // Set currency based on country
                switch (data.country_code) {
                    case 'EG':
                        AppState.currentCurrency = 'EGP';
                        break;
                    case 'SA':
                        AppState.currentCurrency = 'SAR';
                        break;
                    default:
                        AppState.currentCurrency = 'USD';
                        break;
                }

                console.log('Location detected:', data.country_code, 'Currency set to:', AppState.currentCurrency);
            } else {
                throw new Error('Invalid response data');
            }
        } catch (error) {
            console.warn('Could not detect location, using USD as default:', error.message);
            AppState.currentCurrency = 'USD';
            AppState.userLocation = { country_code: 'Unknown', error: error.message };
        }
    },

    // Format currency with proper symbols
    formatCurrency(amount, currency = AppState.currentCurrency) {
        if (typeof amount !== 'number' || isNaN(amount)) {
            return 'N/A';
        }

        const currencyInfo = CURRENCY_RATES[currency];
        if (!currencyInfo) {
            return `$${amount}`;
        }

        // Format with proper decimal places
        const formattedAmount = amount % 1 === 0 ? amount.toString() : amount.toFixed(2);
        return `${currencyInfo.symbol}${formattedAmount}`;
    },

    // Get service pricing for current currency
    getServicePrice(serviceId, option = 'min') {
        const pricing = SERVICE_PRICING[AppState.currentCurrency];
        if (!pricing || !pricing[serviceId]) {
            return 0;
        }

        const servicePricing = pricing[serviceId];

        if (typeof servicePricing === 'object' && servicePricing[option] !== undefined) {
            return servicePricing[option];
        }

        return servicePricing.min || servicePricing.month || 0;
    },

    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Smooth scroll utility
    smoothScroll(targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    },

    // Error handling utility
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);

        // Show user-friendly error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            z-index: 10000;
            max-width: 300px;
            font-size: 0.9rem;
        `;
        errorMessage.textContent = `An error occurred in ${context}. Please try again.`;

        document.body.appendChild(errorMessage);

        setTimeout(() => {
            if (errorMessage.parentNode) {
                errorMessage.parentNode.removeChild(errorMessage);
            }
        }, 5000);
    },
    // Notification system
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles if not already present
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    z-index: 10000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                }
                .notification-info { background: #3B82F6; }
                .notification-success { background: #10B981; }
                .notification-error { background: #EF4444; }
                .notification-warning { background: #F59E0B; }
                .notification.show { transform: translateX(0); }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }
};

// Theme Management
const themeManager = {
    init() {
        this.applyTheme();
        this.bindEvents();
    },

    applyTheme() {
        try {
            document.documentElement.setAttribute('data-theme', AppState.currentTheme);

            const themeIcon = document.getElementById('themeIcon');
            if (themeIcon) {
                themeIcon.className = AppState.currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
            }
        } catch (error) {
            utils.handleError(error, 'Theme Application');
        }
    },

    toggle() {
        try {
            AppState.currentTheme = AppState.currentTheme === 'light' ? 'dark' : 'light';
            this.applyTheme();
            utils.savePreferences();
        } catch (error) {
            utils.handleError(error, 'Theme Toggle');
        }
    },

    bindEvents() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
            themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggle();
                }
            });
        }
    }
};

// Language Management
const languageManager = {
    init() {
        this.applyLanguage();
        this.bindEvents();
    },

    applyLanguage() {
        try {
            const html = document.documentElement;
            html.lang = AppState.currentLanguage;
            html.dir = AppState.currentLanguage === 'ar' ? 'rtl' : 'ltr';

            // Update all translatable elements
            const elements = document.querySelectorAll('[data-key]');
            elements.forEach(element => {
                const key = element.getAttribute('data-key');
                const translation = TRANSLATIONS[AppState.currentLanguage][key];
                if (translation) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            });

            // Update language toggle active state
            document.querySelectorAll('.lang-option').forEach(option => {
                option.classList.toggle('active', option.dataset.lang === AppState.currentLanguage);
            });

            // Update select options
            const selectOptions = document.querySelectorAll('select option[data-key]');
            selectOptions.forEach(option => {
                const key = option.getAttribute('data-key');
                const translation = TRANSLATIONS[AppState.currentLanguage][key];
                if (translation) {
                    option.textContent = translation;
                }
            });
        } catch (error) {
            utils.handleError(error, 'Language Application');
        }
    },

    switch(language) {
        try {
            if (['en', 'ar'].includes(language) && language !== AppState.currentLanguage) {
                AppState.currentLanguage = language;
                this.applyLanguage();
                utils.savePreferences();
            }
        } catch (error) {
            utils.handleError(error, 'Language Switch');
        }
    },

    bindEvents() {
        const languageOptions = document.querySelectorAll('.lang-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.switch(option.dataset.lang);
            });

            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.switch(option.dataset.lang);
                }
            });
        });
    }
};

// Pricing Manager
const pricingManager = {
    init() {
        this.bindEvents();
        this.updateServicePrices();
        this.generatePricingTables();
        this.updateCurrencyDisplay();
        this.initializeChartAnimations();
    },

    bindEvents() {
        // Currency selector buttons
        const currencyButtons = document.querySelectorAll('.currency-btn');
        currencyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const currency = e.currentTarget.getAttribute('data-currency');
                this.switchCurrency(currency);
            });
        });
    },

    switchCurrency(currency) {
        if (!['EGP', 'SAR', 'USD'].includes(currency)) return;

        AppState.currentCurrency = currency;
        this.updateCurrencyDisplay();
        this.updateServicePrices();
        this.generatePricingTables();
        this.updateCurrencyButtons();
        utils.savePreferences();

        // Re-animate charts
        setTimeout(() => {
            this.initializeChartAnimations();
        }, 100);
    },

    updateCurrencyButtons() {
        const currencyButtons = document.querySelectorAll('.currency-btn');
        currencyButtons.forEach(button => {
            const currency = button.getAttribute('data-currency');
            if (currency === AppState.currentCurrency) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    },

    initializeChartAnimations() {
        const chartBars = document.querySelectorAll('.chart-bar');
        chartBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('animate');
                const barFill = bar.querySelector('.bar-fill');
                if (barFill) {
                    barFill.style.width = '100%';
                }
            }, index * 150);
        });
    },

    updateServicePrices() {
        try {
            const servicePriceElements = document.querySelectorAll('[data-service-price]');
            servicePriceElements.forEach(element => {
                const serviceId = element.getAttribute('data-service-price');
                const price = utils.getServicePrice(serviceId);
                element.textContent = utils.formatCurrency(price);
            });
        } catch (error) {
            utils.handleError(error, 'Service Price Update');
        }
    },

    updateCurrencyDisplay() {
        try {
            const currencyDisplay = document.getElementById('currentCurrency');
            if (currencyDisplay) {
                currencyDisplay.textContent = AppState.currentCurrency;
            }
            this.updateCurrencyButtons();
        } catch (error) {
            utils.handleError(error, 'Currency Display Update');
        }
    },

    generatePricingTables() {
        try {
            const pricingContainer = document.getElementById('pricingTables');
            if (!pricingContainer) return;

            pricingContainer.innerHTML = '';

            const pricing = SERVICE_PRICING[AppState.currentCurrency];
            if (!pricing) return;

            Object.keys(pricing).forEach(serviceId => {
                const servicePricing = pricing[serviceId];
                const table = this.createPricingTable(serviceId, servicePricing);
                pricingContainer.appendChild(table);
            });
        } catch (error) {
            utils.handleError(error, 'Pricing Tables Generation');
        }
    },

    createPricingTable(serviceId, pricing) {
        const table = document.createElement('div');
        table.className = 'pricing-table';

        const serviceNames = {
            'graphic-design': 'Graphic Design',
            'canva-pro': 'Canva Pro',
            'whatsapp-sender': 'WhatsApp Sender'
        };

        const serviceName = TRANSLATIONS[AppState.currentLanguage][serviceNames[serviceId]] || serviceNames[serviceId];

        if (serviceId === 'whatsapp-sender') {
            table.innerHTML = this.createWhatsAppSenderTable(serviceName, pricing);
        } else if (serviceId === 'canva-pro') {
            table.innerHTML = this.createCanvaProTable(serviceName, pricing);
        } else {
            table.innerHTML = `
                <h3>${serviceName}</h3>
                <ul class="pricing-options">
                    ${Object.entries(pricing).map(([option, price]) => `
                        <li>
                            <span class="option-name">${this.formatOptionName(option)}</span>
                            <span class="option-price">${utils.formatCurrency(price)}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
        }

        return table;
    },

    createWhatsAppSenderTable(serviceName, pricing) {
        return `
            <h3>${serviceName}</h3>
            <div class="whatsapp-pricing-container">
                <div class="pricing-section">
                    <h4 class="section-title">Message Bundles</h4>
                    <div class="pricing-chart" id="messagesChart">
                        <div class="chart-bar" data-value="${pricing.starter || 0}">
                            <div class="bar-fill starter-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Starter</span>
                                <span class="package-details">8,000 messages</span>
                                <span class="package-price">${utils.formatCurrency(pricing.starter || 0)}</span>
                            </div>
                        </div>
                        <div class="chart-bar" data-value="${pricing.professional || 0}">
                            <div class="bar-fill professional-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Professional</span>
                                <span class="package-details">25,000 messages</span>
                                <span class="package-price">${utils.formatCurrency(pricing.professional || 0)}</span>
                            </div>
                        </div>
                        <div class="chart-bar" data-value="${pricing.enterprise || 0}">
                            <div class="bar-fill enterprise-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Enterprise</span>
                                <span class="package-details">60,000 messages</span>
                                <span class="package-price">${utils.formatCurrency(pricing.enterprise || 0)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pricing-section">
                    <h4 class="section-title">Key Activation</h4>
                    <div class="pricing-chart" id="activationChart">
                        <div class="chart-bar" data-value="${pricing.monthly || 0}">
                            <div class="bar-fill monthly-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Monthly</span>
                                <span class="package-details">30 days access</span>
                                <span class="package-price">${utils.formatCurrency(pricing.monthly || 0)}</span>
                            </div>
                        </div>
                        <div class="chart-bar" data-value="${pricing.yearly || 0}">
                            <div class="bar-fill yearly-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Yearly</span>
                                <span class="package-details">365 days access</span>
                                <span class="package-price">${utils.formatCurrency(pricing.yearly || 0)}</span>
                            </div>
                        </div>
                        <div class="chart-bar" data-value="${pricing.lifetime || 0}">
                            <div class="bar-fill lifetime-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Lifetime</span>
                                <span class="package-details">Unlimited access</span>
                                <span class="package-price">${utils.formatCurrency(pricing.lifetime || 0)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pricing-section">
                    <h4 class="section-title">Professional Services</h4>
                    <div class="professional-services">
                        <div class="service-item">
                            <span class="service-name">Key Creation Method</span>
                            <span class="service-price">${utils.formatCurrency(pricing.keys || 0)}</span>
                        </div>
                        <div class="service-item">
                            <span class="service-name">Private Session (60 min)</span>
                            <span class="service-price">${utils.formatCurrency(pricing.session || 0)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    createCanvaProTable(serviceName, pricing) {
        return `
            <h3>${serviceName}</h3>
            <div class="whatsapp-pricing-container">
                <div class="pricing-section">
                    <h4 class="section-title">Subscription Plans</h4>
                    <div class="pricing-chart" id="canvaPlansChart">
                        <div class="chart-bar" data-value="${pricing.month || 0}">
                            <div class="bar-fill month-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Monthly</span>
                                <span class="package-details">30 days access</span>
                                <span class="package-price">${utils.formatCurrency(pricing.month || 0)}</span>
                            </div>
                        </div>
                        <div class="chart-bar" data-value="${pricing.year || 0}">
                            <div class="bar-fill year-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Yearly</span>
                                <span class="package-details">365 days access</span>
                                <span class="package-price">${utils.formatCurrency(pricing.year || 0)}</span>
                            </div>
                        </div>
                        <div class="chart-bar" data-value="${pricing.threeyears || 0}">
                            <div class="bar-fill threeyears-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">3 Years</span>
                                <span class="package-details">1095 days access</span>
                                <span class="package-price">${utils.formatCurrency(pricing.threeyears || 0)}</span>
                            </div>
                        </div>
                        <div class="chart-bar" data-value="${pricing.lifetime || 0}">
                            <div class="bar-fill lifetime-bar"></div>
                            <div class="bar-label">
                                <span class="package-name">Lifetime</span>
                                <span class="package-details">Unlimited access</span>
                                <span class="package-price">${utils.formatCurrency(pricing.lifetime || 0)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pricing-section">
                    <h4 class="section-title">Professional Access</h4>
                    <div class="professional-services">
                        <div class="service-item">
                            <span class="service-name">Panel Access (500 Users)</span>
                            <span class="service-price">${utils.formatCurrency(pricing.panel || 0)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    formatOptionName(option) {
        const optionNames = {
            min: 'Minimum',
            max: 'Maximum',
            month: 'Monthly',
            year: 'Yearly',
            threeyears: '3 Years',
            lifetime: 'Lifetime',
            panel: 'Panel Access',
            starter: 'Starter (8K messages)',
            professional: 'Professional (25K messages)',
            enterprise: 'Enterprise (60K messages)',
            monthly: 'Monthly Activation',
            yearly: 'Yearly Activation',
            keys: 'Key Creation',
            session: 'Private Session (60 min)'
        };

        return optionNames[option] || option;
    }
};

// Contact Form Manager
const contactManager = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    },

    async handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                service: formData.get('service'),
                message: formData.get('message')
            };

            // Basic validation
            if (!data.name || !data.email || !data.message) {
                throw new Error('Please fill in all required fields');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Create WhatsApp message
            const message = this.createWhatsAppMessage(data);
            const whatsappUrl = `https://wa.me/966578786646?text=${encodeURIComponent(message)}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

            // Reset form
            e.target.reset();

            // Show success message
            this.showSuccessMessage();

        } catch (error) {
            utils.handleError(error, 'Contact Form Submission');
        }
    },

    createWhatsAppMessage(data) {
        const serviceNames = {
            'graphic-design': 'Graphic Design',
            'canva-pro': 'Canva Pro',
            'whatsapp-sender': 'WhatsApp Sender',
            'other': 'Other'
        };

        const serviceName = serviceNames[data.service] || data.service;

        return `Hello! I'm interested in your services.

Name: ${data.name}
Email: ${data.email}
Service: ${serviceName}
Message: ${data.message}

Sent from Boosty website.`;
    },

    showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            z-index: 10000;
            max-width: 300px;
            font-size: 0.9rem;
        `;
        successMessage.textContent = 'Message sent! Redirecting to WhatsApp...';

        document.body.appendChild(successMessage);

        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.parentNode.removeChild(successMessage);
            }
        }, 3000);
    }
};

// Chatbot Manager
const chatbotManager = {
    isOpen: false,

    init() {
        this.bindEvents();
    },

    bindEvents() {
        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatbotSend = document.getElementById('chatbotSend');
        const chatbotInput = document.getElementById('chatbotInput');

        if (chatbotToggle) {
            chatbotToggle.addEventListener('click', () => this.toggle());
        }

        if (chatbotClose) {
            chatbotClose.addEventListener('click', () => this.close());
        }

        if (chatbotSend) {
            chatbotSend.addEventListener('click', () => this.sendMessage());
        }

        if (chatbotInput) {
            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    },

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    },

    open() {
        const chatbot = document.getElementById('chatbot');
        if (chatbot) {
            chatbot.classList.add('active');
            this.isOpen = true;

            // Focus on input
            const input = document.getElementById('chatbotInput');
            if (input) {
                setTimeout(() => input.focus(), 300);
            }
        }
    },

    close() {
        const chatbot = document.getElementById('chatbot');
        if (chatbot) {
            chatbot.classList.remove('active');
            this.isOpen = false;
        }
    },

    async sendMessage() {
        const chatbotInput = document.getElementById('chatbotInput');
        const chatbotSend = document.getElementById('chatbotSend');

        if (!chatbotInput || !chatbotInput.value.trim()) return;

        const message = chatbotInput.value.trim();
        chatbotInput.value = '';

        // Add user message
        this.addMessage(message, 'user');

        // Disable input while processing
        if (chatbotInput) chatbotInput.disabled = true;
        if (chatbotSend) chatbotSend.disabled = true;

        // Show typing indicator
        this.showTyping(true);

        try {
            const response = await this.getAIResponse(message);

            // Hide typing indicator
            this.showTyping(false);

            if (response.success) {
                this.addMessage(response.message, 'bot');
            } else {
                this.addMessage(
                    response.error === 'API_KEY_MISSING' 
                        ? "AI service is being configured. For immediate assistance, contact us via WhatsApp at +966 578 786 646."
                        : "I'm having trouble right now. Please contact us via WhatsApp for assistance.",
                    'bot'
                );
            }
        } catch (error) {
            this.showTyping(false);
            this.addMessage("Something went wrong. Please contact us via WhatsApp at +966 578 786 646.", 'bot');
        }

        // Re-enable input
        if (chatbotInput) chatbotInput.disabled = false;
        if (chatbotSend) chatbotSend.disabled = false;
        if (chatbotInput) chatbotInput.focus();
    },

    async getAIResponse(message) {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    history: []
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json();
        } catch (error) {
            return this.generateResponse(message);
        }
    },

    showTyping(show) {
        const chatbotMessages = document.getElementById('chatbotMessages');
        if (!chatbotMessages) return;

        const existingTyping = chatbotMessages.querySelector('.typing-indicator');
        if (existingTyping) {
            existingTyping.remove();
        }

        if (show) {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'typing-indicator';
            typingDiv.innerHTML = `
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            `;

            chatbotMessages.appendChild(typingDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    },

    addMessage(text, sender) {
        const chatbotMessages = document.getElementById('chatbotMessages');
        if (!chatbotMessages) return;

        const message = document.createElement('div');
        message.className = `message ${sender}-message`;
        message.textContent = text;

        chatbotMessages.appendChild(message);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    },

    generateResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();

        // Simple keyword-based responses
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return `Our pricing varies by service and location. Current currency: ${AppState.currentCurrency}. Check the pricing section for detailed information.`;
        }

        if (lowerMessage.includes('graphic') || lowerMessage.includes('design')) {
            return 'Our graphic design services include logos, branding, social media posts, and marketing materials. Would you like to contact us via WhatsApp for a quote?';
        }

        if (lowerMessage.includes('canva')) {
            return 'We provide Canva Pro access with premium templates, stock photos, and advanced design tools. Monthly plans start from ' + utils.formatCurrency(utils.getServicePrice('canva-pro', 'month'));
        }

        if (lowerMessage.includes('whatsapp')) {
            return 'Our WhatsApp Sender service offers automated messaging solutions for marketing campaigns and customer support. Packages start from ' + utils.formatCurrency(utils.getServicePrice('whatsapp-sender', 'starter'));
        }

        if (lowerMessage.includes('contact') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return 'Hello! You can contact us via WhatsApp, Telegram, Facebook, or TikTok. All contact links are available in the contact section.';
        }

        return 'Thank you for your message! For specific inquiries, please use our contact form or reach out via WhatsApp for immediate assistance.';
    }
};

// Loading Manager
const loadingManager = {
    show() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.remove('hidden');
        }
    },

    hide() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }
};

// Global smooth scroll function
function smoothScroll(targetId) {
    utils.smoothScroll(targetId);
}

// Advanced Feature Managers

const statsManager = {
    init() {
        this.observeStats();
    },

    observeStats() {
        const statsSection = document.getElementById('stats');
        if (!statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    },

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            this.animateNumber(stat, target);
        });
    },

    animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 40);
    }
};

const newsletterManager = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        const subscribeForm = document.getElementById('subscribeForm');
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', (e) => this.handleSubscribe(e));
        }
    },

    async handleSubscribe(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');

        if (!this.validateEmail(email)) {
            utils.showNotification('Please enter a valid email address', 'error');
            return;
        }

        try {
            // Simulate newsletter subscription
            await this.simulateSubscription(email);
            utils.showNotification('Successfully subscribed to newsletter!', 'success');
            e.target.reset();
        } catch (error) {
            utils.showNotification('Subscription failed. Please try again.', 'error');
        }
    },

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    async simulateSubscription(email) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Newsletter subscription:', email);
                resolve();
            }, 1000);
        });
    }
};

const mobileMenuManager = {
    isOpen: false,

    init() {
        this.bindEvents();
    },

    bindEvents() {
        const toggle = document.getElementById('mobileMenuToggle');
        const overlay = document.getElementById('mobileMenuOverlay');
        const close = document.getElementById('mobileMenuClose');
        const links = document.querySelectorAll('.mobile-nav-link');

        if (toggle) {
            toggle.addEventListener('click', () => this.toggle());
        }

        if (overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) this.close();
            });
        }

        if (close) {
            close.addEventListener('click', () => this.close());
        }

        links.forEach(link => {
            link.addEventListener('click', () => this.close());
        });
    },

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    },

    open() {
        const overlay = document.getElementById('mobileMenuOverlay');
        const toggle = document.getElementById('mobileMenuToggle');

        if (overlay) overlay.classList.add('active');
        if (toggle) toggle.classList.add('active');

        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    },

    close() {
        const overlay = document.getElementById('mobileMenuOverlay');
        const toggle = document.getElementById('mobileMenuToggle');

        if (overlay) overlay.classList.remove('active');
        if (toggle) toggle.classList.remove('active');

        document.body.style.overflow = '';
        this.isOpen = false;
    }
};

const cookieManager = {
    init() {
        this.bindEvents();
        this.checkCookieConsent();
    },

    bindEvents() {
        const acceptBtn = document.getElementById('cookieAccept');
        const rejectBtn = document.getElementById('cookieReject');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => this.acceptCookies());
        }

        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => this.rejectCookies());
        }
    },

    checkCookieConsent() {
        const consent = localStorage.getItem('boosty_cookie_consent');
        if (!consent) {
            this.showCookieBanner();
        }
    },

    showCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.add('visible');
        }
    },

    hideCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.remove('visible');
        }
    },

    acceptCookies() {
        localStorage.setItem('boosty_cookie_consent', 'accepted');
        this.hideCookieBanner();
        this.enableAnalytics();
    },

    rejectCookies() {
        localStorage.setItem('boosty_cookie_consent', 'rejected');
        this.hideCookieBanner();
    },

    enableAnalytics() {
        console.log('Analytics enabled');
        // Initialize analytics here
    }
};



const scrollManager = {
    init() {
        this.bindEvents();
        this.initProgressBar();
        this.initBackToTop();
    },

    bindEvents() {
        window.addEventListener('scroll', utils.debounce(() => {
            this.updateProgressBar();
            this.updateBackToTop();
        }, 10));

        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.addEventListener('click', () => this.scrollToTop());
        }
    },

    initProgressBar() {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.display = 'block';
        }
    },

    initBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.style.display = 'flex';
        }
    },

    updateProgressBar() {
        const progressFill = document.querySelector('.progress-fill');
        if (!progressFill) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;

        progressFill.style.width = `${Math.min(progress, 100)}%`;
    },

    updateBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    },

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

const performanceManager = {
    init() {
        this.measurePerformance();
        this.optimizeImages();
        this.preloadCriticalResources();
    },

    measurePerformance() {
        if (!window.performance) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                const timing = performance.timing;
                const metrics = {
                    pageLoadTime: timing.loadEventEnd - timing.navigationStart,
                    domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
                    firstByte: timing.responseStart - timing.navigationStart,
                    domInteractive: timing.domInteractive - timing.navigationStart
                };

                console.log('Performance Metrics:', metrics);
                this.reportPerformance(metrics);
            }, 0);
        });
    },

    reportPerformance(metrics) {
        // In production, send to analytics
        if (metrics.pageLoadTime > 3000) {
            console.warn('Slow page load detected:', metrics.pageLoadTime + 'ms');
        }
    },

    optimizeImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    preloadCriticalResources() {
        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
        fontPreload.as = 'style';
        document.head.appendChild(fontPreload);
    }
};

const accessibilityManager = {
    init() {
        this.setupKeyboardNavigation();
        this.setupAriaLabels();
        this.setupFocusManagement();
    },

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.handleEscapeKey();
            }

            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
        });
    },

    handleEscapeKey() {
        // Close mobile menu
        if (mobileMenuManager.isOpen) {
            mobileMenuManager.close();
        }
    },

    handleTabNavigation(e) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
    },

    setupAriaLabels() {
        // Add missing aria labels
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label') && button.textContent.trim()) {
                button.setAttribute('aria-label', button.textContent.trim());
            }
        });
    },

    setupFocusManagement() {
        // Ensure focus is visible
        document.addEventListener('mousedown', () => {
            document.body.classList.add('using-mouse');
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.remove('using-mouse');
            }
        });
    }
};

const analyticsManager = {
    init() {
        this.trackPageView();
        this.setupEventTracking();
    },

    trackPageView() {
        console.log('Page view tracked');
        // In production, send to Google Analytics or similar
    },

    setupEventTracking() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn')) {
                this.trackEvent('button_click', {
                    button_text: e.target.textContent.trim(),
                    button_id: e.target.id || 'unknown'
                });
            }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
            this.trackEvent('form_submit', {
                form_id: e.target.id || 'unknown'
            });
        });

        // Track external link clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="http"]')) {
                this.trackEvent('external_link_click', {
                    url: e.target.href,
                    text: e.target.textContent.trim()
                });
            }
        });
    },

    trackEvent(eventName, parameters = {}) {
        console.log('Event tracked:', eventName, parameters);
        // In production, send to analytics service
    }
};

const errorManager = {
    init() {
        this.setupErrorHandling();
    },

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            this.logError({
                type: 'javascript_error',
                message: e.error?.message || 'Unknown error',
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno,
                stack: e.error?.stack
            });
        });

        window.addEventListener('unhandledrejection', (e) => {
            this.logError({
                type: 'unhandled_promise_rejection',
                message: e.reason?.message || 'Promise rejection',
                stack: e.reason?.stack
            });
        });
    },

    logError(errorInfo) {
        console.error('Error logged:', errorInfo);
        // In production, send to error tracking service like Sentry
    }
};

// Enhanced utilities
const advancedUtils = {
    // Notification system
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles if not already present
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    z-index: 10000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                }
                .notification-info { background: #3B82F6; }
                .notification-success { background: #10B981; }
                .notification-error { background: #EF4444; }
                .notification-warning { background: #F59E0B; }
                .notification.show { transform: translateX(0); }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },

    // Local storage with expiration
    setStorageWithExpiry(key, value, ttl) {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        };
        localStorage.setItem(key, JSON.stringify(item));
    },

    getStorageWithExpiry(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;

        const item = JSON.parse(itemStr);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    },

    // Device detection
    isMobile() {
        return window.innerWidth <= 768;
    },

    isTablet() {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
    },

    isDesktop() {
        return window.innerWidth > 1024;
    },

    // URL utilities
    getUrlParameter(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },

    updateUrlParameter(param, value) {
        const url = new URL(window.location);
        url.searchParams.set(param, value);
        window.history.replaceState({}, '', url);
    },

    // Form validation
    validateForm(form) {
        const errors = [];
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                errors.push(`${field.name || field.id} is required`);
            }

            if (field.type === 'email' && field.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    errors.push('Please enter a valid email address');
                }
            }
        });

        return errors;
    }
};

// App Initialization with all managers
const app = {
    async init() {
        try {
            console.log('Initializing Boosty application...');

            // Show loading overlay
            loadingManager.show();

            // Load saved preferences first
            utils.loadPreferences();

            // Initialize core managers
            themeManager.init();
            languageManager.init();

            // Detect location (async, non-blocking)
            await utils.detectLocation();

            // Initialize pricing with detected currency
            pricingManager.init();

            // Initialize feature managers
            contactManager.init();
            statsManager.init();
            newsletterManager.init();
            mobileMenuManager.init();
            cookieManager.init();
            scrollManager.init();

            // Initialize utility managers
            performanceManager.init();
            accessibilityManager.init();
            analyticsManager.init();
            errorManager.init();

            // Mark as initialized
            AppState.isInitialized = true;
            AppState.isLoading = false;

            console.log('Application initialized successfully');
            console.log('Current state:', AppState);

        } catch (error) {
            console.error('Failed to initialize application:', error);
            utils.handleError(error, 'Application Initialization');
        } finally {
            // Hide loading overlay after a minimum time for smooth UX
            setTimeout(() => {
                loadingManager.hide();
            }, 1000);
        }
    }
};

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// Window Load Event Listener for additional initialization
window.addEventListener('load', () => {
    // Additional setup after all resources are loaded
    console.log('All resources loaded');

    // Focus management for accessibility
    if (typeof window.applyFocusVisiblePolyfill === 'function') {
        window.applyFocusVisiblePolyfill(document);
    }
});

// Basic error tracking
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    utils.handleError(event.reason, 'Promise Rejection Handler');
    event.preventDefault(); // Prevent default browser behavior
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AppState,
        utils,
        themeManager,
        languageManager,
        pricingManager,
        contactManager,
        chatbotManager,
        app
    };
}
