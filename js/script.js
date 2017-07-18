$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-times fa-2x');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-align-left fa-2x');
	});

	$(document).ready(function(){
	  	$("#owl-demo").owlCarousel({		 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		 
		    animateOut: 'slideOutDown',
		    animateIn: 'flipInX',
		    items:1,
		    loop: true,
		    stagePadding:30,
    		smartSpeed:450,
    		itemsDesktop : false,
		    itemsDesktopSmall : false,
		    itemsTablet: false,
		    itemsMobile : false,
		    margin:30,
		    nav:true,
		    navText : ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>'
,'<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>']
		 
		});
	});
});