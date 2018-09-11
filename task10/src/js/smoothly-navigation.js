! function () {
    var view = View('nav')
    var controller = {
        view: null,
        liTags: null,
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(this.animate.bind(this));
                TWEEN.update(time);
            }
            requestAnimationFrame(animate)
        },

        scrollToElement: function (element) {
            let top = element.offsetTop
            let currentTop = window.scrollY //当前高度
            let targeTop = top - 60 //要去的高度
            let s = targeTop - currentTop
            var coords = {
                y: currentTop
            }
            var t = Math.abs((s / 100) * 200)
            if (t > 500) {
                t = 500
            }
            var tween = new TWEEN.Tween(coords)
                .to({
                    y: targeTop
                }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },

        bindEvents: function () {
            let aTags = this.view.querySelectorAll('nav>ul>li>a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement(element)

                }
            }
        },



    }
    controller.init(view)
}.call