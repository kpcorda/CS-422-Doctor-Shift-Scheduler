
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
        $('#outputsc1').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc1').hide();
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
        $('#outputsc2').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc2').hide();
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
        $('#outputsc3').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc3').hide();
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
        $('#outputsc4').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc4').hide();
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
        $('#outputsc5').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc5').hide();
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
        $('#outputsc6').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc6').hide();
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
        $('#outputsc7').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc7').hide();
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
        $('#outputsc8').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc8').hide();
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
        $('#outputsc9').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc9').hide();
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
        $('#outputsc10').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc10').hide();
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
        $('#outputsc11').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc11').hide();
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
        $('#outputsc12').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc12').hide();
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
        $('#outputsc13').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc13').hide();
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
        $('#outputsc14').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc14').hide();
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
        $('#outputsc15').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc15').hide();
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
        $('#outputsc16').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc16').hide();
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
        $('#outputsc17').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc17').hide();
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
        $('#outputsc18').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc18').hide();
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
        $('#outputsc19').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc19').hide();
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
        $('#outputsc20').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc20').hide();
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
        $('#outputsc21').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc21').hide();
    });
    
    $('.sc20').on('mouseenter',function() {
    
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
        $('#outputsc22').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc22').hide();
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
        $('#outputsc23').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc23').hide();
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
        $('#outputsc24').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc24').hide();
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
        $('#outputsc25').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc25').hide();
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
        $('#outputsc26').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc26').hide();
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
        $('#outputsc27').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc27').hide();
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
        $('#outputsc28').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc28').hide();
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
        $('#outputsc29').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc29').hide();
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
        $('#outputsc30').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc30').hide();
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
        $('#outputsc31').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputsc element html
        
      } 
    });
});
$('.sc31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputsc31').hide();
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
        $('#outputpc1').show().html("<b> Site Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
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
        $('#outputpc1').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc1').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc1').hide();
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
        $('#outputpc2').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc2').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc2').hide();
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
        $('#outputpc3').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc3').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc3').hide();
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
        $('#outputpc4').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc4').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc4').hide();
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
        $('#outputpc5').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc5').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc5').hide();
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
        $('#outputpc6').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc6').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc6').hide();
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
        $('#outputpc7').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc7').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc7').hide();
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
        $('#outputpc8').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc8').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc8').hide();
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
        $('#outputpc9').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc9').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc9').hide();
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
        $('#outputpc10').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc10').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc10').hide();
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
        $('#outputpc11').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc11').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc11').hide();
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
        $('#outputpc12').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc12').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc12').hide();
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
        $('#outputpc13').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc13').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc13').hide();
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
        $('#outputpc14').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc14').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc14').hide();
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
        $('#outputpc15').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc15').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc15').hide();
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
        $('#outputpc16').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc16').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc16').hide();
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
        $('#outputpc17').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc17').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc17').hide();
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
        $('#outputpc18').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc18').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc18').hide();
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
        $('#outputpc19').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc19').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc19').hide();
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
        $('#outputpc20').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc20').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc20').hide();
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
        $('#outputpc21').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc21').hide();
    });
    
    $('.pc20').on('mouseenter',function() {
    
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
        $('#outputpc22').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc22').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc22').hide();
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
        $('#outputpc23').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc23').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc23').hide();
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
        $('#outputpc24').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc24').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc24').hide();
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
        $('#outputpc25').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc25').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc25').hide();
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
        $('#outputpc26').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc26').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc26').hide();
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
        $('#outputpc27').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc27').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc27').hide();
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
        $('#outputpc28').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc28').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc28').hide();
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
        $('#outputpc29').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc29').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc29').hide();
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
        $('#outputpc30').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc30').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc30').hide();
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
        $('#outputpc31').show().html("<b> Phone Call: </b>"+fname+" "+lname); //Set outputpc element html
        
      } 
    });
});
$('.pc31').on('mouseleave',function(){ // mouse leave for fadeout div
        $('#outputpc31').hide();
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
    $('#publish').trigger('click');
    
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
		
		if($value == 'January - June')
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

});

$(document).ready(function()
{
	
	$value = $('#dropdownMenu1').text();
	$('#termhidden').val($value);

	$term = $('#dropdownMenu1').text().trim();
		if($term == 'January - June')
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

		else if($value=='July - December')
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
        
        
});