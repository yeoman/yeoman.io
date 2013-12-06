// Agency code.

(function() {
$( document ).ready( function() {

  //
  $('pre code').addClass('prettyprint');
  //
  $( window ).bind( 'load resize', setMenuBackgroundHeight );

  prettyPrint();

  setMenuBackgroundHeight();

});


var setMenuBackgroundHeight = function() {

  var d = $( document ).height();
  var w = $( window ).width();

  if( w > 760 ) {
    $( 'nav' ).css( { "min-height": (d) } );
  } else {
    $( 'nav' ).css( { "min-height": (100) } );
  }

};

})();

/*global jQuery, _, List */
(function (win, $) {
  'use strict';

  $(function () {
    $.getJSON('http://yeoman-generator-list.herokuapp.com', function (modules) {

      var blocklist = [
        'generator-express-angular', // haven't updated package.json
        'ft-wp', // haven't updated package.json
        'generator-angular-phonegap', // haven't updated package.json
        'generator-angular-js', // haven't updated package.json
      ];

      var modules = _.filter(modules, function (el) {
        return el !== null && el.description && blocklist.indexOf(el.name) === -1;
      }).map(function (el) {
          el.description = el.description
          .replace(/^(A |)Yeoman generator (for|to) /i, '');

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
          'modified',
          'stars',
          'forks'
        ]
      });

      if (list.listContainer) {
        $('#plugins-all .modified time').timeago();
        list.on('updated', function () {
          // If empty show not found message and hide the table head.
          $('.table thead').toggle(list.matchingItems.length !== 0);
          $('#search-notfound').toggle(list.matchingItems.length === 0);
        });
      }
    });
  });
})(window, jQuery);
