const paragraphs = document.querySelectorAll(".we-offer, .service-offer, .hr-service, .sec-container, .featured-header, .featured-img, .faq-header, .animate-delay, .footer-outro, .footer-items-container, .faq");

document.addEventListener("scroll", function () {
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("paragraph--visible");
    }
  })
})

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
    (window.innerheight - 150 || document.documentElement.clientHeight - 150)
  )
}

document.addEventListener('scroll' , () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});