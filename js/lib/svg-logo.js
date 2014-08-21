// SVG Logo Script

var $myLogo;

(function($) {
  
  // Snap.svg with the logo
  $.fn.svgLogo = function() {
    var $logo = $(".logo");
    $myLogo = Snap("#logo-replace");

    // Load our SVG file
    Snap.load("/img/logo-white.svg", function(f) {
      console.log(f);
      // Hide bitmap logo
      $logo.hide();
      // Append our snap svg object to our placeholder
      $myLogo.append(f);

      // Ex: Change the color (must be after the svg is loaded)
      // $.fn.changeLogoColor("#0099CC");
    });
    
  }

  $.fn.changeLogoColor = function(color) {
    var path = $myLogo.selectAll("#logo-svg-group path");
    path.attr({fill: color});
  }

})(jQuery);
