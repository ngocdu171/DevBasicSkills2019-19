(function($) {
    $(function() {
        $('.js-Study-item').click(function(){ /* click vo item thi thuc hien lenh o duoi */
            if($(this).hasClass('Study-tab-list-item-active')) {
                return;
            }
            $('.Study-tab-list-item-active').removeClass('Study-tab-list-item-active');
            $(this).addClass('Study-tab-list-item-active');
            var index = $(this).index('.js-Study-item') /* tim thang dang chon trong study-item */
            var itemContent = $('.js-Study-Content[data-index='+index+']');
            $('.js-Study-list').animate({
                left: 0 - itemContent.position().left
            },1000);
        });
    });
})(jQuery);