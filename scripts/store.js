console.log('store.js ran');

const store = {
    bookmarks: [ 
        /*
        {
            id: 'id',
            title: 'name',
            url: 'link',
            desc: 'blurb',
            rating: 'rating',
            isExpanded: false,
        }
        */
    ],
    isAdding: false,

    findAndDelete: function(id) {
        this.bookmarks = this.bookmarks.filter(item => item.id !== id);
      },

    addBookmark: function(bookmark) {
        this.bookmarks.push(bookmark);
    },

    setIsAdding: function() {
        this.isAdding = true;
        console.log(`setIsAdding ran, value is ${store.isAdding}`);
        listMaker.mainRender();
    },
};

