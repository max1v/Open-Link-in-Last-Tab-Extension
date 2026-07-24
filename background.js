chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openLinkAtEnd",
    title: "Open in Last Tab",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "openLinkAtEnd" && info.linkUrl) {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      chrome.tabs.create({
        url: info.linkUrl,
        index: tabs.length
      });
    });
  }
});
