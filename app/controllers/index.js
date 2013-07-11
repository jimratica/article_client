var library = Alloy.Collections.article;
library.fetch();
$.index.open();

function showArticle(e) {
	var article = library.at(e.index);
	var detail = Alloy.createController('detail', article).getView();
	detail.open();
}

function addArticle(e) {
	var add = Alloy.createController('add').getView();
	add.open();
}

function refreshTable(e) {
	library.fetch();
}

// Initializes the Android Action Bar
// Bound to the window's open event
function loadExtras (e) {
	if (OS_ANDROID) {
		$.index.activity.onCreateOptionsMenu = function(e) { 
			var menu = e.menu; 
			var addItem = menu.add({ 
				title : "Add", 
				icon : 'ic_menu_add.png',
				showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
			}); 
			addItem.addEventListener("click", addArticle);

			var refreshItem = menu.add({
				title : "Refresh",
				icon : 'ic_menu_refresh.png',
				showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
			}); 
			refreshItem.addEventListener("click", refreshTable);
		};
	}
}
