/**
 * Created by admin on 15.03.2016.
 */
//function menu(){
//        $('.registerForm').on('click', function(){
//        $(this).parent().toggleClass('active');
//        $('.page').css({display:"none"});
//        $('#registerForm').css({display:"block"}).templateLoader({
//            caching: false,
//            templateRenderCallback: function(){
//                yo();
//            }
//        });
//    });
//    $('.ruslan').on('click', function(){
//        $(this).parent().toggleClass('active');
//        $('.page').css({display:"none"});
//        $('#'+$(this).attr('content')).css({display:"block"});
//        $('#ruslanHTML').templateLoader({
//            caching: false,
//            templateRenderCallback: function(){
//                yo();
//            }
//        });
//    });
//    $('.ruslan').on('click', function(){
//        $(this).parent().toggleClass('active');
//        $('.page').css({display:"none"});
//        $('#ruslanHTML').css({display:"block"}).templateLoader({
//            caching: false,
//            templateRenderCallback: function(){
//                yo();
//            }
//        });
//    })
//}

function menu(){
    $('.registerForm').on('click', function(){
        changeMenu(this);
        $('#registerForm').css({display:"block"}).templateLoader({
            caching: false,
            templateRenderCallback: function(){
                yo();
            }
        });
    });
    $('.ruslan').on('click', function(){
        changeMenu(this);
        $('#ruslanHTML').css({display:"block"}).templateLoader({
            caching: false,
            templateRenderCallback: function(){
                yoyo();
            }
        });
    });

    function changeMenu(self){
        $('.nav li').removeClass('active');
        $(self).parent().addClass('active');
        $('.page').css({display:"none"});
    }
}