(function (win) {
  'use strict';

  var $ = win.jQuery;

  // Settings for doT.js
  var doT = win.doT;
  doT.templateSettings.interpolate = /<\%=([\s\S]+?)\%\>/g;
  doT.templateSettings.conditional = /<\%if( else)?\s*([\s\S]*?)\s*\%>/g;
  doT.templateSettings.iterate = /<\%each\s*(?:\%>|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\%>)/g;

  $(function() {
    var instructions = $('#instructions');
    $('#instructions-toggle').on('click', function (e) {
      e.preventDefault();
      instructions.toggle('fast');
    });

    var tpl = doT.template($('#plugins-all-template').text());
    var pluginsAll = $('#plugins-all');
    var lastSha = win.Cookies.get('sha');

    function insertErrorMsg() {
      pluginsAll.html('There was a problem fetching the generator list. Please try again later.<br />Or you can use <a href="https://npms.io/search?q=keywords%3Ayeoman-generator">npms.io</a>.');
    }

    function fetchAndDisplayListGenerators(sha) {
      $.getJSON('https://cdn.rawgit.com/yeoman/yeoman-generator-list/' + sha + '/cache.json')
      .done(function (plugins) {
        if (Array.isArray(plugins)) {
          pluginsAll.html(tpl({
            modules: plugins.sort(function (a, b) {
              return a.stars === b.stars ? 0 : a.stars < b.stars ? 1 : -1;
            })
          }));

          var list = new win.List('plugins-all', {
            valueNames: [
              'name',
              'owner',
              'stars',
              'updated',
              'downloads',
              'description'
            ]
          });

          if (list.listContainer) {
            list.on('updated', function () {
              $('.table thead').toggle(list.matchingItems.length !== 0);
              $('#search-notfound').toggle(list.matchingItems.length === 0);
            });
          }
        }
        else {
          insertErrorMsg();
        }
      })
      .fail(insertErrorMsg);
    }

    if (lastSha) {
      fetchAndDisplayListGenerators(lastSha);
    } else {
      $.getJSON('https://api.github.com/repos/yeoman/yeoman-generator-list/commits?sha=cache-generators-list')
      .done(function (response) {
        var inThirtyMinutes = new Date(new Date().getTime() + 30 * 60 * 1000);
        win.Cookies.set('sha', response[0].sha, {
          expires: inThirtyMinutes
        });
        fetchAndDisplayListGenerators(response[0].sha);
      })
      .fail(insertErrorMsg);
    }
  });
})(window);
