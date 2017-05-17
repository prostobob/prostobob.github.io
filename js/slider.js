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



  