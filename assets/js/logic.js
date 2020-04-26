var width = ''
$("BODY")[0].onresize = function () {
    width = $(document).width()
    var category = $('#main-category').val()
    var main = $('#main').val()
    $('.hide').css('opacity',1)
    $('#category').html(category)
    $('#main-content').html(main)
    $('#category-name').hide()
    $('.right-footer').hide()
}
function back() {
    $('body').removeClass('hide-scroll')
    $('.mobile-content').removeClass('bounceInDown')
    $('.mobile-slider').hide()
    $('.hide').css('opacity',1)
}
$(document).ready(function() {
    var category = $('#main-category').val()
    var main = $('#main').val()
    $('#category').html(category).addClass('bounceInDown')
    $('#main-content').html(main)
    width = $(document).width()
    $('.mobile-slider-content').css('width',(width)+'px')
    $('.slick-track').css('width',width*6+'px')
    setTimeout(function(){
        $('#category').removeClass('bounceInDown');
        $('#main-content').removeClass('bounceInDown')
    }, 760);
})
$(function() {
    $(".mobile-slider").slick({dots: true,arrows:true,speed: 1000,slidesToShow: 1,slidesToScroll: 1,infinite:false,});
    $('#btn-penjaga').on('click',function () {
        var category = $('#main-category-penjaga').val()
        var main = $('#main-penjaga').val()
        var mini = $('#mini-content-penjaga').val()
        var name = $('#category-name-penjaga').val()
        var content1 = $('#mini-content-1-penjaga').val()
        var content2 = $('#mini-content-2-penjaga').val()
        var content3 = $('#mini-content-3-penjaga').val()
        var content4 = $('#mini-content-4-penjaga').val()
        $('.hide').css('opacity',0.2)
        $('.hide.penjaga').css('opacity',1)
        if (width > 500) {
            $('#category').html(category).addClass('bounceInDown')
            $('#category-name').html(name).show().addClass('bounceInRight')
            $('#main-content, #mini-content-1, #mini-content-2, #mini-content-3, #mini-content-4').hide()
            setTimeout(function(){$('#main-content').html(main).append(mini).show().addClass('bounceInRight')},750);
            setTimeout(function(){$('#mini-content-1').html(content1).show().addClass('bounceInRight')},1500);
            setTimeout(function(){$('#mini-content-2').html(content2).show().addClass('bounceInRight')},2250);
            setTimeout(function(){$('#mini-content-3').html(content3).show().addClass('bounceInRight')},3000);
            setTimeout(function(){$('#mini-content-4').html(content4).show().addClass('bounceInRight')},3750);
            $('.right-footer').css('display','flex')
            setTimeout(function(){
                $('#category').removeClass('bounceInDown')
                $('#main-content').removeClass('bounceInRight')
                $('#category-name').removeClass('bounceInRight')
                $('#mini-content-1').removeClass('bounceInRight')
                $('#mini-content-2').removeClass('bounceInRight')
                $('#mini-content-3').removeClass('bounceInRight')
                $('#mini-content-4').removeClass('bounceInRight')
            }, 4500);
        } else {
            $('.category').html(category)
            $('.mobile-main-content').html(main)
            $('.mobile-name').html(name)
            $('.mobile-mini-content').html(mini)
            $('.mobile-mini-content-1').html(content1)
            $('.mobile-mini-content-2').html(content2)
            $('.mobile-mini-content-3').html(content3)
            $('.mobile-mini-content-4').html(content4)
            $('.mobile-slider-content').css('width',(width)+'px')
            $('.slick-track').css('width',width*6+'px')
            $('.mobile-slider').show()
            $('.mobile-content').addClass('bounceInDown')
            $('body').addClass('hide-scroll')
        }
    })

    $('#btn-pelestari').on('click',function () {
        var category = $('#main-category-pelestari').val()
        var main = $('#main-pelestari').val()
        var mini = $('#mini-content-pelestari').val()
        var name = $('#category-name-pelestari').val()
        var content1 = $('#mini-content-1-pelestari').val()
        var content2 = $('#mini-content-2-pelestari').val()
        var content3 = $('#mini-content-3-pelestari').val()
        var content4 = $('#mini-content-4-pelestari').val()
        $('.hide').css('opacity',0.2)
        $('.hide.pelestari').css('opacity',1)
        if (width > 500) {
            $('#category').html(category).addClass('bounceInDown')
            $('#category-name').html(name).show().addClass('bounceInRight')
            $('#main-content, #mini-content-1, #mini-content-2, #mini-content-3, #mini-content-4').hide()
            setTimeout(function(){$('#main-content').html(main).append(mini).show().addClass('bounceInRight')},750);
            setTimeout(function(){$('#mini-content-1').html(content1).show().addClass('bounceInRight')},1500);
            setTimeout(function(){$('#mini-content-2').html(content2).show().addClass('bounceInRight')},2250);
            setTimeout(function(){$('#mini-content-3').html(content3).show().addClass('bounceInRight')},3000);
            setTimeout(function(){$('#mini-content-4').html(content4).show().addClass('bounceInRight')},3750);
            $('.right-footer').css('display','flex')
            setTimeout(function(){
                $('#category').removeClass('bounceInDown')
                $('#main-content').removeClass('bounceInRight')
                $('#category-name').removeClass('bounceInRight')
                $('#mini-content-1').removeClass('bounceInRight')
                $('#mini-content-2').removeClass('bounceInRight')
                $('#mini-content-3').removeClass('bounceInRight')
                $('#mini-content-4').removeClass('bounceInRight')
            }, 4500);
        } else {
            $('.category').html(category)
            $('.mobile-main-content').html(main)
            $('.mobile-name').html(name)
            $('.mobile-mini-content').html(mini)
            $('.mobile-mini-content-1').html(content1)
            $('.mobile-mini-content-2').html(content2)
            $('.mobile-mini-content-3').html(content3)
            $('.mobile-mini-content-4').html(content4)
            $('.mobile-slider-content').css('width',(width)+'px')
            $('.slick-track').css('width',width*6+'px')
            $('.mobile-slider').show()
            $('.mobile-content').addClass('bounceInDown')
            $('body').addClass('hide-scroll')
        }
    })

    $('#btn-penggerak').on('click',function () {
        var category = $('#main-category-penggerak').val()
        var main = $('#main-penggerak').val()
        var mini = $('#mini-content-penggerak').val()
        var name = $('#category-name-penggerak').val()
        var content1 = $('#mini-content-1-penggerak').val()
        var content2 = $('#mini-content-2-penggerak').val()
        var content3 = $('#mini-content-3-penggerak').val()
        var content4 = $('#mini-content-4-penggerak').val()
        $('.hide').css('opacity',0.2)
        $('.hide.penggerak').css('opacity',1)
        if (width > 500) {
            $('#category').html(category).addClass('bounceInDown')
            $('#category-name').html(name).show().addClass('bounceInRight')
            $('#main-content, #mini-content-1, #mini-content-2, #mini-content-3, #mini-content-4').hide()
            setTimeout(function(){$('#main-content').html(main).append(mini).show().addClass('bounceInRight')},750);
            setTimeout(function(){$('#mini-content-1').html(content1).show().addClass('bounceInRight')},1500);
            setTimeout(function(){$('#mini-content-2').html(content2).show().addClass('bounceInRight')},2250);
            setTimeout(function(){$('#mini-content-3').html(content3).show().addClass('bounceInRight')},3000);
            setTimeout(function(){$('#mini-content-4').html(content4).show().addClass('bounceInRight')},3750);
            $('.right-footer').css('display','flex')
            setTimeout(function(){
                $('#category').removeClass('bounceInDown')
                $('#main-content').removeClass('bounceInRight')
                $('#category-name').removeClass('bounceInRight')
                $('#mini-content-1').removeClass('bounceInRight')
                $('#mini-content-2').removeClass('bounceInRight')
                $('#mini-content-3').removeClass('bounceInRight')
                $('#mini-content-4').removeClass('bounceInRight')
            }, 4500);
        } else {
            $('.category').html(category)
            $('.mobile-main-content').html(main)
            $('.mobile-name').html(name)
            $('.mobile-mini-content').html(mini)
            $('.mobile-mini-content-1').html(content1)
            $('.mobile-mini-content-2').html(content2)
            $('.mobile-mini-content-3').html(content3)
            $('.mobile-mini-content-4').html(content4)
            $('.mobile-slider-content').css('width',(width)+'px')
            $('.slick-track').css('width',width*6+'px')
            $('.mobile-slider').show()
            $('.mobile-content').addClass('bounceInDown')
            $('body').addClass('hide-scroll')
        }
    })

    $('#btn-pendidik').on('click',function () {
        var category = $('#main-category-pendidik').val()
        var main = $('#main-pendidik').val()
        var mini = $('#mini-content-pendidik').val()
        var name = $('#category-name-pendidik').val()
        var content1 = $('#mini-content-1-pendidik').val()
        var content2 = $('#mini-content-2-pendidik').val()
        var content3 = $('#mini-content-3-pendidik').val()
        var content4 = $('#mini-content-4-pendidik').val()
        $('.hide').css('opacity',0.2)
        $('.hide.pendidik').css('opacity',1)
        if (width > 500) {
            $('#category').html(category).addClass('bounceInDown')
            $('#category-name').html(name).show().addClass('bounceInRight')
            $('#main-content, #mini-content-1, #mini-content-2, #mini-content-3, #mini-content-4').hide()
            setTimeout(function(){$('#main-content').html(main).append(mini).show().addClass('bounceInRight')},750);
            setTimeout(function(){$('#mini-content-1').html(content1).show().addClass('bounceInRight')},1500);
            setTimeout(function(){$('#mini-content-2').html(content2).show().addClass('bounceInRight')},2250);
            setTimeout(function(){$('#mini-content-3').html(content3).show().addClass('bounceInRight')},3000);
            setTimeout(function(){$('#mini-content-4').html(content4).show().addClass('bounceInRight')},3750);
            $('.right-footer').css('display','flex')
            setTimeout(function(){
                $('#category').removeClass('bounceInDown')
                $('#main-content').removeClass('bounceInRight')
                $('#category-name').removeClass('bounceInRight')
                $('#mini-content-1').removeClass('bounceInRight')
                $('#mini-content-2').removeClass('bounceInRight')
                $('#mini-content-3').removeClass('bounceInRight')
                $('#mini-content-4').removeClass('bounceInRight')
            }, 4500);
        } else {
            $('.category').html(category)
            $('.mobile-main-content').html(main)
            $('.mobile-name').html(name)
            $('.mobile-mini-content').html(mini)
            $('.mobile-mini-content-1').html(content1)
            $('.mobile-mini-content-2').html(content2)
            $('.mobile-mini-content-3').html(content3)
            $('.mobile-mini-content-4').html(content4)
            $('.mobile-slider-content').css('width',(width)+'px')
            $('.slick-track').css('width',width*6+'px')
            $('.mobile-slider').show()
            $('.mobile-content').addClass('bounceInDown')
            $('body').addClass('hide-scroll')
        }
    })

    $('#btn-pembela').on('click',function () {
        var category = $('#main-category-pembela').val()
        var main = $('#main-pembela').val()
        var mini = $('#mini-content-pembela').val()
        var name = $('#category-name-pembela').val()
        var content1 = $('#mini-content-1-pembela').val()
        var content2 = $('#mini-content-2-pembela').val()
        var content3 = $('#mini-content-3-pembela').val()
        var content4 = $('#mini-content-4-pembela').val()
        $('.hide').css('opacity',0.2)
        $('.hide.pembela').css('opacity',1)
        if (width > 500) {
            $('#category').html(category).addClass('bounceInDown')
            $('#category-name').html(name).show().addClass('bounceInRight')
            $('#main-content, #mini-content-1, #mini-content-2, #mini-content-3, #mini-content-4').hide()
            setTimeout(function(){$('#main-content').html(main).append(mini).show().addClass('bounceInRight')},750);
            setTimeout(function(){$('#mini-content-1').html(content1).show().addClass('bounceInRight')},1500);
            setTimeout(function(){$('#mini-content-2').html(content2).show().addClass('bounceInRight')},2250);
            setTimeout(function(){$('#mini-content-3').html(content3).show().addClass('bounceInRight')},3000);
            setTimeout(function(){$('#mini-content-4').html(content4).show().addClass('bounceInRight')},3750);
            $('.right-footer').css('display','flex')
            setTimeout(function(){
                $('#category').removeClass('bounceInDown')
                $('#main-content').removeClass('bounceInRight')
                $('#category-name').removeClass('bounceInRight')
                $('#mini-content-1').removeClass('bounceInRight')
                $('#mini-content-2').removeClass('bounceInRight')
                $('#mini-content-3').removeClass('bounceInRight')
                $('#mini-content-4').removeClass('bounceInRight')
            }, 4500);
        } else {
            $('.category').html(category)
            $('.mobile-main-content').html(main)
            $('.mobile-name').html(name)
            $('.mobile-mini-content').html(mini)
            $('.mobile-mini-content-1').html(content1)
            $('.mobile-mini-content-2').html(content2)
            $('.mobile-mini-content-3').html(content3)
            $('.mobile-mini-content-4').html(content4)
            $('.mobile-slider-content').css('width',(width)+'px')
            $('.slick-track').css('width',width*6+'px')
            $('.mobile-slider').show()
            $('.mobile-content').addClass('bounceInDown')
            $('body').addClass('hide-scroll')
        }
    })
})