/*globals $:false */
//for JSLint
(function () {
    'use strict';
    //for JSLint
    var WantToSection = 0;
    var WantToSlide = 0;
    var setAutoScrollingstatus = false;

    $(document).ready(function () {
        $('#fullpage').fullpage({
            //Navigation
            menu: '#myMenu',
            lockAnchors: false,
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['1', '2', '3', '4'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
            resize: false,
            sectionsColor: ['#FFFFFF', '#fff', '#58FA82', '#58ACFA'],
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            //events
            onLeave: function (index, nextIndex, direction) {


            },
            afterLoad: function (anchorLink, index) {
                var loadedSection = $(this);
                if (anchorLink === 'secondPage') {
                    $('.invisible').addClass('show');
                }
            },
            afterRender: function () {},
            afterResize: function () {},
            afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
            onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}


        });

        //        console.log($('.section').length);
        //        console.log($($('.section')[4]).find('.slide').length)



        $('#setAutoScrolling').on('click', function () {
            setAutoScrollingstatus = !setAutoScrollingstatus;
            if (setAutoScrollingstatus === true) {
                var button = document.getElementById('setAutoScrolling');
                button.innerHTML = "on";
            } else {
                $(this).text('off');
            }
            $.fn.fullpage.setAutoScrolling(setAutoScrollingstatus);


        });


        //分頁範例
        //        $('#silentMoveTo').on('click', function () {
        //            WantToSection = prompt("你要去第幾頁?");
        //            WantToSlide = prompt("你要去第幾個Slide?");
        //            if (!WantToSection || !WantToSlide) {
        //                alert('uck off ');
        //            } else {
        //                $.fn.fullpage.silentMoveTo(WantToSection, WantToSlide - 1);
        //            }
        //
        //        });


    });


    //function End   
}());