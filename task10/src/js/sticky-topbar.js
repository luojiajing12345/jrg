
! function () {
	var view = View('#Top')

	var controller = {
		view: null,
		init: function (view) {
			this.view = view
			//这个this是对象controller
			this.bindEvents()
		},
		bindEvents: function () {
			var view = this.view
			window.addEventListener('scroll', (a) => {
				if (window.scrollY > 0) {
					this.active() 
					//箭头函数没有this，所以它往上找，找到了上面那个this
				} else {
					this.deactive()
				}
			})
		},
		active:function () {
			this.view.classList.add('sticky')
		},
		deactive:function(){
			this.view.classList.remove('sticky')
		}
	}
	controller.init(view)
	//controller.init.call(controller,view),如果使用对象来调用这个函数，那么这个对象就是this
}.call()