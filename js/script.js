$( document ).ready(function() {

    /*$("[rel='tooltip']").tooltip();

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); */

    //$('#datetimepicker2').datetimepicker();

    $('.media-body').hover(
        function() {
            $('.close-notification').fadeIn('slow');
        },function() {
            $('.close-notification').fadeOut('slow');
        }
    );
    $("#value_bc").hide();
    $("#value_paypal").hide();

    $("input[type='radio']").on( 'click', function(){
        // First etape
        if ($("#radio3").is(":checked")) {
            $("#paiement1").show();
            $("#paiement2").hide();
            $("#paiement3").hide();
            $("#value_bc").hide();
            $("#value_paypal").hide();
        } else if ($("#radio3_2").is(":checked")) {
            $("#paiement2").show();
            $("#paiement1").hide();
            $("#paiement3").hide();
            $("#value_p2_bc").hide();
            $("#value_p2_paypal").hide();

        } else if($("#radio32").is(":checked")){
            $("#paiement3").show();
            $("#paiement2").hide();
            $("#paiement1").hide();
            $("#value_p3_paypal").hide();
        }
        // two etape
        if ($("#checked_bc").is(":checked")) {
            $("#value_bc").show();
            $("#value_paypal").hide();
        } else if ($("#checked_paypal").is(":checked")) {
            $("#value_paypal").show();
            $("#value_bc").hide();
        }
        // third etape
        if ($("#checked_p2_bc").is(":checked")) {
            $("#value_p2_bc").show();
            $("#value_p2_paypal").hide();
        } else if ($("#checked_p2_paypal").is(":checked")) {
            $("#value_p2_paypal").show();
            $("#value_p2_bc").hide();
        }
        // forth etape
        if ($("#checked_p3_bc").is(":checked")) {
            $("#value_p3_paypal").show();
        }
    });
    // hidding button
    $( "#carte_banque_p1" ).keyup(function() {
        var btnp1=$("#carte_banque_p1").val();
        if(btnp1!="") {
            $("#btnPaiement1").show();
        } else {
            $("#btnPaiement1").hide();
        }
    });


    /*$("[data-toggle=popover]").each(function(i, obj) {

        $(this).popover({
            html: true,
            content: function() {
                var id = $(this).attr('id')
                return $('#popover-content-' + id).html();
            }
        });

    });*/


});
