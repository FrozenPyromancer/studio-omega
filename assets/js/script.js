$(document).ready(function(){
  
  $(".element-item-fallback").hide();

  // Add class to Body 
  var colorClasses = ['red','orange', 'blue', 'green']; //add as many classes as u want
  var colorRandomnumber = Math.floor(Math.random()*colorClasses.length);
  $('body').addClass(colorClasses[colorRandomnumber]); 
  
  // Implement Isotop
  // quick search regex
  var qsRegex;
  var buttonFilter;
  var itemSelector = '.element-item' ;

  // init Isotope
  var $grid = $('.co-blog-list').isotope({
    itemSelector: itemSelector,
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    },
    transitionDuration: 150,
    filter: function() {
      $(".element-item-fallback").hide();
      var $this = $(this);
      var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
      var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
      return searchResult && buttonResult;
    },
    getSortData: {date: '[data-date]'}
  });

  // use value of search field to filter
  var $quicksearch = $('.quicksearch').keyup( debounce( function() {
    qsRegex = new RegExp( $quicksearch.val(), 'gi' );
    $grid.isotope();
  }, 200 ) );

  // debounce so filtering doesn't happen every millisecond
  function debounce( fn, threshold ) {
    var timeout;
    return function debounced() {
      if ( timeout ) {
        clearTimeout( timeout );
      }
      function delayed() {
        fn();
        timeout = null;
      }
      timeout = setTimeout( delayed, threshold || 100 );
    }
  }

  // bind filter on select change
  $('.filters-select').on( 'change', function() {
    buttonFilter = this.value;
    $grid.isotope();
  });

  
  // bind sort select
  $('.sortorder-select').on( 'change', function() {
    var SortOrder = (this.value == "true") ? true : false ;;
    $grid.isotope({ sortBy : "date", sortAscending : SortOrder });
  });
  
  $grid.on( 'arrangeComplete', function( event, filteredItems ) {
    console.log( 'arrangeComplete with ' + filteredItems.length + ' items' );
    if(filteredItems.length == 0){
      $(".element-item-fallback").show();
    }
  });
  

}); 

