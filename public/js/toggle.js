var Toggle = {
    $menu: $("#pub-bul-sub1"),
    $menu2: $("#pub-bul-sub2"),
    $tri: $("#pub-main1"),
    $tri2: $("#pub-main2"),

    init: function(){
        var self = this;
        self.$tri.click(function(){
            self.$menu.toggleClass("active");
            self.$tri.toggleClass("rot");
        });
        self.$tri2.click(function(){
            self.$menu2.toggleClass("active");
            self.$tri2.toggleClass("rot");
        });
    },
};


$(document).ready(function () {
    Toggle.init();
});
