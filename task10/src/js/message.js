! function () {
    var view = View('section#messages')

    var model = Model({
        resourceName: 'Message'
    })
    var controller = Controller({
        init: function (view, controller) {
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMassages()
        },
        loadMassages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            console.log(name)
            this.model.save({
                'name': name,
                'content': content
            }).then(function (object) {
                console.log(1)
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''

            })
        }
    })

    controller.init(view, model)
}.call()







// var TestObject = AV.Object.extend('Luojj');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello Luojj!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })