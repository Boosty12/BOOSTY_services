// Translations
const translations = {
    ar: {
        // Brand and Navigation
        brand_name: "Boosty",
        tagline: "الخدمات الرقمية المتقدمة",
        
        // Hero Section
        hero_title: "أطلق إمكاناتك الرقمية مع Boosty",
        hero_subtitle: "نقدم خدمات التصميم الجرافيكي، خطط Canva Pro، أدوات التسويق عبر WhatsApp، والاستشارات الخاصة بأعلى جودة وأفضل الأسعار.",
        explore_services: "استكشف الخدمات",
        contact_us: "تواصل معنا",
        
        // Services
        services_title: "خدماتنا المميزة",
        services_subtitle: "اختر من مجموعة شاملة من الخدمات الرقمية المصممة لتلبية احتياجاتك",
        graphic_design: "التصميم الجرافيكي",
        graphic_design_desc: "تصاميم احترافية وإبداعية لجميع احتياجاتك التسويقية والتجارية",
        canva_pro: "خطط Canva Pro",
        canva_pro_desc: "احصل على خطط Canva Pro بأفضل الأسعار مع ضمان الجودة",
        whatsapp_sender: "مرسل WhatsApp",
        whatsapp_sender_desc: "أدوات التسويق الاحترافية عبر واتساب لتطوير أعمالك",
        
        // Pricing Terms
        starting_from: "يبدأ من",
        one_month: "شهر واحد",
        one_year: "سنة واحدة",
        three_years: "3 سنوات",
        lifetime: "مدى الحياة",
        reseller_panel: "لوحة الموزع (500 مستخدم)",
        key_maker_guide: "دليل صانع المفاتيح",
        
        // Pricing Page
        view_full_pricing: "عرض جدول الأسعار الكامل",
        pricing_description: "تصفح جميع الخدمات والأسعار بالتفصيل",
        view_pricing: "عرض الأسعار",
        pricing: "الأسعار",
        
        // Contact
        contact_title: "تواصل معنا",
        contact_subtitle: "نحن هنا لمساعدتك في تحقيق أهدافك الرقمية",
        send_message: "إرسال الرسالة",
        services: "الخدمات",
        contact: "تواصل معنا",
        
        // Footer
        owned_by: "مملوك لعبدالرحمن الخولي",
        copyright: "© 2024 Boosty. جميع الحقوق محفوظة.",
        
        // AI Assistant
        ai_assistant: "Boosty Bot",
        ai_welcome: "أهلاً وسهلاً! أنا Boosty Bot، مساعدك الذكي هنا. يمكنني أساعدك في أي حاجة تخطر على بالك - سواء عن خدمات Boosty أو أي سؤال تاني خالص (طبخ، برمجة، ثقافة، أي حاجة!). إيش اللي محتاج تعرفه النهارده؟",
        type_message: "اكتب رسالتك...",
        
        // Messages
        form_success: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
        form_error: "حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        ai_error: "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة."
    },
    en: {
        // Brand and Navigation
        brand_name: "Boosty",
        tagline: "Advanced Digital Services",
        
        // Hero Section
        hero_title: "Unleash Your Digital Potential with Boosty",
        hero_subtitle: "We provide graphic design services, Canva Pro plans, WhatsApp marketing tools, and private consultations with the highest quality and best prices.",
        explore_services: "Explore Services",
        contact_us: "Contact Us",
        
        // Services
        services_title: "Our Featured Services",
        services_subtitle: "Choose from a comprehensive range of digital services designed to meet your needs",
        graphic_design: "Graphic Design",
        graphic_design_desc: "Professional and creative designs for all your marketing and business needs",
        canva_pro: "Canva Pro Plans",
        canva_pro_desc: "Get Canva Pro plans at the best prices with quality guarantee",
        whatsapp_sender: "WhatsApp Sender",
        whatsapp_sender_desc: "Professional WhatsApp marketing tools to grow your business",
        
        // Pricing Terms
        starting_from: "Starting from",
        one_month: "1 Month",
        one_year: "1 Year",
        three_years: "3 Years",
        lifetime: "Lifetime",
        reseller_panel: "Reseller Panel (500 users)",
        key_maker_guide: "Key Maker Guide",
        
        // Pricing Page
        view_full_pricing: "View Complete Pricing Table",
        pricing_description: "Browse all services and prices in detail",
        view_pricing: "View Pricing",
        pricing: "Pricing",
        
        // Contact
        contact_title: "Contact Us",
        contact_subtitle: "We're here to help you achieve your digital goals",
        send_message: "Send Message",
        services: "Services",
        contact: "Contact",
        
        // Footer
        owned_by: "Owned by Abdelrhman Elkholy",
        copyright: "© 2024 Boosty. All rights reserved.",
        
        // AI Assistant
        ai_assistant: "Boosty Bot",
        ai_welcome: "Hey there! I'm Boosty Bot, your friendly AI assistant. I can help with absolutely anything - whether it's about Boosty services or any other topic you're curious about (cooking, tech, culture, you name it!). What can I help you with today?",
        type_message: "Type your message...",
        
        // Messages
        form_success: "Your message has been sent successfully! We'll get back to you soon.",
        form_error: "There was an error sending your message. Please try again.",
        ai_error: "Sorry, there was an error. Please try again or contact us directly."
    }
};

