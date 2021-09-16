//    what we do section
$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
//alerting to the client
$("button").click(function (pop) {
  var client = document.getElementById('nameDetail').value;
  if (client != " "){
    swal({
      title: "Successful!",
      text:  'Dear ' + client + ', our very esteemed client, we have successfully received your message. ' + ' Feel free to reach out to us anytime.',
      icon: "success",
      button: "OK!",
    });
    
    
  }
  pop.preventDefault();
});
//    resetting form button
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});
  //portifolio  
$(".card").hover(function () {
  $(this).children(".card-1").fadeToggle(1000, "linear");
});
//mailchimp
(function ($) { 
  window.fnames = new Array(); 
  window.ftypes = new Array(); 
  fnames[1] = 'NAME'; 
  ftypes[1] = 'text'; 
  fnames[0] = 'EMAIL'; 
  ftypes[0] = 'email'; 
  fnames[2] = 'MMERGE2'; 
  ftypes[2] = 'text'; 
}
(jQuery)); 
var $mcj = jQuery.noConflict(true);