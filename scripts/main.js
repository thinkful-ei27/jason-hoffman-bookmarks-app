
const builder = (function() {
    console.log('builder ran');

    function getItemIdFromElement(bookmark) {
        console.log('getItemFromElement ran');
        return $(bookmark)
          .closest('.bookmark')
          .data('id');
      }

    function handleDeleteClicked() {
        console.log('handleDeleteClicked ran');
        $('.container').click('.delete-link', event => {
          const id = getItemIdFromElement(event.currentTarget.parent);
            console.log(id);
          api.deleteItem(id, () => {
            store.findAndDelete(id);
            mainRender();
          });
        });
      }

    function handleAddBookmark() {
        $('.header-bar').click('.add-bookmark', event => {
            console.log('handleAddBookmark ran');
            const val = $(event.currentTarget).val();
            store.setIsAdding();
            console.log(val);
        });
    }
/*
    const tempObjForTest = (
        {
            id: 'cjpn2jd2t001j0kwn2k9milk4',
            title: 'zoozahs',
            url: 'https://zoozahs.com',
            desc: 'the whole collection',
            rating: 4,
            isExpanded: false,
        }
    );
    
    api.createBookmarks(tempObjForTest, () => {
        api.getBookmarks((bookmarks) => {
          console.log(bookmarks);
        });
    });
    
*/
function bindEventListeners() {
    console.log('bindListeners ran');
    handleAddBookmark();
    handleDeleteClicked();
}

return {
    bindEventListeners,
};

}());