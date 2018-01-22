var $ = require("jquery");
global.jQuery = $;

$(document).ready(function(){
  $(".js-nav-toggler").click(function(e){
    e.preventDefault;
    $(".canvas__overlay").show();
  });
  $(".js-nav-close").click(function(e){
    e.preventDefault;
    $(".canvas__overlay").hide();
  });
  $(".js-locale-toggle").click(function(e){
    e.preventDefault;
    $(".js-locale-switcher").toggle();
  });
});
