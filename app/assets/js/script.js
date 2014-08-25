/*global jQuery, _, List */
(function (win, $) {
  'use strict';
  var $win = $(window);
  var $doc = $(document);

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  $(function() {
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

    $.getJSON('https://yeoman-generator-list.herokuapp.com', function (modules) {
      var blocklist = [
        'generator-express-angular', // haven't updated package.json
        'ft-wp', // haven't updated package.json
        'generator-angular-phonegap', // haven't updated package.json
        'generator-angular-js', // haven't updated package.json,
        'generator-ionicjs', // duplicate entry of generator-ionic
        'generator-charcoal', // deprecated,
        'generator-react-coffee-webpack', // duplicate entry of generator-react-webpack
      ];

      modules = _.filter(modules, function (el) {
        return el !== null && el.description &&
          blocklist.indexOf(el.name) === -1;
      }).map(function (el) {
        el.official = el.ownerWebsite === 'https://github.com/yeoman';
        el.name = el.name.replace('generator-', '');
        el.description = el.description.replace(/^(A |)Yeoman generator (for|to) /i, '');
        el.description = capitalize(el.description).trim().replace(/\.$/, '');
        el.stars = el.stars || el.watchers || 0;
        el.website = el.website || el.html_url;
        el.created = el.created || el.created_at;
        el.updated = el.updated || el.updated_at;
        return el;
      });

      var allModules = _.sortBy(modules, function (el) {
        return el.stars;
      }).reverse();

      var allTpl = _.template($('#plugins-all-template').html(), {
        modules: allModules
      });

      $('#loading').remove();
      $('#plugins-all').append(allTpl).find('.search').show();

      var list = new List('plugins-all', {
        valueNames: [
          'name',
          'desc',
          'author',
          'updated',
          'stars'
        ]
      });

      if (list.listContainer) {
        $('#plugins-all .updated time').timeago();

        list.on('updated', function () {
          $('#plugins-all .updated time').timeago();
          // If empty show not found message and hide the table head.
          $('.table thead').toggle(list.matchingItems.length !== 0);
          $('#search-notfound').toggle(list.matchingItems.length === 0);
        });
      }
    });
  });
})(window, jQuery);
