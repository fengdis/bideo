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

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'video.mp4',
        type: 'video/mp4'
      },
      {
        src: 'video.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],
		
		img: {
			on: 'img/mute.png',
			off: 'img/unmute.png'
		},

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
		
  });
}());
