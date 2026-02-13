"use strict";
// Migration script for localStorage to chrome.storage.local
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'getRulesetsFromLS') {
        const oldRS = localStorage.getItem('rulesets');
        sendResponse(oldRS);
    }
    else if (message === 'removeRulesetsFromLS') {
        localStorage.removeItem('rulesets');
        localStorage.removeItem('version');
        localStorage.removeItem('showChangelog');
        sendResponse(true);
    }
});
