$(document).ready(function()
{
    $('#pub').click(function () {
    var reply;
    for($i=1; $i<=31; $i++)
    {
        $textsc= $('#sc'+$i).text().trim();
        $textpc = $('#pc'+$i).text().trim();
        if($textsc=="???" || $textpc=="???")
        {
            reply = confirm("All dates on the Calendar not marked. Do you still want to publish? ");
            break;
        }
        
        $textsca = $('#sca'+$i).text();
        if($textsca && $textsca=="???")
        {
            reply = confirm("All dates on the Calendar not marked. Do you still want to publish? ");
            break;
        }
        $textscb = $('#scb'+$i).text();
        if($textscb && $textscb=="???")
        {
            reply = confirm("All dates on the Calendar not marked. Do you still want to publish? ");
            break;
        }
        $textpca = $('#pca'+$i).text();
        if($textpca && $textpca=="???")
        {
            reply = confirm("All dates on the Calendar not marked. Do you still want to publish? ");
            break;
        }
        $textpcb = $('#pcb'+$i).text();
        if($textpcb && $textpcb=="???")
        {
            reply = confirm("All dates on the Calendar not marked. Do you still want to publish? ");
            break;
        } 
    }

    if(reply==true)
    $('#publish').trigger('click');

else;
    
});
});

$(document).ready(function () {
$('#dd').hover(function() {
  $(this).find('.dropdown-menu').show();
}, function() {
  $(this).find('.dropdown-menu').hide();
});
$('#dd1').hover(function() {
  $(this).find('.dropdown-menu').show();
}, function() {
  $(this).find('.dropdown-menu').hide();
});

    $('.btn-group').click(function () {
    $('.option').show();
});



$('.sc1').on('mouseenter',function() {
    
    var initials = $('#sc1').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc1').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc1').fadeOut(500).hide();
    });
    
    $('.sc2').on('mouseenter',function() {
    
    var initials = $('#sc2').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc2').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc2').fadeOut(500).hide();
    });
$('.sc3').on('mouseenter',function() {
    
    var initials = $('#sc3').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc3').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc3').fadeOut(500).hide();
    });
    
    
    $('.sc4').on('mouseenter',function() {
    
    var initials = $('#sc4').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc4').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc4').fadeOut(500).hide();
    });
    
    
    $('.sc5').on('mouseenter',function() {
    
    var initials = $('#sc5').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc5').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc5').fadeOut(500).hide();
    });
    
    $('.sc6').on('mouseenter',function() {
    
    var initials = $('#sc6').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc6').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc6').fadeOut(500).hide();
    });
    
    
    $('.sc7').on('mouseenter',function() {
    
    var initials = $('#sc7').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc7').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc7').fadeOut(500).hide();
    });
    
    
    $('.sc8').on('mouseenter',function() {
    
    var initials = $('#sc8').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc8').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc8').fadeOut(500).hide();
    });
    
    $('.sc9').on('mouseenter',function() {
    
    var initials = $('#sc9').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc9').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc9').fadeOut(500).hide();
    });
    
    $('.sc10').on('mouseenter',function() {
    
    var initials = $('#sc10').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc10').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc10').fadeOut(500).hide();
    });
    
    
    $('.sc11').on('mouseenter',function() {
    
    var initials = $('#sc11').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc11').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc11').fadeOut(500).hide();
    });
    
    $('.sc12').on('mouseenter',function() {
    
    var initials = $('#sc12').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc12').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc12').fadeOut(500).hide();
    });
    
    $('.sc13').on('mouseenter',function() {
    
    var initials = $('#sc13').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc13').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc13').fadeOut(500).hide();
    });
    
    $('.sc14').on('mouseenter',function() {
    
    var initials = $('#sc14').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc14').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc14').fadeOut(500).hide();
    });
    
    $('.sc15').on('mouseenter',function() {
    
    var initials = $('#sc15').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc15').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc15').fadeOut(500).hide();
    });
    
    $('.sc16').on('mouseenter',function() {
    
    var initials = $('#sc16').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc16').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc16').fadeOut(500).hide();
    });
    
    
    $('.sc17').on('mouseenter',function() {
    
    var initials = $('#sc17').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc17').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc17').fadeOut(500).hide();
    });
    
    $('.sc18').on('mouseenter',function() {
    
    var initials = $('#sc18').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc18').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc18').fadeOut(500).hide();
    });
    
    
    $('.sc19').on('mouseenter',function() {
    
    var initials = $('#sc19').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc19').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc19').fadeOut(500).hide();
    });
    
    
    $('.sc20').on('mouseenter',function() {
    
    var initials = $('#sc20').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc20').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc20').fadeOut(500).hide();
    });
    
    $('.sc21').on('mouseenter',function() {
    
    var initials = $('#sc21').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc21').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc21').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc21').fadeOut(500).hide();
    });
    
    $('.sc22').on('mouseenter',function() {
    
    var initials = $('#sc22').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc22').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc22').fadeOut(500).hide();
    });
    
    $('.sc23').on('mouseenter',function() {
    
    var initials = $('#sc23').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc23').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc23').fadeOut(500).hide();
    });
    
    $('.sc24').on('mouseenter',function() {
    
    var initials = $('#sc24').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc24').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc24').fadeOut(500).hide();
    });
    
    $('.sc25').on('mouseenter',function() {
    
    var initials = $('#sc25').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc25').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc25').fadeOut(500).hide();
    });
    
    $('.sc26').on('mouseenter',function() {
    
    var initials = $('#sc26').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc26').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc26').fadeOut(500).hide();
    });
    
    $('.sc27').on('mouseenter',function() {
    
    var initials = $('#sc27').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc27').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc27').fadeOut(500).hide();
    });
    
    $('.sc28').on('mouseenter',function() {
    
    var initials = $('#sc28').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc28').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc28').fadeOut(500).hide();
    });
    
    $('.sc29').on('mouseenter',function() {
    
    var initials = $('#sc29').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc29').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc29').fadeOut(500).hide();
    });
    
    $('.sc30').on('mouseenter',function() {
    
    var initials = $('#sc30').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc30').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc30').fadeOut(500).hide();
    });
    
    $('.sc31').on('mouseenter',function() {
    
    var initials = $('#sc31').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsc31').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc31').fadeOut(500).hide();
    });
    
    $('.sca1').on('mouseenter',function() {
    
    var initials = $('#sca1').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca1').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca1').fadeOut(500).hide();
    });
    $('.sca2').on('mouseenter',function() {
    
    var initials = $('#sca2').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca2').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca2').fadeOut(500).hide();
    });
    $('.sca3').on('mouseenter',function() {
    
    var initials = $('#sca3').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca3').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca3').fadeOut(500).hide();
    });
    
    $('.sca4').on('mouseenter',function() {
    
    var initials = $('#sca4').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca4').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca4').fadeOut(500).hide();
    });
    
    

$('.sca5').on('mouseenter',function() {
    
    var initials = $('#sca5').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca5').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca5').fadeOut(500).hide();
    });
$('.sca6').on('mouseenter',function() {
    
    var initials = $('#sca6').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca6').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca6').fadeOut(500).hide();
    });
$('.sca7').on('mouseenter',function() {
    
    var initials = $('#sca7').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca7').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca7').fadeOut(500).hide();
    });
