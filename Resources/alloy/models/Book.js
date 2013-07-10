exports.definition = {
    config: {
        adapter: {
            type: "book_rest",
            collection_name: "book",
            base_url: "http://playmvc.dtison.net/api/books/"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            idAttribute: "_id"
        });
        return Model;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("book", exports.definition, []);

collection = Alloy.C("book", exports.definition, model);

exports.Model = model;

exports.Collection = collection;