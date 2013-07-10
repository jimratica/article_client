exports.definition = {
    config: {
        adapter: {
            type: "article_rest",
            collection_name: "article",
            base_url: "http://playmvc.dtison.net/api/articles/"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            idAttribute: "id"
        });
        return Model;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("article", exports.definition, []);

collection = Alloy.C("article", exports.definition, model);

exports.Model = model;

exports.Collection = collection;