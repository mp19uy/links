$(document).ready(function()
    {
        var text;
        
        $(".navbar-custom .centralmenu > li > a").mouseenter(function(){
            text = $(this).html();
            $(this).html('<span class="el-icon-chevron-down"></span> ' + text);
        });
        
        $(".navbar-custom .centralmenu > li > a").mouseleave(function()
        {
            $(this).html(text);
        });
    });