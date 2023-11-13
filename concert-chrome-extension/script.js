chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("https://twitter.com/")) {
    const queryParameters = tab.url.splite("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId,{
        type:"NEW",
        
    })
  }
});
