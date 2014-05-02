/*global jQuery, _, List */
(function (win, $) {
  'use strict';
  var $win = $(window);
  var $doc = $(document);

  $(function() {

    $('pre code').addClass('prettyprint');
    window.prettyPrint();

    var getGenerators = function(url, official) {
      $.getJSON(url, function (modules) {
        modules = official ? modules.items : modules;

        var blocklist = [
          'generator-express-angular', // haven't updated package.json
          'ft-wp', // haven't updated package.json
          'generator-angular-phonegap', // haven't updated package.json
          'generator-angular-js', // haven't updated package.json
          // Official generators
          'generator-angular',
          'generator-webapp',
          'generator-ember',
          'generator-backbone',
          'generator-mobile',
          'generator-generator',
          'generator-chromeapp',
          'generator-chrome-extension',
          'generator-karma',
          'generator-polymer',
          'generator-node',
          'generator-jquery',
          'generator-bootstrap',
          'generator-mocha',
          'generator-bbb',
          'generator-gruntfile',
          'generator-gulp-webapp',
          'generator-gruntplugin',
          'generator-jasmine',
          'generator-dummy',
          'generator-commonjs'
        ];

        modules = _.filter(modules, function (el) {
          if ( official ) {
            return el !== null &&
              el.name.slice(0, 10) === 'generator-' &&
              el.name !== 'generator-bbb';
          }
          return el !== null && el.description &&
            blocklist.indexOf(el.name) === -1;
        }).map(function (el) {
          el.description = el.description.replace(
            /^(A |)Yeoman generator (for|to) /i, ''
          );
          el.stars = el.stars || el.watchers || 0;
          el.website = el.website || el.html_url;
          el.created = el.created || el.created_at;
          el.updated = el.updated || el.updated_at;
          return el;
        });

        var allModules = _.sortBy(modules, function (el) {
          if ( official ) {
            return el.updated;
          }
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
            'stars',
            'forks'
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
    };

    if ( $('.community-generators').length ) {
      getGenerators('https://yeoman-generator-list.herokuapp.com', false);
    }

    if ( $('.official-generators').length ) {
      getGenerators('https://api.github.com/search/repositories?q=generator+in:name+user:yeoman', true);
    }
  });
})(window, jQuery);
