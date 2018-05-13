class ChromeExtension {

    constructor() {
        this.tabs = new Tabs();
    }

    /**
     * Sends message which will be taken handled by a listener
     * @param  {Object}   data
     * @param  {Function} callback
     * @param  {String} extensionId
     */
    sendMessage(data, callback, extensionId) {
        extensionId = typeof extensionId !== 'undefined' ? extensionId : null;
        chrome.runtime.sendMessage(extensionId, data, callback);
    }

    /**
     * Listener for message sent from background js or even a content script
     * @param  {Function} callback {function(any message, MessageSender sender, function sendResponse)}
     */
    onMessageListener(callback) {
        chrome.runtime.onMessage.addListener(callback);
    }

    /**
     * Gets the extension URL for a given path
     * @param  {String} path
     * @return {String}
     */
    extensionUrl(path) {
        return chrome.runtime.getURL(path);
    }
}

class Tabs {

    constructor() {
    }

    /**
     * Queries the tabs for given options
     * @param  {Object}   options
     * @param  {Function} callback
     */
    query(options, callback) {
        chrome.tabs.query(options, callback);
    }

    /**
     * Sends message to the given tab
     * @param  {number}   tabId
     * @param  {Object}   data
     * @param  {Function} callback
     */
    sendMessage(tabId, data, callback) {
        chrome.tabs.sendMessage(tabId, data, callback);
    }
}
