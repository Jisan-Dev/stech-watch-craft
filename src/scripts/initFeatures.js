// Initialize features section
export function initFeatures() {
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
