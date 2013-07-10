var args = arguments[0] || {};
var article = args.toJSON();
var model = args;
$.author.value = article.author || 'No author';
$.title.value = article.title || 'No title';

var dialogs = require('alloy/dialogs');

function closeMe(e) {
	$.detail.close();
}

function updateArticle(e) {
	dialogs.confirm({message: 'Are you sure you want to make changes?', callback: function() {
		model.save({title: $.title.value, author: $.author.value});
	}});
}

function deleteArticle(e) {
	dialogs.confirm({message: 'Are you sure you want to delete this article?', callback: function() {
		model.destroy({
			wait: true, // Waits for a response from the server
			success: function(mod, response, options) { // Custom callback after a successful call.
				$.detail.close(); // Close the window
			},
			error: function(mod, response, options) { // Custom callback after an unsuccessful call.
				alert(response); // Alert the user there was an error.
			}
		});
	}});
}