$('.sca8').on('mouseenter',function() {
    
    var initials = $('#sca8').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca8').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca8').fadeOut(500).hide();
    });
$('.sca9').on('mouseenter',function() {
    
    var initials = $('#sca9').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca9').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca9').fadeOut(500).hide();
    });
$('.sca10').on('mouseenter',function() {
    
    var initials = $('#sca10').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca10').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca10').fadeOut(500).hide();
    });
$('.sca11').on('mouseenter',function() {
    
    var initials = $('#sca11').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca11').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca11').fadeOut(500).hide();
    });
$('.sca12').on('mouseenter',function() {
    
    var initials = $('#sca12').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca12').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca12').fadeOut(500).hide();
    });
$('.sca13').on('mouseenter',function() {
    
    var initials = $('#sca13').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca13').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca13').fadeOut(500).hide();
    });
$('.sca14').on('mouseenter',function() {
    
    var initials = $('#sca14').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca14').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca14').fadeOut(500).hide();
    });
$('.sca15').on('mouseenter',function() {
    
    var initials = $('#sca15').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca15').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca15').fadeOut(500).hide();
    });
$('.sca16').on('mouseenter',function() {
    
    var initials = $('#sca16').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca16').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca16').fadeOut(500).hide();
    });
$('.sca17').on('mouseenter',function() {
    
    var initials = $('#sca17').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca17').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca17').fadeOut(500).hide();
    });
$('.sca18').on('mouseenter',function() {
    
    var initials = $('#sca18').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca18').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca18').fadeOut(500).hide();
    });
$('.sca19').on('mouseenter',function() {
    
    var initials = $('#sca19').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca19').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca19').fadeOut(500).hide();
    });
$('.sca20').on('mouseenter',function() {
    
    var initials = $('#sca20').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca20').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca20').fadeOut(500).hide();
    });
$('.sca21').on('mouseenter',function() {
    
    var initials = $('#sca21').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca21').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca21').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca21').fadeOut(500).hide();
    });
$('.sca22').on('mouseenter',function() {
    
    var initials = $('#sca22').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca22').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca22').fadeOut(500).hide();
    });
$('.sca23').on('mouseenter',function() {
    
    var initials = $('#sca23').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca23').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca23').fadeOut(500).hide();
    });
$('.sca24').on('mouseenter',function() {
    
    var initials = $('#sca24').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca24').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca24').fadeOut(500).hide();
    });
$('.sca25').on('mouseenter',function() {
    
    var initials = $('#sca25').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca25').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca25').fadeOut(500).hide();
    });
$('.sca26').on('mouseenter',function() {
    
    var initials = $('#sca26').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca26').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca26').fadeOut(500).hide();
    });
$('.sca27').on('mouseenter',function() {
    
    var initials = $('#sca27').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca27').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca27').fadeOut(500).hide();
    });
$('.sca28').on('mouseenter',function() {
    
    var initials = $('#sca28').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca28').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca28').fadeOut(500).hide();
    });
$('.sca29').on('mouseenter',function() {
    
    var initials = $('#sca29').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca29').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca29').fadeOut(500).hide();
    }); 
$('.sca30').on('mouseenter',function() {
    
    var initials = $('#sca30').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca30').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca30').fadeOut(500).hide();
    });
$('.sca31').on('mouseenter',function() {
    
    var initials = $('#sca31').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputsca31').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sca31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsca31').fadeOut(500).hide();
    }); 
    
        $('.scb1').on('mouseenter',function() {
    
    var initials = $('#scb1').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb1').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb1').fadeOut(500).hide();
    });
    $('.scb2').on('mouseenter',function() {
    
    var initials = $('#scb2').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb2').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb2').fadeOut(500).hide();
    });
    $('.scb3').on('mouseenter',function() {
    
    var initials = $('#scb3').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb3').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb3').fadeOut(500).hide();
    });
    
    $('.scb4').on('mouseenter',function() {
    
    var initials = $('#scb4').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb4').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb4').fadeOut(500).hide();
    });
    
    

$('.scb5').on('mouseenter',function() {
    
    var initials = $('#scb5').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb5').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb5').fadeOut(500).hide();
    });
$('.scb6').on('mouseenter',function() {
    
    var initials = $('#scb6').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb6').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb6').fadeOut(500).hide();
    });
$('.scb7').on('mouseenter',function() {
    
    var initials = $('#scb7').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb7').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb7').fadeOut(500).hide();
    });
$('.scb8').on('mouseenter',function() {
    
    var initials = $('#scb8').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb8').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb8').fadeOut(500).hide();
    });
$('.scb9').on('mouseenter',function() {
    
    var initials = $('#scb9').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb9').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb9').fadeOut(500).hide();
    });
$('.scb10').on('mouseenter',function() {
    
    var initials = $('#scb10').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb10').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb10').fadeOut(500).hide();
    });
$('.scb11').on('mouseenter',function() {
    
    var initials = $('#scb11').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb11').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb11').fadeOut(500).hide();
    });
$('.scb12').on('mouseenter',function() {
    
    var initials = $('#scb12').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb12').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb12').fadeOut(500).hide();
    });
$('.scb13').on('mouseenter',function() {
    
    var initials = $('#scb13').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb13').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb13').fadeOut(500).hide();
    });
$('.scb14').on('mouseenter',function() {
    
    var initials = $('#scb14').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb14').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb14').fadeOut(500).hide();
    });
$('.scb15').on('mouseenter',function() {
    
    var initials = $('#scb15').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb15').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb15').fadeOut(500).hide();
    });
$('.scb16').on('mouseenter',function() {
    
    var initials = $('#scb16').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb16').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb16').fadeOut(500).hide();
    });
$('.scb17').on('mouseenter',function() {
    
    var initials = $('#scb17').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb17').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb17').fadeOut(500).hide();
    });
$('.scb18').on('mouseenter',function() {
    
    var initials = $('#scb18').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb18').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb18').fadeOut(500).hide();
    });
$('.scb19').on('mouseenter',function() {
    
    var initials = $('#scb19').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb19').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb19').fadeOut(500).hide();
    });
$('.scb20').on('mouseenter',function() {
    
    var initials = $('#scb20').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb20').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb20').fadeOut(500).hide();
    });
$('.scb21').on('mouseenter',function() {
    
    var initials = $('#scb21').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb21').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb21').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb21').fadeOut(500).hide();
    });
$('.scb22').on('mouseenter',function() {
    
    var initials = $('#scb22').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb22').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb22').fadeOut(500).hide();
    });
$('.scb23').on('mouseenter',function() {
    
    var initials = $('#scb23').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb23').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb23').fadeOut(500).hide();
    });
$('.scb24').on('mouseenter',function() {
    
    var initials = $('#scb24').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb24').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb24').fadeOut(500).hide();
    });
$('.scb25').on('mouseenter',function() {
    
    var initials = $('#scb25').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb25').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb25').fadeOut(500).hide();
    });
$('.scb26').on('mouseenter',function() {
    
    var initials = $('#scb26').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb26').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb26').fadeOut(500).hide();
    });
$('.scb27').on('mouseenter',function() {
    
    var initials = $('#scb27').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb27').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb27').fadeOut(500).hide();
    });
