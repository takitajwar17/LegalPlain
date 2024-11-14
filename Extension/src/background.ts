// Background script for handling Chrome Extension functionality
chrome.runtime.onInstalled.addListener(() => {
  console.log("LegalPlain.ai Extension installed");
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "ANALYZE_TEXT") {
    // TODO: Implement Chrome AI API integration
    sendResponse({ success: true });
  }
  return true;
});

export {};
