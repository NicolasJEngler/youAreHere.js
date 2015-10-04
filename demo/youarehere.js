var createProgressBar = function() {
  var newProgressBar = document.createElement("div");
  newProgressBar.id = 'progressBar';
  document.body.appendChild(newProgressBar);
};

document.addEventListener('DOMContentLoaded', createProgressBar);

var calculateProgress = function() {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  var scrolledPixels = 0;
  var fullHeight = 0;
  var viewportHeight = window.innerHeight;
  
  if (isFirefox === true) {
    scrolledPixels = document.documentElement.scrollTop;
    fullHeight = document.documentElement.scrollHeight;
  } else {
    scrolledPixels = document.body.scrollTop;
    fullHeight = document.body.scrollHeight;
  }
  
  // find a way to properly add the current window height to the scrolled percentage
  // otherwise it never gets to 100%
  currentProgress = scrolledPixels / fullHeight * 100;
  
  document.getElementById('progressBar').style.width = currentProgress + '%';
}

document.addEventListener('scroll', calculateProgress);