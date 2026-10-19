/**
 * Saeed Sharifi Studio — Main Interactive Engine
 * Architectural Visualization & Spatial Design
 * Assets / main.js
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initLiveClocks();
  initProjectFiltering();
  initLightboxModal();
  initContactForm();
  initMobileNavigation();
});

/* ==========================================================================
   1. BILINGUAL DICTIONARY (FA <-> EN)
   ========================================================================== */
const TRANSLATIONS = {
  fa: {
    dir: 'rtl',
    lang: 'fa',
    'hero-eyebrow': 'معماری · ویژوالایزیشن · هنر دیجیتال',
    'hero-headline': 'معماری، با نگاهی دقیق به جزئیات',
    'hero-support': 'رندر معماری، طراحی داخلی و نما، و خلق تجربه‌های بصری واقع‌گرایانه و سینمایی برای دفاتر معماری و طراحان بین‌المللی.',
    'cta-work': 'مشاهده پروژه‌ها',
    'cta-contact': 'ارتباط با من',
    'hero-signature': 'سعید شریفی — معمار و آرتیست سه‌بعدی',
    'work-section-sub': 'منتخب پروژه‌ها / ۰۱ — کارهای برگزیده',
    'work-section-title': 'آثار منتخب معماری و ویژوالایزیشن',
    'work-counter': '[فهرست آثار ۰۱ — ۰۶]',
    'view-detail': 'مشاهده جزئیات',
    'inquire-animation': 'سفارش انیمیشن معماری',
    'exp-subtitle': 'حوزه‌های تخصصی / ۰۲ — خدمات',
    'exp-title': 'تخصص‌های اجرایی و دیسیپلین‌ها',
    'exp-lead': 'تلفیق دانش معماری، تسلط بر فیزیک نور و جدیدترین ابزارهای شبیه‌سازی دیجیتال برای بالاترین استانداردهای بصری.',
    'about-subtitle': 'درباره معمار / ۰۳ — هویت حرفه‌ای',
    'about-heading': 'طراحی فضاها. خلق تصاویر.',
    'about-bio': 'من سعید شریفی هستم، معمار و آرتیست سه‌بعدی که در مرز بین طراحی معماری، رندرهای واقع‌گرایانه و ابزارهای نوین دیجیتال فعالیت می‌کنم. رویکرد من بر پایه‌ی مدل‌سازی دقیق، ترکیب‌بندی هوشمندانه، بازنمایی طبیعی متریال‌ها و نورپردازی حساب‌شده استوار است تا حس و روح هر فضا به درستی منتقل شود.',
    'contact-sub': 'شروع همکاری / ۰۴ — ارتباط مستقیم',
    'contact-headline': 'پروژه‌ای در ذهن دارید؟',
    'contact-lead': 'بیایید اثری ماندگار، دقیق و با بالاترین استانداردهای بصری خلق کنیم.',
    'form-heading': 'ثبت درخواست مشاوره و استعلام پروژه',
    'form-sub': 'لطفاً مشخصات اولیه پروژه را وارد فرمایید تا در کوتاه‌ترین زمان جهت هماهنگی و بررسی فنی با شما تماس گرفته شود.',
    'f-name': 'نام و نام خانوادگی / شرکت *',
    'f-contact': 'شماره تماس یا ایمیل *',
    'f-service': 'نوع خدمت مورد نیاز',
    'f-deadline': 'بازه زمانی مدنظر',
    'f-notes': 'توضیحات و فایل‌های پیوست',
    'f-confidential': 'پروژه‌ها و مدارک با محرمانگی کامل بررسی می‌شوند.',
    'f-btn': 'ارسال مشخصات پروژه',
    'foot-cred': 'معمار، طراح و متخصص شبیه‌سازی دیجیتال',
    'back-top': 'بازگشت به بالا',
    'form-success': 'درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.'
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    'hero-eyebrow': 'ARCHITECTURE · VISUALIZATION · DIGITAL CRAFT',
    'hero-headline': 'Architecture, imagined with precision.',
    'hero-support': 'Architectural visualization, interior and facade design, and cinematic spatial experiences for leading practices and creative directors.',
    'cta-work': 'Explore Selected Work',
    'cta-contact': 'Contact Me',
    'hero-signature': 'Saeed Sharifi — Architect & 3D Artist',
    'work-section-sub': 'Selected Work / 01 — Featured Architecture & Visualization',
    'work-section-title': 'Featured Architectural Plates & Renders',
    'work-counter': '[INDEX 01 — 06]',
    'view-detail': 'View Project',
    'inquire-animation': 'Commission Animation',
    'exp-subtitle': 'Expertise & Practice / 02 — Disciplines',
    'exp-title': 'Professional Disciplines & Practice',
    'exp-lead': 'Bridging rigorous architectural sensibility with high-fidelity digital craft and physically plausible lighting computation.',
    'about-subtitle': 'About the Artist / 03 — Identity',
    'about-heading': 'Designing spaces. Crafting images.',
    'about-bio': 'I’m Saeed Sharifi, an architect and 3D artist working at the intersection of architectural design, visualization, and emerging digital tools. My approach combines precise modeling, thoughtful composition, realistic materials, and carefully designed lighting to communicate the character of each space.',
    'contact-sub': 'Inquiries & Collaboration / 04 — Direct Contact',
    'contact-headline': 'Have a project in mind?',
    'contact-lead': 'Let’s create something meaningful, precise, and visually commanding.',
    'form-heading': 'Project Inquiry & Collaboration Brief',
    'form-sub': 'Submit your preliminary project specifications. We respond promptly with technical feasibility and timeline estimates.',
    'f-name': 'Full Name / Studio Name *',
    'f-contact': 'Contact Number or Email *',
    'f-service': 'Scope of Work',
    'f-deadline': 'Target Timeline',
    'f-notes': 'Project Scope & Brief Notes',
    'f-confidential': 'All design files & project briefs are kept strictly confidential.',
    'f-btn': 'Submit Project Brief',
    'foot-cred': 'Architect, 3D Visualizer & Spatial Artist',
    'back-top': 'Back to Top',
    'form-success': 'Thank you. Your inquiry has been sent. We will get in touch shortly.'
  }
};

