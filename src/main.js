import { particleCta } from "./particles-cta";
import "./style.css";
import { initReviewsSlider } from "./swiper";

// Initialize particles
function initParticles() {
  const container = document.getElementById("particles-container");

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.width = Math.random() * 38 + 4 + "px";
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 3 + "s";
    particle.style.animationDuration = Math.random() * 2 + 3 + "s";
    container.appendChild(particle);
  }
}

// Initialize series badges
function initSeriesBadges() {
  const series = [
    "Apple watch Ultra 2",
    "Apple watch Ultra 3",
    "Series 1",
    "Series 2",
    "Series 3",
    "Series 4",
    "Series 5",
    "Series 6",
    "Series 6",
  ];

  const container = document.getElementById("series-badges");

  series.forEach((item) => {
    const badge = document.createElement("div");
    badge.className =
      "px-4 py-2 rounded-full border text-primary text-2xl font-medium hover:bg-primary/10 transition-colors cursor-pointer";
    badge.style.borderColor = "rgba(38, 166, 154, 0.5)";
    badge.textContent = item;
    container.appendChild(badge);
  });
}

// Initialize features section
function initFeatures() {
  const features = [
    {
      icon: "smartphone",
      title: "Universal Support",
      description:
        "Works perfectly on all Apple Watch sizes and generations, automatically adapting to your device.",
    },
    {
      icon: "refresh",
      title: "Regular Updates",
      description:
        "Continuous updates and new faces added weekly to keep your watch fresh and modern.",
    },
    {
      icon: "zap",
      title: "Easy Installation",
      description:
        "One-tap installation process with automatic sync across all your Apple devices.",
    },
  ];

  const container = document.getElementById("features-grid");

  features.forEach((feature, index) => {
    const card = document.createElement("div");
    card.className =
      "group relative p-8 rounded-2xl border border-primary bg-neutral-900 transition-all duration-300 hover:scale-105 hover:border-primary/40 shadow-2xl";
    // card.style.background = "#00B8A9";
    // card.style.background =
    //   "linear-gradient(to bottom right, rgba(38, 166, 154, 0.2), rgba(38, 166, 154, 0.05))";
    // card.style.borderColor = "#00B8A9";

    // Icon SVGs
    const icons = {
      smartphone:
        '<svg class="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      refresh:
        '<svg class="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      zap: '<svg class="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    };

    card.innerHTML = `
          <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:animate-glow" style="background: #00B8A9">
            ${icons[feature.icon]}
          </div>
          <h3 class="text-2xl font-bold mb-4 text-primary">
            ${feature.title}
          </h3>
          <p class="text-neutral-100 ">
            ${feature.description}
          </p>
        `;

    container.appendChild(card);
  });
}

// Initialize event collection section
function initEventCollection() {
  const events = [
    {
      title: "Halloween Collection",
      subtitle: "Exclusive event collection",
      theme: "halloween",
      imageUrl: "/event1.jpg",
    },
    {
      title: "Thanksgiving Day",
      subtitle: "Exclusive event collection",
      theme: "thanksgiving",
      imageUrl: "/event2.png",
    },
    {
      title: "Christmas Eve",
      subtitle: "Exclusive event collection",
      theme: "christmas",
      imageUrl: "/event3.png",
    },
  ];

  const container = document.getElementById("event-cards");

  events.forEach((event, index) => {
    const card = document.createElement("div");
    card.className =
      "group relative rounded-3xl overflow-hidden border-2 transition-all duration-300 h-[350px] sm:h-[430px] flex items-end";
    // card.style.borderColor = `#00B8A9`;
    card.style.backgroundImage = `url(${event.imageUrl})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.style.backgroundRepeat = "no-repeat";

    card.innerHTML = `
          <!-- Background Gradient -->
          <div class="absolute inset-0 w-full h-[105%] bg-linear-to-b from-neutral-900/10 to-neutral-950 overflow-hidden"></div> 

          <!-- Content -->
          <div class="relative z-10 p-4 sm:p-8 flex max-sm:flex-col sm:items-center sm:justify-between w-full">
            <div class="sm:flex-1 max-sm:mb-5">
              <h3 class="text-3xl sm:text-5xl font-bold text-white mb-2">
                ${event.title}
              </h3>
              <p class="text-white/70 text-2xl sm:text-2xl">
                ${event.subtitle}
              </p>
            </div>

            <div>
              <!-- CTA Button -->
              <button class="bg-primary hover:bg-primary-glow text-black rounded-full font-medium px-8 py-2 sm:py-3 text-xl sm:text-3xl shadow-xl transition-all duration-300 cursor-pointer">
                Try Now
              </button>
            </div>
          </div>
        `;

    // Add hover effect
    card.addEventListener("mouseenter", () => {
      // card.style.borderColor = "rgba(38, 166, 154, 0.2)";
      card.style.transform = "scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      // card.style.borderColor = "rgba(38, 166, 154, 0.2)";
      card.style.transform = "scale(1)";
    });

    container.appendChild(card);
  });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initSeriesBadges();
  initFeatures();
  initEventCollection();
  initReviewsSlider();
  particleCta();
});
