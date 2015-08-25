/*global jQuery, _, List */
(function (win, $) {
  'use strict';
  var $win = $(window);
  var $doc = $(document);

  $(function() {
    var $contentNav = $('.context-nav');
    if ($contentNav.length) {
      $doc.scroll(function () {
        $contentNav.toggleClass('navbar-fixed', $doc.scrollTop() > 148);
      });
    }

    // Open/close mobile menu
    var $menu = $('.mobile-menu-toggle').on('click.menu', function () {
      var $pageHeader = $('.page-header').toggleClass('open');
      var $body = $(document.body);
      if ($pageHeader.hasClass('open')) {
        setTimeout(function () {
          $body.on('click.menu', function (e) {
            var $target = $(e.target);
            if (!$target.is($menu) && !$target.closest('.main-menu').length) {
              $menu.trigger('click.menu');
            }
          });
        }, 0);
      } else {
        $body.off('click.menu');
      }
    });

    $('.context-nav, .year_divider').click(function () {
      $(this).toggleClass('open');
    });

    // Beautify code blocks
    $('pre code').addClass('prettyprint');
    window.prettyPrint();
  });
})(window, jQuery);
