/**
 * Created by admin on 15.03.2016.
 */
$( document ).ready(function() {
    $('#menu').templateLoader({
        caching: false,
        templateRenderCallback: function(tamplate){
            menu();
        }
    });
});
