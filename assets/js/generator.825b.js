/*global jQuery, _, List */
(function (win, $) {
  'use strict';
  var $win = $(window);
  var $doc = $(document);

  function cleanupDescription(str) {
    str = str.trim()
      .replace(/:\w+:/, '') // remove GitHub emojis
      .replace(/ ?generator for (?:yeoman|yo) ?/i, '')
      .replace(/(?:a )?(?:yeoman|yo) (?:generator (?:for|to|that|which)?)?/i, '')
      .replace(/(?:yeoman|yo) generator$/i, '')
      .replace(/ ?application ?/i, 'app')
      .trim()
      .replace(/\.$/, '');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  }

  function getGeneratorList() {
    return $.getJSON('https://yeoman-generator-list.herokuapp.com');
  }

  function getBlackList() {
    return $.getJSON('/blacklist.json');
  }

  $(function() {
    $.when(getGeneratorList(), getBlackList())
      .done(function (getGeneratorListArgs, getBlackListArgs) {

        var modules = getGeneratorListArgs[0];
        var blocklist = getBlackListArgs[0];

        modules = _.filter(modules, function (el) {
          return el !== null && el.description && blocklist.indexOf(el.name) === -1;
        }).map(function (el) {
          el.official = el.ownerWebsite === 'https://github.com/yeoman';
          el.name = el.name.replace('generator-', '');
          el.description = cleanupDescription(el.description);
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
