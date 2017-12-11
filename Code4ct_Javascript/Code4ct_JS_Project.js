$(document).ready(function() {

			 //options( 1 - ON , 0 - OFF)
			 var auto_slide = 1;
			 var hover_pause = 1;
			 var key_slide = 1;

			 //speed of auto slide(
			 var auto_slide_seconds = 0;

			 $('#carousel_inner a:first').before($('#carousel_inner a:last'));

			 //check if auto sliding is enabled
			 if(auto_slide == 1){
					 /*set the interval (loop) to call function slide with option 'right'
					 and set the interval time to the variable we declared previously */
					 var timer = setInterval('slide("right")', auto_slide_seconds);

					 /*and change the value of our hidden field that hold info about
					 the interval, setting it to the number of milliseconds we declared previously*/
					 $('#hidden_auto_slide_seconds').val(auto_slide_seconds);
			 }

			 //check if hover pause is enabled
			 if(hover_pause == 1){
					 //when hovered over the list
					 $('#carousel_inner').hover(function(){
							 //stop the interval
							 clearInterval(timer)
					 },function(){
							 //and when mouseout start it again
							 timer = setInterval('slide("right")', auto_slide_seconds);
					 });

			 }

			 //check if key sliding is enabled
			 if(key_slide == 1){

					 //binding keypress function
					 $(document).bind('keypress', function(e) {
							 //keyCode for left arrow is 37 and for right it's 39 '
							 if(e.keyCode==37){
											 //initialize the slide to left function
											 slide('left');
							 }else if(e.keyCode==39){
											 //initialize the slide to right function
											 slide('right');
							 }
					 });

			 }

 });

//FUNCTIONS BELLOW

//slide function
function slide(where){

					 //get the item width
					 var item_width = $('.code4ct_sponsers img').outerWidth() + 10;

					 /* using a if statement and the where variable check
					 we will check where the user wants to slide (left or right)*/
					 if(where == 'left'){
							 //...calculating the new left indent of the unordered list (ul) for left sliding
							 var left_indent = parseInt($('.code4ct_sponsers').css('left')) + item_width;
					 }else{
							 //...calculating the new left indent of the unordered list (ul) for right sliding
							 var left_indent = parseInt($('.code4ct_sponsers').css('left')) - item_width;

					 }

					 //make the sliding effect using jQuery's animate function... '
					 $('.code4ct_sponsers:not(:animated)').animate({'left' : left_indent},3000,function(){

							 /* when the animation finishes use the if statement again, and make an ilussion
							 of infinity by changing place of last or first item*/
							 if(where == 'left'){
									 //...and if it slided to left we put the last item before the first item
									 $('.code4ct_sponsers img:first').before($('.code4ct_sponsers img:last'));
							 }else{
									 //...and if it slided to right we put the first item after the last item
									 $('.code4ct_sponsers img:last').after($('.code4ct_sponsers img:first'));
							 }

							 //...and then just get back the default left indent
							 $('.code4ct_sponsers').css({'left' : '-210px'});
					 });

};

// ===== Scroll to Top ====
// If page is scrolled more than 600px, then img must fade in if else it must fade out the when img is clicked it will navigate to the top of the page
jQuery(document).ready(function($){
							$(window).scroll(function() {
								if ($(this).scrollTop() >= 800) {
									$('.backToTop').fadeIn('slow');
} 							else {
								$('.backToTop').fadeOut('slow');
							}
							});
							$('.backToTop').click(function() {
								$('html,header').animate({
									scrollTop : 0
								}, 2000);
								return false;
							});
							});
// ends
