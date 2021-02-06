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
    }  else {
      $("#swift").css("color","red");
      $("#objc").css("color","red");
      $("#applescript").css("color","red");
      $("#c").css("color","red");
    }
    if(question2 === "1") {
      $("#typescript").css("color","yellow");
      $("#unity").css("color","yellow");
    }  else {
      $("#typescript").css("color","red");
      $("#unity").css("color","red");
    }

    if(question3 === "1") {
      $("#f").css("color","yellow");
      $("#csharp").css("color","yellow");
      $("#visualbasic").css("color","yellow");
      $("#html").css("color","yellow");
      $("#flutter").css("color","yellow");
    } else {
      $("#f").css("color","red");
      $("#csharp").css("color","red");
      $("#visualbasic").css("color","red");
      $("#html").css("color","red");
      $("#flutter").css("color","red");
    }
    if(question4 === "1") {
      $("#java").css("color","yellow");
      $("#k").css("color","yellow");
      $("#cplusplus").css("color","yellow");
      $("#python").css("color","yellow");
      $("#html").css("color","yellow");
    } else {
      $("#java").css("color","red");
      $("#k").css("color","red");
      $("#cplusplus").css("color","red");
      $("#python").css("color","red");
      $("#html").css("color","red");
    }
    if(question5 === "1") {
      $("#python").css("color","yellow");
      $("#lisp").css("color","yellow");
      $("#prolog").css("color","yellow");
    } else {
      $("#python").css("color","red");
      $("#lisp").css("color","red");
      $("#prolog").css("color","red");
    }
    $("#hiddenoutput").show();
    event.preventDefault();
  });
});

