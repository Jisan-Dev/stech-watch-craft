// Initialize event collection section
export function initEventCollection() {
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
