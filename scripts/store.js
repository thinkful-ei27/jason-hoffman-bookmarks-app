console.log('store.js ran');

const store = {
    items: [ 
        {
            id: 'id',
            name: 'name',
            blurb: 'blurb',
            link: 'link',
            isExpanded: false,
        },
    ],
    isAdding: false,

};
console.log(`this is what's in the store: ${store.items}`);