window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(50px)';
  });

  const revealOnScroll = () => {
    const scrollY = window.scrollY + window.innerHeight;
    document.querySelectorAll('.section').forEach(sec => {
      if (scrollY > sec.offsetTop + 100) {
        sec.style.transition = '0.6s ease-out';
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}



 
     function toggleDetails(card) {
      const details = card.querySelector(".project-details");
      const isOpen = details.style.display === "block";

      // Close all open details
      document.querySelectorAll(".project-details").forEach(d => d.style.display = "none");

      // Toggle clicked
      details.style.display = isOpen ? "none" : "block";
    }

    