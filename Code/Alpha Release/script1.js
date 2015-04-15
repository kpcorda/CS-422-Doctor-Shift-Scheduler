
$(document).ready(function () {
$('#dd').hover(function() {
  $(this).find('.dropdown-menu').show();
}, function() {
  $(this).find('.dropdown-menu').hide();
});

    $('.btn-group').click(function () {
    $('.option').show();
});

$('.btn-group').click(function () {
    $('.option1').show();
});
$('.btn-group').click(function () {
    $('.option2').show();
});


$('.option').children('div').click(function () {
	
    $('#year').text($(this).text());
	$('#year').append(' <span class="glyphicon glyphicon-menu-down"></span>');
    $(this).addClass('selected').siblings('div').removeClass('selected');
    $('.option').hide();
	
	
});

$('.option1').children('div').click(function () {
	
    $('#term').text($(this).text());
    $(this).addClass('selected').siblings('div').removeClass('selected');
    $('.option1').hide();
});

$('.option2').children('div').click(function () {
	
    $('#month').text($(this).text());
    $(this).addClass('selected').siblings('div').removeClass('selected');
    $('.option2').hide();
	
});


$('#pub').click(function () {
    alert('Schedule will be published');
});
$('#send').click(function () {
    alert('Your message has been sent!');
});

});

$(document).ready(function()
{
    $('#TermSelect li > a').click(function()
    {
           $('#dropdownMenu1').text($(this).html());
            $value = $('#dropdownMenu1').text();
            $('#hidden').val($value);
            $('#dropdownMenu1').append('  <span id="MenuText" class="caret">  </span>');


    });
	
	$('#MonthSelect li > a').click(function()
    {
           $('#dropdownMenu2').text($(this).html());
            $value = $('#hidden').val() + '?' +  $('#dropdownMenu2').text();
            $('#hidden').val($value);
            $('#dropdownMenu2').append('  <span id="MenuText" class="caret">  </span>');


    });

    $('#YearSelect li > a').click(function()
    {
           $('#dropdownMenu3').text($(this).html());
            $value = $('#hidden').val() + '?' +  $('#dropdownMenu3').text();
            $('#dropdownMenu3').append('  <span id="MenuText" class="caret">  </span>');
            $('#hidden').val($value);
        var hidden1 = $('#hidden').val();
        $('#submit').trigger('click');
});
});

$(document).ready(function()
{
	$('.sc .t1').click(function()
	{
		
		$value = $(this).text();
		$('.sc .t1').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});

	$('.pc .t1').click(function()
	{
		
		$value = $(this).text();
		$('.t').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t2').click(function()
	{
		
		$value = $(this).text();
		$('.sc .t2').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t3').click(function()
	{
		
		$value = $(this).text();
		$('.sc .t3').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t4').click(function()
	{
		
		$value = $(this).text();
		$('.t4').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t5').click(function()
	{
		
		$value = $(this).text();
		$('.t5').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t6').click(function()
	{
		
		$value = $(this).text();
		$('.t6').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t7').click(function()
	{
		
		$value = $(this).text();
		$('.t7').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t8').click(function()
	{
		
		$value = $(this).text();
		$('.t8').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t9').click(function()
	{
		
		$value = $(this).text();
		$('.t9').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
$('.sc .t10').click(function()
	{
		
		$value = $(this).text();
		$('.t10').parent('a .dropdown-toggle').val($value);;
		var hidden2 = $('#hidden2').text($value);
		$('#value2').text($value);
		
	});
});