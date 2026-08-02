// Scrollinger Background Service Worker


const DEFAULT_SETTINGS = {
  enabledGlobal: true,
  enabledDomains: {},
  autoScrollDomains: {},
  subFrameDomains: {},
  includeSubFrames: true,
  scrollMode: 'natural',
  scrollAmount: 350,
  scrollInterval: 15,
  runLimitMinutes: 0,
  direction: 'down',
  language: 'en',
  isScrolling: false,
  instantAutoScroll: false,
  showInsiteButton: true,
  showInsiteButtonManual: false,
  autoReverse: true
};


// Initialize settings on install - Auto scrolling enabled by default on all webpages
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(null, (existing) => {
    const updated = { enabledGlobal: true, ...DEFAULT_SETTINGS, ...existing, isScrolling: false };
    chrome.storage.local.set(updated, () => {
      console.log('Scrollinger: Initialized default settings (Auto-scrolling ON by default)', updated);
    });
  });
});



// Always ensure auto-scrolling is OFF on browser startup
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.set({ isScrolling: false });
});

// Handle runtime messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_TAB_DOMAIN') {
    if (sender.tab && sender.tab.url) {
      try {
        const url = new URL(sender.tab.url);
        sendResponse({ domain: url.hostname });
      } catch (e) {
        sendResponse({ domain: '' });
      }
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].url) {
          try {
            const url = new URL(tabs[0].url);
            sendResponse({ domain: url.hostname });
          } catch (e) {
            sendResponse({ domain: '' });
          }
        } else {
          sendResponse({ domain: '' });
        }
      });
      return true;
    }
  }

  if (request.type === 'TOGGLE_SCROLL') {
    chrome.storage.local.get(['isScrolling'], (res) => {
      const newState = !res.isScrolling;
      chrome.storage.local.set({ isScrolling: newState }, () => {
        sendResponse({ isScrolling: newState });
      });
    });
    return true;
  }
});
