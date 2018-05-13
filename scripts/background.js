let extension = new ChromeExtension();

extension.onMessageListener((request, sender, sendResponse) => {
    console.log('from background.js:', request, sender);
    sendResponse({ received: true });
});
