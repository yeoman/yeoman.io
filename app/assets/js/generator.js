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

  // From http://stackoverflow.com/questions/3177836/
  // how-to-format-time-since-xxx-e-g-4-minutes-ago-
  // similar-to-stack-exchange-site
  function timeSince(date) {
    date = new Date(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  $(function() {
    $.when(getGeneratorList(), getBlackList())
      .done(function (getGeneratorListArgs, getBlackListArgs) {
        var blocked = getBlackListArgs[0];
        var modules = getGeneratorListArgs[0].filter(function (el) {
          return el !== null &&
            el.desc &&
            blocked.indexOf('generator-' + el.name) < 0;
        }).map(function (el) {
          el.official = el.owner.site === 'https://github.com/yeoman' ? 'official' : '';
          el.updated = timeSince(el.updated);
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
            'stars',
            'dls'
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
