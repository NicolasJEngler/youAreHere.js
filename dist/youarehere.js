window.youAreHere = (function() {
  // Element creation
  var createProgressBar = function() {
    var newProgressBar = document.createElement("div");
    newProgressBar.id = 'progressBar';
    document.body.appendChild(newProgressBar);
    
    newProgressBar.style.height = '3px';
    newProgressBar.style.width = 0;
    newProgressBar.style.background = '#472836';
    newProgressBar.style.color = '#472836';
    newProgressBar.style.top = 0;
    newProgressBar.style.right = 'auto';
    newProgressBar.style.bottom = 'auto';
    newProgressBar.style.left = 0;
    newProgressBar.style.position = 'fixed';
    newProgressBar.style.boxShadow = '0 0 3px';
    newProgressBar.style.zIndex = 9999;
    newProgressBar.style.pointerEvents = 'none';
    
  };
  
  document.addEventListener('DOMContentLoaded', createProgressBar());
  
  // Progress calculations and setting
  var calculateProgress = function() {
    var scrolledPixels = document.documentElement.scrollTop || document.body.scrollTop;
    var fullHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var viewportHeight = window.innerHeight;
    
    currentProgress = scrolledPixels / (fullHeight - viewportHeight ) * 100;
    
    document.getElementById('progressBar').style.width = currentProgress + '%';
  }
  
  document.addEventListener('scroll', calculateProgress);
  
  // Settings function
  return (function(settings) {
    var progressBar = document.getElementById('progressBar');
    
    progressBar.style.height = settings.height || '3px';
    progressBar.style.background = settings.color || '#472836';
    progressBar.style.color = settings.color || '#472836';
    if (settings.easing === true) {
      progressBar.style.transition = 'width .3s cubic-bezier(0.77, 0, 0.175, 1)';
    } else {
      progressBar.style.transition = 'none';
    }
  });
})();