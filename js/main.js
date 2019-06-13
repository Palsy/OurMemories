

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
	
  let player = new cplayer({
	element: document.getElementById('music_player'),
	playlist: [
	  {
		src: './music/Beautiful_lyrics.mp3',
		poster: './img/sungho.jpg',
		name: 'Beautiful lyrics',
		artist: 'Crush',
		//lyric: '[00:00.00]테스트\n[00:01.00]테스트1\n',
		//sublyric: '[00:00.00]테스트\n[00:01.00]테스트1\n',
		album: '6'
	  }
	],
	big: true,
	autoplay: true
  })
	
	//$(".todo-list").sortable();
}