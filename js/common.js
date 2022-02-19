$(function()
{
    $('#toggle').click(function(){
        if($(this).hasClass('on')){
            $('.head').animate({
                height:0
            },500)
            $(this).removeClass('on');
        }else{
            $('.head').animate({
                height:60
            },500);
            $(this).addClass('on');
        }
        
    });
})