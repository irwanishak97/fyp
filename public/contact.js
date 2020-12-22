
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    /*==================================================================
    [ Show / hide Form ]*/
    
    $('.contact100-btn-hide').on('click', function(){
        $('.wrap-contact100').fadeOut(0);
    })

    $('.contact100-btn-show').on('click', function(){
        $('.wrap-contact100').fadeIn(400);
    })

    $('.contact100-btn-hide').on('click', function(){       /* card on display */       /* jumbotron */
        $('.jumbotron').fadeIn(0);
    })
    $('.contact100-btn-show').on('click', function(){       /* card off display */
        $('.jumbotron').fadeOut(0);
    })

    $('.contact100-btn-hide').on('click', function(){       /* card on display */       /* profile pic */
        $('.cardcontainer').fadeIn(0);
    })
    $('.contact100-btn-show').on('click', function(){       /* card off display */
        $('.cardcontainer').fadeOut(0);
    })

    $('.contact100-btn-hide').on('click', function(){       /* card on display */       /* container */
        $('.container-fluid').fadeIn(0);
    })
    $('.contact100-btn-show').on('click', function(){       /* card off display */
        $('.container-fluid').fadeOut(0);
    })
    
    $('.contact100-btn-hide').on('click', function(){       /* card on display */       /* footer */
        $('.site-footer').fadeIn(0);
    })
    $('.contact100-btn-show').on('click', function(){       /* card off display */
        $('.site-footer').fadeOut(0);
    })
})(jQuery);