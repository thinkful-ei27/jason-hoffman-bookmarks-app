console.log('index.js ran');

$(function() {
    console.log("ready!");
    getAPI();
    mainRender();
    console.log(`this is what's in the store: ${store.items}`);
});