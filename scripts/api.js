

const getAPI = (function(callback) {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jason/bookmarks';

    const getBookmarks = (function(callback) {
        $.getJSON(BASE_URL, (data) => {
            console.log(data);
        });
    });

    console.log('getAPI ran');

    return {
        getBookmarks,
    };

}());