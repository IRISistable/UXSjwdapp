// Clicking the open class will open the modal.
$(".open").on("click", function(){
  $(".overlay, .modal").addClass("active");
});

// Clicking the close class will close it.
$(".close, .overlay").on("click", function(){
   $(".overlay, .modal").removeClass("active");
});

// Pressing the escape key will also close the modal.
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $(".overlay, .modal").removeClass("active");
  }
});
