// show and hide the introduction
$("#seeMoreIntro").click(function() {
   var lable = $("#seeMoreIntro").text().trim();
      if(lable == "^ See Less ^") {
        $("#seeMoreIntro").text("v See More v");
        $("#hideElements").hide();
   }
   else {
     $("#seeMoreIntro").text("^ See Less ^");
     $("#hideElements").show();
   }
  });
  var body = document.getElementsByName('body');
var contactInfo = document.getElementById('contactInfo');
var contact = document.getElementById('contact');
contactInfo.onmouseover = function(){
  contact.className = "contact show";
}
contactInfo.onmouseout= function(){
  contact.className = "contact";
}
contact.onmouseover = function(){
  contact.className = "contact show";
}
contact.onmouseout= function(){
  contact.className = "contact";
}
contact.onclick = function(){
  contact.className = "contact show";
}
if(contact.className = "contact show"){
  body.onclick = function(){
    contact.className = "contact";
  }
}

// show and hide work exp
$("#seeMoreWork").click(function() {
   var lable = $("#seeMoreWork").text().trim();
      if(lable == "^ See Less ^") {
        $("#seeMoreWork").text("v See More v");
        $("#hideWork").hide();
   }
   else {
     $("#seeMoreWork").text("^ See Less ^");
     $("#hideWork").show();
   }
  });

// section selection
// var meButton = document.getElementById('meButton');
// var me = document.getElementById('me');
// meButton.addEventListener('click', function(){
//   me.scrollTo()
// })
