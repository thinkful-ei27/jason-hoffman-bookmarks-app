// JavaScript Document
/*global store isAdding*/
'use strict';

$(document).ready(function () {
  store;
  console.log('index.js ran');

  api.getBookmarks((items) => {
	items.forEach((item) => store.addBookmark(item));
	
    console.log('isAdding has the value of ' + store.isAdding);
  });
});