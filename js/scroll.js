$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#btn_scroll').fadeIn();
 
} else {
 
$('#btn_scroll').fadeOut();
 
}
 
});
 
$('#btn_scroll').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});