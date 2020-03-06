document.addEventListener("DOMContentLoaded", function(event) {
    //timer
    var fullTime = new Date().getTime() + 10000000; //2:46:40
    $('.countdown-container').countdown(fullTime, function(event) {
        $(this).html(event.strftime(

            '<div class="timer__wrapp">' +
            '<span class="timer__item time__hours">%H</span>' +
            '<span class="timer__item ">:</span>' +

            '</div>' +
            '<div class="timer__wrapp">' +
            '<span class="timer__item time__minutes">%M</span>' +
            '<span class="timer__item ">:</span>' +
            '</div>' +
            '<div class="timer__wrapp">' +
            '<span class="timer__item time__seconds">%S</span>' +

            '</div>'));
    });




    //    ВЫРАНИВАЕМ БЛОКИ ПО ВЫСОТЕ
    function alignmentHeight(element) {
        var maxHeight = 0;
        var block = $(element);

        for (var i = 0; i < block.length; i++) {

            if (maxHeight < block[i].clientHeight) {
                maxHeight = block[i].clientHeight;

            }

        }

        for (var j = 0; j < block.length; j++) {



            block[j].style.height = maxHeight + "px";
        }

    };


    //СОБИРАЕМ КАРУСЕЛЬ
    function createsSlider() {
        var item = $(".slider__item");
        for (var i = 0; i < item.length; i++) {


            item.addClass("item ");

        }
        $("#slider").carousel(3000);

    }

    alignmentHeight(".slider__item");

    //   ------------
    //
    //фиксируем меню при прокрутке
    // $(window).scroll(function(){
    //     if($(this).scrollTop()>60){
    //         $('#navigate').addClass('fixed');
    //     }
    //     else if ($(this).scrollTop()<60){
    //         $('#navigate').removeClass('fixed');
    //     }
    // });

    //плавный скролл
    $(".menu__item,.order__wrapp ").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $("div.btn-buy").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    function dataToday(element) {
        var date = new Date();
        //Берем день
        var day = date.getDate();
        //Берем месяц
        var month = date.getMonth() + 1;
        //Берем год
        var yea = date.getFullYear();
        //находим блок

        var dataSpan = $(element);
        //Меняем содержимое спана
        dataSpan.html(+day + "." + month + "." + yea + " ");
    }
    dataToday(".date");

    $(".menu__btn").on("click", function() {
        $(".menu__list").toggleClass('menu__list--active');
    });
    //
    // function numberRandon(max,min) {
    //     var number = Math.floor(Math.random() * (max - min) + min);
    //     setInterval( $(".count").html(number-1)  , 1000);
    //
    //
    // }
    //     numberRandon(65,40);


    $(".menu__button").on("click", function() {
        var menu = $('.menu__list');
        if (menu.hasClass("open")) {

            menu.fadeOut().removeClass("open");
        } else {
            menu.fadeIn().addClass("open");
        }



    });



});