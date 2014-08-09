$(document).ready(function(){
    $('a.navbar-brand, ul.navbar-nav > li > a, #footer ul.list-inline > li > a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    if($(window).width() < 767){
    	$('ul.navbar-nav > li > a').on('click', function(){
    		$('.navbar-collapse').removeClass('in');
    		$('.navbar-collapse').attr('style', 'height: 1');
    	});
    }

	var container = $('.portfolio-content .portfoliogrid');    
	container.isotope({
		animationEngine : 'best-available',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	}); 

	$('.portfoliofil .nav-pills li a').click(function(){
		$('.portfoliofil .nav-pills li a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		container.isotope({ filter: selector });
		setProjects();
		return false;
	});

	function splitColumns() { 
		var winWidth = $(window).width(), columnNumb = 1;
		if (winWidth > 1500) {
			columnNumb = 5;
		} else if (winWidth > 980) {
			columnNumb = 4;
		} else if (winWidth > 768 && winWidth < 979) {
			columnNumb = 3;
		} else if (winWidth > 320 && winWidth < 767) {
			columnNumb = 2;
		} else if (winWidth < 320) {
			columnNumb = 1;
		}
		return columnNumb;
	}

	function setColumns() { 
		var winWidth = $(window).width(), columnNumb = splitColumns(), postWidth = Math.floor(winWidth / columnNumb);
		container.find('.portfoliogrid li').each(function () { 
			$(this).css( { 
				width : postWidth + 'px' 
			});
		});
	}

	function setProjects() { 
		setColumns();
		container.isotope('reLayout');
	}

	container.imagesLoaded(function () { 
		setColumns();
	});

	$( window ).bind('resize', function () { 
		setProjects();          
	});
	
	$('#maps').gmap3({
		map: {
			options: {
			  center: [28.44465,77.00580],
			  zoom: 14,
			  scrollwheel: false
			}  
		 },
		marker:{
			latLng: [28.44465,77.00580],
			options: {
			 icon: new google.maps.MarkerImage(
			   "img/location.png",
			   new google.maps.Size(48, 48, "px", "px")
			 )
			}
		 }
	});
	

});
