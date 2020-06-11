


function trackLocation(e) {
  var rect = videoContainer.getBoundingClientRect(),
      position = ((e.pageX - rect.left) / videoContainer.offsetWidth)*100;
  if (position <= 100) { 
    videoClipper.style.width = position+"%";
    clippedVideo.style.width = ((100/position)*100)+"%";
    clippedVideo.style.zIndex = 3;
	}
}
var videoContainer = document.getElementById("video-compare-container"),
videoClipper = document.getElementById("video-clipper"),
clippedVideo = videoClipper.getElementsByTagName("video")[0];
videoContainer.addEventListener( "mousemove", trackLocation, false); 
videoContainer.addEventListener("touchstart",trackLocation,false);
videoContainer.addEventListener("touchmove",trackLocation,false);

// Reproducir videos en syncro
var videos = document.querySelectorAll('video');

var promise = new Promise(function(resolve) {
  var loaded = 0;

  videos.forEach(function(v) {
    v.addEventListener('loadedmetadata', function() {
      loaded++;

      if (loaded === videos.length) {
        resolve();
      }
    });
  });
});

promise.then(function() {
  videos.forEach(function(v) {
    v.play();
  });
});