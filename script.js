// Clock Functionality
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// Password Unlock
const passwordContainer = document.getElementById('password-container');
const passwordInput = document.getElementById('password-input');
const unlockButton = document.getElementById('unlock-btn');
const errorMessage = document.getElementById('error-message');
const imageGallery = document.getElementById('image-gallery');

const correctPassword = "25019700"; // Set your password here

unlockButton.addEventListener('click', function () {
  if (passwordInput.value === correctPassword) {
    passwordContainer.style.display = 'none';
    imageGallery.style.display = 'block';
  } else {
    errorMessage.textContent = 'Incorrect password!';
  }
});

// Video Tooltip
const videoButton = document.getElementById('video-btn');
const videoPopup = document.getElementById('video-popup');
const closeButton = document.getElementById('close-btn');
const youtubeVideo = document.getElementById('youtube-video');

videoButton.addEventListener('click', function () {
  youtubeVideo.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with your desired video URL
  videoPopup.style.display = 'flex';
});

closeButton.addEventListener('click', function () {
  videoPopup.style.display = 'none';
  youtubeVideo.src = '';
});

// Avatar Popup
const avatarButton = document.getElementById('avatar-button');
const avatarPopup = document.getElementById('avatar-popup');
const avatarArrow = document.querySelector('.avatar-arrow');

avatarButton.addEventListener('click', function () {
  if (avatarPopup.style.display === 'block') {
    avatarPopup.style.display = 'none';
    avatarArrow.style.transform = 'rotate(180deg)';
  } else {
    avatarPopup.style.display = 'block';
    avatarArrow.style.transform = 'rotate(0deg)';
  }
});
