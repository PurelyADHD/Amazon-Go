<script>
  dojo.require("dojo.data.ItemFileReadStore");
  dojo.require("dijit.form.Button");

  var storeData = { identifier: 'name',
    items: [
      { name: 'Adobo', aisle: 'Mexican', price: 3.01 },
      { name: 'Balsamic vinegar', aisle: 'Condiments', price: 4.01 },
      { name: 'Basil', aisle: 'Spices', price: 3.59  },
      { name: 'Bay leaf', aisle: 'Spices',  price: 2.01 },
      { name: 'Beef Bouillon Granules', aisle: 'Soup',  price: 5.01 },
      { name: 'Vinegar', aisle: 'Condiments',  price: 1.99  },
      { name: 'White cooking wine', aisle: 'Condiments',  price: 2.01 },
      { name: 'Worcestershire Sauce', aisle: 'Condiments',  price: 3.99 },
      { name: 'white pepper', aisle: 'Spices',  price: 1.01 },
      { name: 'Black Pepper', aisle: 'Spices',  price: 1.01 }
    ]};

    //This function performs some basic dojo initialization. In this case it connects the button
    //onClick to a function which invokes the fetch(). The fetch function queries for all items
    //and provides callbacks to use for completion of data retrieval or reporting of errors.
    function init () {
       //Function to perform a fetch on the datastore when a button is clicked
       function getSpices () {

         //Callback to perform an action when the data items are starting to be returned:
         function clearOldList(size, request) {
           var list = dojo.byId("list");
           if (list) {
             while (list.firstChild) {
               list.removeChild(list.firstChild);
             }
           }
         }

         //Callback for processing a returned list of items.
         function gotItems(items, request) {
           var list = dojo.byId("list");
           if (list) {
             var i;
             for (i = 0; i < items.length; i++) {
               var item = items[i];
               list.appendChild(document.createTextNode(foodStore.getValue(item, "name")));
               list.appendChild(document.createElement("br"));
             }
           }
         }

         //Callback for if the lookup fails.
         function fetchFailed(error, request) {
            alert("lookup failed.");
         }

         //Fetch the data.
         foodStore.fetch({query: { aisle: "Spices"}, onBegin: clearOldList, onComplete: gotItems, onError: fetchFailed});

       }
       //Link the click event of the button to driving the fetch.
       dojo.connect(button, "onClick", getSpices);
    }
    //Set the init function to run when dojo loading and page parsing has completed.
    dojo.addOnLoad(init);
</script>