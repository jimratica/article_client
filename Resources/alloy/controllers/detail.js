function Controller() {
    function closeMe() {
        $.detail.close();
    }
    function updateArticle() {
        dialogs.confirm({
            message: "Are you sure you want to make changes?",
            callback: function() {
                model.save({
                    title: $.title.value,
                    author: $.author.value
                });
            }
        });
    }
    function deleteArticle() {
        dialogs.confirm({
            message: "Are you sure you want to delete this article?",
            callback: function() {
                model.destroy({
                    wait: true,
                    success: function() {
                        $.detail.close();
                    },
                    error: function(mod, response) {
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
    $.__views.detail = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "Article Details",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    closeMe ? $.__views.detail.addEventListener("androidbackbutton", closeMe) : __defers["$.__views.detail!androidbackbutton!closeMe"] = true;
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Title:",
        id: "__alloyId2"
    });
    $.__views.detail.add($.__views.__alloyId2);
    $.__views.title = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "title"
    });
    $.__views.detail.add($.__views.title);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Author:",
        id: "__alloyId3"
    });
    $.__views.detail.add($.__views.__alloyId3);
    $.__views.author = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "author"
    });
    $.__views.detail.add($.__views.author);
    $.__views.__alloyId4 = Ti.UI.createButton({
        top: "10dp",
        title: "Save Edits",
        id: "__alloyId4"
    });
    $.__views.detail.add($.__views.__alloyId4);
    updateArticle ? $.__views.__alloyId4.addEventListener("click", updateArticle) : __defers["$.__views.__alloyId4!click!updateArticle"] = true;
    $.__views.__alloyId5 = Ti.UI.createButton({
        top: "10dp",
        title: "Remove",
        id: "__alloyId5"
    });
    $.__views.detail.add($.__views.__alloyId5);
    deleteArticle ? $.__views.__alloyId5.addEventListener("click", deleteArticle) : __defers["$.__views.__alloyId5!click!deleteArticle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var article = args.toJSON();
    var model = args;
    $.author.value = article.author || "No author";
    $.title.value = article.title || "No title";
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.detail!androidbackbutton!closeMe"] && $.__views.detail.addEventListener("androidbackbutton", closeMe);
    __defers["$.__views.__alloyId1!click!closeMe"] && $.__views.__alloyId1.addEventListener("click", closeMe);
    __defers["$.__views.__alloyId4!click!updateArticle"] && $.__views.__alloyId4.addEventListener("click", updateArticle);
    __defers["$.__views.__alloyId5!click!deleteArticle"] && $.__views.__alloyId5.addEventListener("click", deleteArticle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;