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

  function proverka(input) {
    input.value = input.value.replace(/[',", А-я]/, '');
    
    return false;
  };

  function checkInf(){
    const inputsInf = document.querySelectorAll('input');
    const ageInf = document.getElementById('age');
    const nameInf = document.getElementById("name")
    const maleInf = document.getElementById("male");
    const localCountInf = document.getElementById("local");
    const naziInf = document.getElementById("nazi");
    const idskinInf = document.getElementById("idskin");
    const kventaPers = document.getElementById("kventapers")

    if(ageInf.value == ''){
        ageInf.style.borderBottom = '2px solid #9f2525';
    }else{
        ageInf.style.border = '';
    }

    if(nameInf.value == ''){
        nameInf.style.borderBottom = '2px solid #9f2525';
    }else{
        nameInf.style.border = '';
    }

    if(maleInf.value == ''){
        maleInf.style.borderBottom = '2px solid #9f2525';
    }else{
        maleInf.style.border = '';
    }

    if(localCountInf.value == ''){
        localCountInf.style.borderBottom = '2px solid #9f2525';
    }else{
        localCountInf.style.border = '';
    }

    if(naziInf.value == ''){
        naziInf.style.borderBottom = '2px solid #9f2525';
    }else{
        naziInf.style.border = '';
    }

    if(idskinInf.value == ''){
        idskinInf.style.borderBottom = '2px solid #9f2525';
    }else{
        idskinInf.style.border = '';
    }

    if(kventaPers.value == ''){
        kventaPers.style.borderBottom = '2px solid #9f2525';
    }else{
        kventaPers.style.border = '';
    }

  }