var Toggle = {
    $menu: $("#pub-bul-sub1"),
    $menu2: $("#pub-bul-sub2"),
    $menu3: $("#usr-bul-sub1"),
    $tri: $("#pub-main1"),
    $tri2: $("#pub-main2"),
    $tri3: $("#usr-main1"),

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
        self.$tri3.click(function(){
            self.$menu3.toggleClass("active");
            self.$tri3.toggleClass("rot");
            console.log("hi");
        });
    },
};


$(document).ready(function () {
    Toggle.init();
});
