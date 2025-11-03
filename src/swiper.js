import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

// Initialize reviews slider section
function initReviewsSlider() {
  const reviews = [
    {
      name: "Soy",
      timeAgo: "7 hours ago",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Perfect color contrast! Love the innovative idea. Make sure to upload new idea to the community and help the developers create something amazing for everyone.",
    },
    {
      name: "Niko",
      timeAgo: "2 hours ago",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "Perfect color contrast! Love the innovative idea. Make sure to upload new idea to the community and help the developers create something amazing for everyone.",
    },
    {
      name: "Tan Samuel",
      timeAgo: "1 hours ago",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "Perfect color contrast! Love the innovative idea. Make sure to upload new idea to the community and help the developers create something amazing for everyone.",
    },
    {
      name: "Jessica",
      timeAgo: "5 hours ago",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "Perfect color contrast! Love the innovative idea. Make sure to upload new idea to the community and help the developers create something amazing for everyone.",
    },
    {
      name: "Michael",
      timeAgo: "3 hours ago",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Perfect color contrast! Love the innovative idea. Make sure to upload new idea to the community and help the developers create something amazing for everyone.",
    },
  ];

  const container = document.getElementById("reviews-slider");

  reviews.forEach((review) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const stars = Array(review.rating)
      .fill(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF6B35" stroke="#FF6B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>`
      )
      .join("");

    slide.innerHTML = `
          <div class="rounded-2xl p-6" style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(10px);">
            <!-- Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <img src="${review.avatar}" alt="${review.name}" class="w-12 h-12 rounded-full" />
                <div>
                  <h4 class="text-white font-semibold text-2xl">${review.name}</h4>
                  <p class="text-white/60">${review.timeAgo}</p>
                </div>
              </div>
              <div class="text-xl flex">
                ${stars}
              </div>
            </div>
            
            <!-- Review Text -->
            <p class="text-white/90 text-lg">
              ${review.text}
            </p>
          </div>
        `;

    container.appendChild(slide);
  });

  // Initialize Swiper
  new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

export { initReviewsSlider };
