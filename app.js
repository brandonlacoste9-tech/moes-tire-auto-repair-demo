/* EN-only i18n for Moe's Tire & Auto Repair demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(937) 231-5421",
    "hero.kicker": "Dayton, Ohio · Tires & full-service auto repair · Mon–Fri 9 AM–6:30 PM",
    "hero.title": "Tires, brakes & repairs<br>— all in one stop.",
    "hero.sub": "Rated 4.2 out of 5 from 49 reviews: tire service, brake repairs, A/C and engine diagnostics for Dayton drivers.",
    "hero.cta1": "Call (937) 231-5421",
    "hero.cta2": "See services",
    "trust.t1t": "Tire specialists",
    "trust.t1d": "Sales, rotations & service",
    "trust.t2t": "Full-service repair",
    "trust.t2d": "Brakes, A/C, diagnostics & more",
    "trust.t3t": "Fair prices",
    "trust.t3d": "Honest work, no surprises",
    "stats.s1n": "4.2\u2605",
    "stats.s1l": "from 49 reviews",
    "stats.s2n": "Tires",
    "stats.s2l": "& auto under one roof",
    "stats.s3n": "Dayton",
    "stats.s3l": "& surrounding areas",
    "stats.s4n": "Mon–Fri",
    "stats.s4l": "9:00 AM – 6:30 PM",
    "services.kicker": "What we do",
    "services.title": "Everything your car needs",
    "services.s1t": "Tire service & rotations",
    "services.s1d": "Tire sales, mounting, balancing and rotations — tires are our name and our game.",
    "services.s2t": "Brake repairs",
    "services.s2d": "Pads, rotors and full brake service to keep you stopping safely.",
    "services.s3t": "A/C repairs",
    "services.s3d": "Air conditioning diagnostics and repair — stay cool all summer long.",
    "services.s4t": "Engine diagnostics",
    "services.s4d": "Check-engine light on? We pinpoint the problem and fix it right.",
    "services.s5t": "General auto repair",
    "services.s5d": "Suspension, steering, batteries and more — one shop for it all.",
    "services.s6t": "Routine maintenance",
    "services.s6d": "Oil changes, tune-ups and scheduled maintenance to keep you rolling.",
    "why.kicker": "Why choose us",
    "why.title": "Dayton's one-stop car shop",
    "why.intro": "Tires and repairs under one roof means one trip, one bill and one team you can trust. We treat every car like it's our own.",
    "why.l1t": "Tires are our specialty",
    "why.l1d": "It's in our name — sales, mounting and service done fast.",
    "why.l2t": "Full-service repair",
    "why.l2d": "Brakes, A/C, diagnostics and maintenance in one visit.",
    "why.l3t": "Fair, honest pricing",
    "why.l3d": "You approve the work before we start — no surprises.",
    "why.l4t": "Quick turnaround",
    "why.l4d": "Most jobs done same day so you can get back on the road.",
    "gallery.kicker": "In the shop",
    "gallery.title": "Real work, real results",
    "gallery.c1": "A/C service for summer comfort",
    "gallery.c2": "Diagnostics that find the real problem",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 4.2 out of 5 by Dayton drivers",
    "reviews.more": "See what customers say about us — 4.2 stars from 49 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Do you sell tires?",
    "faq.a1": "Yes — tires are our specialty. Call (937) 231-5421 for sizes, prices and availability.",
    "faq.q2": "Do I need an appointment?",
    "faq.a2": "Calling ahead helps us get you in faster, but walk-ins are welcome during our open hours.",
    "faq.q3": "Can you fix my car's A/C?",
    "faq.a3": "Yes — we diagnose and repair air conditioning systems so you stay cool.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday to Friday, 9:00 AM to 6:30 PM. We're closed Saturday and Sunday.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Mon – Fri: 9:00 AM – 6:30 PM<br>Sat – Sun: Closed",
    "contact.cta": "Call now",
    "footer.tag": "Auto repair · Dayton, Ohio"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
