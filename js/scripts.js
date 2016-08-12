$(document).ready(function() {
  $(".course").submit(function(event) {
    var interest1 = $("#interest1").val();
    var experience = $("#experience").val();
    var company1 = $("#company1").val();
    var nameinput = $("input#name1").val();

    $(".fpath").hide();
    $(".bpath").hide();
    $(".mpath").hide();
    $(".cpath").hide();

    $(".name").text(nameinput);
    if (interest1 === "mobile" && experience === "some" && company1 === "small" || interest1 === "mobile" && experience === "none" || interest1 === "mobile" && company1 === "small" ) {
      $(".mpath").show();
    } else if (interest1 === "front" && experience === "none" && company1 === "small" || company1 === "big" && interest1 === "front" && experience === "some" || company1 === "big" && interest1 === "front" && experience === "none") {
      $(".fpath").show();
    } else if (interest1 === "back" && experience === "some" && company1 === "small" || interest1 === "back" && experience === "none" && company1 === "small" ) {
      $(".bpath").show();
    } else if (interest1 === "back" && experience === "some" && company1 === "big" || interest1 === "back" && experience === "none" && company1 === "big" ) {
      $(".cpath").show();
    }
    event.preventDefault();
  });
});
