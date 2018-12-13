console.log('index.js ran');

$(function() {
    console.log("ready!");
    mainRender();
    console.log(`this is what's in the store: ${store.items}`);

    api.getBookmarks((items) => {
        console.log()
        items.forEach((item) => {
        console.log(item);
        });
    });

    api.createBookmarks('brnr', (bookmark) => {
        api.getBookmarks((bookmarks) => {
          console.log(bookmarks);
        });
      });
});