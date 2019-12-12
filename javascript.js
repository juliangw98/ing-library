//roteren van pijltjes
$('.twist').click(function() {
  var current_arrow = $(this).find('.arrowdown');
  $(current_arrow).toggleClass('rotate');
});

$('#sidebar-navigation li').click(function(event) {
  var dropMenuItem = $(this).children('ul');
  $(dropMenuItem).slideToggle();
  event.stopPropagation();
})



//datatable settings
$(document).ready(function() {
  $('#myTable').DataTable({
    "dom": 't'
  });
});



//navigatie show hide
$('#hamburger-menu').click(function() {
  $('#sidebar-navigation').toggleClass('width');
  $('#hamburger-menu').toggleClass('hamburger-menuActive');
});


//navigatie menu selecteren
$('.open-dropdown').click(function() {
  $(this).find(".twist:first").toggleClass('sidenavActive');
});

$('.submenu').click(function() {
  $(this).find(".twist:first").toggleClass('sidenavActive');
});



//disable button
$('.portlet').mouseup(function() {
  if ($('#drop').is(':empty')) {
    $('.btn').prop("disabled", true);
  } else {
    $('.btn').prop("disabled", false);

  }
});




// toggle checkbox
//
$("input").on('click', function(event) {
  event.stopPropagation();
  $(this).parent().toggleClass('lableActive');
});



$(".lable").click(function() {
  $(this).find("input").trigger("click");
  var checkboxes = $('.lableActive');
  console.log(checkboxes);

  if (checkboxes.length > 0){
    $('.btn').attr("disabled", false);
  } else {
    $('.btn').attr("disabled", true);
  }

  // for (i = 0; i < checkboxes.length; i++) {
  //   console.log(checkboxes[i].classList.contains('lableActive'));
  //
  //   if (checkboxes[i].classList.contains('lableActive') == true) {
  //     $('.btn').attr("disabled", false);
  //   } else {
  //     $('.btn').attr("disabled", true);
  //
  //   }
  //
  //
  // };

});
