
// Fade in effects when scrolled
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



// Background color on navbar when scrolled
document.addEventListener('scroll' , () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



// FAQs checkbox close when it opens another
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
              checkboxes.forEach(otherCheckbox => {
                  if (otherCheckbox !== checkbox) {
                      otherCheckbox.checked = false;
                  }
              });
          }
      });
  });
});



// Hamburger menu
const hamburgerMenu = document.querySelector('.hamburger_menu');
const navMenu = document.querySelector('.nav_menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        setTimeout(() => {
            navMenu.style.display = 'none';
        }, 400); // Matches the transition duration
    } else {
        navMenu.style.display = 'flex';
        setTimeout(() => {
            navMenu.classList.add('show');
        }, 10); // Small delay to trigger the transition
    }
});


