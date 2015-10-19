$( document ).ready(function() {
    impress().init();
    $("#indexLink").on("click", function(){
      impress().goto("index");
    });
    $("#aboutMeLink").on("click", function(){
      impress().goto("aboutMe");
    });
    $("#projectsLink").on("click", function(){
      impress().goto("projects");
    });
    $("#blogLink").on("click", function(){
      impress().goto("blog");
    });
    $("#contactLink").on("click", function(){
      impress().goto("contact");
    });

});