$('.scb28').on('mouseenter',function() {
    
    var initials = $('#scb28').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb28').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb28').fadeOut(500).hide();
    });
$('.scb29').on('mouseenter',function() {
    
    var initials = $('#scb29').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb29').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb29').fadeOut(500).hide();
    }); 
$('.scb30').on('mouseenter',function() {
    
    var initials = $('#scb30').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb30').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb30').fadeOut(500).hide();
    });
$('.scb31').on('mouseenter',function() {
    
    var initials = $('#scb31').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the script to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputscb31').fadeIn(2000).show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.scb31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputscb31').fadeOut(500).hide();
    }); 
    
$('.pc1').on('mouseenter',function() {
    
    var initials = $('#pc1').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc1').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc1').fadeOut(500).hide();
    });
    
    $('.pc2').on('mouseenter',function() {
    
    var initials = $('#pc2').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc2').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc2').fadeOut(500).hide();
    });
$('.pc3').on('mouseenter',function() {
    
    var initials = $('#pc3').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc3').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc3').fadeOut(500).hide();
    });
    
    
    $('.pc4').on('mouseenter',function() {
    
    var initials = $('#pc4').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc4').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc4').fadeOut(500).hide();
    });
    
    
    $('.pc5').on('mouseenter',function() {
    
    var initials = $('#pc5').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc5').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc5').fadeOut(500).hide();
    });
    
    $('.pc6').on('mouseenter',function() {
    
    var initials = $('#pc6').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc6').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc6').fadeOut(500).hide();
    });
    
    
    $('.pc7').on('mouseenter',function() {
    
    var initials = $('#pc7').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc7').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc7').fadeOut(500).hide();
    });
    
    
    $('.pc8').on('mouseenter',function() {
    
    var initials = $('#pc8').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc8').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc8').fadeOut(500).hide();
    });
    
    $('.pc9').on('mouseenter',function() {
    
    var initials = $('#pc9').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc9').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc9').fadeOut(500).hide();
    });
    
    $('.pc10').on('mouseenter',function() {
    
    var initials = $('#pc10').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc10').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc10').fadeOut(500).hide();
    });
    
    
    $('.pc11').on('mouseenter',function() {
    
    var initials = $('#pc11').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc11').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc11').fadeOut(500).hide();
    });
    
    $('.pc12').on('mouseenter',function() {
    
    var initials = $('#pc12').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc12').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc12').fadeOut(500).hide();
    });
    
    $('.pc13').on('mouseenter',function() {
    
    var initials = $('#pc13').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc13').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc13').fadeOut(500).hide();
    });
    
    $('.pc14').on('mouseenter',function() {
    
    var initials = $('#pc14').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc14').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc14').fadeOut(500).hide();
    });
    
    $('.pc15').on('mouseenter',function() {
    
    var initials = $('#pc15').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc15').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc15').fadeOut(500).hide();
    });
    
    $('.pc16').on('mouseenter',function() {
    
    var initials = $('#pc16').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc16').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc16').fadeOut(500).hide();
    });
    
    
    $('.pc17').on('mouseenter',function() {
    
    var initials = $('#pc17').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc17').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc17').fadeOut(500).hide();
    });
    
    $('.pc18').on('mouseenter',function() {
    
    var initials = $('#pc18').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc18').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc18').fadeOut(500).hide();
    });
    
    
    $('.pc19').on('mouseenter',function() {
    
    var initials = $('#pc19').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc19').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc19').fadeOut(500).hide();
    });
    
    
    $('.pc20').on('mouseenter',function() {
    
    var initials = $('#pc20').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc20').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc20').fadeOut(500).hide();
    });
    
    $('.pc21').on('mouseenter',function() {
    
    var initials = $('#pc21').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc21').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc21').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc21').fadeOut(500).hide();
    });
    
    $('.pc22').on('mouseenter',function() {
    
    var initials = $('#pc22').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc22').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc22').fadeOut(500).hide();
    });
    
    $('.pc23').on('mouseenter',function() {
    
    var initials = $('#pc23').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc23').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc23').fadeOut(500).hide();
    });
    
    $('.pc24').on('mouseenter',function() {
    
    var initials = $('#pc24').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc24').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc24').fadeOut(500).hide();
    });
    
    $('.pc25').on('mouseenter',function() {
    
    var initials = $('#pc25').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc25').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc25').fadeOut(500).hide();
    });
    
    $('.pc26').on('mouseenter',function() {
    
    var initials = $('#pc26').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc26').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc26').fadeOut(500).hide();
    });
    
    $('.pc27').on('mouseenter',function() {
    
    var initials = $('#pc27').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc27').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc27').fadeOut(500).hide();
    });
    
    $('.pc28').on('mouseenter',function() {
    
    var initials = $('#pc28').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc28').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc28').fadeOut(500).hide();
    });
    
    $('.pc29').on('mouseenter',function() {
    
    var initials = $('#pc29').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc29').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc29').fadeOut(500).hide();
    });
    
    $('.pc30').on('mouseenter',function() {
    
    var initials = $('#pc30').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc30').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc30').fadeOut(500).hide();
    });
    
    $('.pc31').on('mouseenter',function() {
    
    var initials = $('#pc31').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpc31').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc31').fadeOut(500).hide();
    });
    
    $('.pca1').on('mouseenter',function() {
    
    var initials = $('#pca1').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca1').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca1').fadeOut(500).hide();
    });
    
    $('.pca2').on('mouseenter',function() {
    
    var initials = $('#pca2').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca2').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca2').fadeOut(500).hide();
    });
