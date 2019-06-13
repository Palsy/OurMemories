

window.onload = function() {
	var now = new Date();
	var then = new Date("may 25,2019");
	var gap = now.getTime() - then.getTime();
	gap = Math.floor(gap / (1000 * 60 * 60 * 24));
	console.log(gap);
	$("#d-day").html("D + " + gap);
	
	$('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green'
            });
			
	 $(".todo-list").sortable({
		placeholder: "sort-highlight",
		handle: ".handle",
		forcePlaceholderSize: true,
		zIndex: 999999
	}).disableSelection();
	
	//$(".todo-list").sortable();
}