//one page scroll

$(function () {

	var sections = $('.section'),
		display = $('.maincontent'),
		inScroll = false;


	var scrollToSection = function (sectionEq) {
		var position = 0;

		if (!inScroll) {

			inScroll = true;

			position = (sections.eq(sectionEq).index() * -100) + '%';

			sections.eq(sectionEq).addClass('active')
				.siblings().removeClass('active');

			display.css({
				'transform' : 'translate3d(0, ' + position + ', 0)'
		
			});

			setTimeout(function () {
				inScroll = false;

				$('.fixed-menu__item').eq(sectionEq).addClass('active')
					.siblings().removeClass('active');

			}, 1300)

		
		}

		

	}
	
	$('.wrapper').on('wheel', function(e) {
		
		var deltaY = e.originalEvent.deltaY,
			activeSection = sections.filter('.active'),
			nextSection = activeSection.next(),
			prevSection = activeSection.prev()

		if (deltaY > 0) {

			if (nextSection.length) {


				scrollToSection(nextSection.index());

			}

			
		}

		if (deltaY < 0) {
			if (prevSection.length) {


				scrollToSection(prevSection.index());
				
			}
		}

	});

	$('.down').on('click', function(e){
		e.preventDefault();

		scrollToSection(1);
	})

	$('.fixed-menu__link, .nav__link, .order-link').on('click', function(e){
		e.preventDefault();

		var href = parseInt($(this).attr('href')) ;

		scrollToSection(href);

	});

	$(document).on('keydown', function (e){

		var activeSection = sections.filter('.active'),
			nextSection = activeSection.next(),
			prevSection = activeSection.prev()

		switch (e.keyCode) {
			case 40 :
				if (nextSection.length) {


				scrollToSection(nextSection.index());

			}
			break;

			case 38 :
				if (prevSection.length) {


				scrollToSection(prevSection.index());
				
			}
			break;
		}

	});

});

//slider

$(document).ready(function(){
  
        var moveSlide = function (container, burgersNum){
        var 
            items = container.find('.owl-item');
            activeItem = items.filter('.active');
            reqItem = items.eq(burgersNum),
            reqIndex = reqItem.index(),
            list = container.find('.owl-stage'),
            duration = 1000;

             if (reqItem.length) {
                 list.animate({
                'left' : -reqIndex * 100 + '%'
              }, duration)

              activeItem.removeClass('active');
              reqItem.addClass('active');
             } 
       }
$('.burger-slider__btn').on('click', function(e){e.preventDefault();
 
             var $this = $(this),
             container = $this.closest('.burger-slider-wrap'),             
             items = container.find('.owl-item'),
             activeItem = items.filter('.active'),
             nextItem = activeItem.next(),
             prevItem = activeItem.prev();
              
             if ($this.hasClass('burger-slider__btn-next')){ //листаем вперед                
                if (nextItem.length) {
                  moveSlide(container, nextItem.index());
                } else {
                  moveSlide(container, 0);
                }
             } else { //листаем назад
              if (prevItem.length) {
                  moveSlide(container, prevItem.index());
                } else {
                  moveSlide(container, items.length - 1);///потому что lenght считает с 1,а eq считает с 0

                }
                
             }


              
        });

    });

//acco-team

$(function(){
  $('.team-acco__trigger').on('click',function(e){e.preventDefault();
  var $this=$(this),item=$this.closest('.team-acco__item'),
      container=$this.closest('.team-acco'),  
      items=container.find('.team-acco__item'),
      content=item.find('.team-acco__content'),
      otherContent=container.find('.team-acco__content');
  if(!item.hasClass('active')){
    items.removeClass('active');
    item.addClass('active');
    otherContent.slideUp();
    content.slideDown();
  }else{
    item.removeClass('active');
    content.slideUp();
    }
  });
});

//acco-menu

$(document).ready(function () {

    $('.menu-acco__trigger').on('click', function (e) {
    	 e.preventDefault();
    
    var otherContent = $('.menu-acco__content'),
    	item = $(this).closest('.menu-acco__item'),
    	content = item.find('.menu-acco__content'),
    	reqWidth = item.find('.menu-acco__text').outerWidth();
      
    if (!item.hasClass('active'))  {
    item.addClass('active');

    otherContent.css({
     'width' : 0
         
    	});
      
    content.css({
           'width' : reqWidth
         
    	});
    } else {
    	item.removeClass('active');

    	content.css({
     'width' : 0
         
    	});
    }

   });

});

//inputmask

$(function () {
	$('.phone-mask').inputmask('+7 (999) 999 99 99');
});

//fancybox 

$(function () {
	$('.review__view').fancybox({
		type : 'inline',
		maxWidth : 460,
		fitToView : false,
		padding : 0
	});

	$('.full-review__close').on('click', function(e){
		e.preventDefault();
		$.fancybox.close();
	})

});

//form submit

$(function  () {
	$('#order-form').on('submit', function(e){
		e.preventDefault();

		var 
			form = $(this);
			formData = form.serialize();

		$.ajax({
			url: '../mail.php',
			type: 'POST',
			data: formData,

			success: function (data) {

				var popup = data.status ? '#success' : '#error';

				$.fancybox.open([
					{href : popup}
				], {
					type: 'inline',
					maxWidth: 250,
					fitToView: false,
					padding: 0,
					afterClose : function () {
						form.trigger('reset');
					}
				});
				 

			}
		})	
	});

	$('.status-popup__close').on('click', function(e) {
		e.preventDefault();
		$.fancybox.close();
	});

});