// Number of trail elements to display at once
const trailLength = 15;
const trailElements = [];

// Create trail elements dynamically
for (let i = 0; i < trailLength; i++) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);
  trailElements.push(trail);
}

// Track the current position for the trail elements
let index = 0;

// Mousemove event to track cursor
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // Use the current trail element
  const trail = trailElements[index];
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;

  // Show the element with animation
  trail.style.animation = 'none'; // Reset animation
  trail.offsetHeight; // Trigger reflow
  trail.style.animation = ''; // Restart animation

  // Update the index to the next trail element
  index = (index + 1) % trailLength;
});
