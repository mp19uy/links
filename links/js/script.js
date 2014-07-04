$(document).ready(function()
    {
        var text;
        
        $(".navbar-custom .navbar-nav > li > a").mouseenter(function(){
            text = $(this).html();
            $(this).html('<span class="glyphicon glyphicon-th"></span> ' + text);
        });
        
        $(".navbar-custom .navbar-nav > li > a").mouseleave(function()
        {
            $(this).html(text);
        });
    });