//index.js

Page({
  data: {
    imgSrc: 'https://avatars.githubusercontent.com/u/61202052?s=60&v=4'
  },
  tapCat:function(){
    let audio=wx.createInnerAudioContext();
    audio.src='http://m10.music.126.net/20210824150729/faa0d56c3d94111523fefc4a495efa53/ymusic/fc5f/1803/ab15/a40402405f31f95359d55bf5026454dc.mp3';
    audio.play();
  },
  calc:function(e){
    var C,F;
    C=e.detail.value;
    this.setData({
      F:C*9/5+32
    })
  },
})
