$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const question1 = $('#question1').val();
    const question2 = $('#question2').val();
    const question3 = $('#question3').val();
    const question4 = $('#question4').val();
    const question5 = $('#question5').val();
    if(question1 === "1") {
      $("#hiddenoutput").css("color", "red");
      $("#html").css("color","blue");
    }
    $("#hiddenoutput").show();
    event.preventDefault();
  });
});

