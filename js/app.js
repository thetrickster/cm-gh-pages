// App Javascript

(function($){

  function _init() {
    $.fn.animateBreathing();
    $("[data-email-link]").emailLink();
    // $.fn.svgLogo();

  }

  $(document).ready(function() {

    _init();

  });

})(jQuery);
