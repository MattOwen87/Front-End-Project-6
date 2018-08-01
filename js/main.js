


////////////////////////////////
// HIGHLIGHT TEXT
////////////////////////////////


const video = document.getElementsByTagName('video')[0];
const vidText = document.querySelectorAll('p span');
const textDiv = document.querySelector('.textWrapper');

video.addEventListener('timeupdate', () => {
  for (let i = 0; i < vidText.length; i++) {
    if (video.currentTime > vidText[i].getAttribute('data-start') && video.currentTime < vidText[i].getAttribute('data-end')) {
      vidText[i].style.color = 'orange';
    } else {
      vidText[i].style.color = 'black';
    }
  }

});


////////////////////////////////
// TEXT SELECT VIDEO FUNCTION
////////////////////////////////

textDiv.addEventListener('click', (event) => {
  video.currentTime = event.target.getAttribute('data-start');
});
