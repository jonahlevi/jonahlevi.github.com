/*-------------------------------------------------------------------------------------

    Custom JS - All front-end jQuery
 
-------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*      0. Loading Div
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
    /*      1. Scroll to CTA
    /*-----------------------------------------------------------------------------------*/
    $("a.to-cta").click(function() {
        $('html, body').animate({
            scrollTop: $("#cta").offset().top
        }, 1500);
    });

    /*-----------------------------------------------------------------------------------*/
    /*      2. Hellobar
    /*-----------------------------------------------------------------------------------*/
    if (Cookies.get('hellobar') == undefined) {
        Cookies.set('hellobar', 'fresh');
    };


    if (Cookies.get('hellobar') === 'fresh') {

        setTimeout(function() {
            $('#hellobar').animate({
                marginTop: 0
            }, 300);
        }, 12000);

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
    /*      3. Typed.js
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

    /*-----------------------------------------------------------------------------------*/
    /*      4. Testimonials
    /*-----------------------------------------------------------------------------------*/
    function testimonalSlider() {
        ul = $(".testimonials ul");
        var h = ul.find("li:first-child").outerHeight(true);

        ul.animate({
            marginTop: -h
        }, 10000, "linear", function() {
            ul.find("li:first-child").appendTo(ul);

            ul.css({
                marginTop: 30

            });
        });
    }
    
    testimonalSlider();
    setInterval(testimonalSlider, 10000);


    /*-----------------------------------------------------------------------------------*/
    /*      4. Career
    /*-----------------------------------------------------------------------------------*/
    $(".job-title").click(function() {

        if ($(this).next().is(':visible') == false) {
            $(this).next().show({}, 500);
        } else if ($(this).next().is(':visible') == true) {
            $(this).next().hide({}, 500);

        }
    });

});
