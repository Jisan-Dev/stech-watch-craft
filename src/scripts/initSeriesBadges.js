// Initialize series badges
export function initSeriesBadges() {
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
