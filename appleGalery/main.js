//点击按钮，按钮变色
$('li').on('click',function(x){
    $(x.currentTarget).addClass('active').siblings('.active').removeClass('active')
})

//点击按钮，图片轮播
$('li').on('click', function (x){
    var index = $(x.currentTarget).index()
    var n = index * (-400)
    console.log(n)
    $('.slides').css({transform: 'translateX(' + n + 'px)'})
    i = index
    allLis.eq(n)
        .addClass('red')
        .siblings('.red').removeClass('red')
})


var i = 0;
var allLis = $('.clearfix>li')
console.log(allLis.length)
var size = allLis.length
allLis.eq(i % size).trigger('click')
    .addClass('active')
    .siblings('.active').removeClass('active')
var timerId = setInterval(() => {
    i += 1
    allLis.eq(i % size).trigger('click')
        .addClass('active')
        .siblings('.active').removeClass('active')
}, 5000)
