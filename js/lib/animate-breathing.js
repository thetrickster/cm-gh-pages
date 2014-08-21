  // Activate "breathing" animation on scroll button
(function($){
  $.fn.animateBreathing = function() {
    // TODO for Ajajx: If there's a hash, show the element right away
    // $( '[data-anim-inhale]' ).addClass( 'active' );
    // $( '[data-anim-inhale]' ).addClass( 'animate' );

    setTimeout( function() {
        $( '[data-anim-inhale]' ).addClass( 'active' );
    }, 3000 );
    setTimeout( function() {
        $( '[data-anim-inhale]' ).addClass( 'animate' );
    }, 4000 );
    
  }
})(jQuery);
