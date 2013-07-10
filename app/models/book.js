exports.definition = {
	config: {
		adapter: {
			type: "book_rest", //< use either book_rest or book_acs
			collection_name: "book",
			// Endpoint URL to access the service for the REST sync adapter
			base_url:  'http://playmvc.dtison.net/api/books/',

		}
	},		
	extendModel: function(Model) {
		// Mongo uses _id as the model ID
		_.extend(Model.prototype, {
			idAttribute: '_id'
		});
		return Model;
	}
}
