const particlesContainer = document.getElementById("cta-particles");

export const particleCta = () => {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "particleCta bg-primary!";
    particle.style.width = `${Math.random() * 8 + 4}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    particle.style.animationDuration = `${Math.random() * 3 + 3}s`;

    particlesContainer.appendChild(particle);
  }
};