// Pricing data in different currencies
const servicePrices = {
    graphicDesign: { EGP: 50, SAR: 10, USD: 5 },
    canvaProMonth: { EGP: 30, SAR: 2.99, USD: 1 },
    canvaProYear: { EGP: 80, SAR: 6.99, USD: 3 },
    canvaProThreeYear: { EGP: 120, SAR: 9.99, USD: 5 },
    canvaProLifetime: { EGP: 150, SAR: 14.99, USD: 7 },
    canvaProReseller: { EGP: 1300, SAR: 100, USD: 35 },
    whatsapp8k: { EGP: 350, SAR: 30, USD: 8 },
    whatsapp25k: { EGP: 650, SAR: 60, USD: 16 },
    whatsapp60k: { EGP: 1200, SAR: 120, USD: 32 },
    whatsappActivationMonth: { EGP: 300, SAR: 30, USD: 8 },
    whatsappActivationYear: { EGP: 700, SAR: 60, USD: 16 },
    whatsappActivationLifetime: { EGP: 1500, SAR: 150, USD: 40 },
    whatsappKeyMaker: { EGP: 2000, SAR: 200, USD: 55 },
    privateSession: { EGP: 300, SAR: 38, USD: 10 }
};

// Global state
let currentLanguage = 'ar';
let currentCurrency = 'EGP';
let currentTheme = 'light';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeControls();
    updateLanguage();
    updatePricing();
    updateTheme();
    initializeAI();
    initializeContactForm();
});

// Initialize control elements
function initializeControls() {
    const languageSelect = document.getElementById('languageSelect');
    const currencySelect = document.getElementById('currencySelect');
    const themeToggle = document.getElementById('themeToggle');
    
    // Language change
    languageSelect.addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
        updateAIPlaceholder();
    });
    
    // Currency change
    currencySelect.addEventListener('change', function() {
        currentCurrency = this.value;
        updatePricing();
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', function() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        updateTheme();
    });
}

// Update language and translations
function updateLanguage() {
    const isRTL = currentLanguage === 'ar';
    
    // Update document direction
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-key]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.setAttribute('placeholder', translations[currentLanguage][key]);
        }
    });
}

// Update pricing based on selected currency
function updatePricing() {
    const priceElements = document.querySelectorAll('[data-service]');
    
    priceElements.forEach(element => {
        const service = element.getAttribute('data-service');
        if (servicePrices[service] && servicePrices[service][currentCurrency]) {
            const price = servicePrices[service][currentCurrency];
            element.textContent = formatPrice(price, currentCurrency);
        }
    });
}

// Format price with currency symbol
function formatPrice(price, currency) {
    const symbols = {
        EGP: 'جنيه',
        SAR: 'ريال',
        USD: '$'
    };
    
    if (currency === 'USD') {
        return `${symbols[currency]}${price}`;
    } else {
        return `${price} ${symbols[currency]}`;
    }
}

// Update theme
function updateTheme() {
    document.body.setAttribute('data-theme', currentTheme);
    
    const themeIcon = document.querySelector('#themeToggle i');
    if (currentTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Scroll functions
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// AI Assistant functionality
let aiIsOpen = false;

function initializeAI() {
    const aiInput = document.getElementById('aiInput');
    
    // Handle Enter key press
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendAIMessage();
        }
    });
}

function toggleAI() {
    const aiChat = document.getElementById('aiChat');
    aiIsOpen = !aiIsOpen;
    
    if (aiIsOpen) {
        aiChat.classList.add('active');
    } else {
        aiChat.classList.remove('active');
    }
}

function updateAIPlaceholder() {
    const aiInput = document.getElementById('aiInput');
    aiInput.setAttribute('placeholder', translations[currentLanguage]['type_message']);
}

function sendAIMessage() {
    const aiInput = document.getElementById('aiInput');
    const message = aiInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, true);
    aiInput.value = '';
    
    // Show typing indicator
    addTypingIndicator();
    
    // Simulate AI response (since this is a static site)
    setTimeout(() => {
        removeTypingIndicator();
        const response = getAIResponse(message);
        addMessageToChat(response, false);
    }, 1500);
}

