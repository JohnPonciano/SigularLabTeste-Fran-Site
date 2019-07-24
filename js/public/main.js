;(function(){

	var app = {

		// Initial function
		init: function(){

			// Smooth scroll
			$('a[href^="#"]').bind('click.smoothscroll',function (e) {
				e.preventDefault();

	        var target = this.hash,
	        $target = $(target);

	        $('html, body').stop().animate({
						'scrollTop': $target.offset().top-0
	        }, 900, 'swing', function () {
						window.location.hash = target;
					});
			});

			// NivoSlider
		// $('#slider').nivoSlider({
        // effect: 'fade',
        // directionNav: true,
        // controlNav: false,
        // prevText: '',
        // nextText: '',
        // pauseTime: 300000,
	    // });

		},

		// When dom is ready
		domReady: function(){},

		// When window loaded
		windowLoad: function(){},

		// When document is ready
		documentReady: function(){},

	};

	app.init();

	$(function(){
		app.domReady();

		$(window).load(app.windowLoad);

		$(document).ready(app.documentReady);
	});

})(jQuery);
