function Controller() {
    function closeMe() {
        $.add.close();
    }
    function saveArticle() {
        dialogs.confirm({
            message: "Are you sure you want to save?",
            callback: function() {
                Alloy.Collections.article.create({
                    title: $.title.value,
                    author: $.author.value
                }, {
                    wait: true,
                    success: function(model, response) {
                        var message = "Successfully created " + response.title + " by " + response.author + "!";
                        alert(message);
                        $.title.value = $.author.value = "";
                    },
                    error: function(model, response) {
                        alert(response);
                    }
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.add = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "Add an Article",
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    closeMe ? $.__views.add.addEventListener("androidbackbutton", closeMe) : __defers["$.__views.add!androidbackbutton!closeMe"] = true;
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Title:",
        id: "__alloyId8"
    });
    $.__views.add.add($.__views.__alloyId8);
    $.__views.title = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "title",
        width: "200dp"
    });
    $.__views.add.add($.__views.title);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Author:",
        id: "__alloyId9"
    });
    $.__views.add.add($.__views.__alloyId9);
    $.__views.author = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "author",
        width: "200dp"
    });
    $.__views.add.add($.__views.author);
    $.__views.__alloyId10 = Ti.UI.createButton({
        top: "10dp",
        title: "Save",
        id: "__alloyId10"
    });
    $.__views.add.add($.__views.__alloyId10);
    saveArticle ? $.__views.__alloyId10.addEventListener("click", saveArticle) : __defers["$.__views.__alloyId10!click!saveArticle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.add!androidbackbutton!closeMe"] && $.__views.add.addEventListener("androidbackbutton", closeMe);
    __defers["$.__views.__alloyId7!click!closeMe"] && $.__views.__alloyId7.addEventListener("click", closeMe);
    __defers["$.__views.__alloyId10!click!saveArticle"] && $.__views.__alloyId10.addEventListener("click", saveArticle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;