$('.pca3').on('mouseenter',function() {
    
    var initials = $('#pca3').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca3').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca3').fadeOut(500).hide();
    });
    
    
    $('.pca4').on('mouseenter',function() {
    
    var initials = $('#pca4').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca4').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca4').fadeOut(500).hide();
    });
    
    
    $('.pca5').on('mouseenter',function() {
    
    var initials = $('#pca5').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca5').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca5').fadeOut(500).hide();
    });
    
    $('.pca6').on('mouseenter',function() {
    
    var initials = $('#pca6').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca6').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca6').fadeOut(500).hide();
    });
    
    
    $('.pca7').on('mouseenter',function() {
    
    var initials = $('#pca7').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca7').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca7').fadeOut(500).hide();
    });
    
    
    $('.pca8').on('mouseenter',function() {
    
    var initials = $('#pca8').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca8').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca8').fadeOut(500).hide();
    });
    
    $('.pca9').on('mouseenter',function() {
    
    var initials = $('#pca9').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca9').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca9').fadeOut(500).hide();
    });
    
    $('.pca10').on('mouseenter',function() {
    
    var initials = $('#pca10').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca10').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca10').fadeOut(500).hide();
    });
    
    
    $('.pca11').on('mouseenter',function() {
    
    var initials = $('#pca11').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca11').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca11').fadeOut(500).hide();
    });
    
    $('.pca12').on('mouseenter',function() {
    
    var initials = $('#pca12').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca12').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca12').fadeOut(500).hide();
    });
    
    $('.pca13').on('mouseenter',function() {
    
    var initials = $('#pca13').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca13').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca13').fadeOut(500).hide();
    });
    
    $('.pca14').on('mouseenter',function() {
    
    var initials = $('#pca14').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca14').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca14').fadeOut(500).hide();
    });
    
    $('.pca15').on('mouseenter',function() {
    
    var initials = $('#pca15').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca15').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca15').fadeOut(500).hide();
    });
    
    $('.pca16').on('mouseenter',function() {
    
    var initials = $('#pca16').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca16').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca16').fadeOut(500).hide();
    });
    
    
    $('.pca17').on('mouseenter',function() {
    
    var initials = $('#pca17').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca17').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca17').fadeOut(500).hide();
    });
    
    $('.pca18').on('mouseenter',function() {
    
    var initials = $('#pca18').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca18').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca18').fadeOut(500).hide();
    });
    
    
    $('.pca19').on('mouseenter',function() {
    
    var initials = $('#pca19').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca19').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca19').fadeOut(500).hide();
    });
    
    
    $('.pca20').on('mouseenter',function() {
    
    var initials = $('#pca20').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca20').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca20').fadeOut(500).hide();
    });
    
    $('.pca21').on('mouseenter',function() {
    
    var initials = $('#pca21').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca21').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca21').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca21').fadeOut(500).hide();
    });
    
    $('.pca22').on('mouseenter',function() {
    
    var initials = $('#pca22').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca22').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca22').fadeOut(500).hide();
    });
    
    $('.pca23').on('mouseenter',function() {
    
    var initials = $('#pca23').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca23').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca23').fadeOut(500).hide();
    });
    
    $('.pca24').on('mouseenter',function() {
    
    var initials = $('#pca24').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca24').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca24').fadeOut(500).hide();
    });
    
    $('.pca25').on('mouseenter',function() {
    
    var initials = $('#pca25').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca25').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca25').fadeOut(500).hide();
    });
    
    $('.pca26').on('mouseenter',function() {
    
    var initials = $('#pca26').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca26').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca26').fadeOut(500).hide();
    });
    
    $('.pca27').on('mouseenter',function() {
    
    var initials = $('#pca27').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca27').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca27').fadeOut(500).hide();
    });
    
    $('.pca28').on('mouseenter',function() {
    
    var initials = $('#pca28').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca28').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca28').fadeOut(500).hide();
    });
    
    $('.pca29').on('mouseenter',function() {
    
    var initials = $('#pca29').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca29').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca29').fadeOut(500).hide();
    });
    
    $('.pca30').on('mouseenter',function() {
    
    var initials = $('#pca30').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca30').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca30').fadeOut(500).hide();
    });
    
    $('.pca31').on('mouseenter',function() {
    
    var initials = $('#pca31').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpca31').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pca31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpca31').fadeOut(500).hide();
    });
    
    $('.pcb1').on('mouseenter',function() {
    
    var initials = $('#pcb1').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb1').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb1').fadeOut(500).hide();
    });
    
    $('.pcb2').on('mouseenter',function() {
    
    var initials = $('#pcb2').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb2').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb2').fadeOut(500).hide();
    });
$('.pcb3').on('mouseenter',function() {
    
    var initials = $('#pcb3').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb3').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb3').fadeOut(500).hide();
    });
    
    
    $('.pcb4').on('mouseenter',function() {
    
    var initials = $('#pcb4').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb4').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb4').fadeOut(500).hide();
    });
    
    
    $('.pcb5').on('mouseenter',function() {
    
    var initials = $('#pcb5').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb5').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb5').fadeOut(500).hide();
    });
    
    $('.pcb6').on('mouseenter',function() {
    
    var initials = $('#pcb6').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb6').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb6').fadeOut(500).hide();
    });
    
    
    $('.pcb7').on('mouseenter',function() {
    
    var initials = $('#pcb7').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb7').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb7').fadeOut(500).hide();
    });
    
    
    $('.pcb8').on('mouseenter',function() {
    
    var initials = $('#pcb8').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb8').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb8').fadeOut(500).hide();
    });
    
    $('.pcb9').on('mouseenter',function() {
    
    var initials = $('#pcb9').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb9').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb9').fadeOut(500).hide();
    });
    
    $('.pcb10').on('mouseenter',function() {
    
    var initials = $('#pcb10').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb10').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb10').fadeOut(500).hide();
    });
    
    
    $('.pcb11').on('mouseenter',function() {
    
    var initials = $('#pcb11').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb11').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb11').fadeOut(500).hide();
    });
    
    $('.pcb12').on('mouseenter',function() {
    
    var initials = $('#pcb12').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb12').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb12').fadeOut(500).hide();
    });
    
    $('.pcb13').on('mouseenter',function() {
    
    var initials = $('#pcb13').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb13').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb13').fadeOut(500).hide();
    });
    
    $('.pcb14').on('mouseenter',function() {
    
    var initials = $('#pcb14').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb14').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb14').fadeOut(500).hide();
    });
    
    $('.pcb15').on('mouseenter',function() {
    
    var initials = $('#pcb15').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb15').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb15').fadeOut(500).hide();
    });
    
    $('.pcb16').on('mouseenter',function() {
    
    var initials = $('#pcb16').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb16').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb16').fadeOut(500).hide();
    });
    
    
    $('.pcb17').on('mouseenter',function() {
    
    var initials = $('#pcb17').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb17').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb17').fadeOut(500).hide();
    });
    
    $('.pcb18').on('mouseenter',function() {
    
    var initials = $('#pcb18').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb18').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb18').fadeOut(500).hide();
    });
    
    
    $('.pcb19').on('mouseenter',function() {
    
    var initials = $('#pcb19').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb19').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb19').fadeOut(500).hide();
    });
    
    
    $('.pcb20').on('mouseenter',function() {
    
    var initials = $('#pcb20').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb20').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb20').fadeOut(500).hide();
    });
    
    $('.pcb21').on('mouseenter',function() {
    
    var initials = $('#pcb21').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb21').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb21').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb21').fadeOut(500).hide();
    });
    
    $('.pcb22').on('mouseenter',function() {
    
    var initials = $('#pcb22').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb22').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb22').fadeOut(500).hide();
    });
    
    $('.pcb23').on('mouseenter',function() {
    
    var initials = $('#pcb23').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb23').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb23').fadeOut(500).hide();
    });
    
    $('.pcb24').on('mouseenter',function() {
    
    var initials = $('#pcb24').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb24').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb24').fadeOut(500).hide();
    });
    
    $('.pcb25').on('mouseenter',function() {
    
    var initials = $('#pcb25').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb25').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb25').fadeOut(500).hide();
    });
    
    $('.pcb26').on('mouseenter',function() {
    
    var initials = $('#pcb26').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb26').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb26').fadeOut(500).hide();
    });
    
    $('.pcb27').on('mouseenter',function() {
    
    var initials = $('#pcb27').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb27').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb27').fadeOut(500).hide();
    });
    
    $('.pcb28').on('mouseenter',function() {
    
    var initials = $('#pcb28').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb28').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb28').fadeOut(500).hide();
    });
    
    $('.pcb29').on('mouseenter',function() {
    
    var initials = $('#pcb29').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb29').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb29').fadeOut(500).hide();
    });
    
    $('.pcb30').on('mouseenter',function() {
    
    var initials = $('#pcb30').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb30').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb30').fadeOut(500).hide();
    });
    
    $('.pcb31').on('mouseenter',function() {
    
    var initials = $('#pcb31').text();
    var test = initials.trim();
    
  $.ajax({ 
      type:"POST",
      url: 'example.php',              //the pcript to call to get data          
      data: {initials: test},                        //you can insert url argumnets here to pass to api.php                          //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
                  //get id
                 
                  console.log(data);
        var fname = data['firstname']; 
        var lname = data['lastname'];
        //get name
        $('#outputpcb31').fadeIn(2000).show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pcb31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpcb31').fadeOut(500).hide();
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
		
		if($value === 'January - June')
		{
			
			$('#month1').show();
			$('#month2').show();
			$('#month3').show();
			$('#month4').show();
			$('#month5').show();
			$('#month6').show();
			$('#month7').hide();
			$('#month8').hide();
			$('#month9').hide();
			$('#month10').hide();
			$('#month11').hide();
			$('#month12').hide();
		}

		else
		{
			
			$('#month1').hide();
			$('#month2').hide();
			$('#month3').hide();
			$('#month4').hide();
			$('#month5').hide();
			$('#month6').hide();
			$('#month7').show();
			$('#month8').show();
			$('#month9').show();
			$('#month10').show();
			$('#month11').show();
			$('#month12').show();
		}
    });
	
	$('#MonthSelect li > a').click(function()
    {
            $('#dropdownMenu2').text($(this).html());
	    $value2 = $('#dropdownMenu2').text();
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
	$('table').hide();
        $('#submit').trigger('click');
});
});

