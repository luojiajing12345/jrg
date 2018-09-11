window.Model = function (options) { //options接收到的是一个对象
    let resourceName = options.resourceName //options.resoureName是key，resourceName是value
    return {
        init: function () {
            var APP_ID = 'wk9uLovjaHEE3oGdJ3hgK4PB-gzGzoHsz'
            var APP_KEY = 'gvncU9L1S320YHLwHT3rA92Y'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function () {
            var query = new AV.Query(resourceName)
            return query.find()
        },
        save: function (object) { //object是传输过来的一个对象
            var X = AV.Object.extend(resourceName);
            var x = new X()
            return x.save(object)
        }
    }
}