/*global jQuery, _, List, GETSTATICURL */
(function (win, $) {
  'use strict';

  function getGeneratorList() {
    return $.getJSON('http://104.236.186.228');
    // return $.getJSON('https://yeoman-generator-list.herokuapp.com');
  }

  function getBlackList() {
    return $.getJSON(GETSTATICURL('/blacklist.json'));
  }

  $(function() {
    $.when(getGeneratorList(), getBlackList())
      .done(function (getGeneratorListArgs, getBlackListArgs) {
        var blocked = getBlackListArgs[0];
        var modules = getGeneratorListArgs[0].filter(function (el) {
          return el !== null && el.description && blocked.indexOf(el.name) < 0;
        }).map(function (el) {
          el.official = el.ownerWebsite === 'https://github.com/yeoman' ? 'official' : '';
          el.name = el.name.replace('generator-', '');
          el.stars = el.stars || 0;
          return el;
        }).sort(function (a, b) {
          return a.stars === b.stars ? 0 : a.stars < b.stars ? 1 : -1;
        });

        var allTpl = _.template($('#plugins-all-template').html(), {
          modules: modules
        });

        $('#plugins-all').html(allTpl).find('.search').show();

        var list = new List('plugins-all', {
          valueNames: [
            'name',
            'stars'
          ]
        });

        if (list.listContainer) {
          list.on('updated', function () {
            // If empty show not found message and hide the table head.
            $('.table thead').toggle(list.matchingItems.length !== 0);
            $('#search-notfound').toggle(list.matchingItems.length === 0);
          });
        }
      });
  });
})(window, jQuery);
