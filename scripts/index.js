console.log('index.js ran');

$(function() {
    builder.bindEventListeners(),

    api.getBookmarks((items) => {
        items.forEach((item) => store.addBookmark(item));
      //  generateBookmarkString(item);
        listMaker.mainRender();
    });
      });

