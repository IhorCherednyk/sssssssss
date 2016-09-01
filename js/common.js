skrollr.init({
	smoothScrolling: true,
	smoothScrollingDuration: 400

});


$(function() {

	$(".main-ul > li").click(function(){
		$(".main-ul > li").removeClass("active");
		var th = $(this);
		th.addClass("active");
		th.find(".main-sub-menu li").click(function(){
			th.find(".main-sub-menu li").removeClass("active");
			$(this).addClass("active");
		})
	})

	$("#news-content-item-wrap").perfectScrollbar({
		maxScrollbarLength: 50
	});

});

