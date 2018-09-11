'use strict';

!function () {
	var view = View('#Top');

	var controller = {
		view: null,
		init: function init(view) {
			this.view = view;
			//这个this是对象controller
			this.bindEvents();
		},
		bindEvents: function bindEvents() {
			var _this = this;

			var view = this.view;
			window.addEventListener('scroll', function (a) {
				if (window.scrollY > 0) {
					_this.active();
					//箭头函数没有this，所以它往上找，找到了上面那个this
				} else {
					_this.deactive();
				}
			});
		},
		active: function active() {
			this.view.classList.add('sticky');
		},
		deactive: function deactive() {
			this.view.classList.remove('sticky');
		}
	};
	controller.init(view);
	//controller.init.call(controller,view),如果使用对象来调用这个函数，那么这个对象就是this
}.call();