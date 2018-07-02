$('li').on('click',function(x){
    $(x.currentTarget).addClass('active').siblings('.active').removeClass('active')
})
$('li').on('click', function (x){
    var index = $(x.currentTarget).index()
    var n = index * (-400)
    console.log(n)
    $('.slides').css({transform: 'translateX(' + n + 'px)'})
})