/*===========================================================
                         PARALLAX MOUSE                                 
=============================================================*/
$(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    let posX = e.clientX/100;

    $('#cristiano').css({'left': 40 + posX/3 +'%'});
    $('#hazard').css({'left': 5 - posX/5 +'%'});
    $('#suarez').css({'right': 5 - posX/5 +'%'});
    $('#messi').css({'right': 13 + posX/6 +'%'});
    $('#zlatan').css({'right': 20 + posX/3 +'%'});
    $('#totti').css({'right': 30 + posX/2 +'%'});
    $('#ozil').css({'left': 34 + posX/5 +'%'});
    $('#james').css({'left': 28 + posX/3 +'%'});
    $('#iniesta').css({'left': 20 - posX/2 +'%'});
    
});

/*===========================================================
                         PARALLAX SCROLL                                  
=============================================================*/

$(window).scroll(function () { 
    let posY = window.pageYOffset
    $('#bloque2').css({'top': - 180 - posY/3 + "px"});
    $('#cristiano').css({'top': -250 + posY/5 + 'px'})
    $('#grupos').css({'margin-left': -100 + posY/3.3 + '%'})

    if(posY > $('#bloque2').offset().top){
        $('#grupos').css({'margin':'auto'})
    }

    $("#estadios").css({'margin-left': 200 - posY/5.7 + '%'})

    if(posY > $('#bloque3').offset().top){
        $('#estadios').css({'margin-left':'auto'});
    }
 
})

/*===========================================================
                    Animate                                  
=============================================================*/
$('nav#botonesGrupo ul li').click(function(){
    $('#grupos').animate({height:0},500, 'easeInBack')
    $('#grupos').animate({width:0},500, 'easeInBack')
    $('#grupos').animate({height:400}, 800, 'easeOutBounce')
    $('#grupos').animate({width:770}, 800, 'easeOutBounce')

    let enlace = $(this).attr('enlace')
    $('#grupos img').delay(500).hide(100)
    $(enlace).show(100)

})
/*===========================================================
                    Plugin : AnimateScroll                                  
=============================================================*/

$('nav#botonera ul li a').click(function (e) { 
    e.preventDefault();
    var href = $(this).attr('href');
    
    $(href).animatescroll({
        easing: 'easeOutBounce',
        scrollSpeed: 2000,
    })
    
    
});

/*===========================================================
                    Plugin : Scroll Up                                  
=============================================================*/

$.scrollUp({
    scrollText:'',
    easingType: 'easeOutBounce',
    scrollSpeed: 2000
})

/*===========================================================
                    Plugin : FlexSlider                                  
=============================================================*/
$('.flexslider').flexslider({
    randomize: true,
    slideshowSpeed: 2000,
    animation: 'slide'
})

/*===========================================================
                    Plugin : Fancybox                                  
=============================================================*/

$('ul#galeria li a').fancybox({
    openEffect : 'elastic',
    closeEffect : 'elastic',
    openSpeed: 150,
    closeSpeed: 150,
    helpers: {help: {type: 'inside'}}
})

/*===========================================================
                Plugin : DataTable                                  
=============================================================*/
var consulta = $('table').DataTable()

$('input[type="search"]').keyup(function(){
    consulta.search($(this).val()).draw()
})

/*===========================================================
                Plugin : SlideToggle                                  
=============================================================*/
$('#btn-suscribirte').click(function (e) { 
    e.preventDefault();
    $('#suscribirte').slideToggle()
    
});
