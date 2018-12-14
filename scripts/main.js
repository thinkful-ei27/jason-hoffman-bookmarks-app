
const builder = (function() {
    console.log('builder ran');

    function getItemIdFromElement(bookmark) {
        console.log('getItemFromElement ran');
        return $(bookmark)
          .closest('.bookmark')
          .data('id');
      }

    function handleExpandView() {
        $('.bookmark').on('click', '.bookmark-title' , event => {
            const id = getItemIdFromElement(event.target);
            api.expandView(id, () => {
                store.updateIsExpanded(id);
                mainRender();
            });
        });
    }

    function handleDeleteClicked() {
        $('.container').click('.delete-link', event => {
            console.log('handleDeleteClicked ran');
            const id = getItemIdFromElement(event.target);
            console.log(id).val();
          api.deleteItem(id, () => {
            store.findAndDelete(id);
            mainRender();
          });
        });
      }

    function handleAddBookmark() {
        $('.header-bar').click('#add-bookmark', event => {
            console.log('handleAddBookmark ran');
            store.setIsAdding();
        });
    }

    function handleNewSubmit() {
        $('.input-form').on('submit', '#form-submit', 'event.data', event => {
            event.preventDefault();

            const bookmarkToAdd = (event.data).serializeArray();
            api.createBookmarks(bookmarkToAdd, () => {
                api.getBookmarks((bookmarks) => {
                  console.log(bookmarks);
                });
        });
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
    

    
*/
function bindEventListeners() {
    console.log('bindListeners ran');
    handleAddBookmark();
    handleDeleteClicked();
    handleNewSubmit();
    handleExpandView();
}

return {
    bindEventListeners,
    handleNewSubmit,
};

}());