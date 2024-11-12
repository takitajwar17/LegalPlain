// Content script for interacting with web pages
console.log('PlainLegal Content Script loaded');

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_PAGE_CONTENT') {
    const content = document.body.innerText;
    sendResponse({ content });
  }
  return true;
});

export {};