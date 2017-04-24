$(document).ready(function(){
		$("#reset").click(function(){
		$("#username").val("");
		$("#password").val("");
	});


	//validation

	var username;
	var password;

	$("#login").click(function(){

		username = $("#username").val();
		password = $("#password").val();

		if(username == '' || password == '' ){
			$("#common-alert").css("display", "block");
		}else if(username.length <4){
			$("#name-alert").css("display", "block");
		}else if(password.length < 5){
			$("#pass-alert").css("display", "block");
		}


		else{
			$(".alert-success").css("display", "block");
			window.location.href = "profile.html";
		}

	});

$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  speed: 100
});

$( "#tabs" ).tabs();

$("#bgcolor").change(function(){
	var color=$("#bgcolor").val();
	$("body").css("background",color);
});

var max_text=200;
$(".count").html("<b>"+max_text+"Characters Remaining</b>");
$("textarea").keyup(function(){
	var text_length=$("textarea").val().length;
	var total_Characters_Remaining= max_text - text_length;
	$(".count").html("<b>"+total_Characters_Remaining+"Characters Remaining</b>");
});
$('.parallax-window').parallax({imageSrc: 'img/jm1.jpg'});
$('.parallax-window1').parallax({imageSrc: 'img/m1.png'});

});

