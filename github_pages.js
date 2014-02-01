$('.row').hover( 
  function() {
    $(this)
      .animate({'background-color': 'red'}, 400);
  },
  function() {
    $(this)
      .animate({'background-color': 'white'}, 400);
  }
);