/* ==========================================================================
   2. LANGUAGE SWITCHER
   ========================================================================== */
function initLanguageSwitcher() {
  const switchBtns = document.querySelectorAll('[data-lang-btn]');
  
  function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.documentElement.lang = dict.lang;
    document.documentElement.dir = dict.dir;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    switchBtns.forEach(btn => {
      const targetLang = btn.getAttribute('data-lang-btn');
      if (targetLang === lang) {
        btn.classList.add('font-bold', 'bg-black', 'text-white');
        btn.classList.remove('text-neutral-500');
      } else {
        btn.classList.remove('font-bold', 'bg-black', 'text-white');
        btn.classList.add('text-neutral-500');
      }
    });

    localStorage.setItem('portfolio_lang', lang);
  }

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      applyLanguage(lang);
    });
  });

  const savedLang = localStorage.getItem('portfolio_lang') || 'fa';
  applyLanguage(savedLang);
}

/* ==========================================================================
   3. REAL-TIME CLOCKS (TEHRAN & PARIS)
   ========================================================================== */
function initLiveClocks() {
  const tehEl = document.getElementById('clock-tehran');
  const parEl = document.getElementById('clock-paris');

  function updateClocks() {
    const now = new Date();
    if (tehEl) {
      tehEl.textContent = 'TEH ' + new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Tehran',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
    }
    if (parEl) {
      parEl.textContent = 'PAR ' + new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
    }
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

/* ==========================================================================
   4. PROJECT FILTERING
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active', 'bg-black', 'text-white'));
      btn.classList.add('active', 'bg-black', 'text-white');

      projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. LIGHTBOX / ARCHITECTURAL MODAL & CLAY COMPARISON
   ========================================================================== */
function initLightboxModal() {
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');
  const clayToggle = document.getElementById('clay-toggle');

  if (!modal) return;

  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('[data-project-item]');
      if (!card) return;

      const img = card.querySelector('img');
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');

      if (modalImg && img) modalImg.src = img.src;
      if (modalTitle && title) modalTitle.textContent = title.textContent;
      if (modalDesc && desc) modalDesc.textContent = desc.textContent;

      if (modalImg) modalImg.classList.remove('clay-mode');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  if (clayToggle && modalImg) {
    clayToggle.addEventListener('click', () => {
      modalImg.classList.toggle('clay-mode');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}

/* ==========================================================================
   6. CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('project-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentLang = document.documentElement.lang || 'fa';
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.fa;

    if (feedback) {
      feedback.textContent = dict['form-success'];
      feedback.classList.remove('hidden');
      setTimeout(() => feedback.classList.add('hidden'), 6000);
    }

    form.reset();
  });
}

/* ==========================================================================
   7. MOBILE MENU
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}
