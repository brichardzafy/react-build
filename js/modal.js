$(document).ready(function () {
	for(var i=1 ; i<6;i++){
        $('#myImg'+i).click(function(){
            $('#img01').attr('src',$(this).attr('src'))
            $('#myModal1').modal('show');
        });
	}
	$('#id_modal_close').click(function(){
        $('#myModal1').modal('hide');
	});
});