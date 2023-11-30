var num = 30;
$(window).bind('scroll',function() {
  if($(window).scrollTop() > num) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});

// (function(){
//     var words = [
//         ' DEVELOPER',
//         ' DESIGNER'
//         ], i = 0;
//     setInterval(function(){
//         $('#changingword').fadeOut(function(){
//             $(this).html(words[i=(i+1)%words.length]).fadeIn();
//         });
//     }, 2500);
      
// })();

var typed = new Typed('#element', {
  strings: ['Web Developer.', ' Web Designing.', 'Frontend.'],
  typeSpeed: 60,
});

$( ".user-portfolio-list a" ).click(function (event){
    $(`.tabs`).removeClass('active');
    event.preventDefault()
    $(".user-portfolio-list a").removeClass('active')
    $(event.target).addClass('active')
    var id = $(event.target).attr('href');
    $(`.tabs${id}`).addClass('active')
});


$(".slider-lists").slick({
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll:1,
    arrows: true, 
    dots: true,
    autoplay:true,
    autoplaySpeed:4000

})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});