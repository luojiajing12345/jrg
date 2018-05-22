var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var lineWidth = 5

canvasSize(canvas)

/***/
listenToUser(canvas)
listenToUser()

//使画板宽高和页面宽高一样大小

var eraserEnable = false
pen.onclick = function(){
	eraserEnable = false
	pen.classList.add("active")
	eraser.classList.remove("active")

}
eraser.onclick = function(){
	eraserEnable = true
	eraser.classList.add('active')
	pen.classList.remove('active')
}

red.onclick = function(){
	context.strokeStyle = 'red'
	red.classList.add('active')
	black.classList.remove('active')
	green.classList.remove('active')
	yellow.classList.remove('active')
}
black.onclick = function(){
	context.strokeStyle = 'black'
	black.classList.add('active')
	yellow.classList.remove('active')
	green.classList.remove('active')
	red.classList.remove('active')
}
green.onclick = function(){
	context.strokeStyle = 'green'
	green.classList.add('active')
	black.classList.remove('active')
	yellow.classList.remove('active')
	red.classList.remove('active')
}
yellow.onclick = function(){
	context.strokeStyle = 'yellow'
	yellow.classList.add('active')
	black.classList.remove('active')
	green.classList.remove('active')
	red.classList.remove('active')
}
thin.onclick = function(){
	lineWidth = 5
}
thick.onclick = function(){
	lineWidth = 10
}
clear.onclick = function(){
	context.clearRect(0,0,canvas.width,canvas.height)
}
download.onclick = function(){
    var url = canvas.toDataURL('image/png')
    console.log(url)
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = '图片'
    a.target = '_blank'
    a.click()
}
function canvasSize(canvas) {
	wAndH()
	window.onresize = function() {
		wAndH()
	}

	function wAndH() {
		var drawWidth = document.documentElement.clientWidth
		var drawHeight = document.documentElement.clientHeight
		canvas.width = drawWidth
		canvas.height = drawHeight
	}
}

//**//
function listenToUser() {
	var lastPoint = {
		x: undefined,
		y: undefined
	}

	function drawCirular(x, y, radius) {
		context.beginPath()
		context.arc(x, y, radius, 0, Math.PI * 2)
		context.fill()
	}
	var using = false
	if(document.body.ontouchstart !== undefined) {
		//触屏设备
		canvas.ontouchstart = function(aaa) {
			using = true
			var x = aaa.touches[0].clientX
			var y = aaa.touches[0].clientY
			lastPoint = {x:x,y:y}
		}
		canvas.ontouchmove = function(aaa) {
			var x = aaa.touches[0].clientX
			var y = aaa.touches[0].clientY
			if(!using) {
				return
			}
			if(eraserEnable) {
				context.clearRect(x, y, 20, 20)
			} else {
				var newPoint = {
					x: x,
					y: y
				}
				drawConnect(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
				lastPoint = newPoint
			}
		}
		canvas.ontouchend = function() {
			using = false
			console.log('end')
		}
	} else {
		//非触屏设备
		canvas.onmousedown = function(a) {
			x = a.clientX
			y = a.clientY
			using = true
			if(eraserEnable) {
				context.clearRect(x - 5, y - 5, 10, 10)
			} else {
				lastPoint = {
					x: x,
					y: y
				}
			}
		}
		canvas.onmousemove = function(a) {
			x = a.clientX
			y = a.clientY
			if(!using) {
				return
			}
			if(eraserEnable) {
				context.clearRect(x, y, 20, 20)
			} else {
				var newPoint = {
					x: x,
					y: y
				}
				drawConnect(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
				lastPoint = newPoint
			}
		}
		canvas.onmouseup = function(a) {
			using = false
		}
	}

	function drawConnect(x1, y1, x2, y2) {
		context.beginPath()
		context.moveTo(x1, y1)
		context.lineWidth = lineWidth
		context.lineTo(x2, y2)
		context.stroke()
	}
}