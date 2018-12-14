/* global store, api, $ */
'use-strict';
console.log('main.js ran');

const listMaker = (function(){
 
    function errorHandler(err) {
        let message = '';
        if(err.resonseJSON && err.responseJSON.message) {
            message = err.responseJSON.message;
        } else {
            message = `${err.code} Server Error`;
        }

        return `
            <section class="error-content">
                <button id="cancel-error">OK</button>
                <p>${message}</p>
            </section>
        `;
    }
 


    // this creates and returns html for one bookmark
    function generateBookmarkElement(bookmark) {
        //const expandedClass = bookmark.isExpanded ? 'bookmark__expanded' : '';
        //const editView = bookmark.isExpanded ? 'disabled' : '';

        
       return `
        <div class="bookmark" id="${bookmark.id}">
            <div class="bookmark-title">
                <h2 class="bookmark-name">${bookmark.title}</h2>
            </div>
            <a class="bookmark-link" href="${bookmark.url}">Link</a>
            <div class="bookmark-description">
                <p class="description">${bookmark.desc}</p>
            </div>
            <p class="rating">${bookmark.rating}</p>
            <button name="delete-link">delete</button>
        </div>
        `;
    }


    // this creates a string of all the bookmarks
    function generateBookmarkString() {
        console.log('generateBookmarkString ran');
        const bookmarks = store.bookmarks.map((bookmark) => generateBookmarkElement(bookmark));
        console.log(bookmarks);
        return bookmarks.join('');
    };

    function displayAddField () {
        $('.container').html(`<h1>this is where you add a bookmark</h1>`);
    };
/*
    function addBookmark(bookmark) {
        console.log('addBookmark ran');
    }
*/

    // this puts the bookmark elements on the page
    function mainRender () {
       
        if (store.error) {
            const el = errorHandler(store.error);
            $('.error-container').html(el);
        } else {
            $('error.container').empty();
        }
 
        console.log('mainRender ran');
     
        if (store.isAdding === true) {
            displayAddField();
        } else {
        const bookmarksString = generateBookmarkString();
        $('.container').html(bookmarksString);
        }
    };

    // exposed elements for this module

    return {
        mainRender,
        generateBookmarkString,
    };


}());






