// Member detail toggle
function showDetail(id) {
  document.querySelectorAll(".detail").forEach(d => d.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// News slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(n) {
  slides.forEach(s => s.classList.remove("active"));
  slides[n].classList.add("active");
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
setInterval(nextSlide, 5000); // awtomatiki her 5 sek

// Scroll to top
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function scrollTopFn() {
  window.scrollTo({top:0,behavior:"smooth"});
}
