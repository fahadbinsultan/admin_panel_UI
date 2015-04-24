$(document).ready(function(){
	$('#nav').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce"
	});
	//add
	$(".cross").click(function(){
		$(".add").hide(2000);
		$(".container , .slider_area").css('opacity','1');
	});
  
	$(".add img").click(function(){
		$(".add").hide(2000);
		$(".container , .slider_area").css('opacity','1');
	});

	//Calendar js
	$('#calendar').datepicker({
		inline: true,
		firstDay: 1,
		showOtherMonths: true,
		dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	});

	//Owl-Carousel
    $(document).ready(function() {
     
    $("#owl-demo").owlCarousel({
     
    navigation : true, // Show next and prev buttons
    slideSpeed : 100,
    paginationSpeed : 400,
    singleItem:true
     
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
     
    });
     
    });

    //Click Nav Jquery Function
    $('.navbar-brand').click(function(e){
		$('body').toggleClass('active');
	});


});