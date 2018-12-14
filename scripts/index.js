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
    
    api.createBookmarks(tempObjForTest, (bookmark) => {
        api.getBookmarks((bookmarks) => {
          console.log(bookmarks);
        });
      });
});