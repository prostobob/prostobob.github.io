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