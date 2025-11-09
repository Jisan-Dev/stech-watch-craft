// import "../style.css";

// Initialize FAQ particles
export function initFAQParticles() {
  const container = document.getElementById("faq-particles");

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.width = Math.random() * 18 + 4 + "px";
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 3 + "s";
    particle.style.animationDuration = Math.random() * 2 + 3 + "s";
    container.appendChild(particle);
  }
}

// Initialize FAQ section
export function initFAQ() {
  const faqs = [
    {
      question: "What is Face Craft?",
      answer:
        "Face Craft is a creative Apple Watch companion app that allows users to browse, design, and customize unique watch faces. You can explore seasonal collections, trending themes, live faces, and even create your own designs with color, font, and layout editing options.",
    },
    {
      question: "How do I install a watch face on my Apple Watch?",
      answer: `After you choose or customize a face:
1. Tap Preview and select Add to Watch.
2. Follow the on-screen instructions to sync it directly to your Apple Watch through the Watch app or Face Craft's companion feature.
3. You'll see the new face appear instantly on your Apple Watch.`,
    },
    {
      question: "Can I create my own watch face?",
      answer: `Yes! The Create section lets you design your own face with full customization options — choose between:
• Complication faces (for Modular, Ultra, Meridian, etc.)
• Live faces (animated designs)
• Static or Photo Faces (with color and font editing and time position control)`,
    },
    {
      question: "Are there any premium or paid features?",
      answer: `Yes. While Face Craft offers a collection of free faces, certain premium designs or advanced editing tools require in-app purchase or subscription. Premium users get early access to new seasonal faces and exclusive design packs.`,
    },
    {
      question: "How can I sign in or manage my account?",
      answer: `You can sign in using Apple ID from the Settings page. Once signed in, you can:
• Sync your watch faces across devices
• Access your profile and saved designs
• Restore previous purchases`,
    },
    {
      question: 'What are "User Faces"?',
      answer: `User Faces are designs shared by the Face Craft community. You can explore faces created by other users, mark favorites, and even upload your own designs to inspire or share with others.`,
    },
    {
      question: "How do I search for specific watch faces?",
      answer: `Use the Search page to find faces by:
• Style (minimal, classic, animated, etc.)
• Color theme
• Watch model (Ultra, Series 9, SE, etc.)
• Popular tags or seasonal events
You can also filter results by Newest, Popular, or Free/Premium.`,
    },
    {
      question:
        "I'm seeing an error or the app isn't syncing. What should I do?",
      answer: `Try the following steps:
1. Ensure your iPhone and Apple Watch are both connected and updated.
2. Restart both devices.
3. Reopen the Face Craft app and retry the sync.`,
    },
    {
      question: "Is my personal data safe?",
      answer: `Absolutely. Face Craft follows strict privacy standards and only collects minimal data required to improve performance. We do not share or sell your data to third parties. You can read our full Privacy Policy for details.`,
    },
    {
      question: "How can I contact Face Craft support?",
      answer: `If you have questions, feedback, or issues, reach us at:
📧 support@facecraftapp.com
Our team will respond as soon as possible.`,
    },
  ];

  const container = document.getElementById("faq-container");
  let activeIndex = null;

  faqs.forEach((faq, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item border-b overflow-hidden ";
    faqItem.style.borderColor = "#9D9D9D";
    // faqItem.style.borderColor = "rgba(38, 166, 154, 0.3)";
    // faqItem.style.background = "rgba(38, 166, 154, 0.05)";

    faqItem.innerHTML = `
          <button class="faq-question w-full py-5 sm:px-5 flex items-center gap-4 text-left cursor-pointer !max-sm:hover:bg-red-300!">
            <svg class="faq-icon w-5 h-5 text-neutral-900 bg-white/80 rounded-full shrink-0" fill="none" stroke="currentColor" viewBox="0 -2 24 24">
              <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div class="flex items-center gap-4 text-primary text-2xl">
              <!-- <span class="text-primary font-bold ">Q</span> -->
              <span class=" font-semibold">${faq.question}</span>
            </div>
            
          </button>
          <div class="faq-answer px-2 sm:px-6">
            <div class="px-5 sm:px-10 pb-6 text-white/80 bg-neutral-950 border border-[#2A2A2A] rounded-xl leading-relaxed whitespace-pre-line text-lg">
              ${faq.answer}
            </div>
          </div>
        `;

    const button = faqItem.querySelector(".faq-question");
    const answer = faqItem.querySelector(".faq-answer");
    const icon = faqItem.querySelector(".faq-icon");

    button.addEventListener("click", () => {
      // Close all other FAQs
      document
        .querySelectorAll(".faq-answer")
        .forEach((otherAnswer, otherIndex) => {
          if (otherIndex !== index) {
            otherAnswer.classList.remove("active");
            document
              .querySelectorAll(".faq-icon")
              [otherIndex].classList.remove("active");
          }
        });

      // Toggle current FAQ
      const isActive = answer.classList.contains("active");

      if (isActive) {
        answer.classList.remove("active");
        icon.classList.remove("active");
        activeIndex = null;
      } else {
        answer.classList.add("active");
        icon.classList.add("active");
        activeIndex = index;
      }
    });

    container.appendChild(faqItem);
  });
}

initFAQParticles();
initFAQ();
