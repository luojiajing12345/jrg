	let liTags = document.querySelectorAll('nav>ul>li')
	for (let i = 0; i < liTags.length; i++) {
	    liTags[i].onmouseenter = function (x) {
	        x.currentTarget.classList.add('active')
	    }
	    liTags[i].onmouseleave = function (x) {
	        x.currentTarget.classList.remove('active')
	    }
	}
	let aTags = document.querySelectorAll('nav>ul>li>a')

	function animate(time) {
	    requestAnimationFrame(animate);
	    TWEEN.update(time);
	}
	requestAnimationFrame(animate);
	for (let i = 0; i < aTags.length; i++) {
	    aTags[i].onclick = function (x) {
	        x.preventDefault()
	        let a = x.currentTarget
	        let href = a.getAttribute('href')
	        let element = document.querySelector(href)
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
	    }
	}