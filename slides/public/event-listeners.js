window.addEventListener('top-pick:clicked', (event) => {
  event.stopPropagation();
  alert('Top pick ' + event.detail + ' has been clicked');
});