var createProgressBar = function() {
  var newProgressBar = document.createElement("div");
  newProgressBar.id = 'progressBar';
  document.body.appendChild(newProgressBar);
};

document.addEventListener('DOMContentLoaded', createProgressBar);

var calculateProgress = function() {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  var scrolledPixels = document.documentElement.scrollTop;
  var fullHeight = 0;
  var viewportHeight = window.innerHeight;
  
  if (isFirefox === true) {
    fullHeight = document.documentElement.scrollHeight;
  } else {
    fullHeight = document.body.scrollHeight;
  }
  
  currentProgress = scrolledPixels / (fullHeight - viewportHeight ) * 100;
  
  document.getElementById('progressBar').style.width = currentProgress + '%';
}

document.addEventListener('scroll', calculateProgress);

// Create function that accepts an object as parameter with
  // Height of bar
  // Position of bar (top or bottom)
  // Color of bar
  // Easing