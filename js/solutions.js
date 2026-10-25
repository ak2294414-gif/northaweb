/* ============================================================
   NorthWeb Co. — Solutions Data + Page Renderer v4
   Ultra Pro Pricing Calculator — All Pages
   ============================================================ */

/* ── Per-solution add-on definitions ── */
const ADDONS = {
  showcase: {
    base: { setup: 7999, monthly: 1499 },
    addons: [
      { id:'products_extra', label:'Extra Products', icon:'📦', desc:'Every additional 50 products beyond base 40', type:'stepper', step:50, min:0, priceSetup:699, priceMonthly:0, unit:'products', baseVal:0 },
      { id:'categories_extra', label:'Extra Categories', icon:'🗂️', desc:'Beyond base 3 categories included', type:'stepper', step:1, min:0, priceSetup:499, priceMonthly:0, unit:'categories', baseVal:0 },
      { id:'whatsapp_bot', label:'WhatsApp Auto-Bot', icon:'🤖', desc:'Auto-replies, product links, lead capture', type:'toggle', priceSetup:0, priceMonthly:0, default:true, locked:true, tag:'FREE' },
      { id:'instagram_feed', label:'Instagram Live Feed', icon:'📸', desc:'Auto-sync your Instagram posts to website', type:'toggle', priceSetup:999, priceMonthly:299 },
      { id:'enquiry_form', label:'Advanced Enquiry Form', icon:'📝', desc:'Multi-step form with Google Sheets auto-save', type:'toggle', priceSetup:799, priceMonthly:0 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Google ranking boost for your city', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  ecommerce: {
    base: { setup: 29999, monthly: 2999 },
    addons: [
      { id:'products_extra', label:'Extra Products (per 50)', icon:'📦', desc:'Beyond base 200 products', type:'stepper', step:50, min:0, priceSetup:699, priceMonthly:0, unit:'products', baseVal:0 },
      { id:'payment_gateway', label:'Payment Gateway (Razorpay)', icon:'💳', desc:'UPI, cards, netbanking — full integration', type:'toggle', priceSetup:0, priceMonthly:0, default:true, locked:true, tag:'FREE' },
      { id:'cod', label:'Cash on Delivery Option', icon:'🚚', desc:'COD toggle per product with order tracking', type:'toggle', priceSetup:1499, priceMonthly:0 },
      { id:'discount_codes', label:'Discount & Coupon System', icon:'🎟️', desc:'Create & manage discount codes for customers', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'abandoned_cart', label:'Abandoned Cart Recovery', icon:'🛒', desc:'Auto WhatsApp reminder for incomplete orders', type:'toggle', priceSetup:1999, priceMonthly:499 },
      { id:'review_system', label:'Product Review System', icon:'⭐', desc:'Customer reviews with photo uploads', type:'toggle', priceSetup:1499, priceMonthly:0 },
      { id:'admin_panel', label:'Easy Admin Dashboard', icon:'🖥️', desc:'Add/edit products yourself without developer', type:'toggle', priceSetup:2999, priceMonthly:499 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Google ranking boost for your city', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  restaurant: {
    base: { setup: 9999, monthly: 1999 },
    addons: [
      { id:'menu_categories', label:'Extra Menu Categories', icon:'🍽️', desc:'Beyond base 5 categories', type:'stepper', step:1, min:0, priceSetup:499, priceMonthly:0, unit:'categories', baseVal:0 },
      { id:'online_ordering', label:'Online Order System', icon:'🛵', desc:'Customers order directly — no Zomato commission', type:'toggle', priceSetup:3999, priceMonthly:499 },
      { id:'table_booking', label:'Table Reservation System', icon:'📅', desc:'Online table booking with slot management', type:'toggle', priceSetup:1499, priceMonthly:0 },
      { id:'digital_menu_qr', label:'QR Code Digital Menu', icon:'📱', desc:'Scan-to-view menu for in-restaurant use', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'loyalty_program', label:'Loyalty / Rewards Program', icon:'🎁', desc:'Points system for repeat customers', type:'toggle', priceSetup:2499, priceMonthly:499 },
      { id:'whatsapp_bot', label:'WhatsApp Order Bot', icon:'🤖', desc:'Auto-reply with menu & accept WhatsApp orders', type:'toggle', priceSetup:0, priceMonthly:0, default:true, locked:true, tag:'FREE' },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank on "restaurant near me" searches', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  business: {
    base: { setup: 11999, monthly: 1999 },
    addons: [
      { id:'extra_pages', label:'Extra Pages', icon:'📄', desc:'Beyond base 8 pages included', type:'stepper', step:1, min:0, priceSetup:799, priceMonthly:0, unit:'pages', baseVal:0 },
      { id:'live_chat', label:'Live Chat Widget', icon:'💬', desc:'Real-time chat with visitors on your site', type:'toggle', priceSetup:999, priceMonthly:299 },
      { id:'blog', label:'Blog / News Section', icon:'✍️', desc:'Publish articles — builds SEO authority', type:'toggle', priceSetup:1499, priceMonthly:0 },
      { id:'client_portal', label:'Client Portal / Login', icon:'🔐', desc:'Private area for clients to view docs/invoices', type:'toggle', priceSetup:3999, priceMonthly:499 },
      { id:'case_studies', label:'Case Studies Section', icon:'📊', desc:'Detailed project stories with results & metrics', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'multilang', label:'Bilingual Website (Hindi+English)', icon:'🇮🇳', desc:'Full site in 2 languages — auto-toggle', type:'toggle', priceSetup:2999, priceMonthly:0 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Dominate Google for your city + industry', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  portfolio: {
    base: { setup: 5999, monthly: 999 },
    addons: [
      { id:'extra_projects', label:'Extra Portfolio Items', icon:'🖼️', desc:'Beyond base 30 items (per 10 extra)', type:'stepper', step:10, min:0, priceSetup:399, priceMonthly:0, unit:'items', baseVal:0 },
      { id:'password_projects', label:'Password-Protected Projects', icon:'🔒', desc:'Show private client work securely', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'contact_booking', label:'Booking / Inquiry Calendar', icon:'📅', desc:'Clients book your time directly from site', type:'toggle', priceSetup:1499, priceMonthly:0 },
      { id:'testimonials', label:'Client Testimonials Section', icon:'⭐', desc:'Reviews with photo & project link', type:'toggle', priceSetup:499, priceMonthly:0 },
      { id:'cv_download', label:'CV / Resume Download', icon:'📄', desc:'One-click PDF download of your resume', type:'toggle', priceSetup:299, priceMonthly:0 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Get found by clients searching in your city', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  realestate: {
    base: { setup: 17999, monthly: 2499 },
    addons: [
      { id:'extra_listings', label:'Extra Property Listings', icon:'🏠', desc:'Beyond base 50 listings (per 10 extra)', type:'stepper', step:10, min:0, priceSetup:499, priceMonthly:0, unit:'listings', baseVal:0 },
      { id:'virtual_tour', label:'Virtual Tour / 360° View', icon:'🔄', desc:'Immersive property walkthroughs', type:'toggle', priceSetup:2999, priceMonthly:0 },
      { id:'emi_calculator', label:'EMI Calculator Tool', icon:'🧮', desc:'Built-in loan & EMI calculator for buyers', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'map_search', label:'Map-Based Property Search', icon:'🗺️', desc:'Buyers find properties by drawing on map', type:'toggle', priceSetup:2499, priceMonthly:0 },
      { id:'lead_management', label:'Lead Management Dashboard', icon:'📋', desc:'Track & manage all property enquiries in one place', type:'toggle', priceSetup:2999, priceMonthly:499 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank for "property in [city]" searches', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  education: {
    base: { setup: 14999, monthly: 1999 },
    addons: [
      { id:'extra_courses', label:'Extra Courses', icon:'📚', desc:'Beyond base 20 courses', type:'stepper', step:5, min:0, priceSetup:499, priceMonthly:0, unit:'courses', baseVal:0 },
      { id:'online_enrollment', label:'Online Enrollment + Fee Payment', icon:'💳', desc:'Students pay fees directly on website', type:'toggle', priceSetup:2999, priceMonthly:499 },
      { id:'doubt_forum', label:'Doubt / Q&A Forum', icon:'💬', desc:'Students ask questions, teachers reply', type:'toggle', priceSetup:2499, priceMonthly:299 },
      { id:'result_portal', label:'Result & Progress Portal', icon:'📊', desc:'Students check marks securely with login', type:'toggle', priceSetup:3499, priceMonthly:499 },
      { id:'live_classes', label:'Live Class Schedule + Zoom Links', icon:'🎥', desc:'Timetable with auto Zoom/Meet links', type:'toggle', priceSetup:1499, priceMonthly:0 },
      { id:'notice_board', label:'Digital Notice Board', icon:'📌', desc:'Post announcements visible to all students', type:'toggle', priceSetup:0, priceMonthly:0, default:true, locked:true, tag:'FREE' },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank for "coaching in [city]" searches', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  gym: {
    base: { setup: 9999, monthly: 1499 },
    addons: [
      { id:'membership_tiers', label:'Membership Plan Tiers', icon:'💪', desc:'Beyond base 3 plans (per extra tier)', type:'stepper', step:1, min:0, priceSetup:399, priceMonthly:0, unit:'plans', baseVal:0 },
      { id:'online_membership', label:'Online Membership Purchase', icon:'💳', desc:'Members buy/renew plans online with UPI', type:'toggle', priceSetup:2999, priceMonthly:499 },
      { id:'class_booking', label:'Class Slot Booking System', icon:'📅', desc:'Members book specific class slots online', type:'toggle', priceSetup:1999, priceMonthly:299 },
      { id:'transformation_gallery', label:'Transformation Gallery', icon:'🏆', desc:'Before/after stories — powerful social proof', type:'toggle', priceSetup:799, priceMonthly:0 },
      { id:'diet_plans', label:'Diet Plan Downloads', icon:'🥗', desc:'Downloadable PDF diet plans per goal', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'bmi_calculator', label:'BMI / Calorie Calculator', icon:'🧮', desc:'Interactive health tools for visitors', type:'toggle', priceSetup:699, priceMonthly:0 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank for "gym near me" in your area', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  salon: {
    base: { setup: 7999, monthly: 1499 },
    addons: [
      { id:'extra_services', label:'Extra Service Categories', icon:'💅', desc:'Beyond base full menu (per extra category)', type:'stepper', step:1, min:0, priceSetup:399, priceMonthly:0, unit:'categories', baseVal:0 },
      { id:'online_booking', label:'Online Appointment Booking', icon:'📅', desc:'Customers book slot — you get WhatsApp alert', type:'toggle', priceSetup:1999, priceMonthly:299 },
      { id:'before_after', label:'Before & After Gallery', icon:'🪞', desc:'Show transformations — builds instant trust', type:'toggle', priceSetup:799, priceMonthly:0 },
      { id:'loyalty_card', label:'Digital Loyalty Card', icon:'🎁', desc:'10th visit free — tracked digitally', type:'toggle', priceSetup:1499, priceMonthly:299 },
      { id:'stylist_profiles', label:'Individual Stylist Profiles', icon:'👩‍🎨', desc:'Each stylist with their speciality & gallery', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank for "salon near me" in your city', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  medical: {
    base: { setup: 11999, monthly: 1999 },
    addons: [
      { id:'extra_doctors', label:'Extra Doctor Profiles', icon:'👨‍⚕️', desc:'Beyond base profiles (per 5 extra doctors)', type:'stepper', step:5, min:0, priceSetup:499, priceMonthly:0, unit:'doctors', baseVal:0 },
      { id:'online_appointment', label:'Online Appointment Booking', icon:'📅', desc:'Patients book slot online — auto-confirmation', type:'toggle', priceSetup:1999, priceMonthly:299 },
      { id:'health_blog', label:'Health Tips Blog', icon:'📰', desc:'SEO-boosting health articles section', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'lab_reports', label:'Lab Report Download Portal', icon:'🔬', desc:'Patients securely download their reports', type:'toggle', priceSetup:3499, priceMonthly:499 },
      { id:'insurance_info', label:'Insurance Panel Info', icon:'🛡️', desc:'List accepted insurance providers clearly', type:'toggle', priceSetup:499, priceMonthly:0 },
      { id:'emergency_banner', label:'24/7 Emergency Banner', icon:'🚨', desc:'Sticky emergency number — always visible', type:'toggle', priceSetup:0, priceMonthly:0, default:true, locked:true, tag:'FREE' },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank for "doctor in [city]" searches', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  event: {
    base: { setup: 9999, monthly: 1499 },
    addons: [
      { id:'extra_events', label:'Multiple Events / Packages', icon:'🎉', desc:'Manage multiple events simultaneously (per 3)', type:'stepper', step:3, min:0, priceSetup:999, priceMonthly:0, unit:'events', baseVal:0 },
      { id:'rsvp_management', label:'RSVP Management System', icon:'📋', desc:'Track attendees, send confirmations automatically', type:'toggle', priceSetup:1499, priceMonthly:0 },
      { id:'countdown_timer', label:'Live Countdown Timer', icon:'⏱️', desc:'Animated countdown to event day', type:'toggle', priceSetup:0, priceMonthly:0, default:true, locked:true, tag:'FREE' },
      { id:'photo_gallery', label:'Photo/Video Gallery', icon:'📸', desc:'Past events gallery with lightbox view', type:'toggle', priceSetup:799, priceMonthly:0 },
      { id:'online_booking', label:'Online Event Booking + Payment', icon:'💳', desc:'Customers pay event deposit/full amount online', type:'toggle', priceSetup:2999, priceMonthly:499 },
      { id:'vendor_showcase', label:'Vendor / Partner Showcase', icon:'🤝', desc:'Display your decor, catering, photo partners', type:'toggle', priceSetup:999, priceMonthly:0 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank for "event planner in [city]" searches', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  },
  hotel: {
    base: { setup: 17999, monthly: 2499 },
    addons: [
      { id:'extra_rooms', label:'Extra Room Types', icon:'🛏️', desc:'Beyond base 10 room types (per 5 extra)', type:'stepper', step:5, min:0, priceSetup:799, priceMonthly:0, unit:'room types', baseVal:0 },
      { id:'direct_booking', label:'Direct Booking + Payment', icon:'💳', desc:'Guests pay deposit directly — no OTA commission', type:'toggle', priceSetup:3499, priceMonthly:499 },
      { id:'availability_calendar', label:'Availability Calendar', icon:'📅', desc:'Real-time room availability display', type:'toggle', priceSetup:1999, priceMonthly:299 },
      { id:'virtual_tour', label:'Virtual Room Tour', icon:'🔄', desc:'360° room & property walkthrough', type:'toggle', priceSetup:2499, priceMonthly:0 },
      { id:'review_widget', label:'Google Reviews Widget', icon:'⭐', desc:'Auto-display latest Google reviews', type:'toggle', priceSetup:699, priceMonthly:0 },
      { id:'local_guide', label:'Local Attractions Guide', icon:'🗺️', desc:'Curated nearby places — adds value for guests', type:'toggle', priceSetup:799, priceMonthly:0 },
      { id:'seo', label:'Local SEO Add-On', icon:'🔍', desc:'Rank for "hotel in [city]" — beat OTAs', type:'toggle', priceSetup:0, priceMonthly:3999, tag:'+₹3,999/mo' },
    ]
  }
};

/* ── Solutions master data ── */
const SOLUTIONS = {
  showcase: {
    title: 'Collection Showcase Website', tagline: 'Display your products beautifully — drive enquiries on WhatsApp',
    icon: '🛍️', accent: '#0052CC',
    seoDesc: 'Get a fast, mobile-first collection showcase website for your store. NorthWeb Co. builds product display websites for businesses across Assam and Northeast India.',
    forBusinesses: ['Clothing stores & boutiques','Jewellery shops','Handicraft sellers','Electronics dealers','Home decor & furniture','Gift shops','Book stores','Art galleries','Any business with products to display'],
    features: ['Product gallery with categories & filters','Mobile-optimised product cards','WhatsApp "Ask About This" button per product','Business info & contact section','Google Maps embed','Photo gallery / lookbook section','SEO-ready page structure','Fast loading — no heavy frameworks','Up to 40 products, 3 categories'],
    setup: '₹7,999', monthly: '₹1,499/month',
    includes: ['Up to 40 products','3 product categories','WhatsApp integration','Contact & location section','Mobile responsive','2 free revision rounds','Delivery in 7–10 days'],
    serviceKey: 'showcase', demo: 'https://domeweb.shop/', demoLabel: 'View Live Demo',
    related: ['ecommerce','restaurant','business']
  },
  ecommerce: {
    title: 'D2C E-commerce Store', tagline: 'Sell directly to customers online — no middleman, full control',
    icon: '🛒', accent: '#E8820C',
    seoDesc: 'Get a full D2C e-commerce website with cart, checkout and UPI payment. NorthWeb Co. builds online stores for brands across Assam and Northeast India.',
    forBusinesses: ['Clothing & fashion brands','Food & beverage brands','Handicraft & artisan sellers','Cosmetics & beauty brands','Electronics & gadget sellers','Home & lifestyle brands','Any brand selling products directly online'],
    features: ['Full product catalogue with variants','Shopping cart & checkout flow','UPI / Razorpay payment integration','Order confirmation & tracking page','Customer inquiry & support section','Discount code / coupon system','Admin-friendly product management','Mobile-first design throughout','Inventory & stock status display'],
    setup: '₹29,999', monthly: '₹2,999/month',
    includes: ['Up to 200 products','Payment gateway integration','Cart & checkout','Order confirmation flow','Admin update guide','2 free revision rounds','Delivery in 14–20 days'],
    serviceKey: 'ecommerce', demo: null, related: ['showcase','business','restaurant']
  },
  restaurant: {
    title: 'Restaurant / Cafe Website', tagline: 'Beautiful online presence for your food business',
    icon: '🍽️', accent: '#16A34A',
    seoDesc: 'Get a professional restaurant or cafe website with digital menu, gallery and table booking. NorthWeb Co. serves food businesses across Assam and Northeast India.',
    forBusinesses: ['Restaurants & dhabas','Cafes & coffee shops','Bakeries & patisseries','Cloud kitchens','Food trucks','Sweet shops & mithai stores','Tiffin & catering services'],
    features: ['Digital menu with photos & prices','Online table reservation form','WhatsApp order / inquiry button','Food photo gallery','Business hours & location section','Special offers & promotions banner','Google Maps integration','Event & private dining section','Mobile-optimised design'],
    setup: '₹9,999', monthly: '₹1,999/month',
    includes: ['Full menu setup (up to 5 categories)','Reservation form','Photo gallery','Google Maps embed','WhatsApp integration','2 free revision rounds','Delivery in 7–12 days'],
    serviceKey: 'restaurant', demo: null, related: ['showcase','business','event']
  },
  business: {
    title: 'Business / Corporate Website', tagline: 'Professional online presence that builds credibility for your company',
    icon: '🏢', accent: '#7C3AED',
    seoDesc: 'Get a professional business or corporate website. NorthWeb Co. builds credibility-first websites for agencies, firms, and service businesses across Northeast India.',
    forBusinesses: ['Agencies & consultancies','IT & tech companies','Law firms & CA offices','Trading & import-export companies','Contractors & builders','Service-based businesses','Startups & small businesses'],
    features: ['Company overview & mission section','Services / products listing','Team / about us section','Client portfolio or case studies','Testimonials & trust signals','Contact & enquiry form','WhatsApp & email integration','Professional branded design','SEO-optimised structure'],
    setup: '₹11,999', monthly: '₹1,999/month',
    includes: ['Up to 8 pages','Contact & inquiry form','Team profiles','Testimonials section','WhatsApp integration','2 free revision rounds','Delivery in 10–14 days'],
    serviceKey: 'business', demo: null, related: ['portfolio','ecommerce','showcase']
  },
  portfolio: {
    title: 'Portfolio Website', tagline: 'Showcase your best work — attract better clients',
    icon: '🎨', accent: '#DB2777',
    seoDesc: 'Get a clean, fast portfolio website to showcase your work and attract clients. NorthWeb Co. builds portfolio sites for creatives across Assam and Northeast India.',
    forBusinesses: ['Photographers & videographers','Graphic & UI designers','Architects & interior designers','Makeup artists & stylists','Writers & content creators','Freelancers & consultants','Artists & illustrators'],
    features: ['Work / project gallery (grid or masonry)','About & skills / expertise section','Client testimonials','Contact & inquiry form','Social media links','Downloadable CV option','Clean, minimal design','Fast loading — great first impression','Mobile responsive'],
    setup: '₹5,999', monthly: '₹999/month',
    includes: ['Up to 30 portfolio items','About & skills section','Contact form','Social links','Mobile responsive','2 free revision rounds','Delivery in 5–8 days'],
    serviceKey: 'portfolio', demo: null, related: ['business','showcase','salon']
  },
  realestate: {
    title: 'Real Estate / Property Website', tagline: 'Showcase properties and generate serious buyer enquiries online',
    icon: '🏠', accent: '#0891B2',
    seoDesc: 'Get a professional real estate website with property listings and inquiry forms. NorthWeb Co. builds property websites for agents and builders across Northeast India.',
    forBusinesses: ['Real estate agents & brokers','Property builders & developers','PG & hostel owners','Commercial property owners','Land dealers','Flat / house sellers','Housing societies'],
    features: ['Property listings with photo galleries','Search & filter by type / budget','Individual property detail pages','Enquiry form per property','WhatsApp contact button per listing','Agent / company profile section','Google Maps for each property','RERA / compliance information section','Mobile-optimised browsing'],
    setup: '₹17,999', monthly: '₹2,499/month',
    includes: ['Up to 50 property listings','Search & filter','Enquiry forms','Agent profile','WhatsApp integration','2 free revision rounds','Delivery in 12–18 days'],
    serviceKey: 'realestate', demo: null, related: ['business','hotel','showcase']
  },
  education: {
    title: 'Educational / Coaching Website', tagline: 'Attract more students and grow your institute online',
    icon: '📚', accent: '#D97706',
    seoDesc: 'Get a professional website for your coaching centre, school or educational institute. NorthWeb Co. builds education websites across Assam and Northeast India.',
    forBusinesses: ['Coaching centres & tuition classes','Schools & colleges','Online course creators','Skill development institutes','Language & music academies','Professional training centres','Tutors & home teachers'],
    features: ['Course / subject listings with fees','Batch schedule & timetable','Online enrollment / inquiry form','Faculty & teacher profiles','Student results & achievements section','Notice board / announcements','Photo gallery (campus, events)','WhatsApp admission inquiry button','Mobile-optimised design'],
    setup: '₹14,999', monthly: '₹1,999/month',
    includes: ['Up to 20 courses','Enrollment form','Faculty profiles','Results section','Notice board','2 free revision rounds','Delivery in 10–15 days'],
    serviceKey: 'education', demo: null, related: ['business','portfolio','gym']
  },
  gym: {
    title: 'Gym / Fitness Studio Website', tagline: 'Attract new members and showcase your facilities online',
    icon: '💪', accent: '#DC2626',
    seoDesc: 'Get a high-energy website for your gym or fitness studio. NorthWeb Co. builds fitness websites for gyms, yoga studios, and sports academies across Northeast India.',
    forBusinesses: ['Gyms & fitness centres','Yoga studios','CrossFit & functional training','Martial arts academies','Dance studios & academies','Sports training centres','Personal trainers'],
    features: ['Membership plans & pricing table','Class schedule / timetable','Trainer profiles & bios','Facilities photo gallery','Online trial / inquiry booking form','Transformation stories / testimonials','Free trial CTA section','WhatsApp membership inquiry button','Mobile-optimised design'],
    setup: '₹9,999', monthly: '₹1,499/month',
    includes: ['Membership plans display','Class schedule','Trainer profiles','Gallery','Inquiry form','2 free revision rounds','Delivery in 7–12 days'],
    serviceKey: 'gym', demo: null, related: ['salon','business','education']
  },
  salon: {
    title: 'Salon / Beauty Parlor Website', tagline: 'Beautiful website to grow your beauty business',
    icon: '💅', accent: '#EC4899',
    seoDesc: 'Get a stunning website for your salon, spa or beauty parlor. NorthWeb Co. builds beauty business websites across Assam and Northeast India.',
    forBusinesses: ['Hair salons & beauty parlors','Spas & wellness centres','Nail studios','Makeup artists','Tattoo studios','Barbershops & grooming studios','Bridal makeup & styling services'],
    features: ['Services menu with prices','Photo gallery (work & ambience)','Online appointment booking form','Staff / stylist profiles','Customer reviews section','Before & after gallery','Offers & packages section','WhatsApp booking button','Mobile-optimised design'],
    setup: '₹7,999', monthly: '₹1,499/month',
    includes: ['Full services menu','Gallery','Appointment form','Staff profiles','WhatsApp integration','2 free revision rounds','Delivery in 7–10 days'],
    serviceKey: 'salon', demo: null, related: ['gym','portfolio','business']
  },
  medical: {
    title: 'Clinic / Medical Website', tagline: 'Build trust and help patients find you online',
    icon: '🏥', accent: '#0D9488',
    seoDesc: 'Get a professional website for your clinic, hospital or medical centre. NorthWeb Co. builds medical websites for healthcare providers across Northeast India.',
    forBusinesses: ['Clinics & hospitals','Diagnostic centres','Dentists & dental clinics','Pharmacies','Veterinary clinics','Physiotherapy & rehab centres','Eye clinics & specialists'],
    features: ['Doctor & specialist profiles','Services & treatments listing','Online appointment booking form','Timings & location section','Emergency contact section','Health tips / blog section','Insurance information','WhatsApp appointment button','Mobile-optimised design'],
    setup: '₹11,999', monthly: '₹1,999/month',
    includes: ['Doctor profiles','Appointment form','Services listing','Location & hours','Emergency contacts','2 free revision rounds','Delivery in 8–12 days'],
    serviceKey: 'medical', demo: null, related: ['business','education','gym']
  },
  event: {
    title: 'Event / Wedding Website', tagline: 'Make every event unforgettable — online and offline',
    icon: '🎉', accent: '#6D28D9',
    seoDesc: 'Get a professional website for your event management company or wedding venue. NorthWeb Co. builds event websites across Assam and Northeast India.',
    forBusinesses: ['Wedding planners & decorators','Event management companies','Wedding & banquet venues','Corporate event organisers','Birthday & party planners','Conference & seminar organisers','Live show & entertainment companies'],
    features: ['Event details & full schedule','RSVP / attendance form','Photo & video gallery','Venue / location with Google Maps','Countdown timer to event','Package & pricing section','Vendor showcase section','WhatsApp contact button','Mobile-optimised design'],
    setup: '₹9,999', monthly: '₹1,499/month',
    includes: ['Event details page','RSVP form','Gallery','Countdown timer','Location map','2 free revision rounds','Delivery in 7–12 days'],
    serviceKey: 'event', demo: null, related: ['restaurant','business','hotel']
  },
  hotel: {
    title: 'Hotel / Homestay / PG Website', tagline: 'Attract more guests and get direct bookings',
    icon: '🏨', accent: '#1D4ED8',
    seoDesc: 'Get a professional website for your hotel, homestay, or PG. NorthWeb Co. builds hospitality websites for properties across Assam and Northeast India.',
    forBusinesses: ['Hotels & resorts','Homestays & guesthouses','PGs & paying guest houses','Lodges & service apartments','Eco-resorts & nature camps','Dormitories & backpacker stays','Vacation rentals'],
    features: ['Room types with photos & amenities','Pricing & availability info','Online booking inquiry form','Photo gallery of property','Facilities & services section','Location & nearby attractions','Guest reviews section','WhatsApp booking button','Mobile-optimised design'],
    setup: '₹17,999', monthly: '₹2,499/month',
    includes: ['Up to 10 room types','Inquiry form','Photo gallery','Facilities section','Location map','2 free revision rounds','Delivery in 10–14 days'],
    serviceKey: 'hotel', demo: null, related: ['restaurant','event','business']
  },
  seo: {
    title: 'Local SEO Add-On', tagline: 'Get found on Google by customers in your city',
    icon: '🔍', accent: '#0052CC',
    seoDesc: 'Boost your local Google rankings with NorthWeb Co. SEO services for businesses across Assam and Northeast India.',
    forBusinesses: ['Any business with a website','Restaurants & food businesses','Retail stores & boutiques','Service businesses','Healthcare providers','Educational institutes','Hotels & hospitality'],
    features: ['Google My Business setup & optimisation','Local keyword research & targeting','On-page SEO (title tags, descriptions, headers)','Google Maps ranking improvement','Monthly ranking & traffic report','Review & reputation management guidance','Schema markup for local search','Competitor analysis','Mobile & speed optimisation review'],
    setup: null, monthly: '₹3,999 – ₹7,999/month',
    includes: ['Google My Business optimisation','Monthly keyword report','On-page SEO updates','Google Maps optimisation','Monthly performance report','WhatsApp support'],
    serviceKey: 'seo', demo: null, related: ['showcase','restaurant','business']
  }
};

/* ============================================================
   UNIVERSAL PRICING CALCULATOR ENGINE
   ============================================================ */

let _calcState = {};

function initCalcState(key) {
  const cfg = ADDONS[key];
  if (!cfg) return;
  _calcState = { key, addons: {} };
  cfg.addons.forEach(a => {
    if (a.type === 'stepper') {
      _calcState.addons[a.id] = { enabled: true, qty: a.baseVal || 0 };
    } else {
      _calcState.addons[a.id] = { enabled: !!(a.default) };
    }
  });
}

function calcSetToggle(id, val) {
  if (_calcState.addons[id]) _calcState.addons[id].enabled = val;
  calcRender();
}

function calcSetQty(id, delta, step) {
  const s = _calcState.addons[id];
  if (!s) return;
  s.qty = Math.max(0, (s.qty || 0) + delta);
  calcRender();
}

function calcRender() {
  const key = _calcState.key;
  const cfg = ADDONS[key];
  if (!cfg) return;

  let totalSetup   = cfg.base.setup;
  let totalMonthly = cfg.base.monthly;
  const lines = [];

  cfg.addons.forEach(a => {
    const st = _calcState.addons[a.id];
    if (!st) return;
    if (a.type === 'stepper') {
      const qty   = st.qty || 0;
      const slots = Math.ceil(qty / (a.step || 1));
      const cost  = slots * (a.priceSetup || 0);
      const mCost = slots * (a.priceMonthly || 0);
      totalSetup   += cost;
      totalMonthly += mCost;
      if (cost > 0 || mCost > 0) {
        lines.push(`+${qty} ${a.unit} → +₹${cost.toLocaleString('en-IN')} setup${mCost > 0 ? ` +₹${mCost}/mo` : ''}`);
      }
      // update display
      const qEl = document.getElementById(`cq-${a.id}`);
      if (qEl) qEl.textContent = (cfg.addons.find(x=>x.id===a.id) ? (a.baseVal || 0) : 0) + qty;
      const hEl = document.getElementById(`ch-${a.id}`);
      if (hEl) hEl.textContent = qty > 0 ? `+${qty} ${a.unit} → +₹${cost.toLocaleString('en-IN')} one-time` : 'Base plan included';
    } else if (a.type === 'toggle' && st.enabled && !a.locked) {
      totalSetup   += (a.priceSetup   || 0);
      totalMonthly += (a.priceMonthly || 0);
      const parts = [];
      if (a.priceSetup   > 0) parts.push(`+₹${a.priceSetup.toLocaleString('en-IN')} setup`);
      if (a.priceMonthly > 0) parts.push(`+₹${a.priceMonthly.toLocaleString('en-IN')}/mo`);
      if (parts.length) lines.push(`${a.label}: ${parts.join(', ')}`);
    }
  });

  const setupEl = document.getElementById('cr-setup');
  const mEl     = document.getElementById('cr-monthly');
  const bdEl    = document.getElementById('cr-breakdown');
  const btnEl   = document.getElementById('cr-book-btn');

  if (setupEl)   setupEl.textContent = '₹' + totalSetup.toLocaleString('en-IN');
  if (mEl)       mEl.textContent     = '₹' + totalMonthly.toLocaleString('en-IN') + '/mo';
  if (bdEl)      bdEl.innerHTML      = lines.length
    ? lines.map(l => `<li>${l}</li>`).join('')
    : '<li>Base plan — no add-ons selected</li>';

  if (btnEl) {
    // Build a compact addons summary for the URL
    const addonsSummary = lines.length ? lines.join(' | ') : 'Base plan only';
    const p = new URLSearchParams({
      service:       key,
      locked:        '1',
      setup_price:   totalSetup,
      monthly_price: totalMonthly,
      addons:        addonsSummary
    });
    btnEl.href = `/pages/booking.html?${p}`;
  }
}

function buildCalculatorHTML(key) {
  const cfg = ADDONS[key];
  const sol = SOLUTIONS[key];
  if (!cfg || !sol) return '';

  const addonCards = cfg.addons.map(a => {
    if (a.type === 'stepper') {
      const baseDisplay = (a.baseVal || 0);
      return `
<div class="cpro-card">
  <div class="cpro-card-top">
    <span class="cpro-icon">${a.icon}</span>
    <div class="cpro-info">
      <div class="cpro-label">${a.label}</div>
      <div class="cpro-desc">${a.desc}</div>
    </div>
    ${a.priceSetup ? `<span class="cpro-badge">+₹${a.priceSetup.toLocaleString('en-IN')} / ${a.step} ${a.unit}</span>` : ''}
  </div>
  <div class="cpro-stepper">
    <button class="cpro-step-btn" onclick="calcSetQty('${a.id}',-${a.step},${a.step})" aria-label="Decrease">−</button>
    <div class="cpro-step-mid">
      <span class="cpro-qty" id="cq-${a.id}">${baseDisplay}</span>
      <span class="cpro-unit">${a.unit}</span>
    </div>
    <button class="cpro-step-btn cpro-step-plus" onclick="calcSetQty('${a.id}',${a.step},${a.step})" aria-label="Increase">+</button>
  </div>
  <div class="cpro-hint" id="ch-${a.id}">Base plan included</div>
</div>`;
    } else {
      const isLocked  = !!a.locked;
      const isDefault = !!a.default;
      const badge = a.tag
        ? `<span class="cpro-badge ${a.tag==='FREE'?'cpro-badge-free':''}">${a.tag}</span>`
        : (a.priceSetup > 0 && a.priceMonthly > 0
          ? `<span class="cpro-badge">+₹${a.priceSetup.toLocaleString('en-IN')} setup +₹${a.priceMonthly}/mo</span>`
          : a.priceSetup > 0
          ? `<span class="cpro-badge">+₹${a.priceSetup.toLocaleString('en-IN')} setup</span>`
          : a.priceMonthly > 0
          ? `<span class="cpro-badge">+₹${a.priceMonthly.toLocaleString('en-IN')}/mo</span>`
          : '');
      return `
<div class="cpro-card ${isDefault?'cpro-card-active':''}" id="ccard-${a.id}">
  <div class="cpro-card-top">
    <span class="cpro-icon">${a.icon}</span>
    <div class="cpro-info">
      <div class="cpro-label">${a.label}</div>
      <div class="cpro-desc">${a.desc}</div>
    </div>
    ${badge}
  </div>
  <label class="cpro-toggle ${isLocked?'cpro-toggle-locked':''}">
    <input type="checkbox" ${isDefault?'checked':''} ${isLocked?'disabled':''}
      onchange="calcSetToggle('${a.id}',this.checked); document.getElementById('ccard-${a.id}').classList.toggle('cpro-card-active',this.checked)">
    <span class="cpro-track"></span>
    <span class="cpro-toggle-label">${isLocked ? 'Always included' : isDefault ? 'Added' : 'Add this'}</span>
  </label>
</div>`;
    }
  }).join('');

  return `
<section class="sol-section cpro-section" id="pricingCalc" style="--sol-accent:${sol.accent}; background: linear-gradient(145deg, #060d1f 0%, #0a1628 50%, #060d1f 100%) !important;">
  <div class="sol-section-inner">
    <div class="section-eyebrow" style="color:rgba(255,255,255,.55)">Build Your Package</div>
    <div class="cpro-header-row">
      <div>
        <h2 style="color:#fff">Customise & see your price live</h2>
        <p class="cpro-subtitle">Toggle features on or off — your total updates instantly</p>
      </div>
      <div class="cpro-base-pill">Base: <strong>₹${cfg.base.setup.toLocaleString('en-IN')}</strong> + ₹${cfg.base.monthly.toLocaleString('en-IN')}/mo</div>
    </div>

    <div class="cpro-layout">
      <!-- Add-ons grid -->
      <div class="cpro-addons">
        ${addonCards}
      </div>

      <!-- Live price summary -->
      <div class="cpro-summary">
        <div class="cpro-summary-inner">

          <div class="cpro-sum-title">Your Package</div>

          <div class="cpro-price-block">
            <div class="cpro-price-label">One-time Setup</div>
            <div class="cpro-price-val" id="cr-setup">₹${cfg.base.setup.toLocaleString('en-IN')}</div>
          </div>

          <div class="cpro-divider"></div>

          <div class="cpro-price-block">
            <div class="cpro-price-label">Monthly <span class="cpro-mandatory-chip">MANDATORY</span></div>
            <div class="cpro-price-val cpro-price-monthly" id="cr-monthly">₹${cfg.base.monthly.toLocaleString('en-IN')}/mo</div>
          </div>

          <div class="cpro-divider"></div>

          <div class="cpro-breakdown-title">What's added</div>
          <ul class="cpro-breakdown" id="cr-breakdown">
            <li>Base plan — no add-ons selected</li>
          </ul>

          <a class="btn-primary cpro-cta" id="cr-book-btn"
            href="/pages/booking.html?service=${key}&locked=1">
            Book Free Consultation →
          </a>
          <p class="cpro-footnote">No payment now · Ankur replies in 24 hrs</p>

        </div>
      </div>
    </div>
  </div>
</section>`;
}

/* Expose globally */
window.calcSetToggle = calcSetToggle;
window.calcSetQty    = calcSetQty;
window.calcRender    = calcRender;

/* ============================================================
   PAGE RENDERER
   ============================================================ */
function renderSolutionPage(key) {
  const s = SOLUTIONS[key];
  if (!s) {
    document.getElementById('solution-main').innerHTML = '<p style="padding:4rem 6%;color:#DC2626">Solution not found.</p>';
    return;
  }

  document.title = s.title + ' — NorthWeb Co.';
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.content = s.seoDesc;
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = 'https://northwebco.shop/pages/solutions/' + key + '.html';

  const bc = document.getElementById('breadcrumb-root');
  if (bc) bc.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <span><a href="/index.html">Home</a></span>
      <span><a href="/index.html#solutions">Solutions</a></span>
      <span>${s.title}</span>
    </nav>`;

  const bookingBase = '/pages/booking.html';
  const demoBtn = s.demo
    ? `<a href="${s.demo}" target="_blank" rel="noopener noreferrer" class="btn-secondary sol-demo-btn">View Live Demo ↗</a>`
    : `<span class="sol-demo-soon">Demo coming soon</span>`;

  const relatedHTML = s.related.map(r => {
    const rel = SOLUTIONS[r]; if (!rel) return '';
    return `<a href="pages/solutions/${r}.html" class="sol-related-card">
      <span class="src-icon">${rel.icon}</span>
      <span class="src-title">${rel.title}</span>
      <span class="src-price">From ${rel.setup || rel.monthly}</span>
    </a>`;
  }).join('');

  const hasCalc = !!ADDONS[key];

  const html = `
<section class="sol-hero" style="--sol-accent:${s.accent}">
  <div class="sol-hero-inner">
    <div class="sol-hero-icon">${s.icon}</div>
    <div class="section-eyebrow">Website Solution</div>
    <h1>${s.title}</h1>
    <p class="sol-tagline">${s.tagline}</p>
    <div class="sol-hero-btns">
      <a href="${bookingBase}?service=${s.serviceKey}&locked=1" class="btn-primary">
        Book Free Consultation — ${s.setup ? s.setup + ' onwards' : s.monthly}
      </a>
      ${demoBtn}
    </div>
  </div>
</section>

<section class="sol-section sol-for-section">
  <div class="sol-section-inner">
    <div class="section-eyebrow">Who Is This For?</div>
    <h2>Perfect for these businesses</h2>
    <div class="sol-for-grid">
      ${s.forBusinesses.map(b => `<div class="sol-for-item"><span class="sol-for-icon">✓</span>${b}</div>`).join('')}
    </div>
  </div>
</section>

<section class="sol-section sol-features-section">
  <div class="sol-section-inner">
    <div class="section-eyebrow">What You Get</div>
    <h2>Everything included in this website</h2>
    <div class="sol-features-grid">
      ${s.features.map(f => `<div class="sol-feature-item"><span class="sf-check">✓</span><span>${f}</span></div>`).join('')}
    </div>
  </div>
</section>

${hasCalc ? buildCalculatorHTML(key) : `
<section class="sol-section sol-pricing-section">
  <div class="sol-section-inner">
    <div class="section-eyebrow">Transparent Pricing</div>
    <h2>No hidden costs</h2>
    <div class="sol-price-card">
      <div class="spc-left">
        ${s.setup ? `<div class="spc-price-row"><span class="spc-label">One-time setup</span><span class="spc-amount">${s.setup}</span></div>` : ''}
        <div class="spc-price-row">
          <span class="spc-label">${s.setup ? 'Monthly maintenance' : 'Monthly'} <span class="spc-mandatory">Mandatory</span></span>
          <span class="spc-amount spc-monthly">${s.monthly}</span>
        </div>
        <p class="spc-note">Final price depends on exact requirements. Book a free call — we'll give you a fixed quote within 24 hours.</p>
      </div>
      <div class="spc-right">
        <h3>What's included</h3>
        <ul class="spc-list">
          ${s.includes.map(i => `<li><span>✓</span>${i}</li>`).join('')}
        </ul>
        <a href="${bookingBase}?service=${s.serviceKey}&locked=1" class="btn-primary spc-cta">Book Free Consultation</a>
        <p class="spc-sub">No payment now · Ankur replies within 24 hrs on WhatsApp</p>
      </div>
    </div>
  </div>
</section>`}

<section class="sol-section sol-process-section">
  <div class="sol-section-inner">
    <div class="section-eyebrow">How It Works</div>
    <h2>From chat to live website in 5 steps</h2>
    <p class="sol-process-sub">You share your contact details. We handle everything else end-to-end.</p>
    <div class="sol-steps">
      <div class="sol-step"><div class="sol-step-num">1</div><h3>Free Consultation</h3><p>Book via form. Ankur calls within 24 hrs on WhatsApp.</p></div>
      <div class="sol-step"><div class="sol-step-num">2</div><h3>Share Requirements</h3><p>Tell us your business, goals, and what you need.</p></div>
      <div class="sol-step"><div class="sol-step-num">3</div><h3>Design & Build</h3><p>We design and build your website. You review progress.</p></div>
      <div class="sol-step"><div class="sol-step-num">4</div><h3>Review & Revise</h3><p>2 free revision rounds until you're 100% happy.</p></div>
      <div class="sol-step"><div class="sol-step-num">5</div><h3>Go Live!</h3><p>Your website goes live. We hand over everything.</p></div>
    </div>
  </div>
</section>

<section class="sol-section sol-related-section">
  <div class="sol-section-inner">
    <div class="section-eyebrow">Also Available</div>
    <h2>Other website solutions</h2>
    <div class="sol-related-grid">${relatedHTML}</div>
    <div style="text-align:center;margin-top:2rem">
      <a href="/index.html#solutions" class="btn-secondary">See All 12 Solutions →</a>
    </div>
  </div>
</section>`;

  document.getElementById('solution-main').innerHTML = html;

  if (hasCalc) {
    initCalcState(key);
    setTimeout(calcRender, 30);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const key = (typeof SOLUTION_KEY !== 'undefined') ? SOLUTION_KEY : window.SOLUTION_KEY;
  if (key) renderSolutionPage(key);
});
