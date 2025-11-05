import { initEventCollection } from "./scripts/initEventCollection";
import { initFeatures } from "./scripts/initFeatures";
import { initParticles } from "./scripts/initParticles";
import { initSeriesBadges } from "./scripts/initSeriesBadges";
import { particleCta } from "./scripts/particles-cta";
import { preloader } from "./scripts/preloader";
import { initReviewsSlider } from "./scripts/swiper";
import "./style.css";

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  preloader();
  initParticles();
  initSeriesBadges();
  initFeatures();
  initEventCollection();
  initReviewsSlider();
  particleCta();
});