$(document).ready(function()
{
		$('.sc1 .t').click(function()
	{
		
		$value = $(this).text();
		$('#sc1').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date1').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc1').val($data);
		
	});
	
	
	$('.sc2 .t').click(function()
	{
		
		$value = $(this).text();
		$('#sc2').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date2').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc2').val($data);
	});


	$('.sc3 .t').click(function()
	{
		$value = $(this).text();
		$('#sc3').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date3').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc3').val($data);
		 
		
	});
	$('.sc4 .t').click(function()
	{
		$value = $(this).text();
		$('#sc4').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date4').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc4').val($data);
		 
		
	});
	$('.sc5 .t').click(function()
	{
		$value = $(this).text();
		$('#sc5').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date5').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc5').val($data);
		 
		
	});
	$('.sc6 .t').click(function()
	{
		$value = $(this).text();
		$('#sc6').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date6').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc6').val($data);
		 
		
	});
	$('.sc7 .t').click(function()
	{
		$value = $(this).text();
		$('#sc7').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date7').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc7').val($data);
		 
		
	});
	$('.sc8 .t').click(function()
	{
		$value = $(this).text();
		$('#sc8').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date8').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc8').val($data);
		 
		
	});
	$('.sc9 .t').click(function()
	{
		$value = $(this).text();
		$('#sc9').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date9').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc9').val($data);
		 
		
	});$('.sc10 .t').click(function()
	{
		$value = $(this).text();
		$('#sc10').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date10').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc10').val($data);
		 
		
	});$('.sc11 .t').click(function()
	{
		$value = $(this).text();
		$('#sc11').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date11').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc11').val($data);
		 
		
	});$('.sc12 .t').click(function()
	{
		$value = $(this).text();
		$('#sc12').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date12').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc12').val($data);
		 
		
	});$('.sc13 .t').click(function()
	{
		$value = $(this).text();
		$('#sc13').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date13').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc13').val($data);
		 
		
	});$('.sc14 .t').click(function()
	{
		$value = $(this).text();
		$('#sc14').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date14').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc14').val($data);
		 
		
	});$('.sc15 .t').click(function()
	{
		$value = $(this).text();
		$('#sc15').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date15').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc15').val($data);
		 
		
	});
	$('.sc16 .t').click(function()
	{
		$value = $(this).text();
		$('#sc16').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date16').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc16').val($data);
		 
		
	});$('.sc17 .t').click(function()
	{
		$value = $(this).text();
		$('#sc17').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date17').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc17').val($data);
		 
		
	});$('.sc18 .t').click(function()
	{
		$value = $(this).text();
		$('#sc18').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date18').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc18').val($data);
		 
		
	});$('.sc19 .t').click(function()
	{
		$value = $(this).text();
		$('#sc19').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date19').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc19').val($data);
		 
		
	});$('.sc20 .t').click(function()
	{
		$value = $(this).text();
		$('#sc20').text($value);
		var hidden2 = $('#hidden2').text($value);
		$m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date20').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc20').val($data);
		
	});$('.sc21 .t').click(function()
	{
		$value = $(this).text();
		$('#sc21').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date21').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc21').val($data);
		 
		
	});$('.sc22 .t').click(function()
	{
		$value = $(this).text();
		$('#sc22').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date22').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc22').val($data);
		 
		
	});$('.sc23 .t').click(function()
	{
		$value = $(this).text();
		$('#sc23').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date23').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc23').val($data);
		 
		
	});$('.sc24 .t').click(function()
	{
		$value = $(this).text();
		$('#sc24').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date24').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc24').val($data);
		 
		
	});$('.sc25 .t').click(function()
	{
		$value = $(this).text();
		$('#sc25').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date25').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc25').val($data);
		 
		
	});$('.sc26 .t').click(function()
	{
		$value = $(this).text();
		$('#sc26').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date26').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc26').val($data);
		 
		
	});$('.sc27 .t').click(function()
	{
		$value = $(this).text();
		$('#sc27').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date27').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc27').val($data);
		 
		
	});$('.sc28 .t').click(function()
	{
		$value = $(this).text();
		$('#sc28').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date28').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc28').val($data);
		 
		
	});
	$('.sc29 .t').click(function()
	{
		$value = $(this).text();
		$('#sc29').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date29').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc29').val($data);
		 
		
	});
	$('.sc30 .t').click(function()
	{
		$value = $(this).text();
		$('#sc30').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date30').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc30').val($data);
		 
		
	});
	$('.sc31 .t').click(function()
	{
		$value = $(this).text();
		$('#sc31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc31').val($data);
		 
		
	});
        $('.sc31 .t').click(function()
	{
		$value = $(this).text();
		$('#sc31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensc31').val($data);
		 
		
	});
        
       
        
       $('.sca1 .t').click(function()
	{
		
		$value = $(this).text();
		$('#sca1').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date1').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca1').val($data);
		
	});
	
	
	$('.sca2 .t').click(function()
	{
		
		$value = $(this).text();
		$('#sca2').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date2').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca2').val($data);
	});


	$('.sca3 .t').click(function()
	{
		$value = $(this).text();
		$('#sca3').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date3').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca3').val($data);
		 
		
	});
	$('.sca4 .t').click(function()
	{
		$value = $(this).text();
		$('#sca4').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date4').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca4').val($data);
		 
		
	});
	$('.sca5 .t').click(function()
	{
		$value = $(this).text();
		$('#sca5').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date5').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca5').val($data);
		 
		
	});
	$('.sca6 .t').click(function()
	{
		$value = $(this).text();
		$('#sca6').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date6').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca6').val($data);
		 
		
	});
	$('.sca7 .t').click(function()
	{
		$value = $(this).text();
		$('#sca7').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date7').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca7').val($data);
		 
		
	});
	$('.sca8 .t').click(function()
	{
		$value = $(this).text();
		$('#sca8').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date8').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca8').val($data);
		 
		
	});
	$('.sca9 .t').click(function()
	{
		$value = $(this).text();
		$('#sca9').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date9').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca9').val($data);
		 
		
	});$('.sca10 .t').click(function()
	{
		$value = $(this).text();
		$('#sca10').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date10').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca10').val($data);
		 
		
	});$('.sca11 .t').click(function()
	{
		$value = $(this).text();
		$('#sca11').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date11').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca11').val($data);
		 
		
	});$('.sca12 .t').click(function()
	{
		$value = $(this).text();
		$('#sca12').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date12').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca12').val($data);
		 
		
	});$('.sca13 .t').click(function()
	{
		$value = $(this).text();
		$('#sca13').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date13').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca13').val($data);
		 
		
	});$('.sca14 .t').click(function()
	{
		$value = $(this).text();
		$('#sca14').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date14').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca14').val($data);
		 
		
	});$('.sca15 .t').click(function()
	{
		$value = $(this).text();
		$('#sca15').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date15').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca15').val($data);
		 
		
	});
	$('.sca16 .t').click(function()
	{
		$value = $(this).text();
		$('#sca16').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date16').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca16').val($data);
		 
		
	});$('.sca17 .t').click(function()
	{
		$value = $(this).text();
		$('#sca17').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date17').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca17').val($data);
		 
		
	});$('.sca18 .t').click(function()
	{
		$value = $(this).text();
		$('#sca18').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date18').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca18').val($data);
		 
		
	});$('.sca19 .t').click(function()
	{
		$value = $(this).text();
		$('#sca19').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date19').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca19').val($data);
		 
		
	});$('.sca20 .t').click(function()
	{
		$value = $(this).text();
		$('#sca20').text($value);
		var hidden2 = $('#hidden2').text($value);
		$m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date20').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca20').val($data);
		
	});$('.sca21 .t').click(function()
	{
		$value = $(this).text();
		$('#sca21').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date21').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca21').val($data);
		 
		
	});$('.sca22 .t').click(function()
	{
		$value = $(this).text();
		$('#sca22').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date22').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca22').val($data);
		 
		
	});$('.sca23 .t').click(function()
	{
		$value = $(this).text();
		$('#sca23').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date23').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca23').val($data);
		 
		
	});$('.sca24 .t').click(function()
	{
		$value = $(this).text();
		$('#sca24').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date24').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca24').val($data);
		 
		
	});$('.sca25 .t').click(function()
	{
		$value = $(this).text();
		$('#sca25').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date25').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca25').val($data);
		 
		
	});$('.sca26 .t').click(function()
	{
		$value = $(this).text();
		$('#sca26').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date26').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca26').val($data);
		 
		
	});$('.sca27 .t').click(function()
	{
		$value = $(this).text();
		$('#sca27').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date27').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca27').val($data);
		 
		
	});$('.sca28 .t').click(function()
	{
		$value = $(this).text();
		$('#sca28').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date28').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca28').val($data);
		 
		
	});
	$('.sca29 .t').click(function()
	{
		$value = $(this).text();
		$('#sca29').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date29').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca29').val($data);
		 
		
	});
	$('.sca30 .t').click(function()
	{
		$value = $(this).text();
		$('#sca30').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date30').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca30').val($data);
		 
		
	});
	$('.sca31 .t').click(function()
	{
		$value = $(this).text();
		$('#sca31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca31').val($data);
		 
		
	});
        $('.sca31 .t').click(function()
	{
		$value = $(this).text();
		$('#sca31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddensca31').val($data);
		 
		
	});


		$('.scb1 .t').click(function()
	{
		
		$value = $(this).text();
		$('#scb1').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date1').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb1').val($data);
		
	});
	
	
	$('.scb2 .t').click(function()
	{
		
		$value = $(this).text();
		$('#scb2').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date2').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb2').val($data);
	});


	$('.scb3 .t').click(function()
	{
		$value = $(this).text();
		$('#scb3').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date3').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb3').val($data);
		 
		
	});
	$('.scb4 .t').click(function()
	{
		$value = $(this).text();
		$('#scb4').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date4').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb4').val($data);
		 
		
	});
	$('.scb5 .t').click(function()
	{
		$value = $(this).text();
		$('#scb5').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date5').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb5').val($data);
		 
		
	});
	$('.scb6 .t').click(function()
	{
		$value = $(this).text();
		$('#scb6').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date6').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb6').val($data);
		 
		
	});
	$('.scb7 .t').click(function()
	{
		$value = $(this).text();
		$('#scb7').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date7').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb7').val($data);
		 
		
	});
	$('.scb8 .t').click(function()
	{
		$value = $(this).text();
		$('#scb8').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date8').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb8').val($data);
		 
		
	});
	$('.scb9 .t').click(function()
	{
		$value = $(this).text();
		$('#scb9').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date9').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb9').val($data);
		 
		
	});$('.scb10 .t').click(function()
	{
		$value = $(this).text();
		$('#scb10').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date10').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb10').val($data);
		 
		
	});$('.scb11 .t').click(function()
	{
		$value = $(this).text();
		$('#scb11').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date11').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb11').val($data);
		 
		
	});$('.scb12 .t').click(function()
	{
		$value = $(this).text();
		$('#scb12').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date12').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb12').val($data);
		 
		
	});$('.scb13 .t').click(function()
	{
		$value = $(this).text();
		$('#scb13').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date13').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb13').val($data);
		 
		
	});$('.scb14 .t').click(function()
	{
		$value = $(this).text();
		$('#scb14').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date14').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb14').val($data);
		 
		
	});$('.scb15 .t').click(function()
	{
		$value = $(this).text();
		$('#scb15').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date15').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb15').val($data);
		 
		
	});
	$('.scb16 .t').click(function()
	{
		$value = $(this).text();
		$('#scb16').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date16').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb16').val($data);
		 
		
	});$('.scb17 .t').click(function()
	{
		$value = $(this).text();
		$('#scb17').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date17').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb17').val($data);
		 
		
	});$('.scb18 .t').click(function()
	{
		$value = $(this).text();
		$('#scb18').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date18').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb18').val($data);
		 
		
	});$('.scb19 .t').click(function()
	{
		$value = $(this).text();
		$('#scb19').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date19').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb19').val($data);
		 
		
	});$('.scb20 .t').click(function()
	{
		$value = $(this).text();
		$('#scb20').text($value);
		var hidden2 = $('#hidden2').text($value);
		$m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date20').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb20').val($data);
		
	});$('.scb21 .t').click(function()
	{
		$value = $(this).text();
		$('#scb21').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date21').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb21').val($data);
		 
		
	});$('.scb22 .t').click(function()
	{
		$value = $(this).text();
		$('#scb22').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date22').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb22').val($data);
		 
		
	});$('.scb23 .t').click(function()
	{
		$value = $(this).text();
		$('#scb23').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date23').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb23').val($data);
		 
		
	});$('.scb24 .t').click(function()
	{
		$value = $(this).text();
		$('#scb24').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date24').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb24').val($data);
		 
		
	});$('.scb25 .t').click(function()
	{
		$value = $(this).text();
		$('#scb25').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date25').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb25').val($data);
		 
		
	});$('.scb26 .t').click(function()
	{
		$value = $(this).text();
		$('#scb26').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date26').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb26').val($data);
		 
		
	});$('.scb27 .t').click(function()
	{
		$value = $(this).text();
		$('#scb27').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date27').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb27').val($data);
		 
		
	});$('.scb28 .t').click(function()
	{
		$value = $(this).text();
		$('#scb28').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date28').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb28').val($data);
		 
		
	});
	$('.scb29 .t').click(function()
	{
		$value = $(this).text();
		$('#scb29').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date29').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb29').val($data);
		 
		
	});
	$('.scb30 .t').click(function()
	{
		$value = $(this).text();
		$('#scb30').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date30').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb30').val($data);
		 
		
	});
	$('.scb31 .t').click(function()
	{
		$value = $(this).text();
		$('#scb31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb31').val($data);
		 
		
	});
        $('.scb31 .t').click(function()
	{
		$value = $(this).text();
		$('#scb31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenscb31').val($data);
		 
		
	});

});

