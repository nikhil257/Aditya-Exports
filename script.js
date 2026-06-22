const lenis = new Lenis({
  lerp: 0.07, // default-ish smoothness
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);