(function($){
	"use strict";

    // Navbar Menu JS
    $('.navbar-light .navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 10
        }, 100);
        e.preventDefault();
    });
    $('.navbar .navbar-nav li a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    // Navbar Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar').addClass("is-sticky");
        }
        else{
            $('.navbar').removeClass("is-sticky");
        }
    });

    // Projects Slides
    $('.projects-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    // Testimonials Slides
    $('.testimonials-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
    });

    // Team Slides
    $('.team-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 4,
            },
            1200: {
                items: 4,
            }
        }
    });

    // Projects Image Slides
    $('.projects-image-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        }
    });

    // Public Methods Tilt JS
    $.fn.tilt.destroy = function() {
        $(this).each(function () {
            $(this).find('.js-tilt-glare').remove();
            $(this).css({'will-change': '', 'transform': ''});
            $(this).off('mousemove mouseenter mouseleave');
        });
    };
    $.fn.tilt.getValues = function() {
        const results = [];
        $(this).each(function () {
            this.mousePositions = getMousePositions.call(this);
            results.push(getValues.call(this));
        });
        return results;
    };
    $.fn.tilt.reset = function() {
        $(this).each(function () {
            this.mousePositions = getMousePositions.call(this);
            this.settings = $(this).data('settings');
            mouseLeave.call(this);
            setTimeout(() => {
                this.reset = false;
            }, this.settings.transition);
        });
    };

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
        // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email address.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Progress Bar
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    if($('.count-box').length){
        $('.count-box').appear(function(){
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }
            
        },{accY: 0});
    }

    // Partner Slides
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 6
            }
        }
    });

    // WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       20,         // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
    });

    // Preloader Area
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});


    /*Start "Home Demo - 3", "Home Demo - 4" & "Home Demo - 5" Demo JS*/

    // Scroll JS
	$('.axton-aside .navbar-nav .nav-item .nav-link').on('click', function(){
		$('.axton-aside').toggleClass('active-axton-aside');
		$('.responsive-burger-menu').toggleClass('active');
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

    // Hide Side Menu
	$('.aside-show-hide span').on('click', function() {
		$('.main-container').toggleClass('active-main-container');
	});

	// Burger Menu
	$('.responsive-burger-menu').on('click', function() {
		$('.responsive-burger-menu').toggleClass('active');
		$('.axton-aside').toggleClass('active-axton-aside');
	});

    // Pricing Switcher
	let el = document.getElementById('filt-monthly');
	if(el){
		let e = document.getElementById("filt-monthly"),
		d = document.getElementById("filt-yearly"),
		t = document.getElementById("switcher"),
		m = document.getElementById("monthly"),
		y = document.getElementById("yearly");
		e.addEventListener("click", function(){
			t.checked = false;
			e.classList.add("toggler--is-active");
			d.classList.remove("toggler--is-active");
			m.classList.remove("hide");
			y.classList.add("hide");
		});
		d.addEventListener("click", function(){
			t.checked = true;
			d.classList.add("toggler--is-active");
			e.classList.remove("toggler--is-active");
			m.classList.add("hide");
			y.classList.remove("hide");
		});
		t.addEventListener("click", function(){
			d.classList.toggle("toggler--is-active");
			e.classList.toggle("toggler--is-active");
			m.classList.toggle("hide");
			y.classList.toggle("hide");
		});
	}

    // Happy Clients Slides
    $('.happy-clients-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
    });

    // Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

    /*End "Home Demo - 3", "Home Demo - 4" & "Home Demo - 5" Demo JS*/

}(jQuery));