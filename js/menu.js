/**
 * Created by admin on 15.03.2016.
 */
function menu(){
    $('.registerForm').on('click', function(){
        $('#registerForm').templateLoader({
            caching: false,
            templateRenderCallback: function(template){

            }
        });
    })
}


