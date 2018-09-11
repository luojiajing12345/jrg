'use strict';

!function () {
    var view = View('section#messages');

    var model = Model({
        resourceName: 'Message'
    });
    var controller = Controller({
        init: function init(view, controller) {
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.loadMassages();
        },
        loadMassages: function loadMassages() {
            var _this = this;

            this.model.fetch().then(function (messages) {
                var array = messages.map(function (item) {
                    return item.attributes;
                });
                array.forEach(function (item) {
                    var li = document.createElement('li');
                    li.innerText = item.name + ':' + item.content;
                    _this.messageList.appendChild(li);
                });
            });
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            this.form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this2.saveMessage();
            });
        },
        saveMessage: function saveMessage() {
            var myForm = this.form;
            var content = myForm.querySelector('input[name=content]').value;
            var name = myForm.querySelector('input[name=name]').value;
            console.log(name);
            this.model.save({
                'name': name,
                'content': content
            }).then(function (object) {
                console.log(1);
                var li = document.createElement('li');
                li.innerText = object.attributes.name + ':' + object.attributes.content;
                var messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=content]').value = '';
                myForm.querySelector('input[name=name]').value = '';
            });
        }
    });

    controller.init(view, model);
}.call();

// var TestObject = AV.Object.extend('Luojj');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello Luojj!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })