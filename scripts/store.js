console.log('store.js ran');

const store = (function() {
    const bookmarks = [ 
        
        {
            id: 'id',
            title: 'name',
            url: 'link',
            desc: 'blurb',
            rating: 'rating',
            isExpanded: false,
        },
      
    ];
    const isAdding= false;

    const updateIsExpanded = function(id) {
        this.bookmarks.isExpanded = true;
    };

    const findAndDelete = function(id) {
        this.bookmarks = this.bookmarks.filter(item => item.id !== id);
      };

    const addBookmark = function(bookmark) {
        this.bookmarks.push(bookmark);
    };

    const setIsAdding= function() {
        this.isAdding = true;
        console.log(`setIsAdding ran, value is ${store.isAdding}`);
        listMaker.mainRender();
    };

    return {
        bookmarks,
        setIsAdding,
    };
}());

