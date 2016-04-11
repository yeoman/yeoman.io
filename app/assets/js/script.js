/*global jQuery, _, List */
(function (win, $) {
  'use strict';

  $(function() {
    // Define page elements
    var $win = $(window);
    var $doc = $(document);
    var $body = $(document.body);

    // Sticky submenu
    (function() {
      var $contentNav = $('.context-nav');
      var $footer = $('.SiteFooter');
      var footerState = Math.round($footer.offset().top);

      function resizer () {
        var state = $doc.scrollTop() > 148;
        var endState = Math.round($contentNav.offset().top + $contentNav.height());

        if (state !== oldState) {
          toggle(state);
          $contentNav.removeClass('long-sticky');
        }

        //resize for long lists
        if (endState > footerState) {
          $contentNav.addClass('long-sticky');
        }
      }
      function toggle (state) {
        var rightOffset = (
          $win.outerWidth() - $contentNav.offset().left -
          $contentNav.outerWidth()
        ) + 'px';
        $contentNav
          .toggleClass('navbar-fixed', state)
          .css('right', state ? rightOffset : 0);
        oldState = state;
      }
      if ($contentNav.length) {
        var oldState = null;
        $doc.scroll(resizer).trigger('scroll');
        $win.resize(function() {
          oldState = null;
          resizer();
        });
      }
    })();

    (function() {
      // Open/close mobile menu
      var $pageHeader = $('.page-header');
      var $menu = $('.mobile-menu-toggle');
      var onClick = function (e) {
        var $target = $(e.target);
        if (!$target.is($menu) && !$target.closest('.main-menu').length) {
          $menu.trigger('click.menu');
        }
      };
      $menu.on('click.menu', function () {
        $pageHeader.toggleClass('open');
        if ($pageHeader.hasClass('open')) {
          setTimeout(function () {
            $body.on('click.menu', onClick);
          }, 0);
        } else {
          $body.off('click.menu');
        }
      });
    })();

    // Toggle blog menus
    $('.context-nav, .year_divider').click(function () {
      $(this).toggleClass('open');
    });

    // Beautify code blocks
    $('pre code').addClass('prettyprint');
    window.prettyPrint();
  });
})(window, window.jQuery);
