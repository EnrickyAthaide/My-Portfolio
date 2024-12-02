gsap.registerPlugin(ScrollTrigger);
gsap.from(".navbar", { duration: 1.5, y: -50, opacity: 0, ease: "power3.out" });
gsap.from("#home .content", { duration: 1.75, x: -100, opacity: 0, ease: "power3.out" });
gsap.from(".right ", { duration: 1.75, x: 100, ease: "power3.out" });
gsap.from("#about .content", { scrollTrigger: "#about", duration: 1.5, y: 100, opacity: 0, ease: "power3.out" });



// Import GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Card Hover Flip Animation
document.querySelectorAll('.card').forEach((card) => {
  // Flip the card forward on hover
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      rotateY: 180,
      duration: 0.2,
      ease: 'power2.out',
    });
  });

  // Flip the card back on hover out
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateY: 0,
      duration: 0.1,
      ease: 'power2.out',
    });
  });
});



// Function to Animate All Progress Bars Together
const animateProgressBars = () => {
  const bars = document.querySelectorAll('.progress-bar');

  // Create a GSAP timeline for all bars
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about", // Trigger when the "About Me" section is in view
      start: "bottom 170%", // Start when the section's top reaches 80% of the viewport
      end: "bottom 20%", // End when the section's bottom reaches 20% of the viewport
      toggleActions: "play reverse play reverse" // Controls forward/reverse animations
    }
  });

  // Animate each bar and its percentage
  bars.forEach((bar) => {
    const percentage = parseInt(bar.dataset.percent, 10);
    const text = bar.querySelector('.percentage');

    // Reset bar and percentage
    gsap.set(bar, { width: '0%' });
    gsap.set(text, { innerText: 0 });

    // Add animation to the timeline
    timeline.to(bar, {
      width: `${percentage}%`,
      duration: 3, // Matches bar animation duration
      ease: "power2.out",
      onStart: () => {
        text.style.display = 'block';
      }
    }, 0); // Synchronize all bars (0 seconds delay for all animations)

    timeline.to(text, {
      innerText: percentage,
      snap: { innerText: 1 }, // Snap to whole numbers
      duration: 3, // Matches bar animation duration
      ease: "power2.out"
    }, 0); // Synchronize text animation with bars
  });
};

// Initialize Animations
animateProgressBars();

document.addEventListener('mousemove', (gg) => {
  const cursor = document.querySelector('.custom-cursor');
  gsap.to(cursor ,{
    x:gg.x,
    y:gg.y,
    duration:0.3
  } )
  
});