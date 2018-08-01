// show and hide whole cv (below intro)
$("#showCV").click(function() {
   var lable = $("#showCV").text().trim();
      if(lable == "Hide CV") {
        $("#showCV").text("View CV");
        $("#hideElements").hide();
   }
   else {
     $("#showCV").text("Hide CV");
     $("#hideElements").show();
   }
  });
// show and hide skills section
$("#showSkills").click(function() {
   var lable = $("#showSkills").text().trim();
      if(lable == "Hide Skills") {
        $("#showSkills").text("View Skills");
        $("#skillArea").hide();
   }
   else {
     $("#showSkills").text("Hide Skills");
     $("#skillArea").show();
   }
  });
// show and hide whole work section
$("#showWork").click(function() {
   var lable = $("#showWork").text().trim();
      if(lable == "Hide Employment History") {
        $("#showWork").text("Show Employment History");
        $("#employment").hide();
        $("#showWorkDesc").hide();

   }
   else {
     $("#showWork").text("Hide Employment History");
     $("#employment").show();
     $("#showWorkDesc").show();
   }
  });
// show and hide jobDesc section
$("#showWorkDesc").click(function() {
   var lable = $("#showWorkDesc").text().trim();
      if(lable == "Collapse Role Descriptions") {
        $("#showWorkDesc").text("Expand Role Descriptions");
        $(".roleDesc").hide();
   }
   else {
     $("#showWorkDesc").text("Collapse Role Descriptions");
     $(".roleDesc").show();
   }
  });
  $("#showWorkDesc").on("dblclick", function (){
  $(".experience").find("div").toggle();
});
// show and hide edu section
$("#showEdu").click(function() {
   var lable = $("#showEdu").text().trim();
      if(lable == "Hide Education") {
        $("#showEdu").text("Show Education");
        $("#edu").hide();
   }
   else {
     $("#showEdu").text("Hide Education");
     $("#edu").show();
   }
  });
// show and hide train section
$("#showTrain").click(function() {
   var lable = $("#showTrain").text().trim();
      if(lable == "Hide Training") {
        $("#showTrain").text("Show Training");
        $("#extra").hide();
   }
   else {
     $("#showTrain").text("Hide Training");
     $("#extra").show();
   }
  });
// show and hide hobbies section
// $("#showHobbies").on("click", function (){
//   $("#hobbies").find("div").toggle();
// });
$("#showHobbies").click(function() {
   var lable = $("#showHobbies").text().trim();
      if(lable == "Hide Personal Interests and Hobbies") {
        $("#showHobbies").text("Show Personal Interests and Hobbies");
        $("#hobbies").hide();
   }
   else {
     $("#showHobbies").text("Hide Personal Interests and Hobbies");
     $("#hobbies").show();
   }
  });

// #GoogleConsole attach animation that pops up with "click here to find out how!"

// var myIndex = 0;
// carousel();
//
// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 4500);
// }
