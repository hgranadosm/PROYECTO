function ejecutar(lightboxId, videoId) {
  document.getElementById(lightboxId).style.display = 'block';
  var video = document.getElementById(videoId);
  if (video) {
    video.currentTime = 0;
    video.play();
  }
}

function ocultar(lightboxId, videoId) {
  document.getElementById(lightboxId).style.display = 'none';
  var video = document.getElementById(videoId);
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

(function() {
  var style = document.createElement('style');
  style.innerHTML = `
    .lightbox-close {
      position: absolute;
      top: 18px;
      right: 24px;
      background: #fff;
      color: #222;
      border: none;
      font-size: 2.2rem;
      font-weight: bold;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      z-index: 1001;
      transition: background 0.2s, color 0.2s;
    }
    .lightbox-close:hover {
      background: #ffd433;
      color: #000;
    }
  `;
  document.head.appendChild(style);
})();
