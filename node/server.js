var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var path = request.url
    var query = ''
    if (path.indexOf('?') >= 0) { query = path.substring(path.indexOf('?')) }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/


    
    if (path == "/") {
        response.setHeader('Content-Type', 'text/html,charset=utf-8')
        response.write('<!DOCTYPE>\n<html>' +
            '<head><script src="/main.js"></script>' +
            '<link rel="stylesheet" type="text/css" href="/style.css">' + ' </head>' +
            '<body><h1>hello</h1></body></html>')
        response.end()
    } else if (path == '/style.css') {
        response.setHeader('Content-Type', 'text/css')
        response.write("h1 {color:red}")
        response.end()
    } else if (path == "/main.js") {
        response.setHeader('Content-Type', 'text/javascript,charset=utf-8')
        response.write('alert("hahahahaha")')
        response.end()
    } else {
        response.statusCode = 404
        response.end()
    }











    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
