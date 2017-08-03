//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    uploadedimg:'',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  uploadFile:function(){
    var that = this;
    console.log("----uplodFile");
    wx.chooseImage({
      success: function (res) {
        console.log(res);
        var tempFilePaths = res.tempFilePaths
        app.admx.file.upload({
          filePath: tempFilePaths[0],
          formData: {
            'user': 'test'
          },
          succ: function (res) {
            console.log("----success");
            console.log(res);
            //do something
            that.setData({
              uploadedimg: res.url
            })
            
          },
          fail:function(e){
            console.log("----------------fail");
            console.log(e);
          }
        })
      }
    })
  }

  
})
