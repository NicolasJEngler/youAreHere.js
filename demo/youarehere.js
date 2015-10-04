var createProgressBar = function() {
  var newProgressBar = document.createElement("div");
  newProgressBar.id = 'progressBar';
  document.body.appendChild(newProgressBar);
};

document.addEventListener('DOMContentLoaded', createProgressBar());

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

// Settings function
var youAreHere = function(settings) {
  var progressBar = document.getElementById('progressBar');
  
  progressBar.style.height = settings.height || '3px';
  progressBar.style.background = settings.color || '#472836';
  progressBar.style.color = settings.color || '#472836';
  if (settings.easing === true) {
    progressBar.style.transition = 'width .3s cubic-bezier(0.77, 0, 0.175, 1)';
  } else {
    progressBar.style.transition = 'none';
  }
}