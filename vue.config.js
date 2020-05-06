module.exports = {
  configureWebpack: {
    devServer: {
      // 编写注册信息接口
      before(app) {
        // 后台已经存在的用户信息
        let userpoor = [
          { username: 'laowang', password: 123456 },
          { username: 'xiaowang', password: 123456 }
        ];
        // 1.注册接口
        // app.get/post(地址,回调函数) 
        // get里面的请求request带过去的参数用query
        app.get('/api/register', (req, res) => {
          // 获取请求带过去的参数
          const { username, password } = req.query;
          //过滤器检测后台是否已经有username
          const userlength = userpoor.filter(item => item.username == username).length;
          // 如果存在,返回失败的信息
          if (userlength > 0) {
            res.json({
              success: true,
              message: '用户名已存在111'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })
        // 2.登录接口
        app.get('/api/login', (req, res) => {
          //  获取请求带过来的参数
          const { username, password } = req.query;
          // 检测后台是否存在相同的用户名密码
          const userLength = userpoor.filter(item => {
            return item.username == username && item.password == password
          }).length;
          if (userLength > 0) {
            res.json({
              message: '登录成功',
              code: 200,
              token: '32241645jsljafowijepfjlsddjdgk'
            })
          } else {
            res.json({
              message: '用户名或密码错误',
              code: 400
            })
          }
        })
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
