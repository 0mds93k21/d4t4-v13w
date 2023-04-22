$.get("/assets/vendors/sidebar/index.html", function(data){
    $("#sidebar").replaceWith(data);
});