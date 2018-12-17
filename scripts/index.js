/*global store listMaker main api*/

console.log('index.js ran');

$(function() {

    api.getBookmarks((items) => {
        items.forEach((item) => store.addBookmark(item));
      //  generateBookmarkString(item);
        listMaker.mainRender();
    });

    builder.bindEventListeners();
});

