/**
 * 本模块为原生http调用
 */
(function() {
    /* 模拟jQuery的写法 (简单写法),工具函数 */
    $$ = {};
    /* ajax */
    $$.ajax = function(options) {
        /*
         * 请求 1.请求接口 type get post 默认的是get 决定是否设置请求头 2.接口地址 url 不确定 字符串 如果用户没有传
         * 默认的接口地址为当前路径 3.是否是异步 async 默认的就是异步 true;false 是同步请求 4.提交数据 data
         * 默认的是对象 {name:'XXX',age:'19'} 默认是{}
         *
         * 响应 1.成功回调函数 success 代表的是一个函数 用来处理成功之后的业务逻辑的函数 1.1 字符串 xml json格式的字符串
         * 数据转换 2.失败回调函数 error 代表的是一个函数 用来处理失败之后的业务逻辑的函数 2.1 返回一些错误信息
         */

        /* 处理默认参数 */
        if (!options || typeof options != 'object')
            return false;
        /* 如果没有传 使用默认的get方式提交 */
        var type = (options.method || 'get').toUpperCase();
        /* 如果没有传 使用默认的当前路径 */
        var url = options.url || location.pathname;
        /* 强制 是false的时候就是同步 否则都是异步 */
        var async = options.async === false ? false : true;
        /* 如果没有就是空对象 */
        var data = options.data || {};
        var dataType = (options.dataType || 'JSON').toUpperCase();
        /* 对象是无法进行传输 {name:'',age:''} 拼接字符串 name=xzz&age=18 */
        var dataStr = '';
        for ( var key in data) {
            dataStr += key + '=' + data[key] + '&';
        }
        dataStr = dataStr && dataStr.slice(0, -1);

        /* ajax封装编程 */
        /* 初始化 */
        var xhr = new XMLHttpRequest();
        xhr.open(type, type == 'GET' ? url + '?' + dataStr : url, async);
        /* 请求头 */
        if (type == 'POST') {
            xhr.setRequestHeader('Content-Type',
                'application/x-www-form-urlencoded');
        }
        /* 请求主体 */
        xhr.send(type == 'GET' ? null : dataStr);

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                /* 请求成功 */
                /* 字符串 xml josn格式的字符串 数据转换 */
                /* 获取响应类型 */

                var result = null;

                if (dataType === 'JSON') {
                    if (xhr.responseText) {
                        result = JSON.parse(xhr.responseText);
                    } else {
                        result = '';
                    }

                } else if (dataType === 'XML') {
                    result = xhr.responseXML;
                } else {
                    result = xhr.responseText;
                }

                options.success && options.success(result);

            } else {
                /* 请求失败 */
                options.error && options.error({
                    status : xhr.status,
                    statusText : xhr.statusText
                });
            }
        }

        /* 响应 */
        xhr.onreadystatechange = function() {
            /* 一定要完全完成通讯 */
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    /* 请求成功 */
                    /* 字符串 xml josn格式的字符串 数据转换 */
                    /* 获取响应类型 */

                    var result = null;

                    if (dataType === 'JSON') {
                        if (xhr.responseText) {
                            result = JSON.parse(xhr.responseText);
                        } else {
                            result = '';
                        }

                    } else if (dataType === 'XML') {
                        result = xhr.responseXML;
                    } else {
                        result = xhr.responseText;
                    }

                    options.success && options.success(result);

                } else {
                    /* 请求失败 */
                    options.error && options.error({
                        status : xhr.status,
                        statusText : xhr.statusText
                    });
                }
            }
        }
    };

    /* get */
    $$.get = function(options) {
        options.type = 'GET';
        $$.ajax(options);
    };

    /* post */
    $$.post = function(options) {
        options.type = 'POST';
        $$.ajax(options);
    };

    $$.dom = function(id) {
        if (id&&id.substring(0,1)==='#') {
            var subId = id.substring(1);
            return document.all ? document.all[subId] : document
                .getElementById(subId);
        } else {
            return null;
        }

    }
})();