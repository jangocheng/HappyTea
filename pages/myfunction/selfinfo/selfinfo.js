// pages/myfunction/selfinfo/selfinfo.js
var util = require('../../../utils/util.js')
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    birthdayDate:'',
    phoneNumber:'',
    sexItems: [],
    selectSex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        sexItems: [{
          name: '1', value: '男', checked: 'true'
        }, {
          name: '2', value: '女',
        }],
      })
    }
    console.log(this.data.userInfo)
  
   
  },

  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  } ,
  radioChange(e) {
    this.data.selectSex = e.detail.value
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  save:function(){
    util.showSuccess('保存成功')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})