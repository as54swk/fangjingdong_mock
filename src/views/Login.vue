<template>
  <div class="home">
    <Header />
    <div class="register">
      <cube-form :model="loginForm" :schema="schema" @submit="submitHandler"></cube-form>
    </div>
  </div>
</template>

<script >
import Header from "../components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      // 表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 表单依赖模式
      schema: {
        fields: [
          // 用户名配置项
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            //校验规则
            rules: {
              required: true,
              min: 3,
              max: 8
            },
            trigger: "blur",
            messages: {
              required: "请输入用户名",
              min: "3个字符以上",
              max: "不能超过8个字符"
            }
          },
          // 密码配置项
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码"
            },
            //校验规则
            rules: {
              required: true,
              min: 3,
              max: 12
            },
            trigger: "blur",
            messages: {
              required: "请输入密码",
              min: "3个字符以上",
              max: "不能超过12个字符"
            }
          },
          // 注册按钮
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    // 校验成功触发登录接口
    submitHandler(e) {
      e.preventDefault();
      //登录接口
      this.$axios({
        url: "/api/login",
        params: this.loginForm
      }).then(res => {
        if (res.data.code == 200) {
          alert("登录成功");
          // 获取token存入本地并且添加到vuex当中
          localStorage.setItem("token", res.data.token);
          this.$store.commit("addToken", { token: res.data.token });
        } else {
          alert("登录失败");
        }
      });
    }
  }
};
</script>

