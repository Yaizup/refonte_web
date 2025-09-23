(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on( "load", function() {
	   $(".preloader").fadeOut(600);
    });
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
	
	/* Stickey Header */

	

	
	/* Pop up page*/
	var $haspopup = $(".gallery"); 
	if($haspopup.length){
		$haspopup.magnificPopup({
			 delegate: 'a',
			type: 'image',
			gallery:{
				enabled:true
			},
			zoom:{
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function(openerElement) {
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			});	
	}
	
	/* Testimonial slider */
	var swiper = new Swiper('.testimonial-slider',{
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		}
    });
	
	/* Event slider */
	var swiper = new Swiper('.event-slider',{
		loop: true,
		slidesPerView: 3,
		spaceBetween: 0,
		pagination: {
			el: '.event-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
    });
	
	/* Popup video */
	var $popupvideo = $(".popup-video"); 
	if($popupvideo.length){
		$popupvideo.magnificPopup({
			type: 'iframe',
			preloader: true,
		});
	}
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
	/* Animated Header Slider Start */
	var swiperAnimation = new SwiperAnimation();
	var mySwiper = new Swiper('.swiper-container.banner-slider', {
		effect: 'fade',
		speed: 2000,
		autoplay: {
			delay: 6000
		},
		navigation: {
			nextEl: '.banner-button-next',
			prevEl: '.banner-button-prev',
		},
		on: {
			init: function() {
				swiperAnimation.init(this).animate();
			},
			slideChange: function() {
				swiperAnimation.init(this).animate();
			}
		}
	});
	console.log(mySwiper);
	
	/* ================================================== */
	/* ============ Scrolling Cards Animation ========== */
	/* ================================================== */
	
	// Attendre que le DOM soit chargé
	$(document).ready(function() {
		// Duplication automatique en une ligne
		const wrapper = document.getElementById('scroll');
		if (wrapper) {
			wrapper.innerHTML += wrapper.innerHTML;

			let speed = 0.4, target = 0.4, pos = 0;

			function animate() {
				pos -= speed;
				wrapper.style.transform = `translateX(${pos}px)`;
				if (Math.abs(pos) >= wrapper.scrollWidth / 2) pos = 0;
				speed += (target - speed) * 0.05;
				requestAnimationFrame(animate);
			}

			// Ralentissement progressif au survol
			wrapper.addEventListener('mouseenter', () => target = 0.1);
			wrapper.addEventListener('mouseleave', () => target = 0.4);

			animate();
		}
	});
	
	// Validation Bootstrap pour le formulaire de contact
	(function () {
	  'use strict';
	  var forms = document.querySelectorAll('.needs-validation');
	  Array.prototype.slice.call(forms).forEach(function (form) {
	    form.addEventListener('submit', function (event) {
	      if (!form.checkValidity()) {
	        event.preventDefault();
	        event.stopPropagation();
	      } else {
	        // Simulate AJAX success
	        event.preventDefault();
	        document.getElementById('formSuccess').classList.remove('d-none');
	        document.getElementById('formError').classList.add('d-none');
	        form.reset();
	        form.classList.remove('was-validated');
	      }
	      form.classList.add('was-validated');
	    }, false);
	  });
	})();
	
// --- Scrollspy & Active nav ---
$(document).ready(function() {
	// IDs des sections à surveiller (doivent correspondre aux href des nav-link)
	var sectionIds = [];
	$('.navbar-nav .nav-link').each(function() {
		var href = $(this).attr('href');
		if (href && href.startsWith('#') && $(href).length) {
			sectionIds.push(href);
		}
	});

	function onScroll() {
		var scrollPos = $(window).scrollTop();
		var offset = 120; // Décalage pour header
		var currentId = null;
		for (var i = 0; i < sectionIds.length; i++) {
			var id = sectionIds[i];
			var sectionTop = $(id).offset().top - offset;
			if (scrollPos >= sectionTop) {
				currentId = id;
			}
		}
		// Met à jour la classe active
		$('.navbar-nav .nav-link').removeClass('active');
		if (currentId) {
			$('.navbar-nav .nav-link[href="' + currentId + '"]').addClass('active');
		}
	}
	$(window).on('scroll', onScroll);
	onScroll(); // Initial
});
})(jQuery);