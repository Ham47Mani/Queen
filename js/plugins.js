/*
* Template Name      : Hammani Queen
* Template Version   : V 1.0.0
* Template Url       : .....................
* Language           : HTML5 | CSS3 |JavaScript
* Framework          : Bootstrap[CSS] | jQuery [JavaScript]
* Preprocesseur      : SaSS [CSS]
* Contact Me : Skaype   :- Boudraa.Hammani
*				Facebook :- Ham mani
*				Email    :- Ham47mani@gmail.com
*/
/*global $, window*/
$(function () {
    "use strict";

    /*                       Start Cashing Variables
    ========================================================================== */
    var myHeader        = $("header"),
        myIntro         = $("header .content"),
        myIcons         = $("nav .glyphicon"),
        myChivRight     = $(".testmonials .fa-chevron-right"),
        myChivLeft      = $(".testmonials .fa-chevron-left");
    /*                       End Cashing Variables
    ========================================================================== */
    
    /*                       Start Header
    ========================================================================== */
    //--> Start Customize Navbar Action
    myIcons.click(function () {
        if (myIcons.hasClass("glyphicon-menu-hamburger")) {
            myIcons.removeClass("glyphicon-menu-hamburger");
            $("nav ul").fadeIn(500, function () {
                myIcons.addClass("glyphicon-remove");
            });
        } else {
            myIcons.removeClass("glyphicon-remove");
            $("nav ul").fadeOut(500, function () {
                myIcons.addClass("glyphicon-menu-hamburger");
            });
        }
    });
    
    //--> Smoth Scroll To Services
    $("nav ul li").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).data("value")).offset().top
        }, 2000);
    });
    
    //--> Customize Header Height
    myHeader.height($(window).height() - 150);
    myIntro.css("paddingTop", (($(window).height() - 150) - myIntro.height()) / 2);
    
    $(window).resize(function () {
        myHeader.height($(window).height() - 150);
        myIntro.css("paddingTop", (($(window).height() - 150) - myIntro.height()) / 2);
    });
    /*                       End Header
    ========================================================================== */
    
    /*                       Start Testimonials
    ========================================================================== */
    //--> Check Tesmonials
    function checkClients() {
        
        if ($(".testmonials .lorem p:first").hasClass("active")) {
            myChivLeft.fadeOut();
        } else {
            myChivLeft.fadeIn();
        }
        
        if ($(".testmonials .lorem p:last").hasClass("active")) {
            myChivRight.fadeOut();
        } else {
            myChivRight.fadeIn();
        }
    }
    
    // Make Action On Click
    $(".testmonials i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            
            $(".testmonials .lorem .active").fadeOut(1000, function () {
                $(this).removeClass("active").next("p").addClass("active").fadeIn();
                checkClients();
            });
            
            $(".testmonials .avatar .active").fadeIn(1000, function () {
                $(this).removeClass("active").next("img").addClass("active").fadeIn(1000);
                checkClients();
            });
            
        } else {
            
            $(".testmonials .lorem .active").fadeOut(1000, function () {
                $(this).removeClass("active").prev("p").addClass("active").fadeIn();
                checkClients();
            });
            
            $(".testmonials .avatar .active").fadeIn(2000, function () {
                $(this).removeClass("active").prev("img").addClass("active").fadeIn(1000);
                checkClients();
            });
            
        }
    });
    //--> Call checkClients Function
    checkClients();
    /*                       End Testimonials
    ========================================================================== */
    
    /*                       Start Portfolios
    ========================================================================== */
    //--> Trigger MixItUp
    $(".galery").mixItUp();
    
    //--> Costomiz Ul li
    $(".portfolios .container ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    /*                       End Portfolios
    ========================================================================== */

    /*                       Start Nice Scroll
    ========================================================================== */
    $('html').niceScroll({
        cursorcolor: 'var(--main-Color)',
        cursorborder: '1px solid var(--main-Color)'
    });
    /*                       End Nice Scroll
    ========================================================================== */
});

/* ------------------------------- Start Loading Screene ------------------------------- */
$(window).on("load", function () {
    "use strict";
    $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
});
/* ------------------------------- End Loading Screene ------------------------------- */