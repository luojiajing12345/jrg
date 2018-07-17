var APP_ID = 'wk9uLovjaHEE3oGdJ3hgK4PB-gzGzoHsz';
var APP_KEY = 'gvncU9L1S320YHLwHT3rA92Y';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
console.log('ok')

var query = new AV.Query('Message');

query.find().then(function (messages) {
    let array = messages.map((item) => item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        console.log(messageList)
    });
}, function (error) {
    alert('提交失败')
})

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message()
    message.save({
        content: content
    }).then(function (object) {
        window.location.reload()
    })
})



// var TestObject = AV.Object.extend('Luojj');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello Luojj!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })