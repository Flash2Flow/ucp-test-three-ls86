$('#open-menu-nav').on('click', function(){
    $('#burger-menu').show();
    return false;
})

$(document).click( function(event){
    if( $(event.target).closest("#burger-menu").length ) return;
    $("#burger-menu").hide();
    event.stopPropagation();
  });

  document.querySelector('textarea').addEventListener('input', function (e) {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 2 + "px"
  });