$(document).ready(function()
{
	
	$value = $('#dropdownMenu1').text();
	$('#termhidden').val($value);

	$term = $('#dropdownMenu1').text().trim();
		if($term === 'January - June')
		{
			
			$('#month1').show();
			$('#month2').show();
			$('#month3').show();
			$('#month4').show();
			$('#month5').show();
			$('#month6').show();
			$('#month7').hide();
			$('#month8').hide();
			$('#month9').hide();
			$('#month10').hide();
			$('#month11').hide();
			$('#month12').hide();
		}

		else if($value==='July - December')
		{
			
			$('#month1').hide();
			$('#month2').hide();
			$('#month3').hide();
			$('#month4').hide();
			$('#month5').hide();
			$('#month6').hide();
			$('#month7').show();
			$('#month8').show();
			$('#month9').show();
			$('#month10').show();
			$('#month11').show();
			$('#month12').show();
		}
});


$(document).ready(function()
{
	$('.pc1 .t').click(function()
	{
		
		$value = $(this).text();
		$('#pc1').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date1').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc1').val($data);
		
	});
	
	
	$('.pc2 .t').click(function()
	{
		
		$value = $(this).text();
		$('#pc2').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date2').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc2').val($data);
	});


	$('.pc3 .t').click(function()
	{
		$value = $(this).text();
		$('#pc3').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date3').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc3').val($data);
		 
		
	});
	$('.pc4 .t').click(function()
	{
		$value = $(this).text();
		$('#pc4').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date4').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc4').val($data);
		 
		
	});
	$('.pc5 .t').click(function()
	{
		$value = $(this).text();
		$('#pc5').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date5').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc5').val($data);
		 
		
	});
	$('.pc6 .t').click(function()
	{
		$value = $(this).text();
		$('#pc6').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date6').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc6').val($data);
		 
		
	});
	$('.pc7 .t').click(function()
	{
		$value = $(this).text();
		$('#pc7').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date7').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc7').val($data);
		 
		
	});
	$('.pc8 .t').click(function()
	{
		$value = $(this).text();
		$('#pc8').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date8').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc8').val($data);
		 
		
	});
	$('.pc9 .t').click(function()
	{
		$value = $(this).text();
		$('#pc9').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date9').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc9').val($data);
		 
		
	});$('.pc10 .t').click(function()
	{
		$value = $(this).text();
		$('#pc10').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date10').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc10').val($data);
		 
		
	});$('.pc11 .t').click(function()
	{
		$value = $(this).text();
		$('#pc11').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date11').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc11').val($data);
		 
		
	});$('.pc12 .t').click(function()
	{
		$value = $(this).text();
		$('#pc12').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date12').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc12').val($data);
		 
		
	});$('.pc13 .t').click(function()
	{
		$value = $(this).text();
		$('#pc13').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date13').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc13').val($data);
		 
		
	});$('.pc14 .t').click(function()
	{
		$value = $(this).text();
		$('#pc14').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date14').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc14').val($data);
		 
		
	});$('.pc15 .t').click(function()
	{
		$value = $(this).text();
		$('#pc15').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date15').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc15').val($data);
		 
		
	});
	$('.pc16 .t').click(function()
	{
		$value = $(this).text();
		$('#pc16').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date16').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc16').val($data);
		 
		
	});$('.pc17 .t').click(function()
	{
		$value = $(this).text();
		$('#pc17').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date17').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc17').val($data);
		 
		
	});$('.pc18 .t').click(function()
	{
		$value = $(this).text();
		$('#pc18').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date18').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc18').val($data);
		 
		
	});$('.pc19 .t').click(function()
	{
		$value = $(this).text();
		$('#pc19').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date19').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc19').val($data);
		 
		
	});$('.pc20 .t').click(function()
	{
		$value = $(this).text();
		$('#pc20').text($value);
		var hidden2 = $('#hidden2').text($value);
		$m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date20').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc20').val($data);
		
	});$('.pc21 .t').click(function()
	{
		$value = $(this).text();
		$('#pc21').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date21').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc21').val($data);
		 
		
	});$('.pc22 .t').click(function()
	{
		$value = $(this).text();
		$('#pc22').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date22').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc22').val($data);
		 
		
	});$('.pc23 .t').click(function()
	{
		$value = $(this).text();
		$('#pc23').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date23').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc23').val($data);
		 
		
	});$('.pc24 .t').click(function()
	{
		$value = $(this).text();
		$('#pc24').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date24').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc24').val($data);
		 
		
	});$('.pc25 .t').click(function()
	{
		$value = $(this).text();
		$('#pc25').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date25').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc25').val($data);
		 
		
	});$('.pc26 .t').click(function()
	{
		$value = $(this).text();
		$('#pc26').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date26').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc26').val($data);
		 
		
	});$('.pc27 .t').click(function()
	{
		$value = $(this).text();
		$('#pc27').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date27').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc27').val($data);
		 
		
	});$('.pc28 .t').click(function()
	{
		$value = $(this).text();
		$('#pc28').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date28').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc28').val($data);
		 
		
	});
	$('.pc29 .t').click(function()
	{
		$value = $(this).text();
		$('#pc29').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date29').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc29').val($data);
		 
		
	});
	$('.pc30 .t').click(function()
	{
		$value = $(this).text();
		$('#pc30').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date30').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc30').val($data);
		 
		
	});
	$('.pc31 .t').click(function()
	{
		$value = $(this).text();
		$('#pc31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpc31').val($data);
		 
		
	});
        $('.pca1 .t').click(function()
	{
		
		$value = $(this).text();
		$('#pca1').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date1').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca1').val($data);
		
	});
	
	
	$('.pca2 .t').click(function()
	{
		
		$value = $(this).text();
		$('#pca2').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date2').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca2').val($data);
	});


	$('.pca3 .t').click(function()
	{
		$value = $(this).text();
		$('#pca3').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date3').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca3').val($data);
		 
		
	});
	$('.pca4 .t').click(function()
	{
		$value = $(this).text();
		$('#pca4').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date4').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca4').val($data);
		 
		
	});
	$('.pca5 .t').click(function()
	{
		$value = $(this).text();
		$('#pca5').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date5').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca5').val($data);
		 
		
	});
	$('.pca6 .t').click(function()
	{
		$value = $(this).text();
		$('#pca6').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date6').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca6').val($data);
		 
		
	});
	$('.pca7 .t').click(function()
	{
		$value = $(this).text();
		$('#pca7').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date7').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca7').val($data);
		 
		
	});
	$('.pca8 .t').click(function()
	{
		$value = $(this).text();
		$('#pca8').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date8').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca8').val($data);
		 
		
	});
	$('.pca9 .t').click(function()
	{
		$value = $(this).text();
		$('#pca9').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date9').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca9').val($data);
		 
		
	});$('.pca10 .t').click(function()
	{
		$value = $(this).text();
		$('#pca10').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date10').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca10').val($data);
		 
		
	});$('.pca11 .t').click(function()
	{
		$value = $(this).text();
		$('#pca11').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date11').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca11').val($data);
		 
		
	});$('.pca12 .t').click(function()
	{
		$value = $(this).text();
		$('#pca12').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date12').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca12').val($data);
		 
		
	});$('.pca13 .t').click(function()
	{
		$value = $(this).text();
		$('#pca13').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date13').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca13').val($data);
		 
		
	});$('.pca14 .t').click(function()
	{
		$value = $(this).text();
		$('#pca14').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date14').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca14').val($data);
		 
		
	});$('.pca15 .t').click(function()
	{
		$value = $(this).text();
		$('#pca15').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date15').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca15').val($data);
		 
		
	});
	$('.pca16 .t').click(function()
	{
		$value = $(this).text();
		$('#pca16').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date16').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca16').val($data);
		 
		
	});$('.pca17 .t').click(function()
	{
		$value = $(this).text();
		$('#pca17').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date17').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca17').val($data);
		 
		
	});$('.pca18 .t').click(function()
	{
		$value = $(this).text();
		$('#pca18').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date18').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca18').val($data);
		 
		
	});$('.pca19 .t').click(function()
	{
		$value = $(this).text();
		$('#pca19').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date19').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca19').val($data);
		 
		
	});$('.pca20 .t').click(function()
	{
		$value = $(this).text();
		$('#pca20').text($value);
		var hidden2 = $('#hidden2').text($value);
		$m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date20').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca20').val($data);
		
	});$('.pca21 .t').click(function()
	{
		$value = $(this).text();
		$('#pca21').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date21').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca21').val($data);
		 
		
	});$('.pca22 .t').click(function()
	{
		$value = $(this).text();
		$('#pca22').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date22').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca22').val($data);
		 
		
	});$('.pca23 .t').click(function()
	{
		$value = $(this).text();
		$('#pca23').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date23').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca23').val($data);
		 
		
	});$('.pca24 .t').click(function()
	{
		$value = $(this).text();
		$('#pca24').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date24').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca24').val($data);
		 
		
	});$('.pca25 .t').click(function()
	{
		$value = $(this).text();
		$('#pca25').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date25').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca25').val($data);
		 
		
	});$('.pca26 .t').click(function()
	{
		$value = $(this).text();
		$('#pca26').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date26').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca26').val($data);
		 
		
	});$('.pca27 .t').click(function()
	{
		$value = $(this).text();
		$('#pca27').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date27').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca27').val($data);
		 
		
	});$('.pca28 .t').click(function()
	{
		$value = $(this).text();
		$('#pca28').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date28').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca28').val($data);
		 
		
	});
	$('.pca29 .t').click(function()
	{
		$value = $(this).text();
		$('#pca29').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date29').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca29').val($data);
		 
		
	});
	$('.pca30 .t').click(function()
	{
		$value = $(this).text();
		$('#pca30').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date30').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca30').val($data);
		 
		
	});
	$('.pca31 .t').click(function()
	{
		$value = $(this).text();
		$('#pca31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca31').val($data);
		 
		
	});
        $('.pca31 .t').click(function()
	{
		$value = $(this).text();
		$('#pca31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpca31').val($data);
		 
		
	});


		$('.pcb1 .t').click(function()
	{
		
		$value = $(this).text();
		$('#pcb1').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date1').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb1').val($data);
		
	});
	
	
	$('.pcb2 .t').click(function()
	{
		
		$value = $(this).text();
		$('#pcb2').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date2').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb2').val($data);
	});


	$('.pcb3 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb3').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date3').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb3').val($data);
		 
		
	});
	$('.pcb4 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb4').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date4').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb4').val($data);
		 
		
	});
	$('.pcb5 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb5').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date5').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb5').val($data);
		 
		
	});
	$('.pcb6 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb6').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date6').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb6').val($data);
		 
		
	});
	$('.pcb7 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb7').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date7').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb7').val($data);
		 
		
	});
	$('.pcb8 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb8').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date8').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb8').val($data);
		 
		
	});
	$('.pcb9 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb9').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date9').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb9').val($data);
		 
		
	});$('.pcb10 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb10').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date10').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb10').val($data);
		 
		
	});$('.pcb11 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb11').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date11').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb11').val($data);
		 
		
	});$('.pcb12 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb12').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date12').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb12').val($data);
		 
		
	});$('.pcb13 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb13').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date13').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb13').val($data);
		 
		
	});$('.pcb14 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb14').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date14').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb14').val($data);
		 
		
	});$('.pcb15 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb15').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date15').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb15').val($data);
		 
		
	});
	$('.pcb16 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb16').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date16').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb16').val($data);
		 
		
	});$('.pcb17 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb17').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date17').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb17').val($data);
		 
		
	});$('.pcb18 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb18').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date18').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb18').val($data);
		 
		
	});$('.pcb19 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb19').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date19').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb19').val($data);
		 
		
	});$('.pcb20 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb20').text($value);
		var hidden2 = $('#hidden2').text($value);
		$m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date20').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb20').val($data);
		
	});$('.pcb21 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb21').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date21').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb21').val($data);
		 
		
	});$('.pcb22 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb22').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date22').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb22').val($data);
		 
		
	});$('.pcb23 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb23').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date23').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb23').val($data);
		 
		
	});$('.pcb24 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb24').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date24').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb24').val($data);
		 
		
	});$('.pcb25 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb25').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date25').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb25').val($data);
		 
		
	});$('.pcb26 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb26').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date26').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb26').val($data);
		 
		
	});$('.pcb27 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb27').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date27').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb27').val($data);
		 
		
	});$('.pcb28 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb28').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date28').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb28').val($data);
		 
		
	});
	$('.pcb29 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb29').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date29').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb29').val($data);
		 
		
	});
	$('.pcb30 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb30').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date30').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb30').val($data);
		 
		
	});
	$('.pcb31 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb31').val($data);
		 
		
	});
        $('.pcb31 .t').click(function()
	{
		$value = $(this).text();
		$('#pcb31').text($value);
		var hidden2 = $('#hidden2').text($value);
                $m = $('#currentMonth').text();
                var ret = $m.split(" ");
                $month = ret[0];
                $year= ret[1];
                $date = $('#date31').html();
                $data = $value + '?' + $date + '?' + $month + '?' + $year;
		$('input[name=hiddenpcb31').val($data);
		 
		
	});

        
});