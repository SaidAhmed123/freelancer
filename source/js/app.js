$(function () {


	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);
	$(window).on("scroll", function(){

		// fixed header ///
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}








		// MEnu---//

	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
		$("#header").toggleClass("active");
	});

	// smooth Scroll ///
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;
		$("#nav a").removeClass("active");
		$this.addClass("active");


			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);
	});
});  