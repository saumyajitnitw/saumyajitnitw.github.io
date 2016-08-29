
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[1];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'kw4tT7SCmaY',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        $('#load').click(function(){
          // player.loadVideoById($('#id').val());
          // event.target.playVideo();
          player.cuePlaylist({listType:"search",
                              list:$('#id').val()
                            })
        })
          
      
        
      }
      function loadVideo()
      {
        player.loadVideoByUrl($('#url').val(),0,"large");
      }



      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //   //setTimeout(stopVideo, 6000);
        //   //done = true;
        // }
        if(event.data === 0) {          
          player.previousVideo();
        }
      }
      // function stopVideo() {
      //   player.stopVideo();
      // }
