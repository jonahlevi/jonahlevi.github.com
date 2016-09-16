/*-------------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*		0. Loading Div
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {
    var l = $(".overlay"),
        s = {
            display: "none",
            background: "none",
            width: "0",
            height: "0"
        };

    l.fadeOut("1000", function() {
        l.css(s);
    });
});

$(document).ready(function() {
    /*-----------------------------------------------------------------------------------*/
    /*		1. Scroll to CTA
    /*-----------------------------------------------------------------------------------*/
    $("a.to-cta").click(function() {
        $('html, body').animate({
            scrollTop: $("#cta").offset().top
        }, 1500);
    });

    /*-----------------------------------------------------------------------------------*/
    /*		2. Hellobar
    /*-----------------------------------------------------------------------------------*/
    if (Cookies.get('hellobar') == undefined) {
        Cookies.set('hellobar', 'fresh');
    };


    if (Cookies.get('hellobar') === 'fresh') {

        setTimeout(function() {
            $('#hellobar').animate({
                marginTop: 0
            }, 300);
        }, 1500);

    };



    $('#hellobar .close').click(function() {

        Cookies.set('hellobar', 'no', {
            expires: 2
        });

        $('#hellobar').animate({
            marginTop: -52
        }, 200);

    });

    $('#hellobar a').click(function() {

        Cookies.set('hellobar', 'yes', {
            expires: 30
        });

        $('#hellobar').animate({
            marginTop: -52
        }, 200);

    });
    /*-----------------------------------------------------------------------------------*/
    /*		3. Typed.js
    /*-----------------------------------------------------------------------------------*/
    $(function() {
        $(".typed").typed({
            strings: ["jewelers", "goldsmiths",
                "designers", "retailers", "you"
            ],
            typeSpeed: 40,
            loop: false,
            backSpeed: 20,
            backDelay: 1500
        });
    });

});

/*-----------------------------------------------------------------------------------*/
/*		4. Testimonials
/*-----------------------------------------------------------------------------------*/
$(function Testimonials() {

    var ul = $(".testimonials ul");
    test_h = ul.find("li:first-child").height() + 80;

    ul.animate({
        marginTop: -test_h
    }, 10000, "linear", function() {
        ul.find("li:first-child").appendTo(ul);
        ul.css({
            marginTop: -20
        });
    });

    var interval = self.setInterval(function() {
        Testimonials()
    }, 10000);

});










