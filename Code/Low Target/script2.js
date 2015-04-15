$(document).ready(function () {
    $('#forgotpassword').hide();
});

$(document).ready(function(){ 
	function randomgen()
	{
    var rannumber='';
		for(ranNum=1; ranNum<=6; ranNum++){
			rannumber+=Math.floor(Math.random()*10).toString();
		}
		$('#verifyNum').html(rannumber);
		$('#verifyNumHidden').val(rannumber);
	}
	randomgen();

	$('#MyForm').submit(function() {
		if($('#enterVerify').val() === $('#verifyNumHidden').val() ) {
			$('form').attr('action', 'confirm.html');
			return true;
		}
		else
		{
			alert("Please Enter Correct Verification Number");
			randomgen();
			$('#enterVerify').select();
			$('#enterVerify').focus();
			return false;
		}
	});
});
$(document).ready(function(){ 
   $('#l1').click(function () {
   $('#login').hide();
   $('#forgotpassword').show();
}); 
});