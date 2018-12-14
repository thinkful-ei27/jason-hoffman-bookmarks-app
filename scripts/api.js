

const api = (function(callback) {
    console.log('api ran');
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jason/bookmarks';

    const getBookmarks = (function(callback) {
        console.log('getBookmarks ran');
        const bookmarkList = $.getJSON(BASE_URL, (data) => {
            console.log(data);
        });
        console.log('const bookmarkList= ' + bookmarkList);
        return bookmarkList;
        
    });

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
    };

    

}());