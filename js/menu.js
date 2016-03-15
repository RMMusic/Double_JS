/**
 * Created by admin on 15.03.2016.
 */
function menu(){
    $('.registerForm').on('click', function(){
        $(this).parent().toggleClass('active');
        $('#registerForm').templateLoader({
            caching: false,
            templateRenderCallback: function(){
                yo();
            }
        });
    });
    $('.ruslan').on('click', function(){
        $(this).parent().toggleClass('active');
        $('#ruslanHTML').templateLoader({
            caching: false,
            templateRenderCallback: function(){
                yo();
            }
        });
    })
}