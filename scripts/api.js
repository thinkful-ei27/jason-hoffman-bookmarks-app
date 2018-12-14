

const api = (function(callback) {
    console.log('api ran');
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jason/bookmarks/';

    const getBookmarks = (function(callback) {
        console.log('getBookmarks ran');
        $.getJSON(BASE_URL, (callback));
    });

    const deleteItem = function(id, callback) {
        $.ajax({
          url: BASE_URL + IDBCursor,
          method: 'DELETE',
          success: callback,
        });
      };

    const createBookmarks = (function(linkObj, callback) {
        console.log('createBookmarks ran');
        const newBookmark = JSON.stringify(linkObj);

        $.ajax({
            url: BASE_URL,
            method: 'POST',
            contentType: 'application/json',
            data: newBookmark,
            success: callback,
        });
    });

    return {
        getBookmarks,
        createBookmarks,
        deleteItem,
    };
}());