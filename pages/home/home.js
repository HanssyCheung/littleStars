
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
        students: [
          {id: 110 ,name: 'swk',age: 18},
          {id: 111 ,name: 'zbj',age: 19},
          {id: 112 ,name: 'shs',age: 20},
          {id: 113 ,name: 'blm',age: 13}
        ],
        counter: 0
    },
    handleBtnClick() {
      // //错误的做法，界面不会自动刷新
      // this.data.counter += 1

      //正确的做法：this.setData()
      this.setData({counter: this.data.counter + 1})
    }
  })