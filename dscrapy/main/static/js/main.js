// select html element
var newsContainer = document.getElementById("news-list");

// ajax magic 
$(document).ready(function(){
    $("#show").click(function(){
        $.getJSON("api/News/?format=json", function(data, status){
        //alert("Status: " + status);
        renderHTML(data);
        $('#show').hide();
        });
    });
    $("#start-crawl").click(function(){
        $("#start-crawl").hide()
    });
});

// render REST api data into HTML
function renderHTML(apidata){
    var html = "";
    var apidatalength = apidata.length; // reverse randering
    for (i = 0; i < apidatalength; i++){
        html += "<div class='content-section'>"
        html += "<h2><a href=" + apidata[apidatalength-i-1].link_url + ">" + apidata[apidatalength-i-1].title + "</a></h2>"
        html += "<img src=" + apidata[apidatalength-i-1].img_url + ">"
        html += "</div>"
    }
    newsContainer.insertAdjacentHTML('beforeend', html);
}