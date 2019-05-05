(function () {

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

    //playButton: document.querySelector('#playBtn'),
    //pauseButton: document.querySelector('#pauseBtn'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'http://qiniu.fengdis.com/files/video22.mp4',
        type: 'video/mp4'
      },
      {
        src: 'http://qiniu.fengdis.com/files/video22.webm',
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
			},
		},

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
		
  });
}());
