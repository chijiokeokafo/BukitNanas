$(document).on('ready page:load', function() {
	$('#search-form').submit(function(event) {
		event.preventDefault();
		var searchValue = $('#search').val();

		$.getScript('/products?search=' + searchValue);
	});
	$(window).scroll(function() {
	 ($(window).scrollTop() > $(document).height() - $(window).height() - 50) 
	});
});