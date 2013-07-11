function Controller() {
    function __alloyId22() {
        var models = __alloyId21.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId19 = models[i];
            __alloyId19.__transform = {};
            var __alloyId20 = Ti.UI.createTableViewRow({
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                title: "undefined" != typeof __alloyId19.__transform["title"] ? __alloyId19.__transform["title"] : __alloyId19.get("title"),
                color: "black"
            });
            rows.push(__alloyId20);
            showArticle ? __alloyId20.addEventListener("click", showArticle) : __defers["__alloyId20!click!showArticle"] = true;
        }
        $.__views.__alloyId17.setData(rows);
    }
    function showArticle(e) {
        var article = library.at(e.index);
        var detail = Alloy.createController("detail", article).getView();
        detail.open();
    }
    function addArticle() {
        var add = Alloy.createController("add").getView();
        add.open();
    }
    function refreshTable() {
        library.fetch();
    }
    function loadExtras() {
        $.index.activity.onCreateOptionsMenu = function(e) {
            var menu = e.menu;
            var addItem = menu.add({
                title: "Add",
                icon: "ic_menu_add.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            });
            addItem.addEventListener("click", addArticle);
            var refreshItem = menu.add({
                title: "Refresh",
                icon: "ic_menu_refresh.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            });
            refreshItem.addEventListener("click", refreshTable);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("article");
    $.__views.index = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "MyLibrary",
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    loadExtras ? $.__views.index.addEventListener("open", loadExtras) : __defers["$.__views.index!open!loadExtras"] = true;
    $.__views.__alloyId17 = Ti.UI.createTableView({
        top: "10",
        id: "__alloyId17"
    });
    $.__views.index.add($.__views.__alloyId17);
    var __alloyId21 = Alloy.Collections["article"] || article;
    __alloyId21.on("fetch destroy change add remove reset", __alloyId22);
    refreshTable ? $.__views.__alloyId17.addEventListener("dragEnd", refreshTable) : __defers["$.__views.__alloyId17!dragEnd!refreshTable"] = true;
    exports.destroy = function() {
        __alloyId21.off("fetch destroy change add remove reset", __alloyId22);
    };
    _.extend($, $.__views);
    var library = Alloy.Collections.article;
    library.fetch();
    $.index.open();
    __defers["$.__views.index!open!loadExtras"] && $.__views.index.addEventListener("open", loadExtras);
    __defers["$.__views.__alloyId16!click!addLibrary"] && $.__views.__alloyId16.addEventListener("click", addLibrary);
    __defers["__alloyId20!click!showArticle"] && __alloyId20.addEventListener("click", showArticle);
    __defers["$.__views.__alloyId17!dragEnd!refreshTable"] && $.__views.__alloyId17.addEventListener("dragEnd", refreshTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;