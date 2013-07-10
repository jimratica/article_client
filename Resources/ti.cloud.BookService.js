function InvokeService(path, method, data, cb) {
    if ("function" == typeof data) {
        cb = data;
        data = null;
    }
    var xhr = Ti.Network.createHTTPClient();
    "function" == typeof cb && (xhr.onload = function(e) {
        var r = this.responseText;
        if (-1 != xhr.getResponseHeader("content-type").indexOf("json")) try {
            r = JSON.parse(r);
        } catch (E) {}
        cb(r, e);
    });
    "/" == exports.URL.match("/$") && 0 == path.indexOf("/") ? xhr.open(method, exports.URL + path.substring(1)) : xhr.open(method, exports.URL + path);
    xhr.onerror = function(e) {
        Ti.API.error(e.error);
    };
    xhr.timeout = 5e3;
    xhr.send(data);
}

var url = Ti.App.Properties.getString("acs-service-baseurl-BookService");

exports.URL = url && url.replace(/^\s+|\s+$/g, "") ? url.replace(/^\s+|\s+$/g, "") : "http://localhost:8080";

exports.book_bookCreate = function(data, cb) {
    InvokeService("/book", "POST", data, cb);
};

exports.book_bookReadAll = function(data, cb) {
    InvokeService("/book", "GET", data, cb);
};

exports.book_bookRead = function(id, data, cb) {
    InvokeService("/book/" + id, "GET", data, cb);
};

exports.book_bookUpdate = function(id, data, cb) {
    InvokeService("/book/" + id, "PUT", data, cb);
};

exports.book_bookDelete = function(id, data, cb) {
    InvokeService("/book/" + id, "DELETE", data, cb);
};