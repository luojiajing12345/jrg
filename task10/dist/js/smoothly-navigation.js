'use strict';

!function () {
    var view = View('nav');
    var controller = {
        view: null,
        liTags: null,
        init: function init(view) {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function initAnimation() {
            function animate(time) {
                requestAnimationFrame(this.animate.bind(this));
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },

        scrollToElement: function scrollToElement(element) {
            var top = element.offsetTop;
            var currentTop = window.scrollY; //当前高度
            var targeTop = top - 60; //要去的高度
            var s = targeTop - currentTop;
            var coords = {
                y: currentTop
            };
            var t = Math.abs(s / 100 * 200);
            if (t > 500) {
                t = 500;
            }
            var tween = new TWEEN.Tween(coords).to({
                y: targeTop
            }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        },

        bindEvents: function bindEvents() {
            var aTags = this.view.querySelectorAll('nav>ul>li>a');
            for (var i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    x.preventDefault();
                    var a = x.currentTarget;
                    var href = a.getAttribute('href');
                    var element = document.querySelector(href);
                    this.scrollToElement(element);
                };
            }
        }

    };
    controller.init(view);
}.call;