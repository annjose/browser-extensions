
// Add the event listener to the colorize button
document.getElementById('color-button').addEventListener('click', () => {
  // pick a random color
  const color = '#' + Math.floor(Math.random()*16777215).toString(16);
  chrome.runtime.sendMessage({action: 'colorize', color: color});
});