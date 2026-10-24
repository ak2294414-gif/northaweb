/* ============================================================
   NorthWeb Co. — Homepage JavaScript
   ============================================================ */

const HOME_SOLUTIONS = [
  { key: 'showcase',   icon: '🛍️', title: 'Collection Showcase', desc: 'For any store or brand that needs to show products online', price: 'From ₹7,999',  accent: '#0052CC' },
  { key: 'ecommerce',  icon: '🛒', title: 'D2C E-commerce Store',  desc: 'Full online shop with cart, checkout & UPI payment',       price: 'From ₹29,999', accent: '#E8820C' },
  { key: 'restaurant', icon: '🍽️', title: 'Restaurant / Cafe',    desc: 'Digital menu, gallery, reservations, location',            price: 'From ₹9,999', accent: '#16A34A' },
  { key: 'business',   icon: '🏢', title: 'Business / Corporate',  desc: 'Professional company presence that builds credibility',    price: 'From ₹11,999', accent: '#7C3AED' },
  { key: 'portfolio',  icon: '🎨', title: 'Portfolio Website',     desc: 'Showcase your work and attract better clients',            price: 'From ₹5,999',  accent: '#DB2777' },
  { key: 'realestate', icon: '🏠', title: 'Real Estate / Property',desc: 'Property listings, photos, enquiry forms',                 price: 'From ₹17,999', accent: '#0891B2' },
  { key: 'education',  icon: '📚', title: 'Educational / Coaching',desc: 'Courses, enrollment, faculty profiles, schedule',          price: 'From ₹14,999', accent: '#D97706' },
  { key: 'gym',        icon: '💪', title: 'Gym / Fitness Studio',  desc: 'Membership plans, class schedule, trainer profiles',       price: 'From ₹9,999', accent: '#DC2626' },
  { key: 'salon',      icon: '💅', title: 'Salon / Beauty Parlor', desc: 'Services menu, gallery, appointment booking',             price: 'From ₹7,999',  accent: '#EC4899' },
  { key: 'medical',    icon: '🏥', title: 'Clinic / Medical',      desc: 'Doctor profiles, appointments, services listing',          price: 'From ₹11,999', accent: '#0D9488' },
  { key: 'event',      icon: '🎉', title: 'Event / Wedding',       desc: 'RSVP, schedule, countdown, gallery, packages',            price: 'From ₹9,999', accent: '#6D28D9' },
  { key: 'hotel',      icon: '🏨', title: 'Hotel / Homestay / PG', desc: 'Room listings, amenities, booking inquiry',                price: 'From ₹17,999', accent: '#1D4ED8' },
];

/* Only live demos shown */
const HOME_DEMOS = [
  { key: 'showcase', icon: '🛍️', title: 'Collection Showcase Website', type: 'Clothing Store — Live Demo', live: true, url: 'https://domeweb.shop/', urlLabel: 'domeweb.shop' },
];

/* ---------- RENDER SOLUTION CARDS ---------- */
function renderSolutionCards() {
  const grid = document.getElementById('solutionsGrid');
  if (!grid) return;
  grid.innerHTML = HOME_SOLUTIONS.map(s => `
    <div class="sol-home-card" style="--card-accent:${s.accent}" onclick="openPopup('${s.key}')" role="button" tabindex="0">
      <span class="shc-icon">${s.icon}</span>
      <div class="shc-title">${s.title}</div>
      <div class="shc-desc">${s.desc}</div>
      <div class="shc-footer">
        <span class="shc-price">${s.price}</span>
        <span class="shc-arrow">→</span>
      </div>
    </div>
  `).join('');
}

/* ---------- RENDER DEMO GRID ---------- */
function renderDemoGrid() {
  const grid = document.getElementById('demosGrid');
  if (!grid) return;
  grid.innerHTML = HOME_DEMOS.map(d => `
    <div class="demo-card live">
      <a href="${d.url}" target="_blank" rel="noopener noreferrer">
        <div class="dc-thumb">${d.icon}</div>
        <div class="dc-info">
          <span class="dc-badge live-badge">🟢 Live Demo</span>
          <div class="dc-title">${d.title}</div>
          <div class="dc-type">${d.type}</div>
          <div class="dc-link">Visit ${d.urlLabel} ↗</div>
        </div>
      </a>
    </div>`).join('');
}

// DOMContentLoaded handled at bottom of file

