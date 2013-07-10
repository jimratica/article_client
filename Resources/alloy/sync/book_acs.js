var service = require("ti.cloud.BookService");

module.exports.sync = function(method, model, options) {
    function cb(r) {
        options.success(r, JSON.stringify(r), options);
    }
    var payload = model.toJSON();
    var error;
    switch (method) {
      case "read":
        payload[model.idAttribute] ? service.book_bookRead(payload[model.idAttribute], null, cb) : service.book_bookReadAll(cb);
        break;

      case "create":
        payload.title && payload.author ? service.book_bookCreate({
            title: payload.title,
            author: payload.author
        }, cb) : error = "ERROR: Cannot create model without an author or title!";
        break;

      case "delete":
        payload[model.idAttribute] ? service.book_bookDelete(payload[model.idAttribute], null, cb) : error = "ERROR: Model does not have an ID!";
        break;

      case "update":
        payload[model.idAttribute] ? service.book_bookUpdate(payload[model.idAttribute], {
            title: payload.title,
            author: payload.author
        }, cb) : error = "ERROR: Cannot update model without an ID!";
        break;

      default:
        error = "ERROR: Sync method not recognized!";
    }
    if (error) {
        options.error(model, error, options);
        Ti.API.error(error);
        model.trigger("error");
    }
};

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    return config;
};

module.exports.afterModelCreate = function() {};