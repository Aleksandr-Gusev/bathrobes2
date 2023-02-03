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
    
    //modal
    $('[data-modal="consultation"]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal_close').on('click', function(){
        $('.overlay, #consultation, #order, #accept').fadeOut('slow');
    });

    $('.btn-mini').on('click', function(){
        $('.overlay, #order').fadeIn('slow');
    });

    $('.btn-mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal_descr').text($('.catalog-descr1').eq(i).text());
        })
    });

//https://jqueryvalidation.org/

function validateForm(form){
    $(form).validate({
        rules: {
            name: { required: true,
                    minlength: 2
                },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required:"Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите не менее {0} - х символов")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою электронную почту",
                email: "Неправильно введен адрес почты"
            }
        }
    });
}

validateForm('#consultation form');
validateForm('#order form');
validateForm('#form1');

$('input[name=phone]').mask("+7 (999) 999-99-99");


//*******************************Отправка на почту +  ********************************/

$('form').submit(function(e){
    e.preventDefault();             //отмена перезагрузки страницы при нажатии на кнопку отправки
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",    // обработчик
        data: $(this).serialize()    //подготовка данных перед отправкой
    }).done(function(){             // когда выполнили операцию то делаем следующую
        $(this).find("input").val(""); //очистка инпутов после отправки
        $('#consultation, #order').fadeOut(); // скрытие форм
        $('.overlay, #accept').fadeIn('slow'); // вывод формы с сообщением
        $('form').trigger('reset');     // очистка форм     
    });      
    return false;                    
}); 

});
 
 