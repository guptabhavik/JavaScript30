// KEYBOARD SUPPORT

window.addEventListener('keydown', (evt) => {

  const audio = document.querySelector(
    `audio[data-key="${evt.keyCode}"]`
  );

  const key = document.querySelector(
    `.key[data-key="${evt.keyCode}"]`
  );

  if (!audio || !key) return;

  // Prevent repeated keydown events
  if (evt.repeat) return;

  // Play sound
  audio.currentTime = 0;
  audio.play();

  // Add animation
  key.classList.add('playing');

});


// REMOVE ANIMATION WHEN KEY IS RELEASED

window.addEventListener('keyup', (evt) => {

  const key = document.querySelector(
    `.key[data-key="${evt.keyCode}"]`
  );

  if (!key) return;

  key.classList.remove('playing');

});


// MOUSE CLICK SUPPORT

const keys = document.querySelectorAll('.key');

keys.forEach(key => {

  key.addEventListener('click', () => {

    const audio = document.querySelector(
      `audio[data-key="${key.dataset.key}"]`
    );

    if (!audio) return;

    // Play sound
    audio.currentTime = 0;
    audio.play();

    // Add animation
    key.classList.add('playing');

    // Remove animation after 100ms
    setTimeout(() => {
      key.classList.remove('playing');
    }, 100);

  });

});
