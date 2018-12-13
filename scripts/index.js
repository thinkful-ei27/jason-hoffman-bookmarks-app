console.log('index.js ran');

$(function() {
    console.log("ready!");
    mainRender();
    console.log(`this is what's in the store: ${store.items}`);

    getAPI.getBookmarks((items) => {
        items.forEach((item) => {
        console.log(item);
        });
    });
});