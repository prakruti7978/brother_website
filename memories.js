function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function goBack() {
  window.location.href = "index.html";
}

function goToThankYou() {
  window.location.href = "thankyou.html";
}