let extension = new Extension();

extension.sendMessage({ type: 'click', count: 294 }, (response) => {
    console.log('Resonse in content script:', response);
});
