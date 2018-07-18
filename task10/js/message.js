! function () {
    var view = document.querySelector('section#messages')
    var model = {
        fetch: function () {
            var query = new AV.Query('Message')
            return query.find()
        },
        sava: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message()
            message.save({
                name: name,
                content: content
            })
        },
        init: function () {
            var APP_ID = 'wk9uLovjaHEE3oGdJ3hgK4PB-gzGzoHsz'
            var APP_KEY = 'gvncU9L1S320YHLwHT3rA92Y'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
    }
    var controller = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')

            this.loadMassage()
            this.bindEvents()
        },

        loadMassage: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                });
            }, function (error) {
                alert('提交失败')
            })
        },
        bindEvents: function () {

            this.form.addEventListener('submit', function (e) {
                e.preventDefault()
                this.saveMessage()

            })
        },
        saveMessage: function () {
            let myForm = this.from
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.sava(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''
            })
        }

    }

    controller.init(view, model)

}.call()







// var TestObject = AV.Object.extend('Luojj');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello Luojj!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })