$('row').hover( 
  function() {
    $(this)
      .css('color','blue')
      .animate({'color': 'red'}, 400);
  },
  function() {
    $(this)
      .animate({'color': 'blue'}, 400);
  }
);
