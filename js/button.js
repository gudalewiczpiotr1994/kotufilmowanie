$(document).ready(function () {
    links();
    toggleOnScroll();
    toggleContent1();

    $(window).resize(function () {
        var width = $(document).width();

        if (width < 960) {
            $('.aboutMe').animate({
                left: '0'
            }, 500);
        }
    });

});

function links() {

    $(".link1").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $(".link2").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#offer").offset().top
        }, 1000);
    });

    $(".link3").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

    $(".link4").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    // document.getElementById('quote').innerHTML = quotes[number];
}

var number = Math.floor(Math.random() * 4) + 0;

function timer() {

    var dzisiaj = new Date();

    var rok = dzisiaj.getFullYear();

    document.getElementById("zegar").innerHTML = "&copy" + rok;

    setTimeout("timer()", 1000);


}

var toggleButton1 = false;
var toggleButton2 = false;

function toggleContent1() {
    var arrow = $('.arrowImage img');

    if ($('.hideButton').click(function () {
        if (toggleButton1 == false) {
            $('.aboutMe').animate({
                left: "-65%"
            }, 500);
            arrow.addClass('arrowImageRotate');
            toggleButton1 = true;
        }
        else {
            $('.aboutMe').animate({
                left: "0"
            }, 500);
            arrow.removeClass('arrowImageRotate');
            toggleButton1 = false;
        }
    })) ;


    if ($('.hideButton2').click(function () {
        if (toggleButton2 == false) {
            $('.services').animate({
                left: "100%"
            }, 500);
            arrow.addClass('arrowImageRotate');
            toggleButton2 = true;
        }
        else {
            $('.services').animate({
                left: "35%"
            }, 500);
            arrow.removeClass('arrowImageRotate');
            toggleButton2 = false;
        }
    })) ;

    if ($('#portfolio span').click(function () {
        $('.container-portfolio').slideToggle(1000);
    })) ;

}

var toggleOnScrollBtn = true;
var toggleOnScrollBtn2 = true;

function toggleOnScroll() {
    /* Eve time the window is scrolled ... */
    $(window).scroll(function () {

        var bottom_of_object1 = $('.aboutMe').offset().top + $('.aboutMe').outerHeight();
        var bottom_of_window1 = $(window).scrollTop() + $(window).height();

        var bottom_of_object2 = $('.services').offset().top + $('.services').outerHeight();
        var bottom_of_window2 = $(window).scrollTop() + $(window).height();

        if (toggleOnScrollBtn == true) {
            if (bottom_of_window1 > bottom_of_object1) {
                $('.aboutMe').animate({
                    left: '0'
                }, 500);
                toggleOnScrollBtn = false;
            }
        }

        if (toggleOnScrollBtn2 == true) {
            if (bottom_of_window2 > bottom_of_object2) {
                $('.services').animate({
                    left: '35%'
                }, 500);
                toggleOnScrollBtn2 = false;
            }
        }


    });
}


function displayVideoPlayer(id) {

    var videoContainer = $('.videoContainer');

    var urlTab = [
        "<iframe height='80%' width='80%' src='https://player.vimeo.com/video/292489231?byline=0&portrait=0'" +
        " frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
        "<iframe height='80%' width='80%' src='https://player.vimeo.com/video/307826310?byline=0&portrait=0'" +
        "  width='100%' frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
        "<iframe height='80%' width='80%' src='https://player.vimeo.com/video/288627554?byline=0&portrait=0'" +
        "  width='100%' frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
        "<iframe height='80%' width='80%' src='https://player.vimeo.com/video/304469637?byline=0&portrait=0'" +
        "  width='100%' frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
        "<iframe height='80%' width='80%' src='https://player.vimeo.com/video/304482361?byline=0&portrait=0'" +
        "  width='100%' frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
        "<iframe height='80%' width='80%' src='https://player.vimeo.com/video/307846348?byline=0&portrait=0'" +
        "  width='100%' frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
    ];
    videoContainer.append(urlTab[id]);
    videoContainer.fadeIn();

    $('.btnExit').click(function () {
        $('.videoContainer iframe').remove();
        videoContainer.fadeOut();
    })

}