/* ---------- FAQ ---------- */
const FAQS = [
  { q: 'How much does a website cost?', a: 'Prices start from ₹5,999 for a basic portfolio site. Most business websites range from ₹7,999–₹17,999 for setup, plus a monthly hosting fee starting at ₹1,499/mo. You see the full price before committing — no hidden charges.' },
  { q: 'How long does it take to build?', a: 'Most websites are delivered in 7–14 days after we receive your content and requirements. Complex projects (e-commerce, booking systems) may take up to 21 days. We give you a real timeline before we start.' },
  { q: 'Do I need to pay anything upfront?', a: 'The consultation is completely free. Once you decide to proceed, we take 50% upfront and the remaining 50% when the site is ready to go live. No payment until you're satisfied.' },
  { q: 'What if I don\'t have content or photos?', a: 'No problem. We can work with whatever you have — even WhatsApp photos and a voice note describing your business. We handle the rest: writing, layout, and structure.' },
  { q: 'Will my website work on mobile phones?', a: 'Yes — every website we build is mobile-first. Over 80% of your customers browse on phones, so mobile performance is our top priority on every project.' },
  { q: 'What happens after the website goes live?', a: 'We hand over everything — hosting access, files, and guidance. The monthly plan includes uptime monitoring, minor updates, and WhatsApp support. You\'re never left alone after launch.' },
  { q: 'Can you help me rank on Google?', a: 'Every website includes basic SEO: proper headings, meta tags, fast loading, mobile-first, and local schema markup. For ongoing Google ranking, we also offer an SEO Add-On service.' },
  { q: 'Do you serve businesses outside Guwahati?', a: 'Yes — we serve all of Northeast India. Dibrugarh, Jorhat, Silchar, Shillong, Imphal, Agartala and beyond. Everything is done online via WhatsApp and video calls.' },
];

function renderFAQ() {
  const grid = document.getElementById('faqGrid');
  if (!grid) return;
  grid.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-a" id="faq-a-${i}" role="region">${f.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const item = document.getElementById(`faq-${i}`);
  const btn = item.querySelector('.faq-q');
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSolutionCards();
  renderDemoGrid();
  renderFAQ();
  // Re-init card glow after dynamic render
  if (typeof initCardGlow === 'function') setTimeout(initCardGlow, 300);
  if (typeof initCounters === 'function') setTimeout(initCounters, 100);
});

/* ---------- GLASSMORPHISM QUICK-VIEW POPUP ---------- */
const SOL_DETAILS = {
  showcase:   { features: ['Product photo gallery','WhatsApp order button','Collections / categories','Mobile-first layout','Basic SEO setup','Fast loading'] },
  ecommerce:  { features: ['Full cart & checkout','UPI / Razorpay payments','Product management','Order notifications','Discount coupons','Admin panel'] },
  restaurant: { features: ['Digital menu','WhatsApp reservations','Food gallery','Location & hours','Google Maps embed','Mobile optimized'] },
  business:   { features: ['Company overview','Services listing','Team profiles','Enquiry form','Google Maps','SEO optimized'] },
  portfolio:  { features: ['Project showcase','Skills section','Contact form','Resume download','Custom domain','Fast loading'] },
  realestate: { features: ['Property listings','Photo galleries','Enquiry forms','Location maps','Featured properties','WhatsApp lead'] },
  education:  { features: ['Course listings','Enrollment form','Faculty profiles','Class schedule','Fee structure','Student testimonials'] },
  gym:        { features: ['Membership plans','Class timetable','Trainer profiles','Photo gallery','WhatsApp join','Offer banners'] },
  salon:      { features: ['Services menu','Before/after gallery','Appointment booking','Stylist profiles','Price list','WhatsApp booking'] },
  medical:    { features: ['Doctor profiles','Appointment booking','Services listing','Timing & location','Insurance info','Patient reviews'] },
  event:      { features: ['RSVP system','Countdown timer','Event schedule','Photo gallery','Package pricing','WhatsApp RSVP'] },
  hotel:      { features: ['Room listings','Amenities showcase','Booking inquiry','Photo gallery','Location & map','WhatsApp booking'] },
};

function openPopup(key) {
  const sol = HOME_SOLUTIONS.find(s => s.key === key);
  const det = SOL_DETAILS[key] || { features: [] };
  if (!sol) return;
  let overlay = document.getElementById('glass-popup-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'glass-popup-overlay';
    overlay.className = 'glass-popup-overlay';
    overlay.innerHTML = `<div class="glass-popup" role="dialog" aria-modal="true"></div>`;
    overlay.addEventListener('click', e => { if (e.target === overlay) closePopup(); });
    document.body.appendChild(overlay);
  }
  const popup = overlay.querySelector('.glass-popup');
  popup.innerHTML = `
    <button class="gp-close" onclick="closePopup()" aria-label="Close">✕</button>
    <span class="gp-icon">${sol.icon}</span>
    <div class="gp-title">${sol.title}</div>
    <div class="gp-price">${sol.price} · Monthly from ₹1,499/mo</div>
    <ul class="gp-features">${det.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <div class="gp-btns">
      <a href="pages/solutions/${key}.html" class="gp-btn-secondary">Full Details →</a>
      <a href="pages/booking.html" class="gp-btn-primary">Book Free Consultation</a>
    </div>
  `;
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  const overlay = document.getElementById('glass-popup-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
