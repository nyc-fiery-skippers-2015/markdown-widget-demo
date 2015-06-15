$(document).ready(function() {
  $("#markdown-source").on('keyup', function(event) {
    $("#display").html(marked($("#markdown-source").val()))
  })
});
