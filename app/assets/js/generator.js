/*global instantsearch, timeago */
(function (win) {
  'use strict';

  var $ = win.jQuery;
  var doT = win.doT;
  doT.templateSettings.interpolate = /<\%=([\s\S]+?)\%\>/g;
  var itemTemplate = doT.template($('#template-item').text());

  function highlight(item, key) {
    if (item._highlightResult[key]) {
      return item._highlightResult[key].value;
    }
    return item[key];
  }

  function getUrl(item) {
    if (item.homepage) {
      return item.homepage;
    }
    if (item.githubRepo) {
      return 'https://github.com/' + item.githubRepo.user + '/' + item.githubRepo.project;
    }
    return 'https://npmjs.com/package/' + item.name;
  }

  function getDownloadClass(downloads) {
    if (downloads < 1000) {
      return null;
    }
    if (downloads < 10000) {
      return 'generator--downloads-t1';
    }
    if (downloads < 50000) {
      return 'generator--downloads-t2';
    }
    if (downloads < 100000) {
      return 'generator--downloads-t3';
    }
    return 'generator--downloads-t4';
  }


  $(function() {

    var instructions = $('#instructions');
    $('#instructions-toggle').on('click', function (e) {
      e.preventDefault();
      instructions.toggle('fast');
    });

    var search = instantsearch({
      appId: 'OFCNCOG2CU',
      apiKey: '14ddf54fd4f3435c1cd4038395a0cf10',
      indexName: 'npm-search',
      searchParameters: {
        filters: 'deprecated:false AND computedKeywords:yeoman-generator',
        analyticsTags: ['yeoman'],
      }
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#searchbox',
        poweredBy: true,
        placeholder: 'Search into all yeoman generators'
      })
    );

    search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats'
      })
    );

    search.addWidget(
      instantsearch.widgets.hits({
        container: '#results',
        templates: {
          empty: 'No matching generator found. Try something else.',
          item: function(item) {
            var name = highlight(item, 'name').replace('generator-', '');
            var url = getUrl(item);
            var description = highlight(item, 'description');
            var authorName = item.owner.name;
            var authorUrl = item.owner.link;
            var authorAvatar = 'https://res.cloudinary.com/hilnmyskv/image/fetch/w_40,h_40,f_auto,q_80,fl_lossy/' + item.owner.avatar;
            var version = item.version;
            var downloads = item.downloadsLast30Days;
            var downloadReadable = item.humanDownloadsLast30Days;
            var downloadClass = getDownloadClass(downloads);
            var lastUpdated = timeago().format(item.modified);

            return itemTemplate({
              name: name,
              url: url,
              description: description,
              authorName: authorName,
              authorAvatar: authorAvatar,
              authorUrl: authorUrl,
              version: version,
              downloadReadable: downloadReadable,
              downloadClass: downloadClass,
              lastUpdated: lastUpdated
            });
          }
        }
      })
    );

    search.start();
  });
})(window);

