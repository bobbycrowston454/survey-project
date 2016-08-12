$(document).ready(function() {
  $(".course").submit(function(event) {
    var interest1 = $("#interest1").val();
    var experience = $("#experience").val();
    var company1 = $("#company1").val();
    var style1 = $("#style1").val();
    var nameinput = $("input#name1").val();
    var interaction1 = $("#interaction1")

    $(".fpath").hide();
    $(".bpath").hide();
    $(".mpath").hide();
    $(".cpath").hide();
    $(".dpath").hide();

    $(".name").text(nameinput);
    if (interest1 === "mobile" && experience === "some" && company1 === "small" || interest1 === "mobile" && experience === "none" || interest1 === "mobile" && company1 === "small" || interest1 === "mobile" && experience === "some") {
      $(".mpath").slideDown(600).show();
    } else if (interest1 === "front" && experience === "none" && company1 === "small" || company1 === "big" && interest1 === "front" && experience === "some" || company1 === "big" && interest1 === "front" && experience === "none") {
      $(".fpath").slideDown(600).show();
    } else if (interest1 === "back" && experience === "some" && company1 === "small" && style1 === "no"|| interest1 === "back" && experience === "none" && company1 === "small" && style1 === "no") {
      $(".bpath").slideDown(600).show();
    } else if (interest1 === "back" && experience === "some" && company1 === "big" && style1 === "no" || interest1 === "back" && experience === "none" && company1 === "big" && style1 === "no") {
      $(".cpath").slideDown(600).show();
    } else if (interest1 === "back" && experience === "some" && company1 === "small" && style1 ==="yes"|| interest1 === "back" && experience === "none" && company1 === "small" && style1 === "yes") {
      $(".dpath").slideDown(600).show();
    }
    event.preventDefault();
  });
});
