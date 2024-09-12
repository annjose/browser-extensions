console.log('inside color-worker.js');

// Handle the colorize message from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "colorize") {
    colorize(message.color);
  }
});

// Function to colorize the page to change the background color of the active tab

function colorize(color) {
  // find the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: (color) => {
          // change the background color to the given color
          document.body.style.backgroundColor = color;
        },
        args: [color],
      });
    }
  });
}