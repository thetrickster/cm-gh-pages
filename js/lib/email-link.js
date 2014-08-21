// Convert Email Address to link
(function($){
  $.fn.emailLink = function(pattern) {
    var emAddr = $(this).text().trim();
    if (!pattern) var pattern = / \[at\] /g;

    // Replace the email address pattern with @ and build our real email address
    emAddr = emAddr.replace(pattern, "@");
    $(this).html('<a href="mailto:'+emAddr+'">'+emAddr+'</a>');

    console.log(emAddr);
  }
})(jQuery);