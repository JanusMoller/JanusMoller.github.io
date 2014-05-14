//= require_tree

  $(document).ready(function(){
     
    $(window).on('scroll',function() {
      var scrolltop = $(this).scrollTop();
   
      if(scrolltop >= 50) {
        $('#fixedbar').addClass( "navbar-white-show" );
      }
       
      else if(scrolltop <= 49) {
        $('#fixedbar').removeClass( "navbar-white-show" );
      }
    });
  });

  function menuopen() {
    $('#main-menu').addClass( "menu-overlay-show" );
  }
  function menuclose() {
    $('#main-menu').removeClass( "menu-overlay-show" );
  }


var sdegree = 0;

$(window).scroll(function(event){
   var st = $(this).scrollTop();  
    sdegree = st/10;
    var srotate = "rotate(" + sdegree + "deg)";
    $(".mill").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
});