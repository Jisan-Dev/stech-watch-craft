export function preloader() {
  // preloader
  console.log("first");
  const loader = document.querySelector(".preloader");

  loader.classList.add("preloader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild(loader);
  });
}
