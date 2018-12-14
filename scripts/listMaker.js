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
    
    function generateBookmarkElement(bookmark) {
        if (this.isExpanded === true) {
            // this creates and returns html for one expanded bookmark
            return `
            <div class="bookmark" id="${bookmark.id}">
                <div class="bookmark-title">
                    <h2 class="bookmark-name">${bookmark.title}</h2>
                </div>
                <a class="bookmark-link" href="${bookmark.url}">Link</a>
                <div class="bookmark-description">
                    <p class="description">${bookmark.desc}</p>
                </div>
                <span class="rating">${bookmark.rating} stars</span>
                <button name="delete-link">delete</button>
            </div>
            `;
        } else {
            // this creates and returns html for one condensed bookmark
            return `
            <div class="bookmark" id="${bookmark.id}">
                <div class="bookmark-title">
                    <h2 class="bookmark-name">${bookmark.title}</h2>
                </div>
                <a class="bookmark-link" href="${bookmark.url}">Link</a>
                <span class="rating">${bookmark.rating} stars</span>
            </div>
            `;
        }
    }


    // this creates a string of all the bookmarks
    function generateBookmarkString() {
        console.log('generateBookmarkString ran');
        const bookmarks = store.bookmarks.map((bookmark) => generateBookmarkElement(bookmark));
        console.log(bookmarks);
        return bookmarks.join('');
    };

    function displayAddField () {
        $('.container').html(
        `
        <section class="inputForm">
        <form>
            <fieldset>
            <div class="bookmark">
                <label for="link title">Title of this bookmark</label>
                    <input type="text" name="link title" id="title" placeholder="memorable title" />
            </div>
            <div class="bookmark-title">
                <label for="link description">Brief description of the site</label>
                    <textarea  name="link description" id="description" placeholder="This site had a complete how-to build a fort." />
            </div>
            <div class="bookmark-link">
                <label for="link url">the url</label><br/>
                    <input type="url" name="link url" id="url" placeholder="http://...." /><br/>
            </div>
                <label for="filter-results">Rate its goodness</label> 
                    <select id = "filter-results">
                        <option value = "0">none</option>
                        <option value = "1">one</option>
                        <option value = "2">two</option>
                        <option value = "3">three</option>
                        <option value = "4">four</option>
                        <option value = "5">five</option>
                    </select>
            </fieldset>
            <button type="submit" id="form-submit">submit</button>
        </form>
        </section>
        `
        );
    };

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

        builder.bindEventListeners();
    };

    // exposed elements for this module

    return {
        mainRender,
        generateBookmarkString,
    };


}());






