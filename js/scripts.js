$(document).ready(function() {
  $(".course").submit(function(event) {
    var type = $("#type1").val();
    var experience = $("#experience").val();
    var interest = $("#type1").val();
    var nameinput = $("input#name1").val();

    $(".fpath").hide
    $(".mpath").hide
    $(".bpath").hide
    

    $(".name").text(nameinput);
    if (interest === "mobile" && experience === "some") {
      $(".mpath").show();
    } else if (interest === "front" && experience ==="none") {
      $(".fpath").show();
    }
    event.preventDefault();
  });
});
