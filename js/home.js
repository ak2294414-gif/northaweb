/* ============================================================
   NorthWeb Co. — Homepage JavaScript
   ============================================================ */

const HOME_SOLUTIONS = [
  { key: 'showcase',   icon: '🛍️', title: 'Collection Showcase', desc: 'For any store or brand that needs to show products online', price: 'From ₹7,999',  accent: '#0052CC' },
  { key: 'ecommerce',  icon: '🛒', title: 'D2C E-commerce Store',  desc: 'Full online shop with cart, checkout & UPI payment',       price: 'From ₹29,999', accent: '#E8820C' },
  { key: 'restaurant', icon: '🍽️', title: 'Restaurant / Cafe',    desc: 'Digital menu, gallery, reservations, location',            price: 'From ₹9,999',  accent: '#16A34A' },
  { key: 'business',   icon: '🏢', title: 'Business / Corporate',  desc: 'Professional company presence that builds credibility',    price: 'From ₹11,999', accent: '#7C3AED' },
  { key: 'portfolio',  icon: '🎨', title: 'Portfolio Website',     desc: 'Showcase your work and attract better clients',            price: 'From ₹5,999',  accent: '#DB2777' },
  { key: 'realestate', icon: '🏠', title: 'Real Estate / Property',desc: 'Property listings, photos, enquiry forms',                 price: 'From ₹17,999', accent: '#0891B2' },
  { key: 'education',  icon: '📚', title: 'Educational / Coaching',desc: 'Courses, enrollment, faculty profiles, schedule',          price: 'From ₹14,999', accent: '#D97706' },
  { key: 'gym',        icon: '💪', title: 'Gym / Fitness Studio',  desc: 'Membership plans, class schedule, trainer profiles',       price: 'From ₹9,999',  accent: '#DC2626' },
  { key: 'salon',      icon: '💅', title: 'Salon / Beauty Parlor', desc: 'Services menu, gallery, appointment booking',             price: 'From ₹7,999',  accent: '#EC4899' },
  { key: 'medical',    icon: '🏥', title: 'Clinic / Medical',      desc: 'Doctor profiles, appointments, services listing',          price: 'From ₹11,999', accent: '#0D9488' },
  { key: 'event',      icon: '🎉', title: 'Event / Wedding',       desc: 'RSVP, schedule, countdown, gallery, packages',            price: 'From ₹9,999',  accent: '#6D28D9' },
  { key: 'hotel',      icon: '🏨', title: 'Hotel / Homestay / PG', desc: 'Room listings, amenities, booking inquiry',                price: 'From ₹17,999', accent: '#1D4ED8' },
];

/* Only live demos shown */
const HOME_DEMOS = [
  { key: 'showcase',    icon: '🛍️', title: 'Collection Showcase Website', type: 'Clothing Store — Live Demo',  live: true, url: 'https://domeweb.shop/',      urlLabel: 'domeweb.shop' },
  { key: 'restaurant',  icon: '🍽️', title: 'Restaurant / Cafe Website',   type: 'Restaurant — Live Demo',      live: true, url: 'https://northwebco.shop/pages/demos/restaurant/', urlLabel: 'Demo Site' },
];

/* ---------- RENDER SOLUTION CARDS ---------- */
function renderSolutionCards() {
  const grid = document.getElementById('solutionsGrid');
  if (!grid) return;
  grid.innerHTML = HOME_SOLUTIONS.map(s => `
    <a href="pages/solutions/${s.key}.html" class="sol-home-card" style="--card-accent:${s.accent}">
      <span class="shc-icon">${s.icon}</span>
      <div class="shc-title">${s.title}</div>
      <div class="shc-desc">${s.desc}</div>
      <div class="shc-footer">
        <span class="shc-price">${s.price.replace(/(\d+)$/, n => parseInt(n).toLocaleString('en-IN'))}</span>
        <span class="shc-arrow">→</span>
      </div>
    </a>
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

document.addEventListener('DOMContentLoaded', () => {
  renderSolutionCards();
  renderDemoGrid();
});
