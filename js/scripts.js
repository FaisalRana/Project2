$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const question1 = $('#question1').val();
    const question2 = $('#question2').val();
    const question3 = $('#question3').val();
    const question4 = $('#question4').val();
    const question5 = $('#question5').val();
    if(question1 === "1") {
      $("#swift").css("color","yellow");
      $("#objc").css("color","yellow");
      $("#applescript").css("color","yellow");
      $("#c").css("color","yellow");
    }
    if(question2 === "1") {
      $("#typescript").css("color","yellow");
      $("#unity").css("color","yellow");
    }
    if(question3 === "1") {
      $("#f").css("color","yellow");
      $("#csharp").css("color","yellow");
      $("#visualbasic").css("color","yellow");
      $("#html").css("color","yellow");
      $("#flutter").css("color","yellow");
    }
    if(question4 === "1") {
      $("#java").css("color","yellow");
      $("#k").css("color","yellow");
      $("#cplusplus").css("color","yellow");
      $("#python").css("color","yellow");
      $("#html").css("color","yellow");
    }
    if(question5 === "1") {
      $("#python").css("color","yellow");
      $("#lisp").css("color","yellow");
      $("#prolog").css("color","yellow");
    }
    

    $("#hiddenoutput").show();
    event.preventDefault();
  });
});

