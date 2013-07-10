exports.definition = {
	config: {
		adapter: {
			type: "article_rest", //< use either book_rest or book_acs
			collection_name: "article",
			// Endpoint URL to access the service for the REST sync adapter
			base_url:  'http://playmvc.dtison.net/api/articles/',

		}
	},		
	extendModel: function(Model) {
		// Mongo uses _id as the model ID
		_.extend(Model.prototype, {
//			idAttribute: '_id'
			idAttribute: 'id'

		});
		return Model;
	}
}
