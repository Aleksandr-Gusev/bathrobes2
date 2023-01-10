$(document).ready(function(){
    
    $('ul.tab_item').on('click', 'li:not(.active1)', function() {
        $(this)
          .addClass('active1').siblings().removeClass('active1')
          .closest('div.container').find('div.content').removeClass('active11').eq($(this).index()).addClass('active11');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.block1').eq(i).toggleClass('active2');
                $('.block2').eq(i).toggleClass('active3');
            })
        });
    };

    toggleSlide('.catalog-link');
    toggleSlide('.catalog_back');
    
        /* $('.catalog_link').each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.block1').toggleClass('active2');
                $('.block2').eq(i).toggleClass('active3');
            })
        }); */
    

    /* toggleSlide('.catalog_link');
    toggleSlide('.catalog_back'); */

});

 