(function() {
    var bv = new Bideo();

    bv.init({
        // Video element
        videoEl: document.querySelector('#background_video'),

        voiceEl: document.querySelector('#background_voice'),

        // Container element
        container: document.querySelector('body'),

        // Resize
        resize: true,

        // autoplay: false,
        isMobile: window.matchMedia('(max-width: 768px)').matches,

        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),

        // playButton: document.querySelector('#playBtn'),
        // pauseButton: document.querySelector('#pauseBtn'),
        // Array of objects containing the src and type
        // of different video formats to add
        // src = 'https://qiniu.fengdis.com/files/fengdis.mp4';
        // src = 'https://qiniu.fengdis.com/files/fengdis.webm';
        src: [
            {
                src: getTodayVideo()[0],
                type: 'video/mp4'
            },
            {
                src: getTodayVideo()[1],
                type: 'video/webm;codecs="vp8, vorbis"'
            }
        ],

        img: {
            on: {
                src: 'img/mute.png',
                title: '关闭'
            },
            off: {
                src: 'img/unmute.png',
                title: '打开'
            }
        },

        // What to do once video loads (initial frame)
        onLoad: function() {
            document.querySelector('#video_cover').style.display = 'none';
        }

    });

    getClientIp();

    function getTodayVideo() {
        var videoArray = [];
        var date = new Date();
        date.getFullYear(); //获取完整的年份(4位,1970-????)
        date.getMonth(); //获取当前月份(0-11,0代表1月)
        date.getDate(); //获取当前日(1-31)
        date.getDay(); //获取当前星期X(0-6,0代表星期天)
        date.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
        date.getHours(); //获取当前小时数(0-23)
        date.getMinutes(); //获取当前分钟数(0-59)
        date.getSeconds(); //获取当前秒数(0-59)
        date.getMilliseconds(); //获取当前毫秒数(0-999)
        date.toLocaleDateString(); //获取当前日期
        date.toLocaleString(); //获取日期与时间
        var today = date.getMonth() + 1 + "" + date.getDate();
        if ('0101' === today) {
            videoArray[0] = '../files/newYear.mp4';
            videoArray[1] = '../files/newYear.webm';
        } else if ('1024' === today) {
            videoArray[0] = '../files/programmer.mp4';
            videoArray[1] = '../files/programmer.webm';
        } else {
            videoArray[0] = '../files/fengdis.mp4';
            videoArray[1] = '../files/fengdis.webm';
        }
        return videoArray;
    }

    function formatDate(fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            // 月份
            "d+": this.getDate(),
            // 日
            "h+": this.getHours(),
            // 小时
            "m+": this.getMinutes(),
            // 分
            "s+": this.getSeconds(),
            // 秒
            "q+": Math.floor((this.getMonth() + 3) / 3),
            // 季度
            "S": this.getMilliseconds()
            // 毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    function requestApi(callback) {
        $$.ajax({
            async : false,
            method : 'get',
            data : {
                keyword : '',
                page : 1,
                rows : 15,
                sort : 'createdate',
                order : 'desc'
            },
            url : 'https://www.fengdis.com/blog/blog/web/article/articles',
            success : function(res) {
                console.log(res)
            },
            error : function() {

            }
        });
    }

    function getClientIp() {
        console.log(returnCitySN);
    }
} ());