function addMessageToChat(message, isUser) {
    const messagesContainer = document.getElementById('aiMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addTypingIndicator() {
    const messagesContainer = document.getElementById('aiMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message bot-message typing-indicator';
    typingDiv.innerHTML = '<div class="loading"></div>';
    typingDiv.id = 'typing-indicator';
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Simple AI response generator (Egyptian dialect for Arabic)
function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (currentLanguage === 'ar') {
        // Cooking/food questions
        if (lowerMessage.includes('طبخ') || lowerMessage.includes('أكل') || lowerMessage.includes('وصفة')) {
            return 'أهلاً! حبيبي أنا بحب الطبخ جداً! إيش اللي عايز تعمله؟ ممكن أساعدك في أي وصفة أو نصيحة في الطبخ. قولي إيش عندك في البيت وأنا أقترح عليك حاجة حلوة تعملها!';
        }
        
        // Programming/tech questions
        if (lowerMessage.includes('برمجة') || lowerMessage.includes('كود') || lowerMessage.includes('موقع') || lowerMessage.includes('تطبيق')) {
            return 'ماشي! البرمجة حاجة جميلة جداً. أنا يمكنني أساعدك في أي لغة برمجة أو مشكلة تقنية. قولي إيش اللي واقف معاك وأنا أحاول أساعدك فيه بإذن الله!';
        }
        
        // Pricing questions
        if (lowerMessage.includes('سعر') || lowerMessage.includes('تكلفة') || lowerMessage.includes('فلوس')) {
            return `أهلاً! خلاص يمكنني أساعدك في الأسعار:
            • التصميم الجرافيكي من ${formatPrice(servicePrices.graphicDesign[currentCurrency], currentCurrency)}
            • Canva Pro من ${formatPrice(servicePrices.canvaProMonth[currentCurrency], currentCurrency)}/شهر
            • رسائل WhatsApp من ${formatPrice(servicePrices.whatsapp8k[currentCurrency], currentCurrency)}
            • جلسة خاصة ${formatPrice(servicePrices.privateSession[currentCurrency], currentCurrency)}/ساعة
            
            أي حاجة عاجباك؟ تواصل معانا على واتساب +966578786646`;
        }
        
        // General culture/knowledge questions
        if (lowerMessage.includes('تاريخ') || lowerMessage.includes('ثقافة') || lowerMessage.includes('معلومة')) {
            return 'حلو! أنا بحب الكلام عن التاريخ والثقافة. إيش اللي عايز تعرفه؟ أسأل عن أي حاجة وأنا أجاوبك بإذن الله!';
        }
        
        // Default Arabic response
        return 'أهلاً وسهلاً! أنا Boosty Bot، مساعدك الذكي هنا. ممكن أساعدك في أي حاجة خالص - طبخ، برمجة، ثقافة، رياضة، كوميكس، أو طبعاً خدمات Boosty. إيش اللي محتاج تعرفه النهارده؟';
    }
    
    // English responses
    if (lowerMessage.includes('cook') || lowerMessage.includes('recipe') || lowerMessage.includes('food')) {
        return "Hey! I love talking about cooking! What are you planning to make? I can help with recipes, cooking tips, or suggest something delicious based on what you have at home. What's in your kitchen?";
    }
    
    if (lowerMessage.includes('programming') || lowerMessage.includes('code') || lowerMessage.includes('website') || lowerMessage.includes('app')) {
        return "Awesome! Programming is such a cool field. I can help with any programming language, debugging issues, or tech questions you have. What are you working on or stuck with?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
        return `Sure! Here's our pricing breakdown:
        • Graphic Design from ${formatPrice(servicePrices.graphicDesign[currentCurrency], currentCurrency)}
        • Canva Pro plans from ${formatPrice(servicePrices.canvaProMonth[currentCurrency], currentCurrency)}/month
        • WhatsApp packages from ${formatPrice(servicePrices.whatsapp8k[currentCurrency], currentCurrency)}
        • Private sessions ${formatPrice(servicePrices.privateSession[currentCurrency], currentCurrency)}/hour
        
        Which service interests you most? Contact us on WhatsApp +966578786646`;
    }
    
    if (lowerMessage.includes('history') || lowerMessage.includes('culture') || lowerMessage.includes('fact')) {
        return "Cool! I love discussing history and culture. What would you like to know about? Ask me anything and I'll do my best to help!";
    }
    
    return "Hey there! I'm Boosty Bot, your friendly AI assistant. I can help with absolutely anything - cooking, programming, culture, sports, random facts, or of course our Boosty services. What's on your mind today?";
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            showMessage(translations[currentLanguage]['form_error'], 'error');
            return;
        }
        
        // Simulate form submission
        showMessage(translations[currentLanguage]['form_success'], 'success');
        contactForm.reset();
        
        // In a real implementation, you would send this data to a server
        console.log('Form submitted:', { name, email, service, message });
    });
}

function showMessage(message, type) {
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    
    const contactForm = document.getElementById('contactForm');
    contactForm.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Smooth scrolling for all anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    if (aiIsOpen && window.innerWidth < 768) {
        const aiChat = document.getElementById('aiChat');
        aiChat.style.width = '90vw';
        aiChat.style.left = '5vw';
    }
});

// Animation observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation observer to service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
