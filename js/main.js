





////////////////////////////////
// HIGHLIGHT TEXT
////////////////////////////////


const video = document.getElementsByTagName('video');
const vidText = document.querySelectorAll('span');


video.addEventListener('timeupdate', () => {
  for (let i = 0; i < vidText.length; i++) {
    if (video.currentTime > vidText[i].getAttribute('data-start') && video.currentTime < vidText[i].getAttribute('data-end')) {
      vidText[i].style.color = 'orange';
    } else {
      vidText[i].style.color = 'black';
    }
  }

});
